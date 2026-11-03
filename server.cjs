const http = require('http');
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const PORT = process.env.PORT || 3001;
const ROOT_DIR = __dirname;
const PUBLIC_DIR = path.join(__dirname, 'public');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.webm': 'video/webm',
  '.mp4': 'video/mp4',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.ttf': 'font/ttf',
  '.ico': 'image/x-icon',
};

function serveFile(req, res, filePath) {
  try {
    const stat = fs.statSync(filePath);
    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    const isMedia = ext === '.mp4' || ext === '.webm' || ext === '.ogg' || ext === '.mp3';

    // Support HTTP Range Requests for video/audio streaming (smooth playback)
    const range = req.headers.range;
    if (range && isMedia) {
      const parts = range.replace(/bytes=/, '').split('-');
      const start = parseInt(parts[0], 10);
      const end = parts[1] ? parseInt(parts[1], 10) : stat.size - 1;

      if (start >= stat.size || end >= stat.size) {
        res.writeHead(416, { 'Content-Range': `bytes */${stat.size}` });
        return res.end();
      }

      const chunkSize = (end - start) + 1;
      const fileStream = fs.createReadStream(filePath, { start, end });
      res.writeHead(206, {
        'Content-Range': `bytes ${start}-${end}/${stat.size}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': chunkSize,
        'Content-Type': contentType,
        'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0',
        'Pragma': 'no-cache',
        'Expires': '0',
        'Access-Control-Allow-Origin': '*',
      });
      fileStream.pipe(res);
      return;
    }

    // Standard Static Serving - Zero Cache to ensure browser updates immediately
    res.writeHead(200, {
      'Content-Length': stat.size,
      'Content-Type': contentType,
      'Accept-Ranges': 'bytes',
      'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0',
      'Pragma': 'no-cache',
      'Expires': '0',
      'Access-Control-Allow-Origin': '*',
    });
    fs.createReadStream(filePath).pipe(res);
  } catch (err) {
    res.writeHead(500);
    res.end('Server Error: ' + err.message);
  }
}

const server = http.createServer((req, res) => {
  let url = req.url.split('?')[0];
  url = decodeURIComponent(url);

  // Serve root index.html
  if (url === '/' || url === '/index.html') {
    return serveFile(req, res, path.join(ROOT_DIR, 'index.html'));
  }

  // Look in public/ first
  let targetPath = path.join(PUBLIC_DIR, url.replace(/^\//, ''));
  if (fs.existsSync(targetPath) && !fs.statSync(targetPath).isDirectory()) {
    return serveFile(req, res, targetPath);
  }

  // Look in root directory
  targetPath = path.join(ROOT_DIR, url.replace(/^\//, ''));
  if (fs.existsSync(targetPath) && !fs.statSync(targetPath).isDirectory()) {
    return serveFile(req, res, targetPath);
  }

  // SPA fallback to index.html for navigation links (e.g. /du-an, /blog)
  if (!path.extname(url)) {
    return serveFile(req, res, path.join(ROOT_DIR, 'index.html'));
  }

  res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('404 Not Found: ' + url);
});
server.listen(PORT, () => {
  console.log(`\n  🚀 TechRent Production Server is running at:`);
  console.log(`  ➜  Local:   http://localhost:${PORT}/`);
  console.log(`  ➜  Media Stream (Range 206): Enabled`);
  console.log(`  ➜  Three.js WebGL & Lenis: Ready\n`);
});
