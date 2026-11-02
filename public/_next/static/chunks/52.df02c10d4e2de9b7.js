"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[52],{4052:(e,t,i)=>{i.r(t),i.d(t,{AssetWorld:()=>E}),i(5995);var a=i(5271),o=Object.defineProperty,s=(e,t,i)=>{let a;return(a="symbol"!=typeof t?t+"":t)in e?o(e,a,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[a]=i};let l="Manrope, system-ui, sans-serif",r="'SF Mono', Menlo, Consolas, monospace",n=(e,t,i,a,o,s)=>{e.beginPath(),e.moveTo(t+s,i),e.arcTo(t+a,i,t+a,i+o,s),e.arcTo(t+a,i+o,t,i+o,s),e.arcTo(t,i+o,t,i,s),e.arcTo(t,i,t+a,i,s),e.closePath()},h=(e,t,i,a,o,s)=>{let l=e.createLinearGradient(t,i,a,o);return s.forEach(([e,t])=>l.addColorStop(e,t)),l},c=async()=>{let e="Chất lượng thật, giao nhanh to\xe0n quốc Thương hiệu Đặt h\xe0ng PHIẾU CHI Thiết kế";try{await Promise.all([document.fonts.load("900 64px Manrope",e),document.fonts.load("700 28px Manrope",e),document.fonts.load("500 22px Manrope",e)])}catch{}},d=async(e,t)=>{let i=new Image;i.decoding="async",i.src=e,await i.decode();let a=document.createElement("canvas");a.width=220,a.height=220;let o=a.getContext("2d",{willReadFrequently:!0}),s=Math.min(220/i.width,220/i.height),l=i.width*s,r=i.height*s;o.drawImage(i,(220-l)/2,(220-r)/2,l,r);let n=o.getImageData(0,0,220,220).data,h=[];for(let e=0;e<220;e++)for(let t=0;t<220;t++)n[(220*e+t)*4+3]>128&&h.push(t,e);let c=new Float32Array(2*t),d=h.length/2;for(let e=0;e<t;e++){let t=Math.floor(Math.random()*d);c[2*e]=((h[2*t]+Math.random())/220-.5)*2,c[2*e+1]=-(2*((h[2*t+1]+Math.random())/220-.5))}return c},p=[-36,-12,12,36].map(e=>{let t=e*Math.PI/180;return new a.V(5*Math.sin(t),-.98,.7-(1-Math.cos(t))*5)}),u=[new a.V(-1.22,.92,0),new a.V(1.22,.92,0),new a.V(-1.22,-1.48,0),new a.V(1.22,-1.48,0)],f=e=>e*e*(3-2*e),v=e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,m=e=>1-Math.pow(1-e,3),w=(e,t,i,a=f)=>{let o;return a((o=(e-t)/(i-t))<0?0:o>1?1:o)},g=(e,t,i,a,o)=>w(e,t,i)*(1-w(e,a,o)),x=(e,t,i)=>{if(e<=t[0])return i[0];for(let a=1;a<t.length;a++)if(e<=t[a]){let o=v((e-t[a-1])/(t[a]-t[a-1]));return i[a-1]+(i[a]-i[a-1])*o}return i[i.length-1]},y=(e,t,i)=>e+(t-e)*i,b=`
  float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  vec2 hash2(vec2 p) { return fract(sin(vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)))) * 43758.5453); }
  float noise(vec2 p) {
    vec2 i = floor(p); vec2 f = fract(p); vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
  }
  float fbm(vec2 p) { float v = 0.0; float a = 0.5; for (int i = 0; i < 5; i++) { v += a * noise(p); p *= 2.03; a *= 0.5; } return v; }
`,M=`
  precision highp float;
  varying vec2 vUv;
  uniform float uWave; uniform float uTime; uniform vec2 uRes; uniform float uDark; uniform vec2 uCenter;
  ${b}
  void main() {
    vec2 uv = vUv;
    float aspect = uRes.x / uRes.y;
    vec3 paper = mix(vec3(0.957, 0.965, 0.976), vec3(0.039, 0.059, 0.094), uDark);
    float line = smoothstep(0.93, 1.0, fract(uv.y * uRes.y / 36.0));
    paper = mix(paper, mix(vec3(0.07, 0.1, 0.17), vec3(1.0), uDark), line * mix(0.05, 0.035, uDark));
    paper *= mix(0.94, 1.0, smoothstep(1.25, 0.2, length((uv - 0.5) * vec2(aspect, 1.0))));

    vec2 p = (uv - uCenter) * vec2(aspect, 1.0);
    vec3 world = mix(vec3(0.016, 0.027, 0.055), vec3(0.03, 0.12, 0.2), smoothstep(-0.2, 1.1, uv.y));
    float glow = exp(-dot(p, p) * 2.0);
    world += vec3(0.02, 0.24, 0.38) * glow;
    world += vec3(0.015, 0.06, 0.1) * fbm(uv * vec2(aspect, 1.0) * 2.4 + vec2(0.0, uTime * 0.03));
    vec2 g = fract(uv * vec2(aspect, 1.0) * 16.0);
    world += vec3(0.35, 0.75, 1.0) * (smoothstep(0.985, 1.0, g.x) + smoothstep(0.985, 1.0, g.y)) * 0.045 * glow;

    float x = (uv.x - 0.5) * aspect;
    float edge = uWave * 1.8 - 0.42 - 0.24 * x * x + (fbm(vec2(uv.x * 3.2, uTime * 0.22)) - 0.5) * 0.17;
    float d = edge - uv.y;
    float m = smoothstep(-0.003, 0.003, d);
    vec3 col = mix(paper, world, m);
    float live = step(0.0005, uWave) * step(uWave, 0.9995);
    col += vec3(0.22, 0.8, 1.0) * exp(-abs(d) * 50.0) * live * 0.85;
    col += vec3(0.05, 0.35, 0.55) * exp(-max(d, 0.0) * 7.0) * m * live * 0.7;
    col += (hash(uv * uRes + fract(uTime)) - 0.5) * 0.018;
    gl_FragColor = vec4(col, 1.0);
  }
`,S=`
  varying vec2 vUv; varying vec3 vN; varying vec3 vV;
  void main() {
    vUv = uv;
    vec4 wp = modelMatrix * vec4(position, 1.0);
    vN = normalize(mat3(modelMatrix) * normal);
    vV = normalize(cameraPosition - wp.xyz);
    gl_Position = projectionMatrix * viewMatrix * wp;
  }
`,P=`
  precision highp float;
  varying vec2 vUv; varying vec3 vN; varying vec3 vV;
  uniform sampler2D uSite;
  uniform float uDecay; uniform float uCrack; uniform float uGlitch; uniform float uTime;
  uniform float uSweep; uniform float uDissolve; uniform float uSlow; uniform float uWarn;
  ${b}
  vec3 voronoi(vec2 x) {
    vec2 n = floor(x); vec2 f = fract(x); vec2 mg; vec2 mr; float md = 8.0;
    for (int j = -1; j <= 1; j++) for (int i = -1; i <= 1; i++) {
      vec2 g = vec2(float(i), float(j)); vec2 o = hash2(n + g); vec2 r = g + o - f; float d = dot(r, r);
      if (d < md) { md = d; mr = r; mg = g; }
    }
    md = 8.0;
    for (int j = -2; j <= 2; j++) for (int i = -2; i <= 2; i++) {
      vec2 g = mg + vec2(float(i), float(j)); vec2 o = hash2(n + g); vec2 r = g + o - f;
      if (dot(mr - r, mr - r) > 0.00001) md = min(md, dot(0.5 * (mr + r), normalize(r - mr)));
    }
    return vec3(md, hash2(n + mg));
  }
  void main() {
    vec2 uv = vUv;
    float row = floor(uv.y * 42.0);
    float band = step(0.93, hash(vec2(row, floor(uTime * 8.0))));
    uv.x += (hash(vec2(row, floor(uTime * 13.0))) - 0.5) * 0.06 * band * uGlitch;

    float crack = 0.0;
    if (uCrack > 0.001) {
      vec2 c0 = vec2(0.64, 0.6);
      vec2 dv = (uv - c0) * vec2(1.6, 1.0);
      float r = length(dv);
      float reach = uCrack * 1.3;
      float inside = smoothstep(reach, reach - 0.1, r);
      // V\xe2n mạng nhện d\xe0y ở gần điểm va, thưa dần ra ngo\xe0i; tia nứt d\xe0i toả ra.
      vec3 vo = voronoi(uv * vec2(6.0, 3.8) + 3.7);
      float near = smoothstep(reach * 0.75, 0.0, r);
      float web = (1.0 - smoothstep(0.0, 0.014, vo.x)) * inside * near;
      float ang = atan(dv.y, dv.x);
      float spoke = 1.0 - smoothstep(0.0, 0.022 + r * 0.01, abs(sin(ang * 5.5 + fbm(vec2(r * 2.5, ang)) * 3.2)));
      spoke *= inside * smoothstep(0.015, 0.05, r);
      float ring = (1.0 - smoothstep(0.0, 0.01, abs(fract(r * 6.0 - 0.3) - 0.5) - 0.48)) * inside * near * 0.6;
      crack = max(max(web * 0.8, spoke), ring);
      uv += (vo.yz - 0.5) * 0.007 * inside;
    }

    vec3 col = texture2D(uSite, uv).rgb;
    float l = dot(col, vec3(0.299, 0.587, 0.114));
    vec3 aged = mix(vec3(0.6), vec3(l) * vec3(1.05, 1.0, 0.88), 0.8);
    col = mix(col, aged, uDecay);
    col += (hash(uv * vec2(1600.0, 1000.0) + floor(uTime * 24.0)) - 0.5) * 0.13 * uDecay;
    col = mix(col, col * 0.8, smoothstep(0.72, 0.95, fbm(uv * vec2(11.0, 7.0))) * uDecay * 0.7);
    col *= mix(1.0, mix(0.72, 1.0, smoothstep(0.95, 0.3, length((vUv - 0.5) * vec2(1.3, 1.0)))), uDecay);

    if (uSlow > 0.001) {
      col = mix(col, vec3(1.0), 0.5 * uSlow);
      vec2 sp = (vUv - vec2(0.5, 0.48)) * vec2(1.6, 1.0);
      float ring = 1.0 - smoothstep(0.0, 0.005, abs(length(sp) - 0.055));
      float a = fract(atan(sp.y, sp.x) / 6.28318 + uTime * 1.1);
      col = mix(col, vec3(0.18, 0.22, 0.3), ring * smoothstep(0.1, 0.9, a) * uSlow);
      col = mix(col, vec3(0.8, 0.83, 0.88), ring * (1.0 - smoothstep(0.1, 0.9, a)) * uSlow * 0.6);
    }
    // nh\xe3n "Kh\xf4ng bảo mật" đ\xe8 l\xean \xf4 địa chỉ (g\xf3c tr\xean tr\xe1i)
    if (uWarn > 0.001) {
      vec2 q = vUv;
      float bar = step(0.081, q.x) * step(q.x, 0.43) * step(0.944, q.y) * step(q.y, 0.985);
      col = mix(col, mix(col, vec3(1.0, 0.92, 0.93), 0.9), bar * uWarn);
      col = mix(col, vec3(0.86, 0.15, 0.2), bar * uWarn * step(0.081, q.x) * step(q.x, 0.098));
    }
    col = mix(col, vec3(0.07, 0.09, 0.13), crack * 0.88);
    col += vec3(1.0) * crack * 0.12 * (1.0 - step(0.02, crack));

    float sw = exp(-pow((vUv.x + vUv.y * 0.35 - uSweep) * 6.0, 2.0));
    col += vec3(0.95, 1.0, 1.0) * sw * 0.5;
    float fres = pow(1.0 - max(dot(normalize(vN), normalize(vV)), 0.0), 3.0);
    col += vec3(0.6, 0.78, 0.95) * fres * 0.22;
    col += vec3(1.0) * smoothstep(0.55, 1.0, 1.0 - abs(vUv.x - vUv.y * 0.6 - 0.15) * 3.0) * 0.035;

    float n = fbm(vUv * vec2(6.0, 3.8) + 1.3);
    float th = uDissolve * 1.15 - 0.06;
    if (n < th) discard;
    float ember = (1.0 - smoothstep(th, th + 0.045, n)) * step(0.001, uDissolve);
    col = mix(col, vec3(0.6, 0.93, 1.0), ember);
    gl_FragColor = vec4(col, 1.0);
  }
`,T=`
  attribute vec3 aStart; attribute vec3 aDust; attribute vec3 aLogo; attribute vec4 aRand;
  uniform float uDust; uniform float uLogo; uniform float uTime; uniform float uSize; uniform float uPixel;
  uniform mat4 uSlab; uniform float uLogoScale;
  varying float vA; varying float vMix;
  void main() {
    vec3 start = (uSlab * vec4(aStart, 1.0)).xyz;
    float dk = clamp(uDust * 1.35 - aRand.x * 0.35, 0.0, 1.0);
    dk = dk * dk * (3.0 - 2.0 * dk);
    vec3 drift = vec3(sin(uTime * 0.7 + aRand.y * 6.28), 0.0, cos(uTime * 0.6 + aRand.z * 6.28)) * 0.18;
    vec3 dustP = start + aDust * dk + drift * dk;
    float lk = clamp(uLogo * 1.4 - aRand.w * 0.4, 0.0, 1.0);
    lk = lk * lk * (3.0 - 2.0 * lk);
    vec3 logo = vec3(aLogo.xy * uLogoScale, aLogo.z);
    vec3 mid = mix(start, logo, 0.5) + vec3(-(logo.y - start.y), logo.x - start.x, 1.2) * 0.32;
    vec3 logoP = mix(mix(start, mid, lk), mix(mid, logo, lk), lk);
    vec3 p = uLogo > 0.0005 ? logoP : dustP;
    p += vec3(sin(uTime * 1.3 + aRand.x * 9.0), cos(uTime * 1.1 + aRand.y * 9.0), 0.0) * 0.012 * step(0.0005, uLogo);
    vec4 mv = viewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = uSize * (0.55 + aRand.y * 0.9) * uPixel / -mv.z;
    vA = uLogo > 0.0005 ? smoothstep(0.0, 0.12, lk) : smoothstep(0.0, 0.06, dk) * (1.0 - smoothstep(0.7, 1.0, dk) * 0.75);
    vMix = aRand.z;
  }
`,k=`
  precision highp float;
  varying float vA; varying float vMix;
  uniform float uAlpha; uniform float uWorld;
  void main() {
    float d = length(gl_PointCoord - 0.5);
    float a = smoothstep(0.5, 0.0, d);
    vec3 ash = mix(vec3(0.32, 0.36, 0.42), vec3(0.55, 0.58, 0.62), vMix);
    vec3 glow = mix(vec3(0.85, 0.97, 1.0), vec3(0.25, 0.82, 1.0), vMix);
    gl_FragColor = vec4(mix(ash, glow, uWorld), a * vA * uAlpha);
  }
`,C=`
  attribute vec4 aSeed;
  uniform float uTime; uniform float uOn; uniform float uPixel; uniform vec3 uTarget;
  varying float vA;
  void main() {
    float t = fract(uTime * (0.16 + aSeed.w * 0.12) + aSeed.x);
    float th = aSeed.y * 6.2831; float ph = (aSeed.z - 0.5) * 2.2;
    vec3 from = vec3(cos(th) * cos(ph), sin(ph) * 0.8, sin(th) * cos(ph)) * 7.0;
    vec3 ctrl = from * 0.45 + vec3(0.0, 1.6, 0.0) * (aSeed.z - 0.5);
    float e = t * t;
    vec3 p = mix(mix(from, ctrl, e), mix(ctrl, uTarget, e), e);
    vec4 mv = viewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = (0.02 + 0.045 * e) * uPixel / -mv.z;
    vA = smoothstep(0.0, 0.15, t) * (1.0 - smoothstep(0.88, 1.0, t)) * uOn;
  }
`,A=`
  precision highp float;
  varying float vA;
  void main() {
    float d = length(gl_PointCoord - 0.5);
    gl_FragColor = vec4(vec3(0.6, 0.95, 1.0), smoothstep(0.5, 0.0, d) * vA);
  }
`,W=`
  varying float vAng;
  void main() { vAng = atan(position.y, position.x); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
`,I=`
  precision highp float;
  varying float vAng;
  uniform float uDraw; uniform float uAlpha; uniform vec3 uColor;
  void main() {
    float a = (vAng + 3.14159265) / 6.2831853;
    if (a > uDraw) discard;
    gl_FragColor = vec4(uColor, uAlpha * (0.4 + 0.6 * smoothstep(uDraw - 0.2, uDraw, a)));
  }
`,V=`
  varying vec3 vN; varying vec3 vV;
  void main() {
    vec4 wp = modelMatrix * vec4(position, 1.0);
    vN = normalize(mat3(modelMatrix) * normal); vV = normalize(cameraPosition - wp.xyz);
    gl_Position = projectionMatrix * viewMatrix * wp;
  }
`,D=`
  precision highp float;
  varying vec3 vN; varying vec3 vV;
  uniform float uAlpha;
  void main() {
    float f = pow(1.0 - abs(dot(normalize(vN), normalize(vV))), 2.4);
    gl_FragColor = vec4(vec3(0.3, 0.85, 1.0), f * uAlpha);
  }
`,G=`
  varying vec2 vP;
  void main() { vP = position.xy; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
`,R=`
  precision highp float;
  varying vec2 vP;
  uniform float uHead; uniform float uAlpha; uniform float uTop; uniform float uBase;
  void main() {
    if (vP.x > uHead) discard;
    float k = clamp((vP.y - uBase) / (uTop - uBase), 0.0, 1.0);
    gl_FragColor = vec4(vec3(0.39, 0.45, 0.55), k * 0.28 * uAlpha);
  }
`,z=(e,t=!0)=>{let i=new a.Z(e);return t&&(i.colorSpace=a.c),i.anisotropy=4,i.needsUpdate=!0,i};class E{constructor(e,t){s(this,"renderer"),s(this,"scene",new a.S),s(this,"camera",new a.P(30,1,.1,100)),s(this,"bgScene",new a.S),s(this,"bgCam",new a.O(-1,1,1,-1,0,1)),s(this,"bgMat"),s(this,"L",{w:1,h:1,cx:.5,cy:.5,size:600,portrait:!1}),s(this,"tau",-.3),s(this,"pointer",new a.a),s(this,"pointerS",new a.a),s(this,"running",!1),s(this,"visible",!1),s(this,"frame",0),s(this,"clock",new a.C),s(this,"shake",0),s(this,"lastStamp",!1),s(this,"disposed",!1),s(this,"ready",!1),s(this,"opts"),s(this,"pixel",1),s(this,"lastNow",0),s(this,"slow",0),s(this,"root",new a.G),s(this,"slab",new a.G),s(this,"screenMat"),s(this,"bodyMat"),s(this,"slabGlow"),s(this,"shadow"),s(this,"shadowGlow"),s(this,"printer",new a.G),s(this,"paper"),s(this,"paperMat"),s(this,"stamp"),s(this,"clip",new a.b(new a.V(0,1,0),0)),s(this,"chart",new a.G),s(this,"tube"),s(this,"areaMat"),s(this,"dot"),s(this,"dotGlow"),s(this,"axis"),s(this,"curve"),s(this,"shelf",new a.G),s(this,"assets",[]),s(this,"pedestals",[]),s(this,"ops",new a.G),s(this,"rings",[]),s(this,"nodes",[]),s(this,"shield"),s(this,"shell"),s(this,"months"),s(this,"dial"),s(this,"monthH",[]),s(this,"particles"),s(this,"leads"),s(this,"rim"),s(this,"key"),s(this,"textures",[]),s(this,"tmp",new a.V),s(this,"tmpV",new a.V),s(this,"up",new a.V),s(this,"quat",new a.Q),s(this,"quatI",new a.Q),s(this,"mtx",new a.M),s(this,"mPos",new a.V),s(this,"mScale",new a.V),s(this,"anchors",{}),this.opts=t,this.renderer=new a.W({canvas:e,antialias:!t.lowPower,alpha:!1,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,t.lowPower?1.4:1.5)),this.renderer.outputColorSpace=a.c,this.renderer.toneMapping=a.A,this.renderer.toneMappingExposure=1.05,this.renderer.localClippingEnabled=!0,this.renderer.autoClear=!1,this.bgMat=new a.d({vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:M,uniforms:{uWave:{value:0},uTime:{value:0},uRes:{value:new a.a(1,1)},uDark:{value:+!!t.dark},uCenter:{value:new a.a(.65,.5)}},depthTest:!1,depthWrite:!1}),this.bgScene.add(new a.e(new a.f(2,2),this.bgMat)),this.scene.add(new a.H(0xffffff,9083309,.55)),this.key=new a.D(0xffffff,1.5),this.key.position.set(-4,6,6),this.scene.add(this.key),this.rim=new a.D(6809849,0),this.rim.position.set(4,2.5,-5),this.scene.add(this.rim),this.scene.add(this.root)}v(e,t,i){return this.tmpV.set(e,t,i)}async init(){var e;let t,i,o,s,d,p,u,f=()=>new Promise(e=>{let t=window;t.requestIdleCallback?t.requestIdleCallback(()=>e(),{timeout:160}):window.setTimeout(e,16)});await c(),await f();let v=new a.g(this.renderer),m=v.fromScene(new a.R,.04).texture;this.scene.environment=m,this.textures.push(m),v.dispose(),await f();let w=z(((t=document.createElement("canvas")).width=1600,t.height=1e3,(i=t.getContext("2d")).fillStyle="#ffffff",i.fillRect(0,0,1600,1e3),i.fillStyle="#f3f5f8",i.fillRect(0,0,1600,64),i.fillStyle="#e2e8f0",i.fillRect(0,63,1600,1),["#cbd5e1","#cbd5e1","#cbd5e1"].forEach((e,t)=>{i.fillStyle=e,i.beginPath(),i.arc(34+26*t,32,8,0,2*Math.PI),i.fill()}),i.fillStyle="#ffffff",n(i,130,16,560,32,10),i.fill(),i.strokeStyle="rgba(15,23,42,0.08)",i.lineWidth=2,i.stroke(),i.fillStyle="#059669",n(i,148,30,14,11,3),i.fill(),i.strokeStyle="#059669",i.lineWidth=2.4,i.beginPath(),i.arc(155,30,5,Math.PI,0),i.stroke(),i.fillStyle="#64748b",i.font=`600 19px ${l}`,i.textBaseline="middle",i.fillText("website của anh chị",174,33),i.fillStyle=h(i,64,92,104,132,[[0,"#6ee7b7"],[1,"#0d9488"]]),i.beginPath(),i.arc(84,112,20,0,2*Math.PI),i.fill(),i.fillStyle="#0f172a",i.font=`800 30px ${l}`,i.fillText("Thương hiệu",118,114),i.font=`600 22px ${l}`,i.fillStyle="#64748b",[["Sản phẩm",930],["Bộ sưu tập",1060],["C\xe2u chuyện",1210]].forEach(([e,t])=>i.fillText(e,t,114)),i.fillStyle="#0f172a",n(i,1370,86,166,52,26),i.fill(),i.fillStyle="#ffffff",i.font=`700 22px ${l}`,i.fillText("Đặt h\xe0ng",1404,114),i.fillStyle=h(i,64,172,1536,692,[[0,"#f1f8f4"],[.5,"#e6f3ed"],[1,"#d3ebe1"]]),n(i,64,172,1472,520,34),i.fill(),i.fillStyle="#047857",i.font=`800 20px ${l}`,i.fillText("B Ộ   S Ư U   T Ậ P   M Ớ I",136,268),i.fillStyle="#0b1220",i.font=`900 76px ${l}`,i.fillText("Chất lượng thật,",132,358),i.fillText("giao nhanh to\xe0n quốc",132,442),i.fillStyle="#64748b",i.font=`500 26px ${l}`,i.fillText("Đặt online, nhận h\xe0ng trong 24 giờ.",136,508),i.fillStyle="#059669",n(i,134,558,190,64,32),i.fill(),i.fillStyle="#ffffff",i.font=`800 24px ${l}`,i.fillText("Mua ngay",176,591),i.strokeStyle="#cbd5e1",i.lineWidth=2.5,n(i,344,558,236,64,32),i.stroke(),i.fillStyle="#334155",i.fillText("Xem sản phẩm",376,591),(o=i.createRadialGradient(1146,358,20,1206,438,230)).addColorStop(0,"#ffffff"),o.addColorStop(.45,"#cfeee0"),o.addColorStop(1,"#8fd2b8"),i.fillStyle=o,i.beginPath(),i.arc(1206,438,210,0,2*Math.PI),i.fill(),(s=(e,t,a,o,s,l)=>{i.save(),i.translate(e,t),i.rotate(o),i.fillStyle=h(i,-a,0,a,0,[[0,s],[1,l]]),i.beginPath(),i.moveTo(-a,0),i.quadraticCurveTo(0,-(.62*a),a,0),i.quadraticCurveTo(0,.62*a,-a,0),i.fill(),i.restore()})(1086,478,120,-.9,"#34d399","#047857"),s(1326,388,110,.55,"#5eead4","#065f46"),e=608,i.save(),i.fillStyle="rgba(6,78,59,0.18)",i.beginPath(),i.ellipse(1206,e+6,107.1,15,0,0,2*Math.PI),i.fill(),i.fillStyle=h(i,1143,0,1269,0,[[0,"#f2efe6"],[.35,"#ffffff"],[.7,"#fbfaf6"],[1,"#e4ded0"]]),n(i,1143,e-234,126,234,27.72),i.fill(),i.fillStyle="#047857",n(i,1160.64,e-165,90.72,78,7.56),i.fill(),i.fillStyle="rgba(255,255,255,0.85)",n(i,1175.76,e-138,60.48,9,3),i.fill(),i.fillStyle="rgba(255,255,255,0.6)",n(i,1183.32,e-120,45.36,7.5,3),i.fill(),i.fillStyle=h(i,1170.72,0,1241.28,0,[[0,"#065f46"],[.5,"#0f8a66"],[1,"#064e3b"]]),n(i,1171.98,e-300,68.04,75,10.08),i.fill(),i.fillStyle="rgba(255,255,255,0.55)",n(i,1160.64,e-216,10.08,180,5.04),i.fill(),i.restore(),[["#fde7e1","#f7cbbf","Tinh chất dưỡng","329.000đ"],["#e2f0fb","#bfdcf3","Sữa rửa mặt","189.000đ"],["#fff3d6","#fde2a2","Kem chống nắng","259.000đ"],["#ece8fb","#d2c9f3","Mặt nạ ngủ","299.000đ"]].forEach(([e,t,a,o],s)=>{let r=64+375*s;i.fillStyle=h(i,r,730,r+347,910,[[0,e],[1,t]]),n(i,r,730,347,176,22),i.fill(),i.fillStyle="rgba(255,255,255,0.92)",n(i,r+173.5-24,782,48,104,10),i.fill(),i.fillStyle="rgba(51,65,85,0.7)",n(i,r+173.5-13,760,26,26,6),i.fill(),i.fillStyle="#0f172a",i.font=`800 24px ${l}`,i.fillText(a,r+4,942),i.fillStyle="#64748b",i.font=`600 21px ${l}`,i.fillText(o,r+4,976)}),t));await f();let[g,x,y,b]=[z((()=>{let e=document.createElement("canvas");e.width=512,e.height=900;let t=e.getContext("2d");t.fillStyle="#fffdf7",t.beginPath(),t.moveTo(0,900),t.lineTo(0,22);for(let e=0;e<16;e++){let i=512*e/16;t.lineTo(i+16,0),t.lineTo(i+32,22)}t.lineTo(512,900),t.closePath(),t.fill();for(let e=0;e<1400;e++)t.fillStyle=`rgba(120,110,90,${.05*Math.random()})`,t.fillRect(512*Math.random(),22+878*Math.random(),1.5,1.5);t.textBaseline="alphabetic",t.fillStyle="#0f172a",t.font=`800 40px ${r}`,t.textAlign="center",t.fillText("PHIẾU CHI",256,110),t.fillStyle="#94a3b8",t.font=`500 22px ${r}`,t.fillText("Ng\xe0y b\xe0n giao website",256,150),t.textAlign="left";let i=e=>{t.strokeStyle="#cbd5e1",t.lineWidth=2,t.setLineDash([10,8]),t.beginPath(),t.moveTo(36,e),t.lineTo(476,e),t.stroke(),t.setLineDash([])};return i(186),[["Thiết kế website","1 lần",!0],["Bảo tr\xec, sao lưu","—",!1],["Cập nhật bảo mật","—",!1],["SEO, nội dung","—",!1],["B\xe1o c\xe1o th\xe1ng","—",!1]].forEach(([e,i,a],o)=>{let s=246+56*o;t.fillStyle=a?"#0f172a":"#94a3b8",t.font=`${a?800:500} 27px ${r}`,t.fillText(e,40,s),t.textAlign="right",t.fillText(i,472,s),t.textAlign="left"}),i(540),t.fillStyle="#64748b",t.font=`500 23px ${r}`,t.fillText("Sau b\xe0n giao:",40,596),t.fillText("kh\xf4ng ai phụ tr\xe1ch.",40,630),e})()),z((()=>{let e=document.createElement("canvas");e.width=360,e.height=150;let t=e.getContext("2d");t.strokeStyle="#be1e2d",t.fillStyle="#be1e2d",t.lineWidth=7,n(t,10,10,340,130,18),t.stroke(),t.lineWidth=3,n(t,22,22,316,106,12),t.stroke(),t.font=`900 64px ${l}`,t.textAlign="center",t.textBaseline="middle",t.fillText("Đ\xc3 CHI",180,79),t.globalCompositeOperation="destination-out";for(let e=0;e<900;e++){t.fillStyle=`rgba(0,0,0,${.25+.6*Math.random()})`;let e=2.6*Math.random();t.beginPath(),t.arc(360*Math.random(),150*Math.random(),e,0,2*Math.PI),t.fill()}return t.globalCompositeOperation="source-over",e})()),z(((e="rgba(255,255,255,1)",t="rgba(103,232,249,0.35)")=>{let i=document.createElement("canvas");i.width=128,i.height=128;let a=i.getContext("2d"),o=a.createRadialGradient(64,64,0,64,64,64);return o.addColorStop(0,e),o.addColorStop(.25,t),o.addColorStop(1,"rgba(0,0,0,0)"),a.fillStyle=o,a.fillRect(0,0,128,128),i})()),z(((d=document.createElement("canvas")).width=256,d.height=256,(u=(p=d.getContext("2d")).createRadialGradient(128,128,0,128,128,128)).addColorStop(0,"rgba(15,23,42,0.55)"),u.addColorStop(.5,"rgba(15,23,42,0.18)"),u.addColorStop(1,"rgba(15,23,42,0)"),p.fillStyle=u,p.fillRect(0,0,256,256),d))];if(this.textures.push(w,g,x,y,b),this.disposed||(await f(),this.buildSlab(w,y,b),this.buildPrinter(g,x),this.buildChart(y),await f(),this.buildShelf(y),this.buildOps(y),await f(),await this.buildParticles(),this.disposed))return;await f();let M=[this.shelf,this.ops,this.chart,this.printer],S=M.map(e=>e.visible);M.forEach(e=>{e.visible=!0});try{await this.renderer.compileAsync(this.scene,this.camera),this.renderer.compile(this.bgScene,this.bgCam)}catch{this.renderer.compile(this.scene,this.camera)}M.forEach((e,t)=>{e.visible=S[t]}),this.disposed||(await f(),this.textures.forEach(e=>this.renderer.initTexture(e)),this.ready=!0,this.renderOnce())}buildSlab(e,t,i){this.bodyMat=new a.h({color:0xdfe6ee,metalness:.85,roughness:.26,clearcoat:.7,clearcoatRoughness:.2,envMapIntensity:1.1,transparent:!0});let o=new a.e(new a.i(3.3,2.12,.14,5,.09),this.bodyMat);this.slab.add(o),this.screenMat=new a.d({vertexShader:S,fragmentShader:P,uniforms:{uSite:{value:e},uDecay:{value:0},uCrack:{value:0},uGlitch:{value:0},uTime:{value:0},uSweep:{value:-1},uDissolve:{value:0},uSlow:{value:0},uWarn:{value:0}}});let s=new a.e(new a.f(3.3-.12,2),this.screenMat);s.position.z=.07+.002,this.slab.add(s),this.slabGlow=new a.j(new a.k({map:t,color:2282478,transparent:!0,opacity:0,depthWrite:!1,blending:a.l})),this.slabGlow.scale.set(7.5,5.2,1),this.slabGlow.position.z=-.4,this.slab.add(this.slabGlow),this.root.add(this.slab),this.shadow=new a.e(new a.f(4.8,1.6),new a.m({map:i,transparent:!0,depthWrite:!1,opacity:.85})),this.shadow.rotation.x=-Math.PI/2,this.root.add(this.shadow),this.shadowGlow=new a.e(new a.f(5.6,2.2),new a.m({map:t,color:2282478,transparent:!0,opacity:0,depthWrite:!1,blending:a.l})),this.shadowGlow.rotation.x=-Math.PI/2,this.root.add(this.shadowGlow)}buildPrinter(e,t){let i=new a.h({color:1778739,metalness:.4,roughness:.35,clearcoat:.6}),o=new a.e(new a.i(1.18,.24,.46,4,.06),i);this.printer.add(o);let s=new a.e(new a.B(.98,.012,.03),new a.m({color:132105}));s.position.set(0,.121,.02),this.printer.add(s);let l=new a.e(new a.n(.018,12,12),new a.m({color:3462041}));l.position.set(.48,.03,.232),this.printer.add(l),this.paperMat=new a.m({map:e,transparent:!0,side:a.o,clippingPlanes:[this.clip],alphaTest:.02,toneMapped:!1});let r=new a.f(.92,1.62,1,24);r.translate(0,.81,0);let n=r.attributes.position;for(let e=0;e<n.count;e++)n.setZ(e,-.16*Math.pow(n.getY(e)/1.62,2));r.computeVertexNormals(),this.paper=new a.e(r,this.paperMat),this.paper.position.set(0,.12,.02),this.printer.add(this.paper),this.stamp=new a.e(new a.f(.5,.21),new a.m({map:t,transparent:!0,depthWrite:!1,opacity:0,toneMapped:!1})),this.stamp.rotation.z=-.16,this.paper.add(this.stamp),this.stamp.position.set(.17,.98,.03),this.root.add(this.printer)}buildChart(e){let t=[];for(let e=0;e<=24;e++){let i=e/24,o=.36-.72*Math.pow(i,1.5)+.03*Math.sin(9*i);t.push(new a.V(-1.9+3.8*i,o,0))}this.curve=new a.p(t);let i=new a.T(this.curve,200,.024,8,!1),o=[],s=i.attributes.position,l=new a.q(3359061),r=new a.q(6583435),n=new a.q(0xbe123c);for(let e=0;e<s.count;e++){let t=(s.getX(e)+1.9)/3.8,i=t<.6?l.clone().lerp(r,t/.6):r.clone().lerp(n,(t-.6)/.4);o.push(i.r,i.g,i.b)}i.setAttribute("color",new a.F(o,3)),this.tube=new a.e(i,new a.m({vertexColors:!0,transparent:!0})),this.chart.add(this.tube);let h=new a.r;h.moveTo(-1.9,-.52);for(let e=0;e<=60;e++){let t=this.curve.getPoint(e/60);h.lineTo(t.x,t.y)}h.lineTo(1.9,-.52),h.closePath(),this.areaMat=new a.d({vertexShader:G,fragmentShader:R,transparent:!0,depthWrite:!1,uniforms:{uHead:{value:-2},uAlpha:{value:1},uTop:{value:.4},uBase:{value:-.52}}});let c=new a.e(new a.s(h),this.areaMat);c.position.z=-.01,this.chart.add(c),this.axis=new a.L(new a.t().setFromPoints([new a.V(-1.9,-.55,0),new a.V(1.9,-.55,0)]),new a.u({color:9741240,transparent:!0})),this.chart.add(this.axis),this.dot=new a.e(new a.n(.06,20,20),new a.v({color:988970,roughness:.3,metalness:.2,transparent:!0})),this.chart.add(this.dot),this.dotGlow=new a.j(new a.k({map:e,color:9741240,transparent:!0,depthWrite:!1,opacity:.6})),this.dotGlow.scale.set(.5,.5,1),this.chart.add(this.dotGlow),this.root.add(this.chart)}buildShelf(e){let t=new a.h({color:0xffcf5a,metalness:.78,roughness:.22,clearcoat:.7,clearcoatRoughness:.15,emissive:7030016,emissiveIntensity:.5,envMapIntensity:2.4}),i=new a.h({color:0xf1f5f9,metalness:.1,roughness:.32,clearcoat:1,envMapIntensity:1.2}),o=new a.h({color:6809849,metalness:.2,roughness:.15,clearcoat:1,emissive:947344,emissiveIntensity:.55,envMapIntensity:1.3}),s=new a.h({color:726822,metalness:.6,roughness:.25,clearcoat:1}),l=new a.m({color:2282478,transparent:!0,opacity:.9,blending:a.l}),r=()=>{let e=new a.B(.62,.2,.3,1,1,1),i=e.attributes.position;for(let e=0;e<i.count;e++)i.getY(e)>0&&(i.setX(e,.8*i.getX(e)),i.setZ(e,.72*i.getZ(e)));return e.computeVertexNormals(),new a.e(e,t)},n=new a.G,h=r();h.position.set(-.33,.1,0);let c=r();c.position.set(.33,.1,0);let d=r();d.position.set(0,.3,0),d.rotation.y=.06,n.add(h,c,d);let p=new a.r;p.moveTo(-.42,0),p.lineTo(.42,0),p.lineTo(.42,.42),p.lineTo(0,.78),p.lineTo(-.42,.42),p.closePath();let u=new a.e(new a.E(p,{depth:.46,bevelEnabled:!0,bevelSize:.025,bevelThickness:.025,bevelSegments:3}),i);u.position.z=-.23;let f=new a.e(new a.B(.18,.28,.02),new a.m({color:947344}));f.position.set(0,.14,.26);let v=new a.e(new a.B(.14,.14,.02),new a.m({color:6809849}));v.position.set(-.24,.3,.26);let m=v.clone();m.position.x=.24;let w=new a.G;w.add(u,f,v,m);let g=new a.G;[.22,.38,.52,.74].forEach((e,t)=>{let i=new a.e(new a.B(.15,e,.15),o);i.position.set(-.33+.22*t,e/2,0),g.add(i)});let x=new a.p([new a.V(-.45,.32,.14),new a.V(-.1,.5,.14),new a.V(.12,.46,.14),new a.V(.46,.92,.14)]);g.add(new a.e(new a.T(x,40,.018,6,!1),new a.m({color:0xffffff}))),[n,w,g,new a.G].forEach((t,i)=>{let o=new a.G,r=new a.e(new a.w(.66,.7,.1,56),s);r.position.y=-.05;let n=new a.e(new a.x(.68,.007,6,96),l);n.rotation.x=Math.PI/2;let h=new a.j(new a.k({map:e,color:2282478,transparent:!0,opacity:.35,depthWrite:!1,blending:a.l}));h.scale.set(2.2,.7,1),h.position.y=-.02,o.add(r,n,h);let c=new a.G;c.add(t),c.scale.setScalar(1.3),c.position.y=.02,o.add(c),this.pedestals.push(o),this.assets.push(c),this.shelf.add(o)}),this.root.add(this.shelf)}buildOps(e){[new a.y(.42*Math.PI,0,0),new a.y(.42*Math.PI,Math.PI/3,0),new a.y(.42*Math.PI,-Math.PI/3,0)].forEach(t=>{let i=new a.d({vertexShader:W,fragmentShader:I,transparent:!0,depthWrite:!1,blending:a.l,uniforms:{uDraw:{value:0},uAlpha:{value:0},uColor:{value:new a.q(6809849)}}}),o=new a.e(new a.x(2.45,.011,8,320),i);o.rotation.copy(t),this.rings.push(o),this.ops.add(o);let s=new a.G,l=new a.e(new a.n(.075,20,20),new a.m({color:0xffffff})),r=new a.j(new a.k({map:e,color:6809849,transparent:!0,depthWrite:!1,blending:a.l}));r.scale.set(.9,.9,1),s.add(l,r),this.nodes.push(s),this.ops.add(s)}),this.shield=new a.z(new a.I(new a.J(2.05,2)),new a.u({color:2282478,transparent:!0,opacity:0,depthWrite:!1,blending:a.l})),this.ops.add(this.shield),this.shell=new a.e(new a.n(2.06,48,32),new a.d({vertexShader:V,fragmentShader:D,transparent:!0,depthWrite:!1,blending:a.l,uniforms:{uAlpha:{value:0}}})),this.ops.add(this.shell),this.months=new a.K(new a.B(1,1,1),new a.h({color:2282478,emissive:561586,emissiveIntensity:.9,metalness:.2,roughness:.25,clearcoat:1}),12),this.monthH=[.34,.36,.42,.44,.46,.52,.55,.57,.63,.66,.7,.78],this.ops.add(this.months);let t=new a.e(new a.N(2.19,2.35+.16,96),new a.m({color:2282478,transparent:!0,opacity:.12,side:a.o,depthWrite:!1,blending:a.l}));t.rotation.x=-Math.PI/2,t.position.y=-1.25,this.dial=t,this.ops.add(t),this.root.add(this.ops)}async buildParticles(){let e=this.opts.lowPower?4200:9e3,t=new Float32Array(3*e),i=new Float32Array(3*e),o=new Float32Array(3*e),s=new Float32Array(4*e),l=null;try{l=await d("../ximitech-mark.webp",e)}catch{l=null}for(let a=0;a<e;a++){t[3*a]=(Math.random()-.5)*(3.3-.14),t[3*a+1]=(Math.random()-.5)*1.98,t[3*a+2]=.08,i[3*a]=(Math.random()-.5)*1.6,i[3*a+1]=-1.4-2.6*Math.random(),i[3*a+2]=(Math.random()-.2)*1.8;let e=l?l[2*a]:.8*Math.cos(a),r=l?l[2*a+1]:.8*Math.sin(a);o[3*a]=e,o[3*a+1]=r,o[3*a+2]=.2+(Math.random()-.5)*.06,s[4*a]=Math.random(),s[4*a+1]=Math.random(),s[4*a+2]=Math.random(),s[4*a+3]=Math.random()}let r=new a.t;r.setAttribute("position",new a.U(t,3)),r.setAttribute("aStart",new a.U(t,3)),r.setAttribute("aDust",new a.U(i,3)),r.setAttribute("aLogo",new a.U(o,3)),r.setAttribute("aRand",new a.U(s,4)),r.boundingSphere=new a.X(new a.V,50);let n=new a.d({vertexShader:T,fragmentShader:k,transparent:!0,depthWrite:!1,uniforms:{uDust:{value:0},uLogo:{value:0},uTime:{value:0},uSize:{value:.05},uPixel:{value:600},uSlab:{value:new a.M},uAlpha:{value:1},uWorld:{value:0},uLogoScale:{value:1}}});this.particles=new a.Y(r,n),this.particles.frustumCulled=!1,this.scene.add(this.particles);let h=this.opts.lowPower?140:280,c=new Float32Array(4*h);for(let e=0;e<4*h;e++)c[e]=Math.random();let p=new a.t;p.setAttribute("position",new a.U(new Float32Array(3*h),3)),p.setAttribute("aSeed",new a.U(c,4)),this.leads=new a.Y(p,new a.d({vertexShader:C,fragmentShader:A,transparent:!0,depthWrite:!1,blending:a.l,uniforms:{uTime:{value:0},uOn:{value:0},uPixel:{value:600},uTarget:{value:new a.V}}})),this.leads.frustumCulled=!1,this.scene.add(this.leads)}setLayout(e){this.L=e,this.renderer.setSize(e.w,e.h,!1);let t=this.renderer.getPixelRatio();this.bgMat.uniforms.uRes.value.set(e.w*t,e.h*t),this.renderOnce()}setTau(e){this.tau=e,this.kick()}setPointer(e,t){this.pointer.set(e,t),this.kick()}setDark(e){this.bgMat.uniforms.uDark.value=+!!e,this.renderOnce()}setVisible(e){this.visible=e,e&&this.kick()}kick(){if(!this.visible||this.running||!this.ready)return;this.running=!0,this.clock.getDelta(),this.lastNow=0;let e=t=>{if(!this.visible||this.disposed){this.running=!1;return}this.frame=requestAnimationFrame(e),this.govern(t),this.update()};this.frame=requestAnimationFrame(e)}govern(e){let t=this.lastNow?e-this.lastNow:16;if(this.lastNow=e,t>120||(this.slow=t>24?this.slow+1:Math.max(0,this.slow-1),this.slow<45))return;this.slow=0;let i=this.renderer.getPixelRatio();i<=1||(this.renderer.setPixelRatio(Math.max(1,i-.25)),this.setLayout(this.L))}renderOnce(){this.ready&&!this.running&&this.update()}update(){let e=this.tau,t=this.clock.getElapsedTime(),i=this.L,a=i.portrait;this.pointerS.lerp(this.pointer,.06);let o=w(e,.385,.5,e=>e),s=w(e,.43,.5);this.bgMat.uniforms.uWave.value=o,this.bgMat.uniforms.uTime.value=t;let l=w(e,.86,.92,v),r=y(i.cx,i.w/2,l),n=y(i.cy,i.h/2,l);this.bgMat.uniforms.uCenter.value.set(r/i.w,1-n/i.h);let h=i.w+2*Math.abs(i.w/2-r),c=i.h+2*Math.abs(i.h/2-n);this.camera.setViewOffset(h,c,h/2-r,c/2-n,i.w,i.h);let d=3.3*c/(2*y(i.size,Math.min(i.w,i.h)*(a?.78:.62),l)*Math.tan(30*Math.PI/360)),f=[-.25,0,.17,.24,.37,.44,.52,.57,.64,.7,.86,.92],b=x(e,f,[-30,-16,-13,-4,7,0,0,0,6,-12,28,0])+5*this.pointerS.x,M=x(e,f,[12,6,5,9,15,6,3,8,10,14,12,2])+3*this.pointerS.y,S=d*x(e,f,[1.35,1,1.02,1.1,.98,1.08,1,1,a?1.42:1.5,1.32,1.28,1.05]),P=x(e,f,[.2,0,-.08,-.55,-.62,-.3,0,-.1,a?-.05:-.25,-.15,-.2,0]);this.shake*=.86;let T=b*Math.PI/180,k=M*Math.PI/180;this.camera.position.set(Math.sin(T)*Math.cos(k)*S,P+Math.sin(k)*S,Math.cos(T)*Math.cos(k)*S),this.camera.position.x+=(Math.random()-.5)*this.shake,this.camera.position.y+=(Math.random()-.5)*this.shake,this.camera.lookAt(0,P,0),this.camera.updateMatrixWorld(),this.key.intensity=y(1.5,.9,s)*y(1,.75,w(e,.24,.37)*(1-s)),this.rim.intensity=y(0,2.4,s),this.renderer.toneMappingExposure=y(1.05,1.15,s);let C=g(e,.555,.61,.66,.71),A=a?this.v(1.22,-1.05,0):this.v(p[3].x,-.5,p[3].z),W=w(e,.66,.71),I=A.x,V=A.y,D=A.z,G=y(0,I,C),R=x(e,[.17,.24,.37,.45,.5],[0,.32,.18,.18,0])*(1-C);R=y(R,V,C);let z=y(1,a?.36:.38,C)*y(1,.78,W*(1-C))*(1-.1*w(e,.9,.93)),E=w(e,-.25,0,m);this.slab.position.set(G,R+-((1-E)*.8)+.025*Math.sin(.9*t),y(0,D,C)),this.slab.scale.setScalar(z*y(.9,1,E));let L=w(e,.25,.37)*(1-w(e,.44,.5));this.slab.rotation.set(-.16*L+.012*Math.sin(.7*t),y(-.5,0,E)+.02*Math.sin(.5*t)+-.25*C,-.04*L),this.slab.updateMatrixWorld();let U=this.screenMat.uniforms;U.uTime.value=t,U.uDecay.value=x(e,[.25,.28,.31,.32,.35,.36,.45,.5],[0,.32,.38,.66,.72,1,1,0]),U.uGlitch.value=.8*g(e,.28,.3,.42,.46),U.uSlow.value=g(e,.27,.285,.305,.32),U.uWarn.value=g(e,.345,.355,.455,.49),U.uCrack.value=w(e,.352,.375,m)*(1-w(e,.455,.49)),U.uSweep.value=x(e,[.48,.56],[-.6,1.9]);let q=x(e,[.375,.405,.44,.49],[0,.42,.42,0]),$=1.05*w(e,.87,.93,e=>e);U.uDissolve.value=Math.max(q,$),this.bodyMat.opacity=1-w(e,.885,.915),this.slabGlow.material.opacity=.55*g(e,.47,.53,.86,.9)+.15*g(e,.7,.75,.86,.9);let j=R-1.06*z-.28;this.shadow.position.set(G,j,.1),this.shadow.scale.setScalar(z),this.shadow.material.opacity=.75*(1-s)*E,this.shadowGlow.position.set(G,j,.1),this.shadowGlow.scale.setScalar(z),this.shadowGlow.material.opacity=.55*s*(1-w(e,.86,.9));let F=g(e,-.02,.02,.17,.22),_=w(e,.17,.22,e=>e*e);this.printer.visible=F>.001,this.printer.position.set(a?.72:1.42,a?-1.5:-.98,a?.7:.62),this.printer.position.x+=1.8*_,this.printer.position.y+=-.6*_,this.printer.rotation.set(0,-.32+-.6*_,-.3*_),this.printer.scale.setScalar((a?.82:1)*y(.7,1,w(e,-.02,.03,m)));let N=w(e,.015,.12,e=>e);this.paper.position.y=.12-1.62*(1-N),this.printer.updateMatrixWorld(),this.tmp.set(0,.12,0).applyMatrix4(this.printer.matrixWorld),this.up.set(0,1,0).applyQuaternion(this.printer.getWorldQuaternion(this.quat)),this.clip.setFromNormalAndCoplanarPoint(this.up,this.tmp),this.paperMat.opacity=F;let B=w(e,.12,.135,m);this.stamp.material.opacity=B*F,this.stamp.scale.setScalar(y(1.9,1,B)),B>=1&&!this.lastStamp&&(this.shake=.06),this.lastStamp=B>=1;let O=g(e,.2,.235,.41,.445);this.chart.visible=O>.001,this.chart.position.set(0,a?-1.6:-1.58,a?.7:.55),this.chart.scale.setScalar(a?.72:1);let H=w(e,.24,.36,e=>e),X=this.tube.geometry.index;X&&this.tube.geometry.setDrawRange(0,Math.floor(X.count*H)),this.tube.material.opacity=O,this.areaMat.uniforms.uHead.value=-1.9+3.8*H,this.areaMat.uniforms.uAlpha.value=O,this.axis.material.opacity=O*w(e,.2,.245);let Q=this.curve.getPoint(Math.max(1e-4,H));this.dot.position.copy(Q),this.dotGlow.position.copy(Q),this.dot.visible=H>.001,this.dotGlow.visible=H>.001,this.dot.material.opacity=O,this.dotGlow.material.opacity=.6*O;let Y=g(e,.565,.6,.66,.7);this.shelf.visible=Y>.001;let Z=a?u:p;this.pedestals.forEach((i,o)=>{let s=3===o?.6:.57+.016*o,l=w(e,s,s+.035,e=>1-Math.pow(1-e,3)*Math.cos(6*e)*(1-e));i.position.copy(Z[o]),i.position.y+=-((1-l)*.5),i.scale.setScalar(Math.max(1e-4,l*Y)*(a?.85:1)),this.assets[o].rotation.y=.35*t+o,this.assets[o].position.y=.06+.03*Math.sin(1.2*t+o)});let K=g(e,.69,.72,.87,.9);this.ops.visible=K>.001,this.ops.scale.setScalar((a?.8:1)*y(1,.5,w(e,.87,.91))),this.rings.forEach((t,i)=>{t.material.uniforms.uDraw.value=w(e,.7+.012*i,.77+.012*i,v),t.material.uniforms.uAlpha.value=.85*K});let J=x(e,[.7,.88],[0,.9*Math.PI])+.12*t;this.nodes.forEach((t,i)=>{let a=w(e,.715+.025*i,.735+.025*i),o=J+2.1*i;this.tmp.set(2.45*Math.cos(o),2.45*Math.sin(o),0).applyEuler(this.rings[i].rotation),t.position.copy(this.tmp),t.scale.setScalar(Math.max(1e-4,a*K))}),this.shield.material.opacity=.14*g(e,.72,.76,.86,.89),this.shield.rotation.y=.05*t,this.shell.material.uniforms.uAlpha.value=.5*g(e,.72,.76,.86,.89);for(let t=0;t<12;t++){let i=.765+.0082*t,a=w(e,i,i+.014,m)*K,o=1.25*this.monthH[t]*a+1e-4,s=Math.PI/2-t/12*Math.PI*2;this.mPos.set(2.35*Math.cos(s),-1.25+o/2,2.35*Math.sin(s)),this.mScale.set(.17,o,.17),this.mtx.compose(this.mPos,this.quatI,this.mScale),this.months.setMatrixAt(t,this.mtx)}if(this.months.instanceMatrix.needsUpdate=!0,this.dial.material.opacity=.14*g(e,.75,.78,.86,.89),this.particles){let a=this.particles.material.uniforms;a.uTime.value=t,a.uDust.value=x(e,[.375,.43,.445,.5],[0,1,1,0]),a.uLogo.value=w(e,.87,.945,e=>e),a.uWorld.value=s,a.uSlab.value.copy(this.slab.matrixWorld),this.pixel=c*this.renderer.getPixelRatio()/(2*Math.tan(30*Math.PI/360)),a.uPixel.value=this.pixel,a.uSize.value=this.opts.lowPower?.03:.022,a.uAlpha.value=1-w(e,.955,.975);let o=c/(2*Math.max(.5,this.camera.position.distanceTo(this.tmp.set(0,P,.2)))*Math.tan(30*Math.PI/360));a.uLogoScale.value=(i.portrait?64:84)/o;let l=this.leads.material.uniforms;l.uTime.value=t,l.uOn.value=g(e,.74,.78,.86,.89),l.uPixel.value=this.pixel,l.uTarget.value.set(G,R,.1)}this.project(),this.renderer.clear(),this.renderer.render(this.bgScene,this.bgCam),this.renderer.render(this.scene,this.camera)}project(){let e=this.opts.onAnchors;if(!e)return;let t=this.L,i=(e,i)=>{i.project(this.camera),this.anchors[e]={x:(.5*i.x+.5)*t.w,y:(-(.5*i.y)+.5)*t.h}},o=(e,t,i,o=0)=>new a.V(t,i,o).applyMatrix4(e.matrixWorld);this.slab.updateMatrixWorld(),i("slabTR",o(this.slab,1.65-.1,1.12,.1)),i("slabTL",o(this.slab,-1.45,1.12,.1)),i("slabC",o(this.slab,0,0,.1)),i("slabR",o(this.slab,1.65,.1,.1)),this.chart.updateMatrixWorld(),[0,1,2,3].forEach(e=>i(`y${e}`,o(this.chart,-1.9+3.8*e/3,-.62,0))),i("chartTL",o(this.chart,-1.9,.6,0)),this.printer.updateMatrixWorld(),i("printer",o(this.printer,0,0,0)),this.shelf.updateMatrixWorld(),this.pedestals.forEach((e,t)=>i(`a${t}`,o(e,0,-.18,.6)));let s=this.L.portrait?u:p;i("shelfMid",this.L.portrait?new a.V(0,s[2].y-.95,.6):new a.V((s[1].x+s[2].x)/2,s[1].y-.2,.6)),this.ops.updateMatrixWorld(),this.nodes.forEach((e,t)=>i(`n${t}`,e.getWorldPosition(new a.V))),i("monthL",o(this.ops,0,-1.37,2.45)),i("origin",new a.V(0,0,.2)),e(this.anchors)}dispose(){this.disposed=!0,cancelAnimationFrame(this.frame),this.scene.traverse(e=>{e.geometry&&e.geometry.dispose();let t=e.material;Array.isArray(t)?t.forEach(e=>e.dispose()):null==t||t.dispose()}),this.bgMat.dispose(),this.textures.forEach(e=>e.dispose()),this.renderer.dispose()}}}}]);