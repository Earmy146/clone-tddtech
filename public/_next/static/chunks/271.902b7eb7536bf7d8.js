"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[271],{5271:(e,t,i)=>{let r,a,s,n,o;i.r(t),i.d(t,{$:()=>m,A:()=>c,B:()=>il,C:()=>ly,D:()=>le,E:()=>n5,F:()=>tk,G:()=>aF,H:()=>oJ,I:()=>on,J:()=>n8,K:()=>sR,L:()=>sJ,M:()=>eX,N:()=>n7,O:()=>ik,P:()=>iv,Q:()=>em,R:()=>ch,S:()=>aq,T:()=>os,U:()=>tU,V:()=>ef,W:()=>aV,X:()=>eO,Y:()=>s8,Z:()=>na,_:()=>oZ,a:()=>F,a0:()=>p,a1:()=>O,a2:()=>hw,a3:()=>cl,a4:()=>cu,b:()=>iE,c:()=>f,d:()=>ig,e:()=>is,f:()=>iP,g:()=>iQ,h:()=>od,i:()=>cm,j:()=>se,k:()=>aJ,l:()=>h,m:()=>tw,n:()=>ot,o:()=>l,p:()=>np,q:()=>tb,r:()=>nz,s:()=>oe,t:()=>tJ,u:()=>sX,v:()=>ou,w:()=>nL,x:()=>or,y:()=>e1,z:()=>s0});let l=2,h=2,c=4,u="attached",d="detached",p=1006,m=1008,f="srgb",g="srgb-linear",_="display-p3",v="display-p3-linear",x="linear",y="srgb",M="rec709",S="300 es";class b{addEventListener(e,t){void 0===this._listeners&&(this._listeners={});let i=this._listeners;void 0===i[e]&&(i[e]=[]),-1===i[e].indexOf(t)&&i[e].push(t)}hasEventListener(e,t){if(void 0===this._listeners)return!1;let i=this._listeners;return void 0!==i[e]&&-1!==i[e].indexOf(t)}removeEventListener(e,t){if(void 0===this._listeners)return;let i=this._listeners[e];if(void 0!==i){let e=i.indexOf(t);-1!==e&&i.splice(e,1)}}dispatchEvent(e){if(void 0===this._listeners)return;let t=this._listeners[e.type];if(void 0!==t){e.target=this;let i=t.slice(0);for(let t=0,r=i.length;t<r;t++)i[t].call(this,e);e.target=null}}}let T=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],E=1234567,A=Math.PI/180,w=180/Math.PI;function R(){let e=0xffffffff*Math.random()|0,t=0xffffffff*Math.random()|0,i=0xffffffff*Math.random()|0,r=0xffffffff*Math.random()|0;return(T[255&e]+T[e>>8&255]+T[e>>16&255]+T[e>>24&255]+"-"+T[255&t]+T[t>>8&255]+"-"+T[t>>16&15|64]+T[t>>24&255]+"-"+T[63&i|128]+T[i>>8&255]+"-"+T[i>>16&255]+T[i>>24&255]+T[255&r]+T[r>>8&255]+T[r>>16&255]+T[r>>24&255]).toLowerCase()}function C(e,t,i){return Math.max(t,Math.min(i,e))}function L(e,t){return(e%t+t)%t}function P(e,t,i){return(1-i)*e+i*t}function I(e){return(e&e-1)==0&&0!==e}function U(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function N(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/0xffffffff;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/0x7fffffff,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error("Invalid component type.")}}function D(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(0xffffffff*e);case Uint16Array:return Math.round(65535*e);case Uint8Array:return Math.round(255*e);case Int32Array:return Math.round(0x7fffffff*e);case Int16Array:return Math.round(32767*e);case Int8Array:return Math.round(127*e);default:throw Error("Invalid component type.")}}let O={DEG2RAD:A,RAD2DEG:w,generateUUID:R,clamp:C,euclideanModulo:L,mapLinear:function(e,t,i,r,a){return r+(e-t)*(a-r)/(i-t)},inverseLerp:function(e,t,i){return e!==t?(i-e)/(t-e):0},lerp:P,damp:function(e,t,i,r){return P(e,t,1-Math.exp(-i*r))},pingpong:function(e,t=1){return t-Math.abs(L(e,2*t)-t)},smoothstep:function(e,t,i){return e<=t?0:e>=i?1:(e=(e-t)/(i-t))*e*(3-2*e)},smootherstep:function(e,t,i){return e<=t?0:e>=i?1:(e=(e-t)/(i-t))*e*e*(e*(6*e-15)+10)},randInt:function(e,t){return e+Math.floor(Math.random()*(t-e+1))},randFloat:function(e,t){return e+Math.random()*(t-e)},randFloatSpread:function(e){return e*(.5-Math.random())},seededRandom:function(e){void 0!==e&&(E=e);let t=E+=0x6d2b79f5;return t=Math.imul(t^t>>>15,1|t),(((t^=t+Math.imul(t^t>>>7,61|t))^t>>>14)>>>0)/0x100000000},degToRad:function(e){return e*A},radToDeg:function(e){return e*w},isPowerOfTwo:I,ceilPowerOfTwo:function(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))},floorPowerOfTwo:U,setQuaternionFromProperEuler:function(e,t,i,r,a){let s=Math.cos,n=Math.sin,o=s(i/2),l=n(i/2),h=s((t+r)/2),c=n((t+r)/2),u=s((t-r)/2),d=n((t-r)/2),p=s((r-t)/2),m=n((r-t)/2);switch(a){case"XYX":e.set(o*c,l*u,l*d,o*h);break;case"YZY":e.set(l*d,o*c,l*u,o*h);break;case"ZXZ":e.set(l*u,l*d,o*c,o*h);break;case"XZX":e.set(o*c,l*m,l*p,o*h);break;case"YXY":e.set(l*p,o*c,l*m,o*h);break;case"ZYZ":e.set(l*m,l*p,o*c,o*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}},normalize:D,denormalize:N};class F{constructor(e=0,t=0){F.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());return 0===t?Math.PI/2:Math.acos(C(this.dot(e)/t,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),a=this.x-e.x,s=this.y-e.y;return this.x=a*i-s*r+e.x,this.y=a*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class B{constructor(e,t,i,r,a,s,n,o,l){B.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],void 0!==e&&this.set(e,t,i,r,a,s,n,o,l)}set(e,t,i,r,a,s,n,o,l){let h=this.elements;return h[0]=e,h[1]=r,h[2]=n,h[3]=t,h[4]=a,h[5]=o,h[6]=i,h[7]=s,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,a=this.elements,s=i[0],n=i[3],o=i[6],l=i[1],h=i[4],c=i[7],u=i[2],d=i[5],p=i[8],m=r[0],f=r[3],g=r[6],_=r[1],v=r[4],x=r[7],y=r[2],M=r[5],S=r[8];return a[0]=s*m+n*_+o*y,a[3]=s*f+n*v+o*M,a[6]=s*g+n*x+o*S,a[1]=l*m+h*_+c*y,a[4]=l*f+h*v+c*M,a[7]=l*g+h*x+c*S,a[2]=u*m+d*_+p*y,a[5]=u*f+d*v+p*M,a[8]=u*g+d*x+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],s=e[4],n=e[5],o=e[6],l=e[7],h=e[8];return t*s*h-t*n*l-i*a*h+i*n*o+r*a*l-r*s*o}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],s=e[4],n=e[5],o=e[6],l=e[7],h=e[8],c=h*s-n*l,u=n*o-h*a,d=l*a-s*o,p=t*c+i*u+r*d;if(0===p)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=c*m,e[1]=(r*l-h*i)*m,e[2]=(n*i-r*s)*m,e[3]=u*m,e[4]=(h*t-r*o)*m,e[5]=(r*a-n*t)*m,e[6]=d*m,e[7]=(i*o-l*t)*m,e[8]=(s*t-i*a)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,a,s,n){let o=Math.cos(a),l=Math.sin(a);return this.set(i*o,i*l,-i*(o*s+l*n)+s+e,-r*l,r*o,-r*(-l*s+o*n)+n+t,0,0,1),this}scale(e,t){return this.premultiply(z.makeScale(e,t)),this}rotate(e){return this.premultiply(z.makeRotation(-e)),this}translate(e,t){return this.premultiply(z.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let e=0;e<9;e++)if(t[e]!==i[e])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}let z=new B;function H(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}let G={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function k(e,t){return new G[e](t)}function V(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function W(){let e=V("canvas");return e.style.display="block",e}let X={};function j(e){e in X||(X[e]=!0,console.warn(e))}let q=new B().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Y=new B().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Z={[g]:{transfer:x,primaries:M,toReference:e=>e,fromReference:e=>e},[f]:{transfer:y,primaries:M,toReference:e=>e.convertSRGBToLinear(),fromReference:e=>e.convertLinearToSRGB()},[v]:{transfer:x,primaries:"p3",toReference:e=>e.applyMatrix3(Y),fromReference:e=>e.applyMatrix3(q)},[_]:{transfer:y,primaries:"p3",toReference:e=>e.convertSRGBToLinear().applyMatrix3(Y),fromReference:e=>e.applyMatrix3(q).convertLinearToSRGB()}},K=new Set([g,v]),J={enabled:!0,_workingColorSpace:g,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(e){if(!K.has(e))throw Error(`Unsupported working color space, "${e}".`);this._workingColorSpace=e},convert:function(e,t,i){if(!1===this.enabled||t===i||!t||!i)return e;let r=Z[t].toReference;return(0,Z[i].fromReference)(r(e))},fromWorkingColorSpace:function(e,t){return this.convert(e,this._workingColorSpace,t)},toWorkingColorSpace:function(e,t){return this.convert(e,t,this._workingColorSpace)},getPrimaries:function(e){return Z[e].primaries},getTransfer:function(e){return""===e?x:Z[e].transfer}};function Q(e){return e<.04045?.0773993808*e:Math.pow(.9478672986*e+.0521327014,2.4)}function $(e){return e<.0031308?12.92*e:1.055*Math.pow(e,.41666)-.055}class ee{static getDataURL(e){let t;if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;if(e instanceof HTMLCanvasElement)t=e;else{void 0===r&&(r=V("canvas")),r.width=e.width,r.height=e.height;let i=r.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=r}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if("u">typeof HTMLImageElement&&e instanceof HTMLImageElement||"u">typeof HTMLCanvasElement&&e instanceof HTMLCanvasElement||"u">typeof ImageBitmap&&e instanceof ImageBitmap){let t=V("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let e=0;e<a.length;e++)a[e]=255*Q(a[e]/255);return i.putImageData(r,0,0),t}if(!e.data)return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e;{let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(255*Q(t[e]/255)):t[e]=Q(t[e]);return{data:t,width:e.width,height:e.height}}}}let et=0;class ei{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:et++}),this.uuid=R(),this.data=e,this.version=0}set needsUpdate(e){!0===e&&this.version++}toJSON(e){let t=void 0===e||"string"==typeof e;if(!t&&void 0!==e.images[this.uuid])return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(null!==r){let e;if(Array.isArray(r)){e=[];for(let t=0,i=r.length;t<i;t++)r[t].isDataTexture?e.push(er(r[t].image)):e.push(er(r[t]))}else e=er(r);i.url=e}return t||(e.images[this.uuid]=i),i}}function er(e){return"u">typeof HTMLImageElement&&e instanceof HTMLImageElement||"u">typeof HTMLCanvasElement&&e instanceof HTMLCanvasElement||"u">typeof ImageBitmap&&e instanceof ImageBitmap?ee.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ea=0;class es extends b{constructor(e=es.DEFAULT_IMAGE,t=es.DEFAULT_MAPPING,i=1001,r=1001,a=p,s=m,n=1023,o=1009,l=es.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ea++}),this.uuid=R(),this.name="",this.source=new ei(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=a,this.minFilter=s,this.anisotropy=l,this.format=n,this.internalFormat=null,this.type=o,this.offset=new F(0,0),this.repeat=new F(1,1),this.center=new F(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new B,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,"string"==typeof h?this.colorSpace=h:(j("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=3001===h?f:""),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=void 0===e||"string"==typeof e;if(!t&&void 0!==e.textures[this.uuid])return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(300!==this.mapping)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case 1e3:e.x=e.x-Math.floor(e.x);break;case 1001:e.x=e.x<0?0:1;break;case 1002:1===Math.abs(Math.floor(e.x)%2)?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case 1e3:e.y=e.y-Math.floor(e.y);break;case 1001:e.y=e.y<0?0:1;break;case 1002:1===Math.abs(Math.floor(e.y)%2)?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){!0===e&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return j("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===f?3001:3e3}set encoding(e){j("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=3001===e?f:""}}es.DEFAULT_IMAGE=null,es.DEFAULT_MAPPING=300,es.DEFAULT_ANISOTROPY=1;class en{constructor(e=0,t=0,i=0,r=1){en.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=void 0!==e.w?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,a=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r+s[12]*a,this.y=s[1]*t+s[5]*i+s[9]*r+s[13]*a,this.z=s[2]*t+s[6]*i+s[10]*r+s[14]*a,this.w=s[3]*t+s[7]*i+s[11]*r+s[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,a,s=e.elements,n=s[0],o=s[4],l=s[8],h=s[1],c=s[5],u=s[9],d=s[2],p=s[6],m=s[10];if(.01>Math.abs(o-h)&&.01>Math.abs(l-d)&&.01>Math.abs(u-p)){if(.1>Math.abs(o+h)&&.1>Math.abs(l+d)&&.1>Math.abs(u+p)&&.1>Math.abs(n+c+m-3))return this.set(1,0,0,0),this;t=Math.PI;let e=(n+1)/2,s=(c+1)/2,f=(m+1)/2,g=(o+h)/4,_=(l+d)/4,v=(u+p)/4;return e>s&&e>f?e<.01?(i=0,r=.707106781,a=.707106781):(r=g/(i=Math.sqrt(e)),a=_/i):s>f?s<.01?(i=.707106781,r=0,a=.707106781):(i=g/(r=Math.sqrt(s)),a=v/r):f<.01?(i=.707106781,r=.707106781,a=0):(i=_/(a=Math.sqrt(f)),r=v/a),this.set(i,r,a,t),this}let f=Math.sqrt((p-u)*(p-u)+(l-d)*(l-d)+(h-o)*(h-o));return .001>Math.abs(f)&&(f=1),this.x=(p-u)/f,this.y=(l-d)/f,this.z=(h-o)/f,this.w=Math.acos((n+c+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class eo extends b{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new en(0,0,e,t),this.scissorTest=!1,this.viewport=new en(0,0,e,t),void 0!==i.encoding&&(j("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=3001===i.encoding?f:""),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:p,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new es({width:e,height:t,depth:1},i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new ei(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,null!==e.depthTexture&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class el extends eo{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class eh extends es{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ec extends el{constructor(e=1,t=1,i=1,r={}){super(e,t,r),this.isWebGLArrayRenderTarget=!0,this.depth=i,this.texture=new eh(null,e,t,i),this.texture.isRenderTargetTexture=!0}}class eu extends es{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ed extends el{constructor(e=1,t=1,i=1,r={}){super(e,t,r),this.isWebGL3DRenderTarget=!0,this.depth=i,this.texture=new eu(null,e,t,i),this.texture.isRenderTargetTexture=!0}}class ep extends el{constructor(e=1,t=1,i=1,r={}){super(e,t,r),this.isWebGLMultipleRenderTargets=!0;let a=this.texture;this.texture=[];for(let e=0;e<i;e++)this.texture[e]=a.clone(),this.texture[e].isRenderTargetTexture=!0}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,a=this.texture.length;r<a;r++)this.texture[r].image.width=e,this.texture[r].image.height=t,this.texture[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}copy(e){this.dispose(),this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,null!==e.depthTexture&&(this.depthTexture=e.depthTexture.clone()),this.texture.length=0;for(let t=0,i=e.texture.length;t<i;t++)this.texture[t]=e.texture[t].clone(),this.texture[t].isRenderTargetTexture=!0;return this}}class em{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,a,s,n){let o=i[r+0],l=i[r+1],h=i[r+2],c=i[r+3],u=a[s+0],d=a[s+1],p=a[s+2],m=a[s+3];if(0===n){e[t+0]=o,e[t+1]=l,e[t+2]=h,e[t+3]=c;return}if(1===n){e[t+0]=u,e[t+1]=d,e[t+2]=p,e[t+3]=m;return}if(c!==m||o!==u||l!==d||h!==p){let e=1-n,t=o*u+l*d+h*p+c*m,i=t>=0?1:-1,r=1-t*t;if(r>Number.EPSILON){let a=Math.sqrt(r),s=Math.atan2(a,t*i);e=Math.sin(e*s)/a,n=Math.sin(n*s)/a}let a=n*i;if(o=o*e+u*a,l=l*e+d*a,h=h*e+p*a,c=c*e+m*a,e===1-n){let e=1/Math.sqrt(o*o+l*l+h*h+c*c);o*=e,l*=e,h*=e,c*=e}}e[t]=o,e[t+1]=l,e[t+2]=h,e[t+3]=c}static multiplyQuaternionsFlat(e,t,i,r,a,s){let n=i[r],o=i[r+1],l=i[r+2],h=i[r+3],c=a[s],u=a[s+1],d=a[s+2],p=a[s+3];return e[t]=n*p+h*c+o*d-l*u,e[t+1]=o*p+h*u+l*c-n*d,e[t+2]=l*p+h*d+n*u-o*c,e[t+3]=h*p-n*c-o*u-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,a=e._z,s=e._order,n=Math.cos,o=Math.sin,l=n(i/2),h=n(r/2),c=n(a/2),u=o(i/2),d=o(r/2),p=o(a/2);switch(s){case"XYZ":this._x=u*h*c+l*d*p,this._y=l*d*c-u*h*p,this._z=l*h*p+u*d*c,this._w=l*h*c-u*d*p;break;case"YXZ":this._x=u*h*c+l*d*p,this._y=l*d*c-u*h*p,this._z=l*h*p-u*d*c,this._w=l*h*c+u*d*p;break;case"ZXY":this._x=u*h*c-l*d*p,this._y=l*d*c+u*h*p,this._z=l*h*p+u*d*c,this._w=l*h*c-u*d*p;break;case"ZYX":this._x=u*h*c-l*d*p,this._y=l*d*c+u*h*p,this._z=l*h*p-u*d*c,this._w=l*h*c+u*d*p;break;case"YZX":this._x=u*h*c+l*d*p,this._y=l*d*c+u*h*p,this._z=l*h*p-u*d*c,this._w=l*h*c-u*d*p;break;case"XZY":this._x=u*h*c-l*d*p,this._y=l*d*c-u*h*p,this._z=l*h*p+u*d*c,this._w=l*h*c+u*d*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return!0===t&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],a=t[8],s=t[1],n=t[5],o=t[9],l=t[2],h=t[6],c=t[10],u=i+n+c;if(u>0){let e=.5/Math.sqrt(u+1);this._w=.25/e,this._x=(h-o)*e,this._y=(a-l)*e,this._z=(s-r)*e}else if(i>n&&i>c){let e=2*Math.sqrt(1+i-n-c);this._w=(h-o)/e,this._x=.25*e,this._y=(r+s)/e,this._z=(a+l)/e}else if(n>c){let e=2*Math.sqrt(1+n-i-c);this._w=(a-l)/e,this._x=(r+s)/e,this._y=.25*e,this._z=(o+h)/e}else{let e=2*Math.sqrt(1+c-i-n);this._w=(s-r)/e,this._x=(a+l)/e,this._y=(o+h)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0):(this._x=0,this._y=-e.z,this._z=e.y)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x),this._w=i,this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(C(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(0===i)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return 0===e?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,a=e._z,s=e._w,n=t._x,o=t._y,l=t._z,h=t._w;return this._x=i*h+s*n+r*l-a*o,this._y=r*h+s*o+a*n-i*l,this._z=a*h+s*l+i*o-r*n,this._w=s*h-i*n-r*o-a*l,this._onChangeCallback(),this}slerp(e,t){if(0===t)return this;if(1===t)return this.copy(e);let i=this._x,r=this._y,a=this._z,s=this._w,n=s*e._w+i*e._x+r*e._y+a*e._z;if(n<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,n=-n):this.copy(e),n>=1)return this._w=s,this._x=i,this._y=r,this._z=a,this;let o=1-n*n;if(o<=Number.EPSILON){let e=1-t;return this._w=e*s+t*this._w,this._x=e*i+t*this._x,this._y=e*r+t*this._y,this._z=e*a+t*this._z,this.normalize(),this}let l=Math.sqrt(o),h=Math.atan2(l,n),c=Math.sin((1-t)*h)/l,u=Math.sin(t*h)/l;return this._w=s*c+this._w*u,this._x=i*c+this._x*u,this._y=r*c+this._y*u,this._z=a*c+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(a),i*Math.cos(a),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ef{constructor(e=0,t=0,i=0){ef.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return void 0===i&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(e_.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(e_.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*r,this.y=a[1]*t+a[4]*i+a[7]*r,this.z=a[2]*t+a[5]*i+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,a=e.elements,s=1/(a[3]*t+a[7]*i+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*r+a[12])*s,this.y=(a[1]*t+a[5]*i+a[9]*r+a[13])*s,this.z=(a[2]*t+a[6]*i+a[10]*r+a[14])*s,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,a=e.x,s=e.y,n=e.z,o=e.w,l=2*(s*r-n*i),h=2*(n*t-a*r),c=2*(a*i-s*t);return this.x=t+o*l+s*c-n*h,this.y=i+o*h+n*l-a*c,this.z=r+o*c+a*h-s*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r,this.y=a[1]*t+a[5]*i+a[9]*r,this.z=a[2]*t+a[6]*i+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,a=e.z,s=t.x,n=t.y,o=t.z;return this.x=r*o-a*n,this.y=a*s-i*o,this.z=i*n-r*s,this}projectOnVector(e){let t=e.lengthSq();if(0===t)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return eg.copy(this).projectOnVector(e),this.sub(eg)}reflect(e){return this.sub(eg.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());return 0===t?Math.PI/2:Math.acos(C(this.dot(e)/t,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}let eg=new ef,e_=new em;class ev{constructor(e=new ef(1/0,1/0,1/0),t=new ef(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ey.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ey.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=ey.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(void 0!==i){let r=i.getAttribute("position");if(!0===t&&void 0!==r&&!0!==e.isInstancedMesh)for(let t=0,i=r.count;t<i;t++)!0===e.isMesh?e.getVertexPosition(t,ey):ey.fromBufferAttribute(r,t),ey.applyMatrix4(e.matrixWorld),this.expandByPoint(ey);else void 0!==e.boundingBox?(null===e.boundingBox&&e.computeBoundingBox(),eM.copy(e.boundingBox)):(null===i.boundingBox&&i.computeBoundingBox(),eM.copy(i.boundingBox)),eM.applyMatrix4(e.matrixWorld),this.union(eM)}let r=e.children;for(let e=0,i=r.length;e<i;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ey),ey.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(eR),eC.subVectors(this.max,eR),eS.subVectors(e.a,eR),eb.subVectors(e.b,eR),eT.subVectors(e.c,eR),eE.subVectors(eb,eS),eA.subVectors(eT,eb),ew.subVectors(eS,eT);let t=[0,-eE.z,eE.y,0,-eA.z,eA.y,0,-ew.z,ew.y,eE.z,0,-eE.x,eA.z,0,-eA.x,ew.z,0,-ew.x,-eE.y,eE.x,0,-eA.y,eA.x,0,-ew.y,ew.x,0];return!!eI(t,eS,eb,eT,eC)&&!!eI(t=[1,0,0,0,1,0,0,0,1],eS,eb,eT,eC)&&(eL.crossVectors(eE,eA),eI(t=[eL.x,eL.y,eL.z],eS,eb,eT,eC))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ey).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(ey).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(ex[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ex[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ex[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ex[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ex[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ex[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ex[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ex[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ex)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}let ex=[new ef,new ef,new ef,new ef,new ef,new ef,new ef,new ef],ey=new ef,eM=new ev,eS=new ef,eb=new ef,eT=new ef,eE=new ef,eA=new ef,ew=new ef,eR=new ef,eC=new ef,eL=new ef,eP=new ef;function eI(e,t,i,r,a){for(let s=0,n=e.length-3;s<=n;s+=3){eP.fromArray(e,s);let n=a.x*Math.abs(eP.x)+a.y*Math.abs(eP.y)+a.z*Math.abs(eP.z),o=t.dot(eP),l=i.dot(eP),h=r.dot(eP);if(Math.max(-Math.max(o,l,h),Math.min(o,l,h))>n)return!1}return!0}let eU=new ev,eN=new ef,eD=new ef;class eO{constructor(e=new ef,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;void 0!==t?i.copy(t):eU.setFromPoints(e).getCenter(i);let r=0;for(let t=0,a=e.length;t<a;t++)r=Math.max(r,i.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?e.makeEmpty():(e.set(this.center,this.center),e.expandByScalar(this.radius)),e}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;eN.subVectors(e,this.center);let t=eN.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),i=(e-this.radius)*.5;this.center.addScaledVector(eN,i/e),this.radius+=i}return this}union(e){return e.isEmpty()||(this.isEmpty()?this.copy(e):!0===this.center.equals(e.center)?this.radius=Math.max(this.radius,e.radius):(eD.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(eN.copy(e.center).add(eD)),this.expandByPoint(eN.copy(e.center).sub(eD)))),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}let eF=new ef,eB=new ef,ez=new ef,eH=new ef,eG=new ef,ek=new ef,eV=new ef;class eW{constructor(e=new ef,t=new ef(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,eF)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=eF.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(eF.copy(this.origin).addScaledVector(this.direction,t),eF.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){let a,s,n,o;eB.copy(e).add(t).multiplyScalar(.5),ez.copy(t).sub(e).normalize(),eH.copy(this.origin).sub(eB);let l=.5*e.distanceTo(t),h=-this.direction.dot(ez),c=eH.dot(this.direction),u=-eH.dot(ez),d=eH.lengthSq(),p=Math.abs(1-h*h);if(p>0)if(a=h*u-c,s=h*c-u,o=l*p,a>=0)if(s>=-o)if(s<=o){let e=1/p;a*=e,s*=e,n=a*(a+h*s+2*c)+s*(h*a+s+2*u)+d}else n=-(a=Math.max(0,-(h*(s=l)+c)))*a+s*(s+2*u)+d;else n=-(a=Math.max(0,-(h*(s=-l)+c)))*a+s*(s+2*u)+d;else s<=-o?(s=(a=Math.max(0,-(-h*l+c)))>0?-l:Math.min(Math.max(-l,-u),l),n=-a*a+s*(s+2*u)+d):s<=o?(a=0,n=(s=Math.min(Math.max(-l,-u),l))*(s+2*u)+d):(s=(a=Math.max(0,-(h*l+c)))>0?l:Math.min(Math.max(-l,-u),l),n=-a*a+s*(s+2*u)+d);else s=h>0?-l:l,n=-(a=Math.max(0,-(h*s+c)))*a+s*(s+2*u)+d;return i&&i.copy(this.origin).addScaledVector(this.direction,a),r&&r.copy(eB).addScaledVector(ez,s),n}intersectSphere(e,t){eF.subVectors(e.center,this.origin);let i=eF.dot(this.direction),r=eF.dot(eF)-i*i,a=e.radius*e.radius;if(r>a)return null;let s=Math.sqrt(a-r),n=i-s,o=i+s;return o<0?null:n<0?this.at(o,t):this.at(n,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(0===t)return 0===e.distanceToPoint(this.origin)?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return null===i?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return 0===t||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,a,s,n,o,l=1/this.direction.x,h=1/this.direction.y,c=1/this.direction.z,u=this.origin;return l>=0?(i=(e.min.x-u.x)*l,r=(e.max.x-u.x)*l):(i=(e.max.x-u.x)*l,r=(e.min.x-u.x)*l),h>=0?(a=(e.min.y-u.y)*h,s=(e.max.y-u.y)*h):(a=(e.max.y-u.y)*h,s=(e.min.y-u.y)*h),i>s||a>r||((a>i||isNaN(i))&&(i=a),(s<r||isNaN(r))&&(r=s),c>=0?(n=(e.min.z-u.z)*c,o=(e.max.z-u.z)*c):(n=(e.max.z-u.z)*c,o=(e.min.z-u.z)*c),i>o||n>r)||((n>i||i!=i)&&(i=n),(o<r||r!=r)&&(r=o),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return null!==this.intersectBox(e,eF)}intersectTriangle(e,t,i,r,a){eG.subVectors(t,e),ek.subVectors(i,e),eV.crossVectors(eG,ek);let s=this.direction.dot(eV),n;if(s>0){if(r)return null;n=1}else{if(!(s<0))return null;n=-1,s=-s}eH.subVectors(this.origin,e);let o=n*this.direction.dot(ek.crossVectors(eH,ek));if(o<0)return null;let l=n*this.direction.dot(eG.cross(eH));if(l<0||o+l>s)return null;let h=-n*eH.dot(eV);return h<0?null:this.at(h/s,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class eX{constructor(e,t,i,r,a,s,n,o,l,h,c,u,d,p,m,f){eX.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],void 0!==e&&this.set(e,t,i,r,a,s,n,o,l,h,c,u,d,p,m,f)}set(e,t,i,r,a,s,n,o,l,h,c,u,d,p,m,f){let g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=r,g[1]=a,g[5]=s,g[9]=n,g[13]=o,g[2]=l,g[6]=h,g[10]=c,g[14]=u,g[3]=d,g[7]=p,g[11]=m,g[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new eX().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,r=1/ej.setFromMatrixColumn(e,0).length(),a=1/ej.setFromMatrixColumn(e,1).length(),s=1/ej.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,a=e.z,s=Math.cos(i),n=Math.sin(i),o=Math.cos(r),l=Math.sin(r),h=Math.cos(a),c=Math.sin(a);if("XYZ"===e.order){let e=s*h,i=s*c,r=n*h,a=n*c;t[0]=o*h,t[4]=-o*c,t[8]=l,t[1]=i+r*l,t[5]=e-a*l,t[9]=-n*o,t[2]=a-e*l,t[6]=r+i*l,t[10]=s*o}else if("YXZ"===e.order){let e=o*h,i=o*c,r=l*h,a=l*c;t[0]=e+a*n,t[4]=r*n-i,t[8]=s*l,t[1]=s*c,t[5]=s*h,t[9]=-n,t[2]=i*n-r,t[6]=a+e*n,t[10]=s*o}else if("ZXY"===e.order){let e=o*h,i=o*c,r=l*h,a=l*c;t[0]=e-a*n,t[4]=-s*c,t[8]=r+i*n,t[1]=i+r*n,t[5]=s*h,t[9]=a-e*n,t[2]=-s*l,t[6]=n,t[10]=s*o}else if("ZYX"===e.order){let e=s*h,i=s*c,r=n*h,a=n*c;t[0]=o*h,t[4]=r*l-i,t[8]=e*l+a,t[1]=o*c,t[5]=a*l+e,t[9]=i*l-r,t[2]=-l,t[6]=n*o,t[10]=s*o}else if("YZX"===e.order){let e=s*o,i=s*l,r=n*o,a=n*l;t[0]=o*h,t[4]=a-e*c,t[8]=r*c+i,t[1]=c,t[5]=s*h,t[9]=-n*h,t[2]=-l*h,t[6]=i*c+r,t[10]=e-a*c}else if("XZY"===e.order){let e=s*o,i=s*l,r=n*o,a=n*l;t[0]=o*h,t[4]=-c,t[8]=l*h,t[1]=e*c+a,t[5]=s*h,t[9]=i*c-r,t[2]=r*c-i,t[6]=n*h,t[10]=a*c+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(eY,e,eZ)}lookAt(e,t,i){let r=this.elements;return eQ.subVectors(e,t),0===eQ.lengthSq()&&(eQ.z=1),eQ.normalize(),eK.crossVectors(i,eQ),0===eK.lengthSq()&&(1===Math.abs(i.z)?eQ.x+=1e-4:eQ.z+=1e-4,eQ.normalize(),eK.crossVectors(i,eQ)),eK.normalize(),eJ.crossVectors(eQ,eK),r[0]=eK.x,r[4]=eJ.x,r[8]=eQ.x,r[1]=eK.y,r[5]=eJ.y,r[9]=eQ.y,r[2]=eK.z,r[6]=eJ.z,r[10]=eQ.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,a=this.elements,s=i[0],n=i[4],o=i[8],l=i[12],h=i[1],c=i[5],u=i[9],d=i[13],p=i[2],m=i[6],f=i[10],g=i[14],_=i[3],v=i[7],x=i[11],y=i[15],M=r[0],S=r[4],b=r[8],T=r[12],E=r[1],A=r[5],w=r[9],R=r[13],C=r[2],L=r[6],P=r[10],I=r[14],U=r[3],N=r[7],D=r[11],O=r[15];return a[0]=s*M+n*E+o*C+l*U,a[4]=s*S+n*A+o*L+l*N,a[8]=s*b+n*w+o*P+l*D,a[12]=s*T+n*R+o*I+l*O,a[1]=h*M+c*E+u*C+d*U,a[5]=h*S+c*A+u*L+d*N,a[9]=h*b+c*w+u*P+d*D,a[13]=h*T+c*R+u*I+d*O,a[2]=p*M+m*E+f*C+g*U,a[6]=p*S+m*A+f*L+g*N,a[10]=p*b+m*w+f*P+g*D,a[14]=p*T+m*R+f*I+g*O,a[3]=_*M+v*E+x*C+y*U,a[7]=_*S+v*A+x*L+y*N,a[11]=_*b+v*w+x*P+y*D,a[15]=_*T+v*R+x*I+y*O,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],a=e[12],s=e[1],n=e[5],o=e[9],l=e[13],h=e[2],c=e[6],u=e[10],d=e[14];return e[3]*(a*o*c-r*l*c-a*n*u+i*l*u+r*n*d-i*o*d)+e[7]*(t*o*d-t*l*u+a*s*u-r*s*d+r*l*h-a*o*h)+e[11]*(t*l*c-t*n*d-a*s*c+i*s*d+a*n*h-i*l*h)+e[15]*(-r*n*h-t*o*c+t*n*u+r*s*c-i*s*u+i*o*h)}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],s=e[4],n=e[5],o=e[6],l=e[7],h=e[8],c=e[9],u=e[10],d=e[11],p=e[12],m=e[13],f=e[14],g=e[15],_=c*f*l-m*u*l+m*o*d-n*f*d-c*o*g+n*u*g,v=p*u*l-h*f*l-p*o*d+s*f*d+h*o*g-s*u*g,x=h*m*l-p*c*l+p*n*d-s*m*d-h*n*g+s*c*g,y=p*c*o-h*m*o-p*n*u+s*m*u+h*n*f-s*c*f,M=t*_+i*v+r*x+a*y;if(0===M)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/M;return e[0]=_*S,e[1]=(m*u*a-c*f*a-m*r*d+i*f*d+c*r*g-i*u*g)*S,e[2]=(n*f*a-m*o*a+m*r*l-i*f*l-n*r*g+i*o*g)*S,e[3]=(c*o*a-n*u*a-c*r*l+i*u*l+n*r*d-i*o*d)*S,e[4]=v*S,e[5]=(h*f*a-p*u*a+p*r*d-t*f*d-h*r*g+t*u*g)*S,e[6]=(p*o*a-s*f*a-p*r*l+t*f*l+s*r*g-t*o*g)*S,e[7]=(s*u*a-h*o*a+h*r*l-t*u*l-s*r*d+t*o*d)*S,e[8]=x*S,e[9]=(p*c*a-h*m*a-p*i*d+t*m*d+h*i*g-t*c*g)*S,e[10]=(s*m*a-p*n*a+p*i*l-t*m*l-s*i*g+t*n*g)*S,e[11]=(h*n*a-s*c*a-h*i*l+t*c*l+s*i*d-t*n*d)*S,e[12]=y*S,e[13]=(h*m*r-p*c*r+p*i*u-t*m*u-h*i*f+t*c*f)*S,e[14]=(p*n*r-s*m*r-p*i*o+t*m*o+s*i*f-t*n*f)*S,e[15]=(s*c*r-h*n*r+h*i*o-t*c*o-s*i*u+t*n*u)*S,this}scale(e){let t=this.elements,i=e.x,r=e.y,a=e.z;return t[0]*=i,t[4]*=r,t[8]*=a,t[1]*=i,t[5]*=r,t[9]*=a,t[2]*=i,t[6]*=r,t[10]*=a,t[3]*=i,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){let e=this.elements;return Math.sqrt(Math.max(e[0]*e[0]+e[1]*e[1]+e[2]*e[2],e[4]*e[4]+e[5]*e[5]+e[6]*e[6],e[8]*e[8]+e[9]*e[9]+e[10]*e[10]))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),a=1-i,s=e.x,n=e.y,o=e.z,l=a*s,h=a*n;return this.set(l*s+i,l*n-r*o,l*o+r*n,0,l*n+r*o,h*n+i,h*o-r*s,0,l*o-r*n,h*o+r*s,a*o*o+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,a,s){return this.set(1,i,a,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,a=t._x,s=t._y,n=t._z,o=t._w,l=a+a,h=s+s,c=n+n,u=a*l,d=a*h,p=a*c,m=s*h,f=s*c,g=n*c,_=o*l,v=o*h,x=o*c,y=i.x,M=i.y,S=i.z;return r[0]=(1-(m+g))*y,r[1]=(d+x)*y,r[2]=(p-v)*y,r[3]=0,r[4]=(d-x)*M,r[5]=(1-(u+g))*M,r[6]=(f+_)*M,r[7]=0,r[8]=(p+v)*S,r[9]=(f-_)*S,r[10]=(1-(u+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements,a=ej.set(r[0],r[1],r[2]).length(),s=ej.set(r[4],r[5],r[6]).length(),n=ej.set(r[8],r[9],r[10]).length();0>this.determinant()&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],eq.copy(this);let o=1/a,l=1/s,h=1/n;return eq.elements[0]*=o,eq.elements[1]*=o,eq.elements[2]*=o,eq.elements[4]*=l,eq.elements[5]*=l,eq.elements[6]*=l,eq.elements[8]*=h,eq.elements[9]*=h,eq.elements[10]*=h,t.setFromRotationMatrix(eq),i.x=a,i.y=s,i.z=n,this}makePerspective(e,t,i,r,a,s,n=2e3){let o,l,h=this.elements;if(2e3===n)o=-(s+a)/(s-a),l=-2*s*a/(s-a);else if(2001===n)o=-s/(s-a),l=-s*a/(s-a);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+n);return h[0]=2*a/(t-e),h[4]=0,h[8]=(t+e)/(t-e),h[12]=0,h[1]=0,h[5]=2*a/(i-r),h[9]=(i+r)/(i-r),h[13]=0,h[2]=0,h[6]=0,h[10]=o,h[14]=l,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,i,r,a,s,n=2e3){let o,l,h=this.elements,c=1/(t-e),u=1/(i-r),d=1/(s-a);if(2e3===n)o=(s+a)*d,l=-2*d;else if(2001===n)o=a*d,l=-1*d;else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+n);return h[0]=2*c,h[4]=0,h[8]=0,h[12]=-((t+e)*c),h[1]=0,h[5]=2*u,h[9]=0,h[13]=-((i+r)*u),h[2]=0,h[6]=0,h[10]=l,h[14]=-o,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let e=0;e<16;e++)if(t[e]!==i[e])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}let ej=new ef,eq=new eX,eY=new ef(0,0,0),eZ=new ef(1,1,1),eK=new ef,eJ=new ef,eQ=new ef,e$=new eX,e0=new em;class e1{constructor(e=0,t=0,i=0,r=e1.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let r=e.elements,a=r[0],s=r[4],n=r[8],o=r[1],l=r[5],h=r[9],c=r[2],u=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(C(n,-1,1)),.9999999>Math.abs(n)?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-C(h,-1,1)),.9999999>Math.abs(h)?(this._y=Math.atan2(n,d),this._z=Math.atan2(o,l)):(this._y=Math.atan2(-c,a),this._z=0);break;case"ZXY":this._x=Math.asin(C(u,-1,1)),.9999999>Math.abs(u)?(this._y=Math.atan2(-c,d),this._z=Math.atan2(-s,l)):(this._y=0,this._z=Math.atan2(o,a));break;case"ZYX":this._y=Math.asin(-C(c,-1,1)),.9999999>Math.abs(c)?(this._x=Math.atan2(u,d),this._z=Math.atan2(o,a)):(this._x=0,this._z=Math.atan2(-s,l));break;case"YZX":this._z=Math.asin(C(o,-1,1)),.9999999>Math.abs(o)?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-c,a)):(this._x=0,this._y=Math.atan2(n,d));break;case"XZY":this._z=Math.asin(-C(s,-1,1)),.9999999>Math.abs(s)?(this._x=Math.atan2(u,l),this._y=Math.atan2(n,a)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,!0===i&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return e$.makeRotationFromQuaternion(e),this.setFromRotationMatrix(e$,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return e0.setFromEuler(this),this.setFromQuaternion(e0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],void 0!==e[3]&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}e1.DEFAULT_ORDER="XYZ";class e2{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!=0}isEnabled(e){return(this.mask&1<<e)!=0}}let e3=0,e4=new ef,e5=new em,e6=new eX,e8=new ef,e9=new ef,e7=new ef,te=new em,tt=new ef(1,0,0),ti=new ef(0,1,0),tr=new ef(0,0,1),ta={type:"added"},ts={type:"removed"};class tn extends b{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:e3++}),this.uuid=R(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=tn.DEFAULT_UP.clone();let e=new ef,t=new e1,i=new em,r=new ef(1,1,1);t._onChange(function(){i.setFromEuler(t,!1)}),i._onChange(function(){t.setFromQuaternion(i,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new eX},normalMatrix:{value:new B}}),this.matrix=new eX,this.matrixWorld=new eX,this.matrixAutoUpdate=tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new e2,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return e5.setFromAxisAngle(e,t),this.quaternion.multiply(e5),this}rotateOnWorldAxis(e,t){return e5.setFromAxisAngle(e,t),this.quaternion.premultiply(e5),this}rotateX(e){return this.rotateOnAxis(tt,e)}rotateY(e){return this.rotateOnAxis(ti,e)}rotateZ(e){return this.rotateOnAxis(tr,e)}translateOnAxis(e,t){return e4.copy(e).applyQuaternion(this.quaternion),this.position.add(e4.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(tt,e)}translateY(e){return this.translateOnAxis(ti,e)}translateZ(e){return this.translateOnAxis(tr,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(e6.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?e8.copy(e):e8.set(e,t,i);let r=this.parent;this.updateWorldMatrix(!0,!1),e9.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?e6.lookAt(e9,e8,this.up):e6.lookAt(e8,e9,this.up),this.quaternion.setFromRotationMatrix(e6),r&&(e6.extractRotation(r.matrixWorld),e5.setFromRotationMatrix(e6),this.quaternion.premultiply(e5.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?console.error("THREE.Object3D.add: object can't be added as a child of itself.",e):e&&e.isObject3D?(null!==e.parent&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(ta)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return -1!==t&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ts)),this}removeFromParent(){let e=this.parent;return null!==e&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),e6.copy(this.matrixWorld).invert(),null!==e.parent&&(e.parent.updateWorldMatrix(!0,!1),e6.multiply(e.parent.matrixWorld)),e.applyMatrix4(e6),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){let r=this.children[i].getObjectByProperty(e,t);if(void 0!==r)return r}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(e9,e,e7),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(e9,te,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(!1===this.visible)return;e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;null!==t&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(null===this.parent?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,r=t.length;i<r;i++){let r=t[i];(!0===r.matrixWorldAutoUpdate||!0===e)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(!0===e&&null!==i&&!0===i.matrixWorldAutoUpdate&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),null===this.parent?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),!0===t){let e=this.children;for(let t=0,i=e.length;t<i;t++){let i=e[t];!0===i.matrixWorldAutoUpdate&&i.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=void 0===e||"string"==typeof e,i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let r={};function a(t,i){return void 0===t[i.uuid]&&(t[i.uuid]=i.toJSON(e)),i.uuid}if(r.uuid=this.uuid,r.type=this.type,""!==this.name&&(r.name=this.name),!0===this.castShadow&&(r.castShadow=!0),!0===this.receiveShadow&&(r.receiveShadow=!0),!1===this.visible&&(r.visible=!1),!1===this.frustumCulled&&(r.frustumCulled=!1),0!==this.renderOrder&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),!1===this.matrixAutoUpdate&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),null!==this.instanceColor&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(e=>({boxInitialized:e.boxInitialized,boxMin:e.box.min.toArray(),boxMax:e.box.max.toArray(),sphereInitialized:e.sphereInitialized,sphereRadius:e.sphere.radius,sphereCenter:e.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),null!==this.boundingSphere&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),null!==this.boundingBox&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()})),this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&!0!==this.environment.isRenderTargetTexture&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);let t=this.geometry.parameters;if(void 0!==t&&void 0!==t.shapes){let i=t.shapes;if(Array.isArray(i))for(let t=0,r=i.length;t<r;t++){let r=i[t];a(e.shapes,r)}else a(e.shapes,i)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),void 0!==this.skeleton&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),void 0!==this.material)if(Array.isArray(this.material)){let t=[];for(let i=0,r=this.material.length;i<r;i++)t.push(a(e.materials,this.material[i]));r.material=t}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let i=this.animations[t];r.animations.push(a(e.animations,i))}}if(t){let t=s(e.geometries),r=s(e.materials),a=s(e.textures),n=s(e.images),o=s(e.shapes),l=s(e.skeletons),h=s(e.animations),c=s(e.nodes);t.length>0&&(i.geometries=t),r.length>0&&(i.materials=r),a.length>0&&(i.textures=a),n.length>0&&(i.images=n),o.length>0&&(i.shapes=o),l.length>0&&(i.skeletons=l),h.length>0&&(i.animations=h),c.length>0&&(i.nodes=c)}return i.object=r,i;function s(e){let t=[];for(let i in e){let r=e[i];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),!0===t)for(let t=0;t<e.children.length;t++){let i=e.children[t];this.add(i.clone())}return this}}tn.DEFAULT_UP=new ef(0,1,0),tn.DEFAULT_MATRIX_AUTO_UPDATE=!0,tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;let to=new ef,tl=new ef,th=new ef,tc=new ef,tu=new ef,td=new ef,tp=new ef,tm=new ef,tf=new ef,tg=new ef,t_=!1;class tv{constructor(e=new ef,t=new ef,i=new ef){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),to.subVectors(e,t),r.cross(to);let a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,i,r,a){to.subVectors(r,t),tl.subVectors(i,t),th.subVectors(e,t);let s=to.dot(to),n=to.dot(tl),o=to.dot(th),l=tl.dot(tl),h=tl.dot(th),c=s*l-n*n;if(0===c)return a.set(0,0,0),null;let u=1/c,d=(l*o-n*h)*u,p=(s*h-n*o)*u;return a.set(1-d-p,p,d)}static containsPoint(e,t,i,r){return null!==this.getBarycoord(e,t,i,r,tc)&&tc.x>=0&&tc.y>=0&&tc.x+tc.y<=1}static getUV(e,t,i,r,a,s,n,o){return!1===t_&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),t_=!0),this.getInterpolation(e,t,i,r,a,s,n,o)}static getInterpolation(e,t,i,r,a,s,n,o){return null===this.getBarycoord(e,t,i,r,tc)?(o.x=0,o.y=0,"z"in o&&(o.z=0),"w"in o&&(o.w=0),null):(o.setScalar(0),o.addScaledVector(a,tc.x),o.addScaledVector(s,tc.y),o.addScaledVector(n,tc.z),o)}static isFrontFacing(e,t,i,r){return to.subVectors(i,t),tl.subVectors(e,t),0>to.cross(tl).dot(r)}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return to.subVectors(this.c,this.b),tl.subVectors(this.a,this.b),.5*to.cross(tl).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return tv.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return tv.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,a){return!1===t_&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),t_=!0),tv.getInterpolation(e,this.a,this.b,this.c,t,i,r,a)}getInterpolation(e,t,i,r,a){return tv.getInterpolation(e,this.a,this.b,this.c,t,i,r,a)}containsPoint(e){return tv.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return tv.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i,r,a=this.a,s=this.b,n=this.c;tu.subVectors(s,a),td.subVectors(n,a),tm.subVectors(e,a);let o=tu.dot(tm),l=td.dot(tm);if(o<=0&&l<=0)return t.copy(a);tf.subVectors(e,s);let h=tu.dot(tf),c=td.dot(tf);if(h>=0&&c<=h)return t.copy(s);let u=o*c-h*l;if(u<=0&&o>=0&&h<=0)return i=o/(o-h),t.copy(a).addScaledVector(tu,i);tg.subVectors(e,n);let d=tu.dot(tg),p=td.dot(tg);if(p>=0&&d<=p)return t.copy(n);let m=d*l-o*p;if(m<=0&&l>=0&&p<=0)return r=l/(l-p),t.copy(a).addScaledVector(td,r);let f=h*p-d*c;if(f<=0&&c-h>=0&&d-p>=0)return tp.subVectors(n,s),r=(c-h)/(c-h+(d-p)),t.copy(s).addScaledVector(tp,r);let g=1/(f+m+u);return i=m*g,r=u*g,t.copy(a).addScaledVector(tu,i).addScaledVector(td,r)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let tx={aliceblue:0xf0f8ff,antiquewhite:0xfaebd7,aqua:65535,aquamarine:8388564,azure:0xf0ffff,beige:0xf5f5dc,bisque:0xffe4c4,black:0,blanchedalmond:0xffebcd,blue:255,blueviolet:9055202,brown:0xa52a2a,burlywood:0xdeb887,cadetblue:6266528,chartreuse:8388352,chocolate:0xd2691e,coral:0xff7f50,cornflowerblue:6591981,cornsilk:0xfff8dc,crimson:0xdc143c,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:0xb8860b,darkgray:0xa9a9a9,darkgreen:25600,darkgrey:0xa9a9a9,darkkhaki:0xbdb76b,darkmagenta:9109643,darkolivegreen:5597999,darkorange:0xff8c00,darkorchid:0x9932cc,darkred:9109504,darksalmon:0xe9967a,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:0xff1493,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:0xb22222,floralwhite:0xfffaf0,forestgreen:2263842,fuchsia:0xff00ff,gainsboro:0xdcdcdc,ghostwhite:0xf8f8ff,gold:0xffd700,goldenrod:0xdaa520,gray:8421504,green:32768,greenyellow:0xadff2f,grey:8421504,honeydew:0xf0fff0,hotpink:0xff69b4,indianred:0xcd5c5c,indigo:4915330,ivory:0xfffff0,khaki:0xf0e68c,lavender:0xe6e6fa,lavenderblush:0xfff0f5,lawngreen:8190976,lemonchiffon:0xfffacd,lightblue:0xadd8e6,lightcoral:0xf08080,lightcyan:0xe0ffff,lightgoldenrodyellow:0xfafad2,lightgray:0xd3d3d3,lightgreen:9498256,lightgrey:0xd3d3d3,lightpink:0xffb6c1,lightsalmon:0xffa07a,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:0xb0c4de,lightyellow:0xffffe0,lime:65280,limegreen:3329330,linen:0xfaf0e6,magenta:0xff00ff,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:0xba55d3,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:0xc71585,midnightblue:1644912,mintcream:0xf5fffa,mistyrose:0xffe4e1,moccasin:0xffe4b5,navajowhite:0xffdead,navy:128,oldlace:0xfdf5e6,olive:8421376,olivedrab:7048739,orange:0xffa500,orangered:0xff4500,orchid:0xda70d6,palegoldenrod:0xeee8aa,palegreen:0x98fb98,paleturquoise:0xafeeee,palevioletred:0xdb7093,papayawhip:0xffefd5,peachpuff:0xffdab9,peru:0xcd853f,pink:0xffc0cb,plum:0xdda0dd,powderblue:0xb0e0e6,purple:8388736,rebeccapurple:6697881,red:0xff0000,rosybrown:0xbc8f8f,royalblue:4286945,saddlebrown:9127187,salmon:0xfa8072,sandybrown:0xf4a460,seagreen:3050327,seashell:0xfff5ee,sienna:0xa0522d,silver:0xc0c0c0,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:0xfffafa,springgreen:65407,steelblue:4620980,tan:0xd2b48c,teal:32896,thistle:0xd8bfd8,tomato:0xff6347,turquoise:4251856,violet:0xee82ee,wheat:0xf5deb3,white:0xffffff,whitesmoke:0xf5f5f5,yellow:0xffff00,yellowgreen:0x9acd32},ty={h:0,s:0,l:0},tM={h:0,s:0,l:0};function tS(e,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+(t-e)*6*i:i<.5?t:i<2/3?e+(t-e)*6*(2/3-i):e}class tb{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){return void 0===t&&void 0===i?e&&e.isColor?this.copy(e):"number"==typeof e?this.setHex(e):"string"==typeof e&&this.setStyle(e):this.setRGB(e,t,i),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=f){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,J.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=J.workingColorSpace){return this.r=e,this.g=t,this.b=i,J.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=J.workingColorSpace){if(e=L(e,1),t=C(t,0,1),i=C(i,0,1),0===t)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=tS(a,r,e+1/3),this.g=tS(a,r,e),this.b=tS(a,r,e-1/3)}return J.toWorkingColorSpace(this,r),this}setStyle(e,t=f){let i;function r(t){void 0!==t&&1>parseFloat(t)&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let a,s=i[1],n=i[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(n))return r(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(n))return r(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(n))return r(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],a=r.length;if(3===a)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(6===a)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=f){let i=tx[e.toLowerCase()];return void 0!==i?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Q(e.r),this.g=Q(e.g),this.b=Q(e.b),this}copyLinearToSRGB(e){return this.r=$(e.r),this.g=$(e.g),this.b=$(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=f){return J.fromWorkingColorSpace(tT.copy(this),e),65536*Math.round(C(255*tT.r,0,255))+256*Math.round(C(255*tT.g,0,255))+Math.round(C(255*tT.b,0,255))}getHexString(e=f){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=J.workingColorSpace){let i,r;J.fromWorkingColorSpace(tT.copy(this),t);let a=tT.r,s=tT.g,n=tT.b,o=Math.max(a,s,n),l=Math.min(a,s,n),h=(l+o)/2;if(l===o)i=0,r=0;else{let e=o-l;switch(r=h<=.5?e/(o+l):e/(2-o-l),o){case a:i=(s-n)/e+6*(s<n);break;case s:i=(n-a)/e+2;break;case n:i=(a-s)/e+4}i/=6}return e.h=i,e.s=r,e.l=h,e}getRGB(e,t=J.workingColorSpace){return J.fromWorkingColorSpace(tT.copy(this),t),e.r=tT.r,e.g=tT.g,e.b=tT.b,e}getStyle(e=f){J.fromWorkingColorSpace(tT.copy(this),e);let t=tT.r,i=tT.g,r=tT.b;return e!==f?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*i)},${Math.round(255*r)})`}offsetHSL(e,t,i){return this.getHSL(ty),this.setHSL(ty.h+e,ty.s+t,ty.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ty),e.getHSL(tM);let i=P(ty.h,tM.h,t),r=P(ty.s,tM.s,t),a=P(ty.l,tM.l,t);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*r,this.g=a[1]*t+a[4]*i+a[7]*r,this.b=a[2]*t+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}let tT=new tb;tb.NAMES=tx;let tE=0;class tA extends b{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tE++}),this.uuid=R(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tb(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(void 0!==e)for(let t in e){let i=e[t];if(void 0===i){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(void 0===r){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=void 0===e||"string"==typeof e;t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};function r(e){let t=[];for(let i in e){let r=e[i];delete r.metadata,t.push(r)}return t}if(i.uuid=this.uuid,i.type=this.type,""!==this.name&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),void 0!==this.roughness&&(i.roughness=this.roughness),void 0!==this.metalness&&(i.metalness=this.metalness),void 0!==this.sheen&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),void 0!==this.sheenRoughness&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&1!==this.emissiveIntensity&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),void 0!==this.specularIntensity&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),void 0!==this.shininess&&(i.shininess=this.shininess),void 0!==this.clearcoat&&(i.clearcoat=this.clearcoat),void 0!==this.clearcoatRoughness&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),void 0!==this.iridescence&&(i.iridescence=this.iridescence),void 0!==this.iridescenceIOR&&(i.iridescenceIOR=this.iridescenceIOR),void 0!==this.iridescenceThicknessRange&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),void 0!==this.anisotropy&&(i.anisotropy=this.anisotropy),void 0!==this.anisotropyRotation&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,void 0!==this.combine&&(i.combine=this.combine)),void 0!==this.envMapIntensity&&(i.envMapIntensity=this.envMapIntensity),void 0!==this.reflectivity&&(i.reflectivity=this.reflectivity),void 0!==this.refractionRatio&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),void 0!==this.transmission&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),void 0!==this.thickness&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),void 0!==this.attenuationDistance&&1/0!==this.attenuationDistance&&(i.attenuationDistance=this.attenuationDistance),void 0!==this.attenuationColor&&(i.attenuationColor=this.attenuationColor.getHex()),void 0!==this.size&&(i.size=this.size),null!==this.shadowSide&&(i.shadowSide=this.shadowSide),void 0!==this.sizeAttenuation&&(i.sizeAttenuation=this.sizeAttenuation),1!==this.blending&&(i.blending=this.blending),0!==this.side&&(i.side=this.side),!0===this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),!0===this.transparent&&(i.transparent=!0),204!==this.blendSrc&&(i.blendSrc=this.blendSrc),205!==this.blendDst&&(i.blendDst=this.blendDst),100!==this.blendEquation&&(i.blendEquation=this.blendEquation),null!==this.blendSrcAlpha&&(i.blendSrcAlpha=this.blendSrcAlpha),null!==this.blendDstAlpha&&(i.blendDstAlpha=this.blendDstAlpha),null!==this.blendEquationAlpha&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),0!==this.blendAlpha&&(i.blendAlpha=this.blendAlpha),3!==this.depthFunc&&(i.depthFunc=this.depthFunc),!1===this.depthTest&&(i.depthTest=this.depthTest),!1===this.depthWrite&&(i.depthWrite=this.depthWrite),!1===this.colorWrite&&(i.colorWrite=this.colorWrite),255!==this.stencilWriteMask&&(i.stencilWriteMask=this.stencilWriteMask),519!==this.stencilFunc&&(i.stencilFunc=this.stencilFunc),0!==this.stencilRef&&(i.stencilRef=this.stencilRef),255!==this.stencilFuncMask&&(i.stencilFuncMask=this.stencilFuncMask),7680!==this.stencilFail&&(i.stencilFail=this.stencilFail),7680!==this.stencilZFail&&(i.stencilZFail=this.stencilZFail),7680!==this.stencilZPass&&(i.stencilZPass=this.stencilZPass),!0===this.stencilWrite&&(i.stencilWrite=this.stencilWrite),void 0!==this.rotation&&0!==this.rotation&&(i.rotation=this.rotation),!0===this.polygonOffset&&(i.polygonOffset=!0),0!==this.polygonOffsetFactor&&(i.polygonOffsetFactor=this.polygonOffsetFactor),0!==this.polygonOffsetUnits&&(i.polygonOffsetUnits=this.polygonOffsetUnits),void 0!==this.linewidth&&1!==this.linewidth&&(i.linewidth=this.linewidth),void 0!==this.dashSize&&(i.dashSize=this.dashSize),void 0!==this.gapSize&&(i.gapSize=this.gapSize),void 0!==this.scale&&(i.scale=this.scale),!0===this.dithering&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),!0===this.alphaHash&&(i.alphaHash=!0),!0===this.alphaToCoverage&&(i.alphaToCoverage=!0),!0===this.premultipliedAlpha&&(i.premultipliedAlpha=!0),!0===this.forceSinglePass&&(i.forceSinglePass=!0),!0===this.wireframe&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),"round"!==this.wireframeLinecap&&(i.wireframeLinecap=this.wireframeLinecap),"round"!==this.wireframeLinejoin&&(i.wireframeLinejoin=this.wireframeLinejoin),!0===this.flatShading&&(i.flatShading=!0),!1===this.visible&&(i.visible=!1),!1===this.toneMapped&&(i.toneMapped=!1),!1===this.fog&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData),t){let t=r(e.textures),a=r(e.images);t.length>0&&(i.textures=t),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(null!==t){let e=t.length;i=Array(e);for(let r=0;r!==e;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){!0===e&&this.version++}}class tw extends tA{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tb(0xffffff),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}let tR=function(){let e=new ArrayBuffer(4),t=new Float32Array(e),i=new Uint32Array(e),r=new Uint32Array(512),a=new Uint32Array(512);for(let e=0;e<256;++e){let t=e-127;t<-27?(r[e]=0,r[256|e]=32768,a[e]=24,a[256|e]=24):t<-14?(r[e]=1024>>-t-14,r[256|e]=1024>>-t-14|32768,a[e]=-t-1,a[256|e]=-t-1):t<=15?(r[e]=t+15<<10,r[256|e]=t+15<<10|32768,a[e]=13,a[256|e]=13):t<128?(r[e]=31744,r[256|e]=64512,a[e]=24,a[256|e]=24):(r[e]=31744,r[256|e]=64512,a[e]=13,a[256|e]=13)}let s=new Uint32Array(2048),n=new Uint32Array(64),o=new Uint32Array(64);for(let e=1;e<1024;++e){let t=e<<13,i=0;for(;!(8388608&t);)t<<=1,i-=8388608;t&=-8388609,i+=0x38800000,s[e]=t|i}for(let e=1024;e<2048;++e)s[e]=0x38000000+(e-1024<<13);for(let e=1;e<31;++e)n[e]=e<<23;n[31]=0x47800000,n[32]=0x80000000;for(let e=33;e<63;++e)n[e]=0x80000000+(e-32<<23);n[63]=0xc7800000;for(let e=1;e<64;++e)32!==e&&(o[e]=1024);return{floatView:t,uint32View:i,baseTable:r,shiftTable:a,mantissaTable:s,exponentTable:n,offsetTable:o}}();function tC(e){Math.abs(e)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),e=C(e,-65504,65504),tR.floatView[0]=e;let t=tR.uint32View[0],i=t>>23&511;return tR.baseTable[i]+((8388607&t)>>tR.shiftTable[i])}function tL(e){let t=e>>10;return tR.uint32View[0]=tR.mantissaTable[tR.offsetTable[t]+(1023&e)]+tR.exponentTable[t],tR.floatView[0]}let tP=new ef,tI=new F;class tU{constructor(e,t,i=!1){if(Array.isArray(e))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=void 0!==e?e.length/t:0,this.normalized=i,this.usage=35044,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(e){!0===e&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(2===this.itemSize)for(let t=0,i=this.count;t<i;t++)tI.fromBufferAttribute(this,t),tI.applyMatrix3(e),this.setXY(t,tI.x,tI.y);else if(3===this.itemSize)for(let t=0,i=this.count;t<i;t++)tP.fromBufferAttribute(this,t),tP.applyMatrix3(e),this.setXYZ(t,tP.x,tP.y,tP.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)tP.fromBufferAttribute(this,t),tP.applyMatrix4(e),this.setXYZ(t,tP.x,tP.y,tP.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)tP.fromBufferAttribute(this,t),tP.applyNormalMatrix(e),this.setXYZ(t,tP.x,tP.y,tP.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)tP.fromBufferAttribute(this,t),tP.transformDirection(e),this.setXYZ(t,tP.x,tP.y,tP.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=N(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=D(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=N(t,this.array)),t}setX(e,t){return this.normalized&&(t=D(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=N(t,this.array)),t}setY(e,t){return this.normalized&&(t=D(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=N(t,this.array)),t}setZ(e,t){return this.normalized&&(t=D(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=N(t,this.array)),t}setW(e,t){return this.normalized&&(t=D(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=D(t,this.array),i=D(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=D(t,this.array),i=D(i,this.array),r=D(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=D(t,this.array),i=D(i,this.array),r=D(r,this.array),a=D(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return""!==this.name&&(e.name=this.name),35044!==this.usage&&(e.usage=this.usage),e}}class tN extends tU{constructor(e,t,i){super(new Int8Array(e),t,i)}}class tD extends tU{constructor(e,t,i){super(new Uint8Array(e),t,i)}}class tO extends tU{constructor(e,t,i){super(new Uint8ClampedArray(e),t,i)}}class tF extends tU{constructor(e,t,i){super(new Int16Array(e),t,i)}}class tB extends tU{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class tz extends tU{constructor(e,t,i){super(new Int32Array(e),t,i)}}class tH extends tU{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class tG extends tU{constructor(e,t,i){super(new Uint16Array(e),t,i),this.isFloat16BufferAttribute=!0}getX(e){let t=tL(this.array[e*this.itemSize]);return this.normalized&&(t=N(t,this.array)),t}setX(e,t){return this.normalized&&(t=D(t,this.array)),this.array[e*this.itemSize]=tC(t),this}getY(e){let t=tL(this.array[e*this.itemSize+1]);return this.normalized&&(t=N(t,this.array)),t}setY(e,t){return this.normalized&&(t=D(t,this.array)),this.array[e*this.itemSize+1]=tC(t),this}getZ(e){let t=tL(this.array[e*this.itemSize+2]);return this.normalized&&(t=N(t,this.array)),t}setZ(e,t){return this.normalized&&(t=D(t,this.array)),this.array[e*this.itemSize+2]=tC(t),this}getW(e){let t=tL(this.array[e*this.itemSize+3]);return this.normalized&&(t=N(t,this.array)),t}setW(e,t){return this.normalized&&(t=D(t,this.array)),this.array[e*this.itemSize+3]=tC(t),this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=D(t,this.array),i=D(i,this.array)),this.array[e+0]=tC(t),this.array[e+1]=tC(i),this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=D(t,this.array),i=D(i,this.array),r=D(r,this.array)),this.array[e+0]=tC(t),this.array[e+1]=tC(i),this.array[e+2]=tC(r),this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=D(t,this.array),i=D(i,this.array),r=D(r,this.array),a=D(a,this.array)),this.array[e+0]=tC(t),this.array[e+1]=tC(i),this.array[e+2]=tC(r),this.array[e+3]=tC(a),this}}class tk extends tU{constructor(e,t,i){super(new Float32Array(e),t,i)}}class tV extends tU{constructor(e,t,i){super(new Float64Array(e),t,i)}}let tW=0,tX=new eX,tj=new tn,tq=new ef,tY=new ev,tZ=new ev,tK=new ef;class tJ extends b{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tW++}),this.uuid=R(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(H(e)?tH:tB)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return void 0!==this.attributes[e]}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;void 0!==t&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(void 0!==i){let t=new B().getNormalMatrix(e);i.applyNormalMatrix(t),i.needsUpdate=!0}let r=this.attributes.tangent;return void 0!==r&&(r.transformDirection(e),r.needsUpdate=!0),null!==this.boundingBox&&this.computeBoundingBox(),null!==this.boundingSphere&&this.computeBoundingSphere(),this}applyQuaternion(e){return tX.makeRotationFromQuaternion(e),this.applyMatrix4(tX),this}rotateX(e){return tX.makeRotationX(e),this.applyMatrix4(tX),this}rotateY(e){return tX.makeRotationY(e),this.applyMatrix4(tX),this}rotateZ(e){return tX.makeRotationZ(e),this.applyMatrix4(tX),this}translate(e,t,i){return tX.makeTranslation(e,t,i),this.applyMatrix4(tX),this}scale(e,t,i){return tX.makeScale(e,t,i),this.applyMatrix4(tX),this}lookAt(e){return tj.lookAt(e),tj.updateMatrix(),this.applyMatrix4(tj.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(tq).negate(),this.translate(tq.x,tq.y,tq.z),this}setFromPoints(e){let t=[];for(let i=0,r=e.length;i<r;i++){let r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new tk(t,3)),this}computeBoundingBox(){null===this.boundingBox&&(this.boundingBox=new ev);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new ef(-1/0,-1/0,-1/0),new ef(1/0,1/0,1/0));return}if(void 0!==e){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,i=t.length;e<i;e++){let i=t[e];tY.setFromBufferAttribute(i),this.morphTargetsRelative?(tK.addVectors(this.boundingBox.min,tY.min),this.boundingBox.expandByPoint(tK),tK.addVectors(this.boundingBox.max,tY.max),this.boundingBox.expandByPoint(tK)):(this.boundingBox.expandByPoint(tY.min),this.boundingBox.expandByPoint(tY.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){null===this.boundingSphere&&(this.boundingSphere=new eO);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new ef,1/0);return}if(e){let i=this.boundingSphere.center;if(tY.setFromBufferAttribute(e),t)for(let e=0,i=t.length;e<i;e++){let i=t[e];tZ.setFromBufferAttribute(i),this.morphTargetsRelative?(tK.addVectors(tY.min,tZ.min),tY.expandByPoint(tK),tK.addVectors(tY.max,tZ.max),tY.expandByPoint(tK)):(tY.expandByPoint(tZ.min),tY.expandByPoint(tZ.max))}tY.getCenter(i);let r=0;for(let t=0,a=e.count;t<a;t++)tK.fromBufferAttribute(e,t),r=Math.max(r,i.distanceToSquared(tK));if(t)for(let a=0,s=t.length;a<s;a++){let s=t[a],n=this.morphTargetsRelative;for(let t=0,a=s.count;t<a;t++)tK.fromBufferAttribute(s,t),n&&(tq.fromBufferAttribute(e,t),tK.add(tq)),r=Math.max(r,i.distanceToSquared(tK))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(null===e||void 0===t.position||void 0===t.normal||void 0===t.uv)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let i=e.array,r=t.position.array,a=t.normal.array,s=t.uv.array,n=r.length/3;!1===this.hasAttribute("tangent")&&this.setAttribute("tangent",new tU(new Float32Array(4*n),4));let o=this.getAttribute("tangent").array,l=[],h=[];for(let e=0;e<n;e++)l[e]=new ef,h[e]=new ef;let c=new ef,u=new ef,d=new ef,p=new F,m=new F,f=new F,g=new ef,_=new ef,v=this.groups;0===v.length&&(v=[{start:0,count:i.length}]);for(let e=0,t=v.length;e<t;++e){let t=v[e],a=t.start,n=t.count;for(let e=a,t=a+n;e<t;e+=3)!function(e,t,i){c.fromArray(r,3*e),u.fromArray(r,3*t),d.fromArray(r,3*i),p.fromArray(s,2*e),m.fromArray(s,2*t),f.fromArray(s,2*i),u.sub(c),d.sub(c),m.sub(p),f.sub(p);let a=1/(m.x*f.y-f.x*m.y);isFinite(a)&&(g.copy(u).multiplyScalar(f.y).addScaledVector(d,-m.y).multiplyScalar(a),_.copy(d).multiplyScalar(m.x).addScaledVector(u,-f.x).multiplyScalar(a),l[e].add(g),l[t].add(g),l[i].add(g),h[e].add(_),h[t].add(_),h[i].add(_))}(i[e+0],i[e+1],i[e+2])}let x=new ef,y=new ef,M=new ef,S=new ef;function b(e){M.fromArray(a,3*e),S.copy(M);let t=l[e];x.copy(t),x.sub(M.multiplyScalar(M.dot(t))).normalize(),y.crossVectors(S,t);let i=0>y.dot(h[e])?-1:1;o[4*e]=x.x,o[4*e+1]=x.y,o[4*e+2]=x.z,o[4*e+3]=i}for(let e=0,t=v.length;e<t;++e){let t=v[e],r=t.start,a=t.count;for(let e=r,t=r+a;e<t;e+=3)b(i[e+0]),b(i[e+1]),b(i[e+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(void 0!==t){let i=this.getAttribute("normal");if(void 0===i)i=new tU(new Float32Array(3*t.count),3),this.setAttribute("normal",i);else for(let e=0,t=i.count;e<t;e++)i.setXYZ(e,0,0,0);let r=new ef,a=new ef,s=new ef,n=new ef,o=new ef,l=new ef,h=new ef,c=new ef;if(e)for(let u=0,d=e.count;u<d;u+=3){let d=e.getX(u+0),p=e.getX(u+1),m=e.getX(u+2);r.fromBufferAttribute(t,d),a.fromBufferAttribute(t,p),s.fromBufferAttribute(t,m),h.subVectors(s,a),c.subVectors(r,a),h.cross(c),n.fromBufferAttribute(i,d),o.fromBufferAttribute(i,p),l.fromBufferAttribute(i,m),n.add(h),o.add(h),l.add(h),i.setXYZ(d,n.x,n.y,n.z),i.setXYZ(p,o.x,o.y,o.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let e=0,n=t.count;e<n;e+=3)r.fromBufferAttribute(t,e+0),a.fromBufferAttribute(t,e+1),s.fromBufferAttribute(t,e+2),h.subVectors(s,a),c.subVectors(r,a),h.cross(c),i.setXYZ(e+0,h.x,h.y,h.z),i.setXYZ(e+1,h.x,h.y,h.z),i.setXYZ(e+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)tK.fromBufferAttribute(e,t),tK.normalize(),e.setXYZ(t,tK.x,tK.y,tK.z)}toNonIndexed(){function e(e,t){let i=e.array,r=e.itemSize,a=e.normalized,s=new i.constructor(t.length*r),n=0,o=0;for(let a=0,l=t.length;a<l;a++){n=e.isInterleavedBufferAttribute?t[a]*e.data.stride+e.offset:t[a]*r;for(let e=0;e<r;e++)s[o++]=i[n++]}return new tU(s,r,a)}if(null===this.index)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new tJ,i=this.index.array,r=this.attributes;for(let a in r){let s=e(r[a],i);t.setAttribute(a,s)}let a=this.morphAttributes;for(let r in a){let s=[],n=a[r];for(let t=0,r=n.length;t<r;t++){let r=e(n[t],i);s.push(r)}t.morphAttributes[r]=s}t.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let e=0,i=s.length;e<i;e++){let i=s[e];t.addGroup(i.start,i.count,i.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,""!==this.name&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),void 0!==this.parameters){let t=this.parameters;for(let i in t)void 0!==t[i]&&(e[i]=t[i]);return e}e.data={attributes:{}};let t=this.index;null!==t&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let t in i){let r=i[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},a=!1;for(let t in this.morphAttributes){let i=this.morphAttributes[t],s=[];for(let t=0,r=i.length;t<r;t++){let r=i[t];s.push(r.toJSON(e.data))}s.length>0&&(r[t]=s,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));let n=this.boundingSphere;return null!==n&&(e.data.boundingSphere={center:n.center.toArray(),radius:n.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;null!==i&&this.setIndex(i.clone(t));let r=e.attributes;for(let e in r){let i=r[e];this.setAttribute(e,i.clone(t))}let a=e.morphAttributes;for(let e in a){let i=[],r=a[e];for(let e=0,a=r.length;e<a;e++)i.push(r[e].clone(t));this.morphAttributes[e]=i}this.morphTargetsRelative=e.morphTargetsRelative;let s=e.groups;for(let e=0,t=s.length;e<t;e++){let t=s[e];this.addGroup(t.start,t.count,t.materialIndex)}let n=e.boundingBox;null!==n&&(this.boundingBox=n.clone());let o=e.boundingSphere;return null!==o&&(this.boundingSphere=o.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let tQ=new eX,t$=new eW,t0=new eO,t1=new ef,t2=new ef,t3=new ef,t4=new ef,t5=new ef,t6=new ef,t8=new F,t9=new F,t7=new F,ie=new ef,it=new ef,ii=new ef,ir=new ef,ia=new ef;class is extends tn{constructor(e=new tJ,t=new tw){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),void 0!==e.morphTargetInfluences&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),void 0!==e.morphTargetDictionary&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(void 0!==i){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=i.length;e<t;e++){let t=i[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let n=this.morphTargetInfluences;if(a&&n){t6.set(0,0,0);for(let i=0,r=a.length;i<r;i++){let r=n[i],o=a[i];0!==r&&(t5.fromBufferAttribute(o,e),s?t6.addScaledVector(t5,r):t6.addScaledVector(t5.sub(t),r))}t.add(t6)}return t}raycast(e,t){let i=this.geometry,r=this.material,a=this.matrixWorld;void 0!==r&&(null===i.boundingSphere&&i.computeBoundingSphere(),t0.copy(i.boundingSphere),t0.applyMatrix4(a),t$.copy(e.ray).recast(e.near),!1===t0.containsPoint(t$.origin)&&(null===t$.intersectSphere(t0,t1)||t$.origin.distanceToSquared(t1)>(e.far-e.near)**2)||(tQ.copy(a).invert(),t$.copy(e.ray).applyMatrix4(tQ),(null===i.boundingBox||!1!==t$.intersectsBox(i.boundingBox))&&this._computeIntersections(e,t,t$)))}_computeIntersections(e,t,i){let r,a=this.geometry,s=this.material,n=a.index,o=a.attributes.position,l=a.attributes.uv,h=a.attributes.uv1,c=a.attributes.normal,u=a.groups,d=a.drawRange;if(null!==n)if(Array.isArray(s))for(let a=0,o=u.length;a<o;a++){let o=u[a],p=s[o.materialIndex],m=Math.max(o.start,d.start),f=Math.min(n.count,Math.min(o.start+o.count,d.start+d.count));for(let a=m;a<f;a+=3)(r=io(this,p,e,i,l,h,c,n.getX(a),n.getX(a+1),n.getX(a+2)))&&(r.faceIndex=Math.floor(a/3),r.face.materialIndex=o.materialIndex,t.push(r))}else{let a=Math.max(0,d.start),o=Math.min(n.count,d.start+d.count);for(let u=a;u<o;u+=3)(r=io(this,s,e,i,l,h,c,n.getX(u),n.getX(u+1),n.getX(u+2)))&&(r.faceIndex=Math.floor(u/3),t.push(r))}else if(void 0!==o)if(Array.isArray(s))for(let a=0,n=u.length;a<n;a++){let n=u[a],p=s[n.materialIndex],m=Math.max(n.start,d.start),f=Math.min(o.count,Math.min(n.start+n.count,d.start+d.count));for(let a=m;a<f;a+=3)(r=io(this,p,e,i,l,h,c,a,a+1,a+2))&&(r.faceIndex=Math.floor(a/3),r.face.materialIndex=n.materialIndex,t.push(r))}else{let a=Math.max(0,d.start),n=Math.min(o.count,d.start+d.count);for(let o=a;o<n;o+=3)(r=io(this,s,e,i,l,h,c,o,o+1,o+2))&&(r.faceIndex=Math.floor(o/3),t.push(r))}}}function io(e,t,i,r,a,s,n,o,l,h){e.getVertexPosition(o,t2),e.getVertexPosition(l,t3),e.getVertexPosition(h,t4);let c=function(e,t,i,r,a,s,n,o){if(null===(1===t.side?r.intersectTriangle(n,s,a,!0,o):r.intersectTriangle(a,s,n,0===t.side,o)))return null;ia.copy(o),ia.applyMatrix4(e.matrixWorld);let l=i.ray.origin.distanceTo(ia);return l<i.near||l>i.far?null:{distance:l,point:ia.clone(),object:e}}(e,t,i,r,t2,t3,t4,ir);if(c){a&&(t8.fromBufferAttribute(a,o),t9.fromBufferAttribute(a,l),t7.fromBufferAttribute(a,h),c.uv=tv.getInterpolation(ir,t2,t3,t4,t8,t9,t7,new F)),s&&(t8.fromBufferAttribute(s,o),t9.fromBufferAttribute(s,l),t7.fromBufferAttribute(s,h),c.uv1=tv.getInterpolation(ir,t2,t3,t4,t8,t9,t7,new F),c.uv2=c.uv1),n&&(ie.fromBufferAttribute(n,o),it.fromBufferAttribute(n,l),ii.fromBufferAttribute(n,h),c.normal=tv.getInterpolation(ir,t2,t3,t4,ie,it,ii,new ef),c.normal.dot(r.direction)>0&&c.normal.multiplyScalar(-1));let e={a:o,b:l,c:h,normal:new ef,materialIndex:0};tv.getNormal(t2,t3,t4,e.normal),c.face=e}return c}class il extends tJ{constructor(e=1,t=1,i=1,r=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:a,depthSegments:s};let n=this;r=Math.floor(r),a=Math.floor(a);let o=[],l=[],h=[],c=[],u=0,d=0;function p(e,t,i,r,a,s,p,m,f,g,_){let v=s/f,x=p/g,y=s/2,M=p/2,S=m/2,b=f+1,T=g+1,E=0,A=0,w=new ef;for(let s=0;s<T;s++){let n=s*x-M;for(let o=0;o<b;o++){let u=o*v-y;w[e]=u*r,w[t]=n*a,w[i]=S,l.push(w.x,w.y,w.z),w[e]=0,w[t]=0,w[i]=m>0?1:-1,h.push(w.x,w.y,w.z),c.push(o/f),c.push(1-s/g),E+=1}}for(let e=0;e<g;e++)for(let t=0;t<f;t++){let i=u+t+b*e,r=u+t+b*(e+1),a=u+(t+1)+b*(e+1),s=u+(t+1)+b*e;o.push(i,r,s),o.push(r,a,s),A+=6}n.addGroup(d,A,_),d+=A,u+=E}p("z","y","x",-1,-1,i,t,e,s=Math.floor(s),a,0),p("z","y","x",1,-1,i,t,-e,s,a,1),p("x","z","y",1,1,e,i,t,r,s,2),p("x","z","y",1,-1,e,i,-t,r,s,3),p("x","y","z",1,-1,e,t,i,r,a,4),p("x","y","z",-1,-1,e,t,-i,r,a,5),this.setIndex(o),this.setAttribute("position",new tk(l,3)),this.setAttribute("normal",new tk(h,3)),this.setAttribute("uv",new tk(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new il(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ih(e){let t={};for(let i in e)for(let r in t[i]={},e[i]){let a=e[i][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=a.clone():Array.isArray(a)?t[i][r]=a.slice():t[i][r]=a}return t}function ic(e){let t={};for(let i=0;i<e.length;i++){let r=ih(e[i]);for(let e in r)t[e]=r[e]}return t}function iu(e){return null===e.getRenderTarget()?e.outputColorSpace:J.workingColorSpace}let id={clone:ih,merge:ic};var ip=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,im=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ig extends tA{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ip,this.fragmentShader=im,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,void 0!==e&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ih(e.uniforms),this.uniformsGroups=function(e){let t=[];for(let i=0;i<e.length;i++)t.push(e[i].clone());return t}(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);for(let i in t.glslVersion=this.glslVersion,t.uniforms={},this.uniforms){let r=this.uniforms[i].value;r&&r.isTexture?t.uniforms[i]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[i]={type:"m4",value:r.toArray()}:t.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let e in this.extensions)!0===this.extensions[e]&&(i[e]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class i_ extends tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new eX,this.projectionMatrix=new eX,this.projectionMatrixInverse=new eX,this.coordinateSystem=2e3}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class iv extends i_{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=null===e.view?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*w*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*A*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*w*Math.atan(Math.tan(.5*A*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,a,s){this.aspect=e/t,null===this.view&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){null!==this.view&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*A*this.fov)/this.zoom,i=2*t,r=this.aspect*i,a=-.5*r,s=this.view;if(null!==this.view&&this.view.enabled){let e=s.fullWidth,n=s.fullHeight;a+=s.offsetX*r/e,t-=s.offsetY*i/n,r*=s.width/e,i*=s.height/n}let n=this.filmOffset;0!==n&&(a+=e*n/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,null!==this.view&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class ix extends tn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new iv(-90,1,e,t);r.layers=this.layers,this.add(r);let a=new iv(-90,1,e,t);a.layers=this.layers,this.add(a);let s=new iv(-90,1,e,t);s.layers=this.layers,this.add(s);let n=new iv(-90,1,e,t);n.layers=this.layers,this.add(n);let o=new iv(-90,1,e,t);o.layers=this.layers,this.add(o);let l=new iv(-90,1,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,a,s,n,o]=t;for(let e of t)this.remove(e);if(2e3===e)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),n.up.set(0,1,0),n.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(2001===e)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),n.up.set(0,-1,0),n.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){null===this.parent&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[a,s,n,o,l,h]=this.children,c=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,a),e.setRenderTarget(i,1,r),e.render(t,s),e.setRenderTarget(i,2,r),e.render(t,n),e.setRenderTarget(i,3,r),e.render(t,o),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=m,e.setRenderTarget(i,5,r),e.render(t,h),e.setRenderTarget(c,u,d),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}}class iy extends es{constructor(e,t,i,r,a,s,n,o,l,h){super(e=void 0!==e?e:[],t=void 0!==t?t:301,i,r,a,s,n,o,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class iM extends el{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1};void 0!==t.encoding&&(j("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=3001===t.encoding?f:""),this.texture=new iy([i,i,i,i,i,i],t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=void 0!==t.generateMipmaps&&t.generateMipmaps,this.texture.minFilter=void 0!==t.minFilter?t.minFilter:p}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new il(5,5,5),a=new ig({name:"CubemapFromEquirect",uniforms:ih(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:1,blending:0});a.uniforms.tEquirect.value=t;let s=new is(r,a),n=t.minFilter;return t.minFilter===m&&(t.minFilter=p),new ix(1,10,this).update(e,s),t.minFilter=n,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,i,r){let a=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(a)}}let iS=new ef,ib=new ef,iT=new B;class iE{constructor(e=new ef(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=iS.subVectors(i,t).cross(ib.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(iS),r=this.normal.dot(i);if(0===r)return 0===this.distanceToPoint(e.start)?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||iT.getNormalMatrix(e),r=this.coplanarPoint(iS).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}let iA=new eO,iw=new ef;class iR{constructor(e=new iE,t=new iE,i=new iE,r=new iE,a=new iE,s=new iE){this.planes=[e,t,i,r,a,s]}set(e,t,i,r,a,s){let n=this.planes;return n[0].copy(e),n[1].copy(t),n[2].copy(i),n[3].copy(r),n[4].copy(a),n[5].copy(s),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=2e3){let i=this.planes,r=e.elements,a=r[0],s=r[1],n=r[2],o=r[3],l=r[4],h=r[5],c=r[6],u=r[7],d=r[8],p=r[9],m=r[10],f=r[11],g=r[12],_=r[13],v=r[14],x=r[15];if(i[0].setComponents(o-a,u-l,f-d,x-g).normalize(),i[1].setComponents(o+a,u+l,f+d,x+g).normalize(),i[2].setComponents(o+s,u+h,f+p,x+_).normalize(),i[3].setComponents(o-s,u-h,f-p,x-_).normalize(),i[4].setComponents(o-n,u-c,f-m,x-v).normalize(),2e3===t)i[5].setComponents(o+n,u+c,f+m,x+v).normalize();else if(2001===t)i[5].setComponents(n,c,m,v).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(void 0!==e.boundingSphere)null===e.boundingSphere&&e.computeBoundingSphere(),iA.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;null===t.boundingSphere&&t.computeBoundingSphere(),iA.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(iA)}intersectsSprite(e){return iA.center.set(0,0,0),iA.radius=.7071067811865476,iA.applyMatrix4(e.matrixWorld),this.intersectsSphere(iA)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(iw.x=r.normal.x>0?e.max.x:e.min.x,iw.y=r.normal.y>0?e.max.y:e.min.y,iw.z=r.normal.z>0?e.max.z:e.min.z,0>r.distanceToPoint(iw))return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(0>t[i].distanceToPoint(e))return!1;return!0}clone(){return new this.constructor().copy(this)}}function iC(){let e=null,t=!1,i=null,r=null;function a(t,s){i(t,s),r=e.requestAnimationFrame(a)}return{start:function(){!0!==t&&null!==i&&(r=e.requestAnimationFrame(a),t=!0)},stop:function(){e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){i=e},setContext:function(t){e=t}}}function iL(e,t){let i=t.isWebGL2,r=new WeakMap;return{get:function(e){return e.isInterleavedBufferAttribute&&(e=e.data),r.get(e)},remove:function(t){t.isInterleavedBufferAttribute&&(t=t.data);let i=r.get(t);i&&(e.deleteBuffer(i.buffer),r.delete(t))},update:function(t,a){if(t.isGLBufferAttribute){let e=r.get(t);(!e||e.version<t.version)&&r.set(t,{buffer:t.buffer,type:t.type,bytesPerElement:t.elementSize,version:t.version});return}t.isInterleavedBufferAttribute&&(t=t.data);let s=r.get(t);if(void 0===s)r.set(t,function(t,r){let a,s=t.array,n=t.usage,o=s.byteLength,l=e.createBuffer();if(e.bindBuffer(r,l),e.bufferData(r,s,n),t.onUploadCallback(),s instanceof Float32Array)a=e.FLOAT;else if(s instanceof Uint16Array)if(t.isFloat16BufferAttribute)if(i)a=e.HALF_FLOAT;else throw Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else a=e.UNSIGNED_SHORT;else if(s instanceof Int16Array)a=e.SHORT;else if(s instanceof Uint32Array)a=e.UNSIGNED_INT;else if(s instanceof Int32Array)a=e.INT;else if(s instanceof Int8Array)a=e.BYTE;else if(s instanceof Uint8Array)a=e.UNSIGNED_BYTE;else if(s instanceof Uint8ClampedArray)a=e.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+s);return{buffer:l,type:a,bytesPerElement:s.BYTES_PER_ELEMENT,version:t.version,size:o}}(t,a));else if(s.version<t.version){if(s.size!==t.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(t,r,a){let s=r.array,n=r._updateRange,o=r.updateRanges;if(e.bindBuffer(a,t),-1===n.count&&0===o.length&&e.bufferSubData(a,0,s),0!==o.length){for(let t=0,r=o.length;t<r;t++){let r=o[t];i?e.bufferSubData(a,r.start*s.BYTES_PER_ELEMENT,s,r.start,r.count):e.bufferSubData(a,r.start*s.BYTES_PER_ELEMENT,s.subarray(r.start,r.start+r.count))}r.clearUpdateRanges()}-1!==n.count&&(i?e.bufferSubData(a,n.offset*s.BYTES_PER_ELEMENT,s,n.offset,n.count):e.bufferSubData(a,n.offset*s.BYTES_PER_ELEMENT,s.subarray(n.offset,n.offset+n.count)),n.count=-1),r.onUploadCallback()})(s.buffer,t,a),s.version=t.version}}}}class iP extends tJ{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let a=e/2,s=t/2,n=Math.floor(i),o=Math.floor(r),l=n+1,h=o+1,c=e/n,u=t/o,d=[],p=[],m=[],f=[];for(let e=0;e<h;e++){let t=e*u-s;for(let i=0;i<l;i++){let r=i*c-a;p.push(r,-t,0),m.push(0,0,1),f.push(i/n),f.push(1-e/o)}}for(let e=0;e<o;e++)for(let t=0;t<n;t++){let i=t+l*e,r=t+l*(e+1),a=t+1+l*(e+1),s=t+1+l*e;d.push(i,r,s),d.push(r,a,s)}this.setIndex(d),this.setAttribute("position",new tk(p,3)),this.setAttribute("normal",new tk(m,3)),this.setAttribute("uv",new tk(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new iP(e.width,e.height,e.widthSegments,e.heightSegments)}}let iI={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment:`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_fragment:`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},iU={common:{diffuse:{value:new tb(0xffffff)},opacity:{value:1},map:{value:null},mapTransform:{value:new B},alphaMap:{value:null},alphaMapTransform:{value:new B},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new B}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new B}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new B}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new B},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new B},normalScale:{value:new F(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new B},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new B}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new B}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new B}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tb(0xffffff)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tb(0xffffff)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new B},alphaTest:{value:0},uvTransform:{value:new B}},sprite:{diffuse:{value:new tb(0xffffff)},opacity:{value:1},center:{value:new F(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new B},alphaMap:{value:null},alphaMapTransform:{value:new B},alphaTest:{value:0}}},iN={basic:{uniforms:ic([iU.common,iU.specularmap,iU.envmap,iU.aomap,iU.lightmap,iU.fog]),vertexShader:iI.meshbasic_vert,fragmentShader:iI.meshbasic_frag},lambert:{uniforms:ic([iU.common,iU.specularmap,iU.envmap,iU.aomap,iU.lightmap,iU.emissivemap,iU.bumpmap,iU.normalmap,iU.displacementmap,iU.fog,iU.lights,{emissive:{value:new tb(0)}}]),vertexShader:iI.meshlambert_vert,fragmentShader:iI.meshlambert_frag},phong:{uniforms:ic([iU.common,iU.specularmap,iU.envmap,iU.aomap,iU.lightmap,iU.emissivemap,iU.bumpmap,iU.normalmap,iU.displacementmap,iU.fog,iU.lights,{emissive:{value:new tb(0)},specular:{value:new tb(1118481)},shininess:{value:30}}]),vertexShader:iI.meshphong_vert,fragmentShader:iI.meshphong_frag},standard:{uniforms:ic([iU.common,iU.envmap,iU.aomap,iU.lightmap,iU.emissivemap,iU.bumpmap,iU.normalmap,iU.displacementmap,iU.roughnessmap,iU.metalnessmap,iU.fog,iU.lights,{emissive:{value:new tb(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:iI.meshphysical_vert,fragmentShader:iI.meshphysical_frag},toon:{uniforms:ic([iU.common,iU.aomap,iU.lightmap,iU.emissivemap,iU.bumpmap,iU.normalmap,iU.displacementmap,iU.gradientmap,iU.fog,iU.lights,{emissive:{value:new tb(0)}}]),vertexShader:iI.meshtoon_vert,fragmentShader:iI.meshtoon_frag},matcap:{uniforms:ic([iU.common,iU.bumpmap,iU.normalmap,iU.displacementmap,iU.fog,{matcap:{value:null}}]),vertexShader:iI.meshmatcap_vert,fragmentShader:iI.meshmatcap_frag},points:{uniforms:ic([iU.points,iU.fog]),vertexShader:iI.points_vert,fragmentShader:iI.points_frag},dashed:{uniforms:ic([iU.common,iU.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:iI.linedashed_vert,fragmentShader:iI.linedashed_frag},depth:{uniforms:ic([iU.common,iU.displacementmap]),vertexShader:iI.depth_vert,fragmentShader:iI.depth_frag},normal:{uniforms:ic([iU.common,iU.bumpmap,iU.normalmap,iU.displacementmap,{opacity:{value:1}}]),vertexShader:iI.meshnormal_vert,fragmentShader:iI.meshnormal_frag},sprite:{uniforms:ic([iU.sprite,iU.fog]),vertexShader:iI.sprite_vert,fragmentShader:iI.sprite_frag},background:{uniforms:{uvTransform:{value:new B},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:iI.background_vert,fragmentShader:iI.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:iI.backgroundCube_vert,fragmentShader:iI.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:iI.cube_vert,fragmentShader:iI.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:iI.equirect_vert,fragmentShader:iI.equirect_frag},distanceRGBA:{uniforms:ic([iU.common,iU.displacementmap,{referencePosition:{value:new ef},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:iI.distanceRGBA_vert,fragmentShader:iI.distanceRGBA_frag},shadow:{uniforms:ic([iU.lights,iU.fog,{color:{value:new tb(0)},opacity:{value:1}}]),vertexShader:iI.shadow_vert,fragmentShader:iI.shadow_frag}};iN.physical={uniforms:ic([iN.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new B},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new B},clearcoatNormalScale:{value:new F(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new B},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new B},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new B},sheen:{value:0},sheenColor:{value:new tb(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new B},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new B},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new B},transmissionSamplerSize:{value:new F},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new B},attenuationDistance:{value:0},attenuationColor:{value:new tb(0)},specularColor:{value:new tb(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new B},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new B},anisotropyVector:{value:new F},anisotropyMap:{value:null},anisotropyMapTransform:{value:new B}}]),vertexShader:iI.meshphysical_vert,fragmentShader:iI.meshphysical_frag};let iD={r:0,b:0,g:0};function iO(e,t,i,r,a,s,n){let o=new tb(0),l=+(!0!==s),h,c,u=null,d=0,p=null;function m(t,i){t.getRGB(iD,iu(e)),r.buffers.color.setClear(iD.r,iD.g,iD.b,i,n)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),m(o,l=t)},getClearAlpha:function(){return l},setClearAlpha:function(e){m(o,l=e)},render:function(s,f){let g=!1,_=!0===f.isScene?f.background:null;_&&_.isTexture&&(_=(f.backgroundBlurriness>0?i:t).get(_)),null===_?m(o,l):_&&_.isColor&&(m(_,1),g=!0);let v=e.xr.getEnvironmentBlendMode();"additive"===v?r.buffers.color.setClear(0,0,0,1,n):"alpha-blend"===v&&r.buffers.color.setClear(0,0,0,0,n),(e.autoClear||g)&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),_&&(_.isCubeTexture||306===_.mapping)?(void 0===c&&((c=new is(new il(1,1,1),new ig({name:"BackgroundCubeMaterial",uniforms:ih(iN.backgroundCube.uniforms),vertexShader:iN.backgroundCube.vertexShader,fragmentShader:iN.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1}))).geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(e,t,i){this.matrixWorld.copyPosition(i.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.flipEnvMap.value=_.isCubeTexture&&!1===_.isRenderTargetTexture?-1:1,c.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=J.getTransfer(_.colorSpace)!==y,(u!==_||d!==_.version||p!==e.toneMapping)&&(c.material.needsUpdate=!0,u=_,d=_.version,p=e.toneMapping),c.layers.enableAll(),s.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(void 0===h&&((h=new is(new iP(2,2),new ig({name:"BackgroundMaterial",uniforms:ih(iN.background.uniforms),vertexShader:iN.background.vertexShader,fragmentShader:iN.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1}))).geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(h)),h.material.uniforms.t2D.value=_,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=J.getTransfer(_.colorSpace)!==y,!0===_.matrixAutoUpdate&&_.updateMatrix(),h.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||p!==e.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,p=e.toneMapping),h.layers.enableAll(),s.unshift(h,h.geometry,h.material,0,0,null))}}}function iF(e,t,i,r){let a=e.getParameter(e.MAX_VERTEX_ATTRIBS),s=r.isWebGL2?null:t.get("OES_vertex_array_object"),n=r.isWebGL2||null!==s,o={},l=p(null),h=l,c=!1;function u(t){return r.isWebGL2?e.bindVertexArray(t):s.bindVertexArrayOES(t)}function d(t){return r.isWebGL2?e.deleteVertexArray(t):s.deleteVertexArrayOES(t)}function p(e){let t=[],i=[],r=[];for(let e=0;e<a;e++)t[e]=0,i[e]=0,r[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:i,attributeDivisors:r,object:e,attributes:{},index:null}}function m(){let e=h.newAttributes;for(let t=0,i=e.length;t<i;t++)e[t]=0}function f(e){g(e,0)}function g(i,a){let s=h.newAttributes,n=h.enabledAttributes,o=h.attributeDivisors;s[i]=1,0===n[i]&&(e.enableVertexAttribArray(i),n[i]=1),o[i]!==a&&((r.isWebGL2?e:t.get("ANGLE_instanced_arrays"))[r.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](i,a),o[i]=a)}function _(){let t=h.newAttributes,i=h.enabledAttributes;for(let r=0,a=i.length;r<a;r++)i[r]!==t[r]&&(e.disableVertexAttribArray(r),i[r]=0)}function v(t,i,r,a,s,n,o){!0===o?e.vertexAttribIPointer(t,i,r,s,n):e.vertexAttribPointer(t,i,r,a,s,n)}function x(){y(),c=!0,h!==l&&u((h=l).object)}function y(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:function(a,l,d,x,y){let M=!1;if(n){var S,b;let t,i,n,c,m=(S=x,b=d,t=!0===l.wireframe,void 0===(i=o[S.id])&&(i={},o[S.id]=i),void 0===(n=i[b.id])&&(n={},i[b.id]=n),void 0===(c=n[t])&&(c=p(r.isWebGL2?e.createVertexArray():s.createVertexArrayOES()),n[t]=c),c);h!==m&&u((h=m).object),(M=function(e,t,i,r){let a=h.attributes,s=t.attributes,n=0,o=i.getAttributes();for(let t in o)if(o[t].location>=0){let i=a[t],r=s[t];if(void 0===r&&("instanceMatrix"===t&&e.instanceMatrix&&(r=e.instanceMatrix),"instanceColor"===t&&e.instanceColor&&(r=e.instanceColor)),void 0===i||i.attribute!==r||r&&i.data!==r.data)return!0;n++}return h.attributesNum!==n||h.index!==r}(a,x,d,y))&&function(e,t,i,r){let a={},s=t.attributes,n=0,o=i.getAttributes();for(let t in o)if(o[t].location>=0){let i=s[t];void 0===i&&("instanceMatrix"===t&&e.instanceMatrix&&(i=e.instanceMatrix),"instanceColor"===t&&e.instanceColor&&(i=e.instanceColor));let r={};r.attribute=i,i&&i.data&&(r.data=i.data),a[t]=r,n++}h.attributes=a,h.attributesNum=n,h.index=r}(a,x,d,y)}else{let e=!0===l.wireframe;(h.geometry!==x.id||h.program!==d.id||h.wireframe!==e)&&(h.geometry=x.id,h.program=d.id,h.wireframe=e,M=!0)}null!==y&&i.update(y,e.ELEMENT_ARRAY_BUFFER),(M||c)&&(c=!1,function(a,s,n,o){if(!1===r.isWebGL2&&(a.isInstancedMesh||o.isInstancedBufferGeometry)&&null===t.get("ANGLE_instanced_arrays"))return;m();let l=o.attributes,h=n.getAttributes(),c=s.defaultAttributeValues;for(let t in h){let s=h[t];if(s.location>=0){let n=l[t];if(void 0===n&&("instanceMatrix"===t&&a.instanceMatrix&&(n=a.instanceMatrix),"instanceColor"===t&&a.instanceColor&&(n=a.instanceColor)),void 0!==n){let t=n.normalized,l=n.itemSize,h=i.get(n);if(void 0===h)continue;let c=h.buffer,u=h.type,d=h.bytesPerElement,p=!0===r.isWebGL2&&(u===e.INT||u===e.UNSIGNED_INT||1013===n.gpuType);if(n.isInterleavedBufferAttribute){let i=n.data,r=i.stride,h=n.offset;if(i.isInstancedInterleavedBuffer){for(let e=0;e<s.locationSize;e++)g(s.location+e,i.meshPerAttribute);!0!==a.isInstancedMesh&&void 0===o._maxInstanceCount&&(o._maxInstanceCount=i.meshPerAttribute*i.count)}else for(let e=0;e<s.locationSize;e++)f(s.location+e);e.bindBuffer(e.ARRAY_BUFFER,c);for(let e=0;e<s.locationSize;e++)v(s.location+e,l/s.locationSize,u,t,r*d,(h+l/s.locationSize*e)*d,p)}else{if(n.isInstancedBufferAttribute){for(let e=0;e<s.locationSize;e++)g(s.location+e,n.meshPerAttribute);!0!==a.isInstancedMesh&&void 0===o._maxInstanceCount&&(o._maxInstanceCount=n.meshPerAttribute*n.count)}else for(let e=0;e<s.locationSize;e++)f(s.location+e);e.bindBuffer(e.ARRAY_BUFFER,c);for(let e=0;e<s.locationSize;e++)v(s.location+e,l/s.locationSize,u,t,l*d,l/s.locationSize*e*d,p)}}else if(void 0!==c){let i=c[t];if(void 0!==i)switch(i.length){case 2:e.vertexAttrib2fv(s.location,i);break;case 3:e.vertexAttrib3fv(s.location,i);break;case 4:e.vertexAttrib4fv(s.location,i);break;default:e.vertexAttrib1fv(s.location,i)}}}}_()}(a,l,d,x),null!==y&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,i.get(y).buffer))},reset:x,resetDefaultState:y,dispose:function(){for(let e in x(),o){let t=o[e];for(let e in t){let i=t[e];for(let e in i)d(i[e].object),delete i[e];delete t[e]}delete o[e]}},releaseStatesOfGeometry:function(e){if(void 0===o[e.id])return;let t=o[e.id];for(let e in t){let i=t[e];for(let e in i)d(i[e].object),delete i[e];delete t[e]}delete o[e.id]},releaseStatesOfProgram:function(e){for(let t in o){let i=o[t];if(void 0===i[e.id])continue;let r=i[e.id];for(let e in r)d(r[e].object),delete r[e];delete i[e.id]}},initAttributes:m,enableAttribute:f,disableUnusedAttributes:_}}function iB(e,t,i,r){let a,s=r.isWebGL2;this.setMode=function(e){a=e},this.render=function(t,r){e.drawArrays(a,t,r),i.update(r,a,1)},this.renderInstances=function(r,n,o){let l,h;if(0!==o){if(s)l=e,h="drawArraysInstanced";else if(l=t.get("ANGLE_instanced_arrays"),h="drawArraysInstancedANGLE",null===l)return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");l[h](a,r,n,o),i.update(n,a,o)}},this.renderMultiDraw=function(e,r,s){if(0===s)return;let n=t.get("WEBGL_multi_draw");if(null===n)for(let t=0;t<s;t++)this.render(e[t],r[t]);else{n.multiDrawArraysWEBGL(a,e,0,r,0,s);let t=0;for(let e=0;e<s;e++)t+=r[e];i.update(t,a,1)}}}function iz(e,t,i){let r;function a(t){if("highp"===t){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";t="mediump"}return"mediump"===t&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let s="u">typeof WebGL2RenderingContext&&"WebGL2RenderingContext"===e.constructor.name,n=void 0!==i.precision?i.precision:"highp",o=a(n);o!==n&&(console.warn("THREE.WebGLRenderer:",n,"not supported, using",o,"instead."),n=o);let l=s||t.has("WEBGL_draw_buffers"),h=!0===i.logarithmicDepthBuffer,c=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),u=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=e.getParameter(e.MAX_TEXTURE_SIZE),p=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),m=e.getParameter(e.MAX_VERTEX_ATTRIBS),f=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),g=e.getParameter(e.MAX_VARYING_VECTORS),_=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),v=u>0,x=s||t.has("OES_texture_float"),y=s?e.getParameter(e.MAX_SAMPLES):0;return{isWebGL2:s,drawBuffers:l,getMaxAnisotropy:function(){if(void 0!==r)return r;if(!0===t.has("EXT_texture_filter_anisotropic")){let i=t.get("EXT_texture_filter_anisotropic");r=e.getParameter(i.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r},getMaxPrecision:a,precision:n,logarithmicDepthBuffer:h,maxTextures:c,maxVertexTextures:u,maxTextureSize:d,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:f,maxVaryings:g,maxFragmentUniforms:_,vertexTextures:v,floatFragmentTextures:x,floatVertexTextures:v&&x,maxSamples:y}}function iH(e){let t=this,i=null,r=0,a=!1,s=!1,n=new iE,o=new B,l={value:null,needsUpdate:!1};function h(e,i,r,a){let s=null!==e?e.length:0,h=null;if(0!==s){if(h=l.value,!0!==a||null===h){let t=r+4*s,a=i.matrixWorldInverse;o.getNormalMatrix(a),(null===h||h.length<t)&&(h=new Float32Array(t));for(let t=0,i=r;t!==s;++t,i+=4)n.copy(e[t]).applyMatrix4(a,o),n.normal.toArray(h,i),h[i+3]=n.constant}l.value=h,l.needsUpdate=!0}return t.numPlanes=s,t.numIntersection=0,h}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let i=0!==e.length||t||0!==r||a;return a=t,r=e.length,i},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(e,t){i=h(e,t,0)},this.setState=function(n,o,c){let u=n.clippingPlanes,d=n.clipIntersection,p=n.clipShadows,m=e.get(n);if(a&&null!==u&&0!==u.length&&(!s||p)){let e=s?0:r,t=4*e,a=m.clippingState||null;l.value=a,a=h(u,o,t,c);for(let e=0;e!==t;++e)a[e]=i[e];m.clippingState=a,this.numIntersection=d?this.numPlanes:0,this.numPlanes+=e}else s?h(null):(l.value!==i&&(l.value=i,l.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0)}}function iG(e){let t=new WeakMap;function i(e,t){return 303===t?e.mapping=301:304===t&&(e.mapping=302),e}function r(e){let i=e.target;i.removeEventListener("dispose",r);let a=t.get(i);void 0!==a&&(t.delete(i),a.dispose())}return{get:function(a){if(a&&a.isTexture){let s=a.mapping;if(303===s||304===s)if(t.has(a))return i(t.get(a).texture,a.mapping);else{let s=a.image;if(!s||!(s.height>0))return null;{let n=new iM(s.height/2);return n.fromEquirectangularTexture(e,a),t.set(a,n),a.addEventListener("dispose",r),i(n.texture,a.mapping)}}}return a},dispose:function(){t=new WeakMap}}}class ik extends i_{constructor(e=-1,t=1,i=1,r=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=null===e.view?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,a,s){null===this.view&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){null!==this.view&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,a=i-e,s=i+e,n=r+t,o=r-t;if(null!==this.view&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=e*this.view.offsetX,s=a+e*this.view.width,n-=t*this.view.offsetY,o=n-t*this.view.height}this.projectionMatrix.makeOrthographic(a,s,n,o,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,null!==this.view&&(t.object.view=Object.assign({},this.view)),t}}let iV=[.125,.215,.35,.446,.526,.582],iW=new ik,iX=new tb,ij=null,iq=0,iY=0,iZ=(1+Math.sqrt(5))/2,iK=1/iZ,iJ=[new ef(1,1,1),new ef(-1,1,1),new ef(1,1,-1),new ef(-1,1,-1),new ef(0,iZ,iK),new ef(0,iZ,-iK),new ef(iK,0,iZ),new ef(-iK,0,iZ),new ef(iZ,iK,0),new ef(-iZ,iK,0)];class iQ{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){ij=this._renderer.getRenderTarget(),iq=this._renderer.getActiveCubeFace(),iY=this._renderer.getActiveMipmapLevel(),this._setSize(256);let a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){null===this._cubemapMaterial&&(this._cubemapMaterial=i2(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){null===this._equirectMaterial&&(this._equirectMaterial=i1(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),null!==this._cubemapMaterial&&this._cubemapMaterial.dispose(),null!==this._equirectMaterial&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){null!==this._blurMaterial&&this._blurMaterial.dispose(),null!==this._pingPongRenderTarget&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ij,iq,iY),e.scissorTest=!1,i0(e,0,0,e.width,e.height)}_fromTexture(e,t){301===e.mapping||302===e.mapping?this._setSize(0===e.image.length?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ij=this._renderer.getRenderTarget(),iq=this._renderer.getActiveCubeFace(),iY=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:p,minFilter:p,generateMipmaps:!1,type:1016,format:1023,colorSpace:g,depthBuffer:!1},r=i$(e,t,i);if(null===this._pingPongRenderTarget||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){var a;null!==this._pingPongRenderTarget&&this._dispose(),this._pingPongRenderTarget=i$(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=function(e){let t=[],i=[],r=[],a=e,s=e-4+1+iV.length;for(let n=0;n<s;n++){let s=Math.pow(2,a);i.push(s);let o=1/s;n>e-4?o=iV[n-e+4-1]:0===n&&(o=0),r.push(o);let l=1/(s-2),h=-l,c=1+l,u=[h,h,c,h,c,c,h,h,c,c,h,c],d=new Float32Array(108),p=new Float32Array(72),m=new Float32Array(36);for(let e=0;e<6;e++){let t=e%3*2/3-1,i=e>2?0:-1,r=[t,i,0,t+2/3,i,0,t+2/3,i+1,0,t,i,0,t+2/3,i+1,0,t,i+1,0];d.set(r,18*e),p.set(u,12*e);let a=[e,e,e,e,e,e];m.set(a,6*e)}let f=new tJ;f.setAttribute("position",new tU(d,3)),f.setAttribute("uv",new tU(p,2)),f.setAttribute("faceIndex",new tU(m,1)),t.push(f),a>4&&a--}return{lodPlanes:t,sizeLods:i,sigmas:r}}(r)),this._blurMaterial=(a=r,new ig({name:"SphericalGaussianBlur",defines:{n:20,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:new Float32Array(20)},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:new ef(0,1,0)}},vertexShader:i3(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1}))}return r}_compileMaterial(e){let t=new is(this._lodPlanes[0],e);this._renderer.compile(t,iW)}_sceneToCubeUV(e,t,i,r){let a=new iv(90,1,t,i),s=[1,-1,1,1,1,1],n=[1,1,1,-1,-1,-1],o=this._renderer,l=o.autoClear,h=o.toneMapping;o.getClearColor(iX),o.toneMapping=0,o.autoClear=!1;let c=new tw({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),u=new is(new il,c),d=!1,p=e.background;p?p.isColor&&(c.color.copy(p),e.background=null,d=!0):(c.color.copy(iX),d=!0);for(let t=0;t<6;t++){let i=t%3;0===i?(a.up.set(0,s[t],0),a.lookAt(n[t],0,0)):1===i?(a.up.set(0,0,s[t]),a.lookAt(0,n[t],0)):(a.up.set(0,s[t],0),a.lookAt(0,0,n[t]));let l=this._cubeSize;i0(r,i*l,t>2?l:0,l,l),o.setRenderTarget(r),d&&o.render(u,a),o.render(e,a)}u.geometry.dispose(),u.material.dispose(),o.toneMapping=h,o.autoClear=l,e.background=p}_textureToCubeUV(e,t){let i=this._renderer,r=301===e.mapping||302===e.mapping;r?(null===this._cubemapMaterial&&(this._cubemapMaterial=i2()),this._cubemapMaterial.uniforms.flipEnvMap.value=!1===e.isRenderTargetTexture?-1:1):null===this._equirectMaterial&&(this._equirectMaterial=i1());let a=r?this._cubemapMaterial:this._equirectMaterial,s=new is(this._lodPlanes[0],a);a.uniforms.envMap.value=e;let n=this._cubeSize;i0(t,0,0,3*n,2*n),i.setRenderTarget(t),i.render(s,iW)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let t=1;t<this._lodPlanes.length;t++){let i=Math.sqrt(this._sigmas[t]*this._sigmas[t]-this._sigmas[t-1]*this._sigmas[t-1]),r=iJ[(t-1)%iJ.length];this._blur(e,t-1,t,i,r)}t.autoClear=i}_blur(e,t,i,r,a){let s=this._pingPongRenderTarget;this._halfBlur(e,s,t,i,r,"latitudinal",a),this._halfBlur(s,e,i,i,r,"longitudinal",a)}_halfBlur(e,t,i,r,a,s,n){let o=this._renderer,l=this._blurMaterial;"latitudinal"!==s&&"longitudinal"!==s&&console.error("blur direction must be either latitudinal or longitudinal!");let h=new is(this._lodPlanes[r],l),c=l.uniforms,u=this._sizeLods[i]-1,d=isFinite(a)?Math.PI/(2*u):2*Math.PI/39,p=a/d,m=isFinite(a)?1+Math.floor(3*p):20;m>20&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to 20`);let f=[],g=0;for(let e=0;e<20;++e){let t=e/p,i=Math.exp(-t*t/2);f.push(i),0===e?g+=i:e<m&&(g+=2*i)}for(let e=0;e<f.length;e++)f[e]=f[e]/g;c.envMap.value=e.texture,c.samples.value=m,c.weights.value=f,c.latitudinal.value="latitudinal"===s,n&&(c.poleAxis.value=n);let{_lodMax:_}=this;c.dTheta.value=d,c.mipInt.value=_-i;let v=this._sizeLods[r],x=4*(this._cubeSize-v);i0(t,3*v*(r>_-4?r-_+4:0),x,3*v,2*v),o.setRenderTarget(t),o.render(h,iW)}}function i$(e,t,i){let r=new el(e,t,i);return r.texture.mapping=306,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function i0(e,t,i,r,a){e.viewport.set(t,i,r,a),e.scissor.set(t,i,r,a)}function i1(){return new ig({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:i3(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function i2(){return new ig({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:i3(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function i3(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function i4(e){let t=new WeakMap,i=null;function r(e){let i=e.target;i.removeEventListener("dispose",r);let a=t.get(i);void 0!==a&&(t.delete(i),a.dispose())}return{get:function(a){if(a&&a.isTexture){let s=a.mapping,n=303===s||304===s,o=301===s||302===s;if(n||o)if(a.isRenderTargetTexture&&!0===a.needsPMREMUpdate){a.needsPMREMUpdate=!1;let r=t.get(a);return null===i&&(i=new iQ(e)),r=n?i.fromEquirectangular(a,r):i.fromCubemap(a,r),t.set(a,r),r.texture}else{if(t.has(a))return t.get(a).texture;{let s=a.image;if(!(n&&s&&s.height>0||o&&s&&function(e){let t=0;for(let i=0;i<6;i++)void 0!==e[i]&&t++;return 6===t}(s)))return null;{null===i&&(i=new iQ(e));let s=n?i.fromEquirectangular(a):i.fromCubemap(a);return t.set(a,s),a.addEventListener("dispose",r),s.texture}}}}return a},dispose:function(){t=new WeakMap,null!==i&&(i.dispose(),i=null)}}}function i5(e){let t={};function i(i){let r;if(void 0!==t[i])return t[i];switch(i){case"WEBGL_depth_texture":r=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=e.getExtension(i)}return t[i]=r,r}return{has:function(e){return null!==i(e)},init:function(e){e.isWebGL2?(i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance")):(i("WEBGL_depth_texture"),i("OES_texture_float"),i("OES_texture_half_float"),i("OES_texture_half_float_linear"),i("OES_standard_derivatives"),i("OES_element_index_uint"),i("OES_vertex_array_object"),i("ANGLE_instanced_arrays")),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture")},get:function(e){let t=i(e);return null===t&&console.warn("THREE.WebGLRenderer: "+e+" extension not supported."),t}}}function i6(e,t,i,r){let a={},s=new WeakMap;function n(e){let o=e.target;for(let e in null!==o.index&&t.remove(o.index),o.attributes)t.remove(o.attributes[e]);for(let e in o.morphAttributes){let i=o.morphAttributes[e];for(let e=0,r=i.length;e<r;e++)t.remove(i[e])}o.removeEventListener("dispose",n),delete a[o.id];let l=s.get(o);l&&(t.remove(l),s.delete(o)),r.releaseStatesOfGeometry(o),!0===o.isInstancedBufferGeometry&&delete o._maxInstanceCount,i.memory.geometries--}function o(e){let i=[],r=e.index,a=e.attributes.position,n=0;if(null!==r){let e=r.array;n=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],a=e[t+1],s=e[t+2];i.push(r,a,a,s,s,r)}}else{if(void 0===a)return;let e=a.array;n=a.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,a=t+2;i.push(e,r,r,a,a,e)}}let o=new(H(i)?tH:tB)(i,1);o.version=n;let l=s.get(e);l&&t.remove(l),s.set(e,o)}return{get:function(e,t){return!0===a[t.id]||(t.addEventListener("dispose",n),a[t.id]=!0,i.memory.geometries++),t},update:function(i){let r=i.attributes;for(let i in r)t.update(r[i],e.ARRAY_BUFFER);let a=i.morphAttributes;for(let i in a){let r=a[i];for(let i=0,a=r.length;i<a;i++)t.update(r[i],e.ARRAY_BUFFER)}},getWireframeAttribute:function(e){let t=s.get(e);if(t){let i=e.index;null!==i&&t.version<i.version&&o(e)}else o(e);return s.get(e)}}}function i8(e,t,i,r){let a,s,n,o=r.isWebGL2;this.setMode=function(e){a=e},this.setIndex=function(e){s=e.type,n=e.bytesPerElement},this.render=function(t,r){e.drawElements(a,r,s,t*n),i.update(r,a,1)},this.renderInstances=function(r,l,h){let c,u;if(0!==h){if(o)c=e,u="drawElementsInstanced";else if(c=t.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",null===c)return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");c[u](a,l,s,r*n,h),i.update(l,a,h)}},this.renderMultiDraw=function(e,r,o){if(0===o)return;let l=t.get("WEBGL_multi_draw");if(null===l)for(let t=0;t<o;t++)this.render(e[t]/n,r[t]);else{l.multiDrawElementsWEBGL(a,r,0,s,e,0,o);let t=0;for(let e=0;e<o;e++)t+=r[e];i.update(t,a,1)}}}function i9(e){let t={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:t,programs:null,autoReset:!0,reset:function(){t.calls=0,t.triangles=0,t.points=0,t.lines=0},update:function(i,r,a){switch(t.calls++,r){case e.TRIANGLES:t.triangles+=i/3*a;break;case e.LINES:t.lines+=i/2*a;break;case e.LINE_STRIP:t.lines+=a*(i-1);break;case e.LINE_LOOP:t.lines+=a*i;break;case e.POINTS:t.points+=a*i;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r)}}}}function i7(e,t){return e[0]-t[0]}function re(e,t){return Math.abs(t[1])-Math.abs(e[1])}function rt(e,t,i){let r={},a=new Float32Array(8),s=new WeakMap,n=new en,o=[];for(let e=0;e<8;e++)o[e]=[e,0];return{update:function(l,h,c){let u=l.morphTargetInfluences;if(!0===t.isWebGL2){let r=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,a=void 0!==r?r.length:0,o=s.get(h);if(void 0===o||o.count!==a){let e=function(){_.dispose(),s.delete(h),h.removeEventListener("dispose",e)};void 0!==o&&o.texture.dispose();let i=void 0!==h.morphAttributes.position,r=void 0!==h.morphAttributes.normal,l=void 0!==h.morphAttributes.color,c=h.morphAttributes.position||[],u=h.morphAttributes.normal||[],d=h.morphAttributes.color||[],p=0;!0===i&&(p=1),!0===r&&(p=2),!0===l&&(p=3);let m=h.attributes.position.count*p,f=1;m>t.maxTextureSize&&(f=Math.ceil(m/t.maxTextureSize),m=t.maxTextureSize);let g=new Float32Array(m*f*4*a),_=new eh(g,m,f,a);_.type=1015,_.needsUpdate=!0;let v=4*p;for(let e=0;e<a;e++){let t=c[e],a=u[e],s=d[e],o=m*f*4*e;for(let e=0;e<t.count;e++){let h=e*v;!0===i&&(n.fromBufferAttribute(t,e),g[o+h+0]=n.x,g[o+h+1]=n.y,g[o+h+2]=n.z,g[o+h+3]=0),!0===r&&(n.fromBufferAttribute(a,e),g[o+h+4]=n.x,g[o+h+5]=n.y,g[o+h+6]=n.z,g[o+h+7]=0),!0===l&&(n.fromBufferAttribute(s,e),g[o+h+8]=n.x,g[o+h+9]=n.y,g[o+h+10]=n.z,g[o+h+11]=4===s.itemSize?n.w:1)}}o={count:a,texture:_,size:new F(m,f)},s.set(h,o),h.addEventListener("dispose",e)}let l=0;for(let e=0;e<u.length;e++)l+=u[e];let d=h.morphTargetsRelative?1:1-l;c.getUniforms().setValue(e,"morphTargetBaseInfluence",d),c.getUniforms().setValue(e,"morphTargetInfluences",u),c.getUniforms().setValue(e,"morphTargetsTexture",o.texture,i),c.getUniforms().setValue(e,"morphTargetsTextureSize",o.size)}else{let t=void 0===u?0:u.length,i=r[h.id];if(void 0===i||i.length!==t){i=[];for(let e=0;e<t;e++)i[e]=[e,0];r[h.id]=i}for(let e=0;e<t;e++){let t=i[e];t[0]=e,t[1]=u[e]}i.sort(re);for(let e=0;e<8;e++)e<t&&i[e][1]?(o[e][0]=i[e][0],o[e][1]=i[e][1]):(o[e][0]=Number.MAX_SAFE_INTEGER,o[e][1]=0);o.sort(i7);let s=h.morphAttributes.position,n=h.morphAttributes.normal,l=0;for(let e=0;e<8;e++){let t=o[e],i=t[0],r=t[1];i!==Number.MAX_SAFE_INTEGER&&r?(s&&h.getAttribute("morphTarget"+e)!==s[i]&&h.setAttribute("morphTarget"+e,s[i]),n&&h.getAttribute("morphNormal"+e)!==n[i]&&h.setAttribute("morphNormal"+e,n[i]),a[e]=r,l+=r):(s&&!0===h.hasAttribute("morphTarget"+e)&&h.deleteAttribute("morphTarget"+e),n&&!0===h.hasAttribute("morphNormal"+e)&&h.deleteAttribute("morphNormal"+e),a[e]=0)}let d=h.morphTargetsRelative?1:1-l;c.getUniforms().setValue(e,"morphTargetBaseInfluence",d),c.getUniforms().setValue(e,"morphTargetInfluences",a)}}}}function ri(e,t,i,r){let a=new WeakMap;function s(e){let t=e.target;t.removeEventListener("dispose",s),i.remove(t.instanceMatrix),null!==t.instanceColor&&i.remove(t.instanceColor)}return{update:function(n){let o=r.render.frame,l=n.geometry,h=t.get(n,l);if(a.get(h)!==o&&(t.update(h),a.set(h,o)),n.isInstancedMesh&&(!1===n.hasEventListener("dispose",s)&&n.addEventListener("dispose",s),a.get(n)!==o&&(i.update(n.instanceMatrix,e.ARRAY_BUFFER),null!==n.instanceColor&&i.update(n.instanceColor,e.ARRAY_BUFFER),a.set(n,o))),n.isSkinnedMesh){let e=n.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return h},dispose:function(){a=new WeakMap}}}class rr extends es{constructor(e,t,i,r,a,s,n,o,l,h){if(1026!==(h=void 0!==h?h:1026)&&1027!==h)throw Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");void 0===i&&1026===h&&(i=1014),void 0===i&&1027===h&&(i=1020),super(null,r,a,s,n,o,h,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=void 0!==n?n:1003,this.minFilter=void 0!==o?o:1003,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return null!==this.compareFunction&&(t.compareFunction=this.compareFunction),t}}let ra=new es,rs=new rr(1,1);rs.compareFunction=515;let rn=new eh,ro=new eu,rl=new iy,rh=[],rc=[],ru=new Float32Array(16),rd=new Float32Array(9),rp=new Float32Array(4);function rm(e,t,i){let r=e[0];if(r<=0||r>0)return e;let a=t*i,s=rh[a];if(void 0===s&&(s=new Float32Array(a),rh[a]=s),0!==t){r.toArray(s,0);for(let r=1,a=0;r!==t;++r)a+=i,e[r].toArray(s,a)}return s}function rf(e,t){if(e.length!==t.length)return!1;for(let i=0,r=e.length;i<r;i++)if(e[i]!==t[i])return!1;return!0}function rg(e,t){for(let i=0,r=t.length;i<r;i++)e[i]=t[i]}function r_(e,t){let i=rc[t];void 0===i&&(i=new Int32Array(t),rc[t]=i);for(let r=0;r!==t;++r)i[r]=e.allocateTextureUnit();return i}function rv(e,t){let i=this.cache;i[0]!==t&&(e.uniform1f(this.addr,t),i[0]=t)}function rx(e,t){let i=this.cache;if(void 0!==t.x)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(rf(i,t))return;e.uniform2fv(this.addr,t),rg(i,t)}}function ry(e,t){let i=this.cache;if(void 0!==t.x)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(void 0!==t.r)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(rf(i,t))return;e.uniform3fv(this.addr,t),rg(i,t)}}function rM(e,t){let i=this.cache;if(void 0!==t.x)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(rf(i,t))return;e.uniform4fv(this.addr,t),rg(i,t)}}function rS(e,t){let i=this.cache,r=t.elements;if(void 0===r){if(rf(i,t))return;e.uniformMatrix2fv(this.addr,!1,t),rg(i,t)}else{if(rf(i,r))return;rp.set(r),e.uniformMatrix2fv(this.addr,!1,rp),rg(i,r)}}function rb(e,t){let i=this.cache,r=t.elements;if(void 0===r){if(rf(i,t))return;e.uniformMatrix3fv(this.addr,!1,t),rg(i,t)}else{if(rf(i,r))return;rd.set(r),e.uniformMatrix3fv(this.addr,!1,rd),rg(i,r)}}function rT(e,t){let i=this.cache,r=t.elements;if(void 0===r){if(rf(i,t))return;e.uniformMatrix4fv(this.addr,!1,t),rg(i,t)}else{if(rf(i,r))return;ru.set(r),e.uniformMatrix4fv(this.addr,!1,ru),rg(i,r)}}function rE(e,t){let i=this.cache;i[0]!==t&&(e.uniform1i(this.addr,t),i[0]=t)}function rA(e,t){let i=this.cache;if(void 0!==t.x)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(rf(i,t))return;e.uniform2iv(this.addr,t),rg(i,t)}}function rw(e,t){let i=this.cache;if(void 0!==t.x)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(rf(i,t))return;e.uniform3iv(this.addr,t),rg(i,t)}}function rR(e,t){let i=this.cache;if(void 0!==t.x)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(rf(i,t))return;e.uniform4iv(this.addr,t),rg(i,t)}}function rC(e,t){let i=this.cache;i[0]!==t&&(e.uniform1ui(this.addr,t),i[0]=t)}function rL(e,t){let i=this.cache;if(void 0!==t.x)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(rf(i,t))return;e.uniform2uiv(this.addr,t),rg(i,t)}}function rP(e,t){let i=this.cache;if(void 0!==t.x)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(rf(i,t))return;e.uniform3uiv(this.addr,t),rg(i,t)}}function rI(e,t){let i=this.cache;if(void 0!==t.x)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(rf(i,t))return;e.uniform4uiv(this.addr,t),rg(i,t)}}function rU(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a);let s=this.type===e.SAMPLER_2D_SHADOW?rs:ra;i.setTexture2D(t||s,a)}function rN(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTexture3D(t||ro,a)}function rD(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTextureCube(t||rl,a)}function rO(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTexture2DArray(t||rn,a)}function rF(e,t){e.uniform1fv(this.addr,t)}function rB(e,t){let i=rm(t,this.size,2);e.uniform2fv(this.addr,i)}function rz(e,t){let i=rm(t,this.size,3);e.uniform3fv(this.addr,i)}function rH(e,t){let i=rm(t,this.size,4);e.uniform4fv(this.addr,i)}function rG(e,t){let i=rm(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,i)}function rk(e,t){let i=rm(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,i)}function rV(e,t){let i=rm(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,i)}function rW(e,t){e.uniform1iv(this.addr,t)}function rX(e,t){e.uniform2iv(this.addr,t)}function rj(e,t){e.uniform3iv(this.addr,t)}function rq(e,t){e.uniform4iv(this.addr,t)}function rY(e,t){e.uniform1uiv(this.addr,t)}function rZ(e,t){e.uniform2uiv(this.addr,t)}function rK(e,t){e.uniform3uiv(this.addr,t)}function rJ(e,t){e.uniform4uiv(this.addr,t)}function rQ(e,t,i){let r=this.cache,a=t.length,s=r_(i,a);rf(r,s)||(e.uniform1iv(this.addr,s),rg(r,s));for(let e=0;e!==a;++e)i.setTexture2D(t[e]||ra,s[e])}function r$(e,t,i){let r=this.cache,a=t.length,s=r_(i,a);rf(r,s)||(e.uniform1iv(this.addr,s),rg(r,s));for(let e=0;e!==a;++e)i.setTexture3D(t[e]||ro,s[e])}function r0(e,t,i){let r=this.cache,a=t.length,s=r_(i,a);rf(r,s)||(e.uniform1iv(this.addr,s),rg(r,s));for(let e=0;e!==a;++e)i.setTextureCube(t[e]||rl,s[e])}function r1(e,t,i){let r=this.cache,a=t.length,s=r_(i,a);rf(r,s)||(e.uniform1iv(this.addr,s),rg(r,s));for(let e=0;e!==a;++e)i.setTexture2DArray(t[e]||rn,s[e])}class r2{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=function(e){switch(e){case 5126:return rv;case 35664:return rx;case 35665:return ry;case 35666:return rM;case 35674:return rS;case 35675:return rb;case 35676:return rT;case 5124:case 35670:return rE;case 35667:case 35671:return rA;case 35668:case 35672:return rw;case 35669:case 35673:return rR;case 5125:return rC;case 36294:return rL;case 36295:return rP;case 36296:return rI;case 35678:case 36198:case 36298:case 36306:case 35682:return rU;case 35679:case 36299:case 36307:return rN;case 35680:case 36300:case 36308:case 36293:return rD;case 36289:case 36303:case 36311:case 36292:return rO}}(t.type)}}class r3{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=function(e){switch(e){case 5126:return rF;case 35664:return rB;case 35665:return rz;case 35666:return rH;case 35674:return rG;case 35675:return rk;case 35676:return rV;case 5124:case 35670:return rW;case 35667:case 35671:return rX;case 35668:case 35672:return rj;case 35669:case 35673:return rq;case 5125:return rY;case 36294:return rZ;case 36295:return rK;case 36296:return rJ;case 35678:case 36198:case 36298:case 36306:case 35682:return rQ;case 35679:case 36299:case 36307:return r$;case 35680:case 36300:case 36308:case 36293:return r0;case 36289:case 36303:case 36311:case 36292:return r1}}(t.type)}}class r4{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let a=0,s=r.length;a!==s;++a){let s=r[a];s.setValue(e,t[s.id],i)}}}let r5=/(\w+)(\])?(\[|\.)?/g;function r6(e,t){e.seq.push(t),e.map[t.id]=t}class r8{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let i=e.getActiveUniform(t,r),a=e.getUniformLocation(t,i.name);!function(e,t,i){let r=e.name,a=r.length;for(r5.lastIndex=0;;){let s=r5.exec(r),n=r5.lastIndex,o=s[1],l="]"===s[2],h=s[3];if(l&&(o|=0),void 0===h||"["===h&&n+2===a){r6(i,void 0===h?new r2(o,e,t):new r3(o,e,t));break}{let e=i.map[o];void 0===e&&r6(i,e=new r4(o)),i=e}}}(i,a,this)}}setValue(e,t,i,r){let a=this.map[t];void 0!==a&&a.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];void 0!==r&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,s=t.length;a!==s;++a){let s=t[a],n=i[s.id];!1!==n.needsUpdate&&s.setValue(e,n.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,a=e.length;r!==a;++r){let a=e[r];a.id in t&&i.push(a)}return i}}function r9(e,t,i){let r=e.createShader(t);return e.shaderSource(r,i),e.compileShader(r),r}let r7=0;function ae(e,t,i){let r=e.getShaderParameter(t,e.COMPILE_STATUS),a=e.getShaderInfoLog(t).trim();if(r&&""===a)return"";let s=/ERROR: 0:(\d+)/.exec(a);if(!s)return a;{let r=parseInt(s[1]);return i.toUpperCase()+`

`+a+`

`+function(e,t){let i=e.split(`
`),r=[],a=Math.max(t-6,0),s=Math.min(t+6,i.length);for(let e=a;e<s;e++){let a=e+1;r.push(`${a===t?">":" "} ${a}: ${i[e]}`)}return r.join(`
`)}(e.getShaderSource(t),r)}}function at(e){return""!==e}function ai(e,t){let i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ar(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}let aa=/^[ \t]*#include +<([\w\d./]+)>/gm;function as(e){return e.replace(aa,ao)}let an=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function ao(e,t){let i=iI[t];if(void 0===i){let e=an.get(t);if(void 0!==e)i=iI[e],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,e);else throw Error("Can not resolve #include <"+t+">")}return as(i)}let al=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ah(e){return e.replace(al,ac)}function ac(e,t,i,r){let a="";for(let e=parseInt(t);e<parseInt(i);e++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+e+" ]").replace(/UNROLLED_LOOP_INDEX/g,e);return a}function au(e){let t="precision "+e.precision+` float;
precision `+e.precision+" int;";return"highp"===e.precision?t+=`
#define HIGH_PRECISION`:"mediump"===e.precision?t+=`
#define MEDIUM_PRECISION`:"lowp"===e.precision&&(t+=`
#define LOW_PRECISION`),t}function ad(e,t,i,r){let a,s,n,o,l,h=e.getContext(),u=i.defines,d=i.vertexShader,p=i.fragmentShader,m=(n="SHADOWMAP_TYPE_BASIC",1===i.shadowMapType?n="SHADOWMAP_TYPE_PCF":2===i.shadowMapType?n="SHADOWMAP_TYPE_PCF_SOFT":3===i.shadowMapType&&(n="SHADOWMAP_TYPE_VSM"),n),x=function(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case 301:case 302:t="ENVMAP_TYPE_CUBE";break;case 306:t="ENVMAP_TYPE_CUBE_UV"}return t}(i),y=(o="ENVMAP_MODE_REFLECTION",i.envMap&&302===i.envMapMode&&(o="ENVMAP_MODE_REFRACTION"),o),b=function(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case 0:t="ENVMAP_BLENDING_MULTIPLY";break;case 1:t="ENVMAP_BLENDING_MIX";break;case 2:t="ENVMAP_BLENDING_ADD"}return t}(i),T=function(e){let t=e.envMapCubeUVHeight;if(null===t)return null;let i=Math.log2(t)-2;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:1/t,maxMip:i}}(i),E=i.isWebGL2?"":[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||"physical"===i.shaderID?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(at).join(`
`),A=[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(at).join(`
`),w=function(e){let t=[];for(let i in e){let r=e[i];!1!==r&&t.push("#define "+i+" "+r)}return t.join(`
`)}(u),R=h.createProgram(),C,L,P=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?((C=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,w].filter(at).join(`
`)).length>0&&(C+=`
`),(L=[E,"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,w].filter(at).join(`
`)).length>0&&(L+=`
`)):(C=[au(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,w,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+y:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&!1===i.flatShading?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&!1===i.flatShading?"#define USE_MORPHNORMALS":"",i.morphColors&&i.isWebGL2?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.useLegacyLights?"#define LEGACY_LIGHTS":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&i.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(at).join(`
`),L=[E,au(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,w,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+x:"",i.envMap?"#define "+y:"",i.envMap?"#define "+b:"",T?"#define CUBEUV_TEXEL_WIDTH "+T.texelWidth:"",T?"#define CUBEUV_TEXEL_HEIGHT "+T.texelHeight:"",T?"#define CUBEUV_MAX_MIP "+T.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&!1===i.flatShading?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.useLegacyLights?"#define LEGACY_LIGHTS":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&i.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",0!==i.toneMapping?"#define TONE_MAPPING":"",0!==i.toneMapping?iI.tonemapping_pars_fragment:"",0!==i.toneMapping?function(e,t){let i;switch(t){case 1:i="Linear";break;case 2:i="Reinhard";break;case 3:i="OptimizedCineon";break;case c:i="ACESFilmic";break;case 6:i="AgX";break;case 5:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+e+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",iI.colorspace_pars_fragment,(l=function(e){let t,i=J.getPrimaries(J.workingColorSpace),r=J.getPrimaries(e);switch(i===r?t="":"p3"===i&&r===M?t="LinearDisplayP3ToLinearSRGB":i===M&&"p3"===r&&(t="LinearSRGBToLinearDisplayP3"),e){case g:case v:return[t,"LinearTransferOETF"];case f:case _:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",e),[t,"LinearTransferOETF"]}}(i.outputColorSpace),`vec4 linearToOutputTexel( vec4 value ) { return ${l[0]}( ${l[1]}( value ) ); }`),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(at).join(`
`)),d=ar(d=ai(d=as(d),i),i),p=ar(p=ai(p=as(p),i),i),d=ah(d),p=ah(p),i.isWebGL2&&!0!==i.isRawShaderMaterial&&(P=`#version 300 es
`,C=[A,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+C,L=["precision mediump sampler2DArray;","#define varying in",i.glslVersion===S?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===S?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+L);let I=P+C+d,U=P+L+p,N=r9(h,h.VERTEX_SHADER,I),D=r9(h,h.FRAGMENT_SHADER,U);function O(t){if(e.debug.checkShaderErrors){let i=h.getProgramInfoLog(R).trim(),r=h.getShaderInfoLog(N).trim(),a=h.getShaderInfoLog(D).trim(),s=!0,n=!0;if(!1===h.getProgramParameter(R,h.LINK_STATUS))if(s=!1,"function"==typeof e.debug.onShaderError)e.debug.onShaderError(h,R,N,D);else{let e=ae(h,N,"vertex"),t=ae(h,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+h.getError()+" - VALIDATE_STATUS "+h.getProgramParameter(R,h.VALIDATE_STATUS)+`

Program Info Log: `+i+`
`+e+`
`+t)}else""!==i?console.warn("THREE.WebGLProgram: Program Info Log:",i):(""===r||""===a)&&(n=!1);n&&(t.diagnostics={runnable:s,programLog:i,vertexShader:{log:r,prefix:C},fragmentShader:{log:a,prefix:L}})}h.deleteShader(N),h.deleteShader(D),a=new r8(h,R),s=function(e,t){let i={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){let r=e.getActiveAttrib(t,a),s=r.name,n=1;r.type===e.FLOAT_MAT2&&(n=2),r.type===e.FLOAT_MAT3&&(n=3),r.type===e.FLOAT_MAT4&&(n=4),i[s]={type:r.type,location:e.getAttribLocation(t,s),locationSize:n}}return i}(h,R)}h.attachShader(R,N),h.attachShader(R,D),void 0!==i.index0AttributeName?h.bindAttribLocation(R,0,i.index0AttributeName):!0===i.morphTargets&&h.bindAttribLocation(R,0,"position"),h.linkProgram(R),this.getUniforms=function(){return void 0===a&&O(this),a},this.getAttributes=function(){return void 0===s&&O(this),s};let F=!1===i.rendererExtensionParallelShaderCompile;return this.isReady=function(){return!1===F&&(F=h.getProgramParameter(R,37297)),F},this.destroy=function(){r.releaseStatesOfProgram(this),h.deleteProgram(R),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=r7++,this.cacheKey=t,this.usedTimes=1,this.program=R,this.vertexShader=N,this.fragmentShader=D,this}let ap=0;class am{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return!1===s.has(r)&&(s.add(r),r.usedTimes++),!1===s.has(a)&&(s.add(a),a.usedTimes++),this}remove(e){for(let t of this.materialCache.get(e))t.usedTimes--,0===t.usedTimes&&this.shaderCache.delete(t.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return void 0===i&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return void 0===i&&(i=new af(e),t.set(e,i)),i}}class af{constructor(e){this.id=ap++,this.code=e,this.usedTimes=0}}function ag(e,t,i,r,a,s,n){let o=new e2,h=new am,c=[],u=a.isWebGL2,d=a.logarithmicDepthBuffer,p=a.vertexTextures,m=a.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(e){return 0===e?"uv":`uv${e}`}return{getParameters:function(s,o,c,v,x){let M,S,b,T,E=v.fog,A=x.geometry,w=s.isMeshStandardMaterial?v.environment:null,R=(s.isMeshStandardMaterial?i:t).get(s.envMap||w),C=R&&306===R.mapping?R.image.height:null,L=f[s.type];null!==s.precision&&(m=a.getMaxPrecision(s.precision))!==s.precision&&console.warn("THREE.WebGLProgram.getParameters:",s.precision,"not supported, using",m,"instead.");let P=A.morphAttributes.position||A.morphAttributes.normal||A.morphAttributes.color,I=void 0!==P?P.length:0,U=0;if(void 0!==A.morphAttributes.position&&(U=1),void 0!==A.morphAttributes.normal&&(U=2),void 0!==A.morphAttributes.color&&(U=3),L){let e=iN[L];M=e.vertexShader,S=e.fragmentShader}else M=s.vertexShader,S=s.fragmentShader,h.update(s),b=h.getVertexShaderID(s),T=h.getFragmentShaderID(s);let N=e.getRenderTarget(),D=!0===x.isInstancedMesh,O=!0===x.isBatchedMesh,F=!!s.map,B=!!s.matcap,z=!!R,H=!!s.aoMap,G=!!s.lightMap,k=!!s.bumpMap,V=!!s.normalMap,W=!!s.displacementMap,X=!!s.emissiveMap,j=!!s.metalnessMap,q=!!s.roughnessMap,Y=s.anisotropy>0,Z=s.clearcoat>0,K=s.iridescence>0,Q=s.sheen>0,$=s.transmission>0,ee=Y&&!!s.anisotropyMap,et=Z&&!!s.clearcoatMap,ei=Z&&!!s.clearcoatNormalMap,er=Z&&!!s.clearcoatRoughnessMap,ea=K&&!!s.iridescenceMap,es=K&&!!s.iridescenceThicknessMap,en=Q&&!!s.sheenColorMap,eo=Q&&!!s.sheenRoughnessMap,el=!!s.specularMap,eh=!!s.specularColorMap,ec=!!s.specularIntensityMap,eu=$&&!!s.transmissionMap,ed=$&&!!s.thicknessMap,ep=!!s.gradientMap,em=!!s.alphaMap,ef=s.alphaTest>0,eg=!!s.alphaHash,e_=!!s.extensions,ev=!!A.attributes.uv1,ex=!!A.attributes.uv2,ey=!!A.attributes.uv3,eM=0;return s.toneMapped&&(null===N||!0===N.isXRRenderTarget)&&(eM=e.toneMapping),{isWebGL2:u,shaderID:L,shaderType:s.type,shaderName:s.name,vertexShader:M,fragmentShader:S,defines:s.defines,customVertexShaderID:b,customFragmentShaderID:T,isRawShaderMaterial:!0===s.isRawShaderMaterial,glslVersion:s.glslVersion,precision:m,batching:O,instancing:D,instancingColor:D&&null!==x.instanceColor,supportsVertexTextures:p,outputColorSpace:null===N?e.outputColorSpace:!0===N.isXRRenderTarget?N.texture.colorSpace:g,map:F,matcap:B,envMap:z,envMapMode:z&&R.mapping,envMapCubeUVHeight:C,aoMap:H,lightMap:G,bumpMap:k,normalMap:V,displacementMap:p&&W,emissiveMap:X,normalMapObjectSpace:V&&1===s.normalMapType,normalMapTangentSpace:V&&0===s.normalMapType,metalnessMap:j,roughnessMap:q,anisotropy:Y,anisotropyMap:ee,clearcoat:Z,clearcoatMap:et,clearcoatNormalMap:ei,clearcoatRoughnessMap:er,iridescence:K,iridescenceMap:ea,iridescenceThicknessMap:es,sheen:Q,sheenColorMap:en,sheenRoughnessMap:eo,specularMap:el,specularColorMap:eh,specularIntensityMap:ec,transmission:$,transmissionMap:eu,thicknessMap:ed,gradientMap:ep,opaque:!1===s.transparent&&1===s.blending,alphaMap:em,alphaTest:ef,alphaHash:eg,combine:s.combine,mapUv:F&&_(s.map.channel),aoMapUv:H&&_(s.aoMap.channel),lightMapUv:G&&_(s.lightMap.channel),bumpMapUv:k&&_(s.bumpMap.channel),normalMapUv:V&&_(s.normalMap.channel),displacementMapUv:W&&_(s.displacementMap.channel),emissiveMapUv:X&&_(s.emissiveMap.channel),metalnessMapUv:j&&_(s.metalnessMap.channel),roughnessMapUv:q&&_(s.roughnessMap.channel),anisotropyMapUv:ee&&_(s.anisotropyMap.channel),clearcoatMapUv:et&&_(s.clearcoatMap.channel),clearcoatNormalMapUv:ei&&_(s.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:er&&_(s.clearcoatRoughnessMap.channel),iridescenceMapUv:ea&&_(s.iridescenceMap.channel),iridescenceThicknessMapUv:es&&_(s.iridescenceThicknessMap.channel),sheenColorMapUv:en&&_(s.sheenColorMap.channel),sheenRoughnessMapUv:eo&&_(s.sheenRoughnessMap.channel),specularMapUv:el&&_(s.specularMap.channel),specularColorMapUv:eh&&_(s.specularColorMap.channel),specularIntensityMapUv:ec&&_(s.specularIntensityMap.channel),transmissionMapUv:eu&&_(s.transmissionMap.channel),thicknessMapUv:ed&&_(s.thicknessMap.channel),alphaMapUv:em&&_(s.alphaMap.channel),vertexTangents:!!A.attributes.tangent&&(V||Y),vertexColors:s.vertexColors,vertexAlphas:!0===s.vertexColors&&!!A.attributes.color&&4===A.attributes.color.itemSize,vertexUv1s:ev,vertexUv2s:ex,vertexUv3s:ey,pointsUvs:!0===x.isPoints&&!!A.attributes.uv&&(F||em),fog:!!E,useFog:!0===s.fog,fogExp2:E&&E.isFogExp2,flatShading:!0===s.flatShading,sizeAttenuation:!0===s.sizeAttenuation,logarithmicDepthBuffer:d,skinning:!0===x.isSkinnedMesh,morphTargets:void 0!==A.morphAttributes.position,morphNormals:void 0!==A.morphAttributes.normal,morphColors:void 0!==A.morphAttributes.color,morphTargetsCount:I,morphTextureStride:U,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numClippingPlanes:n.numPlanes,numClipIntersection:n.numIntersection,dithering:s.dithering,shadowMapEnabled:e.shadowMap.enabled&&c.length>0,shadowMapType:e.shadowMap.type,toneMapping:eM,useLegacyLights:e._useLegacyLights,decodeVideoTexture:F&&!0===s.map.isVideoTexture&&J.getTransfer(s.map.colorSpace)===y,premultipliedAlpha:s.premultipliedAlpha,doubleSided:s.side===l,flipSided:1===s.side,useDepthPacking:s.depthPacking>=0,depthPacking:s.depthPacking||0,index0AttributeName:s.index0AttributeName,extensionDerivatives:e_&&!0===s.extensions.derivatives,extensionFragDepth:e_&&!0===s.extensions.fragDepth,extensionDrawBuffers:e_&&!0===s.extensions.drawBuffers,extensionShaderTextureLOD:e_&&!0===s.extensions.shaderTextureLOD,extensionClipCullDistance:e_&&s.extensions.clipCullDistance&&r.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||r.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||r.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||r.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:s.customProgramCacheKey()}},getProgramCacheKey:function(t){var i,r,a,s;let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),void 0!==t.defines)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return!1===t.isRawShaderMaterial&&(i=n,r=t,i.push(r.precision),i.push(r.outputColorSpace),i.push(r.envMapMode),i.push(r.envMapCubeUVHeight),i.push(r.mapUv),i.push(r.alphaMapUv),i.push(r.lightMapUv),i.push(r.aoMapUv),i.push(r.bumpMapUv),i.push(r.normalMapUv),i.push(r.displacementMapUv),i.push(r.emissiveMapUv),i.push(r.metalnessMapUv),i.push(r.roughnessMapUv),i.push(r.anisotropyMapUv),i.push(r.clearcoatMapUv),i.push(r.clearcoatNormalMapUv),i.push(r.clearcoatRoughnessMapUv),i.push(r.iridescenceMapUv),i.push(r.iridescenceThicknessMapUv),i.push(r.sheenColorMapUv),i.push(r.sheenRoughnessMapUv),i.push(r.specularMapUv),i.push(r.specularColorMapUv),i.push(r.specularIntensityMapUv),i.push(r.transmissionMapUv),i.push(r.thicknessMapUv),i.push(r.combine),i.push(r.fogExp2),i.push(r.sizeAttenuation),i.push(r.morphTargetsCount),i.push(r.morphAttributeCount),i.push(r.numDirLights),i.push(r.numPointLights),i.push(r.numSpotLights),i.push(r.numSpotLightMaps),i.push(r.numHemiLights),i.push(r.numRectAreaLights),i.push(r.numDirLightShadows),i.push(r.numPointLightShadows),i.push(r.numSpotLightShadows),i.push(r.numSpotLightShadowsWithMaps),i.push(r.numLightProbes),i.push(r.shadowMapType),i.push(r.toneMapping),i.push(r.numClippingPlanes),i.push(r.numClipIntersection),i.push(r.depthPacking),a=n,s=t,o.disableAll(),s.isWebGL2&&o.enable(0),s.supportsVertexTextures&&o.enable(1),s.instancing&&o.enable(2),s.instancingColor&&o.enable(3),s.matcap&&o.enable(4),s.envMap&&o.enable(5),s.normalMapObjectSpace&&o.enable(6),s.normalMapTangentSpace&&o.enable(7),s.clearcoat&&o.enable(8),s.iridescence&&o.enable(9),s.alphaTest&&o.enable(10),s.vertexColors&&o.enable(11),s.vertexAlphas&&o.enable(12),s.vertexUv1s&&o.enable(13),s.vertexUv2s&&o.enable(14),s.vertexUv3s&&o.enable(15),s.vertexTangents&&o.enable(16),s.anisotropy&&o.enable(17),s.alphaHash&&o.enable(18),s.batching&&o.enable(19),a.push(o.mask),o.disableAll(),s.fog&&o.enable(0),s.useFog&&o.enable(1),s.flatShading&&o.enable(2),s.logarithmicDepthBuffer&&o.enable(3),s.skinning&&o.enable(4),s.morphTargets&&o.enable(5),s.morphNormals&&o.enable(6),s.morphColors&&o.enable(7),s.premultipliedAlpha&&o.enable(8),s.shadowMapEnabled&&o.enable(9),s.useLegacyLights&&o.enable(10),s.doubleSided&&o.enable(11),s.flipSided&&o.enable(12),s.useDepthPacking&&o.enable(13),s.dithering&&o.enable(14),s.transmission&&o.enable(15),s.sheen&&o.enable(16),s.opaque&&o.enable(17),s.pointsUvs&&o.enable(18),s.decodeVideoTexture&&o.enable(19),a.push(o.mask),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()},getUniforms:function(e){let t,i=f[e.type];if(i){let e=iN[i];t=id.clone(e.uniforms)}else t=e.uniforms;return t},acquireProgram:function(t,i){let r;for(let e=0,t=c.length;e<t;e++){let t=c[e];if(t.cacheKey===i){r=t,++r.usedTimes;break}}return void 0===r&&(r=new ad(e,i,t,s),c.push(r)),r},releaseProgram:function(e){if(0==--e.usedTimes){let t=c.indexOf(e);c[t]=c[c.length-1],c.pop(),e.destroy()}},releaseShaderCache:function(e){h.remove(e)},programs:c,dispose:function(){h.dispose()}}}function a_(){let e=new WeakMap;return{get:function(t){let i=e.get(t);return void 0===i&&(i={},e.set(t,i)),i},remove:function(t){e.delete(t)},update:function(t,i,r){e.get(t)[i]=r},dispose:function(){e=new WeakMap}}}function av(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function ax(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function ay(){let e=[],t=0,i=[],r=[],a=[];function s(i,r,a,s,n,o){let l=e[t];return void 0===l?(l={id:i.id,object:i,geometry:r,material:a,groupOrder:s,renderOrder:i.renderOrder,z:n,group:o},e[t]=l):(l.id=i.id,l.object=i,l.geometry=r,l.material=a,l.groupOrder=s,l.renderOrder=i.renderOrder,l.z=n,l.group=o),t++,l}return{opaque:i,transmissive:r,transparent:a,init:function(){t=0,i.length=0,r.length=0,a.length=0},push:function(e,t,n,o,l,h){let c=s(e,t,n,o,l,h);n.transmission>0?r.push(c):!0===n.transparent?a.push(c):i.push(c)},unshift:function(e,t,n,o,l,h){let c=s(e,t,n,o,l,h);n.transmission>0?r.unshift(c):!0===n.transparent?a.unshift(c):i.unshift(c)},finish:function(){for(let i=t,r=e.length;i<r;i++){let t=e[i];if(null===t.id)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}},sort:function(e,t){i.length>1&&i.sort(e||av),r.length>1&&r.sort(t||ax),a.length>1&&a.sort(t||ax)}}}function aM(){let e=new WeakMap;return{get:function(t,i){let r,a=e.get(t);return void 0===a?(r=new ay,e.set(t,[r])):i>=a.length?(r=new ay,a.push(r)):r=a[i],r},dispose:function(){e=new WeakMap}}}function aS(){let e={};return{get:function(t){let i;if(void 0!==e[t.id])return e[t.id];switch(t.type){case"DirectionalLight":i={direction:new ef,color:new tb};break;case"SpotLight":i={position:new ef,direction:new ef,color:new tb,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ef,color:new tb,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ef,skyColor:new tb,groundColor:new tb};break;case"RectAreaLight":i={color:new tb,position:new ef,halfWidth:new ef,halfHeight:new ef}}return e[t.id]=i,i}}}let ab=0;function aT(e,t){return 2*!!t.castShadow-2*!!e.castShadow+ +!!t.map-!!e.map}function aE(e,t){let i,r=new aS,a=(i={},{get:function(e){let t;if(void 0!==i[e.id])return i[e.id];switch(e.type){case"DirectionalLight":case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new F};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new F,shadowCameraNear:1,shadowCameraFar:1e3}}return i[e.id]=t,t}}),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)s.probe.push(new ef);let n=new ef,o=new eX,l=new eX;return{setup:function(i,n){let o=0,l=0,h=0;for(let e=0;e<9;e++)s.probe[e].set(0,0,0);let c=0,u=0,d=0,p=0,m=0,f=0,g=0,_=0,v=0,x=0,y=0;i.sort(aT);let M=!0===n?Math.PI:1;for(let e=0,t=i.length;e<t;e++){let t=i[e],n=t.color,S=t.intensity,b=t.distance,T=t.shadow&&t.shadow.map?t.shadow.map.texture:null;if(t.isAmbientLight)o+=n.r*S*M,l+=n.g*S*M,h+=n.b*S*M;else if(t.isLightProbe){for(let e=0;e<9;e++)s.probe[e].addScaledVector(t.sh.coefficients[e],S);y++}else if(t.isDirectionalLight){let e=r.get(t);if(e.color.copy(t.color).multiplyScalar(t.intensity*M),t.castShadow){let e=t.shadow,i=a.get(t);i.shadowBias=e.bias,i.shadowNormalBias=e.normalBias,i.shadowRadius=e.radius,i.shadowMapSize=e.mapSize,s.directionalShadow[c]=i,s.directionalShadowMap[c]=T,s.directionalShadowMatrix[c]=t.shadow.matrix,f++}s.directional[c]=e,c++}else if(t.isSpotLight){let e=r.get(t);e.position.setFromMatrixPosition(t.matrixWorld),e.color.copy(n).multiplyScalar(S*M),e.distance=b,e.coneCos=Math.cos(t.angle),e.penumbraCos=Math.cos(t.angle*(1-t.penumbra)),e.decay=t.decay,s.spot[d]=e;let i=t.shadow;if(t.map&&(s.spotLightMap[v]=t.map,v++,i.updateMatrices(t),t.castShadow&&x++),s.spotLightMatrix[d]=i.matrix,t.castShadow){let e=a.get(t);e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,s.spotShadow[d]=e,s.spotShadowMap[d]=T,_++}d++}else if(t.isRectAreaLight){let e=r.get(t);e.color.copy(n).multiplyScalar(S),e.halfWidth.set(.5*t.width,0,0),e.halfHeight.set(0,.5*t.height,0),s.rectArea[p]=e,p++}else if(t.isPointLight){let e=r.get(t);if(e.color.copy(t.color).multiplyScalar(t.intensity*M),e.distance=t.distance,e.decay=t.decay,t.castShadow){let e=t.shadow,i=a.get(t);i.shadowBias=e.bias,i.shadowNormalBias=e.normalBias,i.shadowRadius=e.radius,i.shadowMapSize=e.mapSize,i.shadowCameraNear=e.camera.near,i.shadowCameraFar=e.camera.far,s.pointShadow[u]=i,s.pointShadowMap[u]=T,s.pointShadowMatrix[u]=t.shadow.matrix,g++}s.point[u]=e,u++}else if(t.isHemisphereLight){let e=r.get(t);e.skyColor.copy(t.color).multiplyScalar(S*M),e.groundColor.copy(t.groundColor).multiplyScalar(S*M),s.hemi[m]=e,m++}}p>0&&(t.isWebGL2?!0===e.has("OES_texture_float_linear")?(s.rectAreaLTC1=iU.LTC_FLOAT_1,s.rectAreaLTC2=iU.LTC_FLOAT_2):(s.rectAreaLTC1=iU.LTC_HALF_1,s.rectAreaLTC2=iU.LTC_HALF_2):!0===e.has("OES_texture_float_linear")?(s.rectAreaLTC1=iU.LTC_FLOAT_1,s.rectAreaLTC2=iU.LTC_FLOAT_2):!0===e.has("OES_texture_half_float_linear")?(s.rectAreaLTC1=iU.LTC_HALF_1,s.rectAreaLTC2=iU.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=o,s.ambient[1]=l,s.ambient[2]=h;let S=s.hash;(S.directionalLength!==c||S.pointLength!==u||S.spotLength!==d||S.rectAreaLength!==p||S.hemiLength!==m||S.numDirectionalShadows!==f||S.numPointShadows!==g||S.numSpotShadows!==_||S.numSpotMaps!==v||S.numLightProbes!==y)&&(s.directional.length=c,s.spot.length=d,s.rectArea.length=p,s.point.length=u,s.hemi.length=m,s.directionalShadow.length=f,s.directionalShadowMap.length=f,s.pointShadow.length=g,s.pointShadowMap.length=g,s.spotShadow.length=_,s.spotShadowMap.length=_,s.directionalShadowMatrix.length=f,s.pointShadowMatrix.length=g,s.spotLightMatrix.length=_+v-x,s.spotLightMap.length=v,s.numSpotLightShadowsWithMaps=x,s.numLightProbes=y,S.directionalLength=c,S.pointLength=u,S.spotLength=d,S.rectAreaLength=p,S.hemiLength=m,S.numDirectionalShadows=f,S.numPointShadows=g,S.numSpotShadows=_,S.numSpotMaps=v,S.numLightProbes=y,s.version=ab++)},setupView:function(e,t){let i=0,r=0,a=0,h=0,c=0,u=t.matrixWorldInverse;for(let t=0,d=e.length;t<d;t++){let d=e[t];if(d.isDirectionalLight){let e=s.directional[i];e.direction.setFromMatrixPosition(d.matrixWorld),n.setFromMatrixPosition(d.target.matrixWorld),e.direction.sub(n),e.direction.transformDirection(u),i++}else if(d.isSpotLight){let e=s.spot[a];e.position.setFromMatrixPosition(d.matrixWorld),e.position.applyMatrix4(u),e.direction.setFromMatrixPosition(d.matrixWorld),n.setFromMatrixPosition(d.target.matrixWorld),e.direction.sub(n),e.direction.transformDirection(u),a++}else if(d.isRectAreaLight){let e=s.rectArea[h];e.position.setFromMatrixPosition(d.matrixWorld),e.position.applyMatrix4(u),l.identity(),o.copy(d.matrixWorld),o.premultiply(u),l.extractRotation(o),e.halfWidth.set(.5*d.width,0,0),e.halfHeight.set(0,.5*d.height,0),e.halfWidth.applyMatrix4(l),e.halfHeight.applyMatrix4(l),h++}else if(d.isPointLight){let e=s.point[r];e.position.setFromMatrixPosition(d.matrixWorld),e.position.applyMatrix4(u),r++}else if(d.isHemisphereLight){let e=s.hemi[c];e.direction.setFromMatrixPosition(d.matrixWorld),e.direction.transformDirection(u),c++}}},state:s}}function aA(e,t){let i=new aE(e,t),r=[],a=[];return{init:function(){r.length=0,a.length=0},state:{lightsArray:r,shadowsArray:a,lights:i},setupLights:function(e){i.setup(r,e)},setupLightsView:function(e){i.setupView(r,e)},pushLight:function(e){r.push(e)},pushShadow:function(e){a.push(e)}}}function aw(e,t){let i=new WeakMap;return{get:function(r,a=0){let s,n=i.get(r);return void 0===n?(s=new aA(e,t),i.set(r,[s])):a>=n.length?(s=new aA(e,t),n.push(s)):s=n[a],s},dispose:function(){i=new WeakMap}}}class aR extends tA{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class aC extends tA{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}let aL=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,aP=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function aI(e,t,i){let r=new iR,a=new F,s=new F,n=new en,o=new aR({depthPacking:3201}),h=new aC,c={},u=i.maxTextureSize,d={0:1,1:0,[l]:l},p=new ig({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new F},radius:{value:4}},vertexShader:aL,fragmentShader:aP}),m=p.clone();m.defines.HORIZONTAL_PASS=1;let f=new tJ;f.setAttribute("position",new tU(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new is(f,p),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let v=this.type;function x(t,i,r,a){let s=null,n=!0===r.isPointLight?t.customDistanceMaterial:t.customDepthMaterial;if(void 0!==n)s=n;else if(s=!0===r.isPointLight?h:o,e.localClippingEnabled&&!0===i.clipShadows&&Array.isArray(i.clippingPlanes)&&0!==i.clippingPlanes.length||i.displacementMap&&0!==i.displacementScale||i.alphaMap&&i.alphaTest>0||i.map&&i.alphaTest>0){let e=s.uuid,t=i.uuid,r=c[e];void 0===r&&(r={},c[e]=r);let a=r[t];void 0===a&&(a=s.clone(),r[t]=a,i.addEventListener("dispose",y)),s=a}return s.visible=i.visible,s.wireframe=i.wireframe,3===a?s.side=null!==i.shadowSide?i.shadowSide:i.side:s.side=null!==i.shadowSide?i.shadowSide:d[i.side],s.alphaMap=i.alphaMap,s.alphaTest=i.alphaTest,s.map=i.map,s.clipShadows=i.clipShadows,s.clippingPlanes=i.clippingPlanes,s.clipIntersection=i.clipIntersection,s.displacementMap=i.displacementMap,s.displacementScale=i.displacementScale,s.displacementBias=i.displacementBias,s.wireframeLinewidth=i.wireframeLinewidth,s.linewidth=i.linewidth,!0===r.isPointLight&&!0===s.isMeshDistanceMaterial&&(e.properties.get(s).light=r),s}function y(e){for(let t in e.target.removeEventListener("dispose",y),c){let i=c[t],r=e.target.uuid;r in i&&(i[r].dispose(),delete i[r])}}this.render=function(i,o,l){if(!1===_.enabled||!1===_.autoUpdate&&!1===_.needsUpdate||0===i.length)return;let h=e.getRenderTarget(),c=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let y=3!==v&&3===this.type,M=3===v&&3!==this.type;for(let h=0,c=i.length;h<c;h++){let c=i[h],d=c.shadow;if(void 0===d){console.warn("THREE.WebGLShadowMap:",c,"has no shadow.");continue}if(!1===d.autoUpdate&&!1===d.needsUpdate)continue;a.copy(d.mapSize);let _=d.getFrameExtents();if(a.multiply(_),s.copy(d.mapSize),(a.x>u||a.y>u)&&(a.x>u&&(s.x=Math.floor(u/_.x),a.x=s.x*_.x,d.mapSize.x=s.x),a.y>u&&(s.y=Math.floor(u/_.y),a.y=s.y*_.y,d.mapSize.y=s.y)),null===d.map||!0===y||!0===M){let e=3!==this.type?{minFilter:1003,magFilter:1003}:{};null!==d.map&&d.map.dispose(),d.map=new el(a.x,a.y,e),d.map.texture.name=c.name+".shadowMap",d.camera.updateProjectionMatrix()}e.setRenderTarget(d.map),e.clear();let v=d.getViewportCount();for(let i=0;i<v;i++){let a=d.getViewport(i);n.set(s.x*a.x,s.y*a.y,s.x*a.z,s.y*a.w),f.viewport(n),d.updateMatrices(c,i),r=d.getFrustum(),function i(a,s,n,o,l){if(!1===a.visible)return;if(a.layers.test(s.layers)&&(a.isMesh||a.isLine||a.isPoints)&&(a.castShadow||a.receiveShadow&&3===l)&&(!a.frustumCulled||r.intersectsObject(a))){a.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,a.matrixWorld);let i=t.update(a),r=a.material;if(Array.isArray(r)){let t=i.groups;for(let h=0,c=t.length;h<c;h++){let c=t[h],u=r[c.materialIndex];if(u&&u.visible){let t=x(a,u,o,l);a.onBeforeShadow(e,a,s,n,i,t,c),e.renderBufferDirect(n,null,i,t,a,c),a.onAfterShadow(e,a,s,n,i,t,c)}}}else if(r.visible){let t=x(a,r,o,l);a.onBeforeShadow(e,a,s,n,i,t,null),e.renderBufferDirect(n,null,i,t,a,null),a.onAfterShadow(e,a,s,n,i,t,null)}}let h=a.children;for(let e=0,t=h.length;e<t;e++)i(h[e],s,n,o,l)}(o,l,d.camera,c,this.type)}!0!==d.isPointLightShadow&&3===this.type&&function(i,r){let s=t.update(g);p.defines.VSM_SAMPLES!==i.blurSamples&&(p.defines.VSM_SAMPLES=i.blurSamples,m.defines.VSM_SAMPLES=i.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),null===i.mapPass&&(i.mapPass=new el(a.x,a.y)),p.uniforms.shadow_pass.value=i.map.texture,p.uniforms.resolution.value=i.mapSize,p.uniforms.radius.value=i.radius,e.setRenderTarget(i.mapPass),e.clear(),e.renderBufferDirect(r,null,s,p,g,null),m.uniforms.shadow_pass.value=i.mapPass.texture,m.uniforms.resolution.value=i.mapSize,m.uniforms.radius.value=i.radius,e.setRenderTarget(i.map),e.clear(),e.renderBufferDirect(r,null,s,m,g,null)}(d,l),d.needsUpdate=!1}v=this.type,_.needsUpdate=!1,e.setRenderTarget(h,c,d)}}function aU(e,t,i){let r=i.isWebGL2,a=new function(){let t=!1,i=new en,r=null,a=new en(0,0,0,0);return{setMask:function(i){r===i||t||(e.colorMask(i,i,i,i),r=i)},setLocked:function(e){t=e},setClear:function(t,r,s,n,o){!0===o&&(t*=n,r*=n,s*=n),i.set(t,r,s,n),!1===a.equals(i)&&(e.clearColor(t,r,s,n),a.copy(i))},reset:function(){t=!1,r=null,a.set(-1,0,0,0)}}},s=new function(){let t=!1,i=null,r=null,a=null;return{setTest:function(t){t?V(e.DEPTH_TEST):W(e.DEPTH_TEST)},setMask:function(r){i===r||t||(e.depthMask(r),i=r)},setFunc:function(t){if(r!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:default:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL)}r=t}},setLocked:function(e){t=e},setClear:function(t){a!==t&&(e.clearDepth(t),a=t)},reset:function(){t=!1,i=null,r=null,a=null}}},n=new function(){let t=!1,i=null,r=null,a=null,s=null,n=null,o=null,l=null,h=null;return{setTest:function(i){t||(i?V(e.STENCIL_TEST):W(e.STENCIL_TEST))},setMask:function(r){i===r||t||(e.stencilMask(r),i=r)},setFunc:function(t,i,n){(r!==t||a!==i||s!==n)&&(e.stencilFunc(t,i,n),r=t,a=i,s=n)},setOp:function(t,i,r){(n!==t||o!==i||l!==r)&&(e.stencilOp(t,i,r),n=t,o=i,l=r)},setLocked:function(e){t=e},setClear:function(t){h!==t&&(e.clearStencil(t),h=t)},reset:function(){t=!1,i=null,r=null,a=null,s=null,n=null,o=null,l=null,h=null}}},o=new WeakMap,c=new WeakMap,u={},d={},p=new WeakMap,m=[],f=null,g=!1,_=null,v=null,x=null,y=null,M=null,S=null,b=null,T=new tb(0,0,0),E=0,A=!1,w=null,R=null,C=null,L=null,P=null,I=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),U=!1,N=e.getParameter(e.VERSION);-1!==N.indexOf("WebGL")?U=parseFloat(/^WebGL (\d)/.exec(N)[1])>=1:-1!==N.indexOf("OpenGL ES")&&(U=parseFloat(/^OpenGL ES (\d)/.exec(N)[1])>=2);let D=null,O={},F=e.getParameter(e.SCISSOR_BOX),B=e.getParameter(e.VIEWPORT),z=new en().fromArray(F),H=new en().fromArray(B);function G(t,i,a,s){let n=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<a;o++)r&&(t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY)?e.texImage3D(i,0,e.RGBA,1,1,s,0,e.RGBA,e.UNSIGNED_BYTE,n):e.texImage2D(i+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,n);return o}let k={};function V(t){!0!==u[t]&&(e.enable(t),u[t]=!0)}function W(t){!1!==u[t]&&(e.disable(t),u[t]=!1)}k[e.TEXTURE_2D]=G(e.TEXTURE_2D,e.TEXTURE_2D,1),k[e.TEXTURE_CUBE_MAP]=G(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),r&&(k[e.TEXTURE_2D_ARRAY]=G(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),k[e.TEXTURE_3D]=G(e.TEXTURE_3D,e.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),s.setClear(1),n.setClear(0),V(e.DEPTH_TEST),s.setFunc(3),Y(!1),Z(1),V(e.CULL_FACE),q(0);let X={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};if(r)X[103]=e.MIN,X[104]=e.MAX;else{let e=t.get("EXT_blend_minmax");null!==e&&(X[103]=e.MIN_EXT,X[104]=e.MAX_EXT)}let j={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function q(t,i,r,a,s,n,o,l,c,u){if(0===t){!0===g&&(W(e.BLEND),g=!1);return}if(!1===g&&(V(e.BLEND),g=!0),5!==t){if(t!==_||u!==A){if((100!==v||100!==M)&&(e.blendEquation(e.FUNC_ADD),v=100,M=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case h:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case h:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",t)}x=null,y=null,S=null,b=null,T.set(0,0,0),E=0,_=t,A=u}return}s=s||i,n=n||r,o=o||a,(i!==v||s!==M)&&(e.blendEquationSeparate(X[i],X[s]),v=i,M=s),(r!==x||a!==y||n!==S||o!==b)&&(e.blendFuncSeparate(j[r],j[a],j[n],j[o]),x=r,y=a,S=n,b=o),(!1===l.equals(T)||c!==E)&&(e.blendColor(l.r,l.g,l.b,c),T.copy(l),E=c),_=t,A=!1}function Y(t){w!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),w=t)}function Z(t){0!==t?(V(e.CULL_FACE),t!==R&&(1===t?e.cullFace(e.BACK):2===t?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):W(e.CULL_FACE),R=t}function K(t,i,r){t?(V(e.POLYGON_OFFSET_FILL),(L!==i||P!==r)&&(e.polygonOffset(i,r),L=i,P=r)):W(e.POLYGON_OFFSET_FILL)}return{buffers:{color:a,depth:s,stencil:n},enable:V,disable:W,bindFramebuffer:function(t,i){return d[t]!==i&&(e.bindFramebuffer(t,i),d[t]=i,r&&(t===e.DRAW_FRAMEBUFFER&&(d[e.FRAMEBUFFER]=i),t===e.FRAMEBUFFER&&(d[e.DRAW_FRAMEBUFFER]=i)),!0)},drawBuffers:function(r,a){let s=m,n=!1;if(r)if(void 0===(s=p.get(a))&&(s=[],p.set(a,s)),r.isWebGLMultipleRenderTargets){let t=r.texture;if(s.length!==t.length||s[0]!==e.COLOR_ATTACHMENT0){for(let i=0,r=t.length;i<r;i++)s[i]=e.COLOR_ATTACHMENT0+i;s.length=t.length,n=!0}}else s[0]!==e.COLOR_ATTACHMENT0&&(s[0]=e.COLOR_ATTACHMENT0,n=!0);else s[0]!==e.BACK&&(s[0]=e.BACK,n=!0);n&&(i.isWebGL2?e.drawBuffers(s):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(s))},useProgram:function(t){return f!==t&&(e.useProgram(t),f=t,!0)},setBlending:q,setMaterial:function(t,i){t.side===l?W(e.CULL_FACE):V(e.CULL_FACE);let r=1===t.side;i&&(r=!r),Y(r),1===t.blending&&!1===t.transparent?q(0):q(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),s.setFunc(t.depthFunc),s.setTest(t.depthTest),s.setMask(t.depthWrite),a.setMask(t.colorWrite);let o=t.stencilWrite;n.setTest(o),o&&(n.setMask(t.stencilWriteMask),n.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),n.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),K(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),!0===t.alphaToCoverage?V(e.SAMPLE_ALPHA_TO_COVERAGE):W(e.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:Y,setCullFace:Z,setLineWidth:function(t){t!==C&&(U&&e.lineWidth(t),C=t)},setPolygonOffset:K,setScissorTest:function(t){t?V(e.SCISSOR_TEST):W(e.SCISSOR_TEST)},activeTexture:function(t){void 0===t&&(t=e.TEXTURE0+I-1),D!==t&&(e.activeTexture(t),D=t)},bindTexture:function(t,i,r){void 0===r&&(r=null===D?e.TEXTURE0+I-1:D);let a=O[r];void 0===a&&(a={type:void 0,texture:void 0},O[r]=a),(a.type!==t||a.texture!==i)&&(D!==r&&(e.activeTexture(r),D=r),e.bindTexture(t,i||k[t]),a.type=t,a.texture=i)},unbindTexture:function(){let t=O[D];void 0!==t&&void 0!==t.type&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)},compressedTexImage2D:function(){try{e.compressedTexImage2D.apply(e,arguments)}catch(e){console.error("THREE.WebGLState:",e)}},compressedTexImage3D:function(){try{e.compressedTexImage3D.apply(e,arguments)}catch(e){console.error("THREE.WebGLState:",e)}},texImage2D:function(){try{e.texImage2D.apply(e,arguments)}catch(e){console.error("THREE.WebGLState:",e)}},texImage3D:function(){try{e.texImage3D.apply(e,arguments)}catch(e){console.error("THREE.WebGLState:",e)}},updateUBOMapping:function(t,i){let r=c.get(i);void 0===r&&(r=new WeakMap,c.set(i,r));let a=r.get(t);void 0===a&&(a=e.getUniformBlockIndex(i,t.name),r.set(t,a))},uniformBlockBinding:function(t,i){let r=c.get(i).get(t);o.get(i)!==r&&(e.uniformBlockBinding(i,r,t.__bindingPointIndex),o.set(i,r))},texStorage2D:function(){try{e.texStorage2D.apply(e,arguments)}catch(e){console.error("THREE.WebGLState:",e)}},texStorage3D:function(){try{e.texStorage3D.apply(e,arguments)}catch(e){console.error("THREE.WebGLState:",e)}},texSubImage2D:function(){try{e.texSubImage2D.apply(e,arguments)}catch(e){console.error("THREE.WebGLState:",e)}},texSubImage3D:function(){try{e.texSubImage3D.apply(e,arguments)}catch(e){console.error("THREE.WebGLState:",e)}},compressedTexSubImage2D:function(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(e){console.error("THREE.WebGLState:",e)}},compressedTexSubImage3D:function(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(e){console.error("THREE.WebGLState:",e)}},scissor:function(t){!1===z.equals(t)&&(e.scissor(t.x,t.y,t.z,t.w),z.copy(t))},viewport:function(t){!1===H.equals(t)&&(e.viewport(t.x,t.y,t.z,t.w),H.copy(t))},reset:function(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),e.clearDepth(1),e.stencilMask(0xffffffff),e.stencilFunc(e.ALWAYS,0,0xffffffff),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),!0===r&&(e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null)),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),u={},D=null,O={},d={},p=new WeakMap,m=[],f=null,g=!1,_=null,v=null,x=null,y=null,M=null,S=null,b=null,T=new tb(0,0,0),E=0,A=!1,w=null,R=null,C=null,L=null,P=null,z.set(0,0,e.canvas.width,e.canvas.height),H.set(0,0,e.canvas.width,e.canvas.height),a.reset(),s.reset(),n.reset()}}}function aN(e,t,i,r,a,s,n){let o,l=a.isWebGL2,h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=!(typeof navigator>"u")&&/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap,d=new WeakMap,f=!1;try{f="u">typeof OffscreenCanvas&&null!==new OffscreenCanvas(1,1).getContext("2d")}catch{}function _(e,t){return f?new OffscreenCanvas(e,t):V("canvas")}function v(e,t,i,r){let a=1;if((e.width>r||e.height>r)&&(a=r/Math.max(e.width,e.height)),a<1||!0===t)if(!("u">typeof HTMLImageElement&&e instanceof HTMLImageElement||"u">typeof HTMLCanvasElement&&e instanceof HTMLCanvasElement||"u">typeof ImageBitmap&&e instanceof ImageBitmap))return"data"in e&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+e.width+"x"+e.height+")."),e;else{let r=t?U:Math.floor,s=r(a*e.width),n=r(a*e.height);void 0===o&&(o=_(s,n));let l=i?_(s,n):o;return l.width=s,l.height=n,l.getContext("2d").drawImage(e,0,0,s,n),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+e.width+"x"+e.height+") to ("+s+"x"+n+")."),l}return e}function M(e){return I(e.width)&&I(e.height)}function S(e,t){return e.generateMipmaps&&t&&1003!==e.minFilter&&e.minFilter!==p}function b(t){e.generateMipmap(t)}function T(i,r,a,s,n=!1){if(!1===l)return r;if(null!==i){if(void 0!==e[i])return e[i];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+i+"'")}let o=r;if(r===e.RED&&(a===e.FLOAT&&(o=e.R32F),a===e.HALF_FLOAT&&(o=e.R16F),a===e.UNSIGNED_BYTE&&(o=e.R8)),r===e.RED_INTEGER&&(a===e.UNSIGNED_BYTE&&(o=e.R8UI),a===e.UNSIGNED_SHORT&&(o=e.R16UI),a===e.UNSIGNED_INT&&(o=e.R32UI),a===e.BYTE&&(o=e.R8I),a===e.SHORT&&(o=e.R16I),a===e.INT&&(o=e.R32I)),r===e.RG&&(a===e.FLOAT&&(o=e.RG32F),a===e.HALF_FLOAT&&(o=e.RG16F),a===e.UNSIGNED_BYTE&&(o=e.RG8)),r===e.RGBA){let t=n?x:J.getTransfer(s);a===e.FLOAT&&(o=e.RGBA32F),a===e.HALF_FLOAT&&(o=e.RGBA16F),a===e.UNSIGNED_BYTE&&(o=t===y?e.SRGB8_ALPHA8:e.RGBA8),a===e.UNSIGNED_SHORT_4_4_4_4&&(o=e.RGBA4),a===e.UNSIGNED_SHORT_5_5_5_1&&(o=e.RGB5_A1)}return(o===e.R16F||o===e.R32F||o===e.RG16F||o===e.RG32F||o===e.RGBA16F||o===e.RGBA32F)&&t.get("EXT_color_buffer_float"),o}function E(e,t,i){return!0===S(e,i)||e.isFramebufferTexture&&1003!==e.minFilter&&e.minFilter!==p?Math.log2(Math.max(t.width,t.height))+1:void 0!==e.mipmaps&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function A(t){return 1003===t||1004===t||1005===t?e.NEAREST:e.LINEAR}function w(e){let t=e.target;t.removeEventListener("dispose",w),function(e){let t=r.get(e);if(void 0===t.__webglInit)return;let i=e.source,a=d.get(i);if(a){let r=a[t.__cacheKey];r.usedTimes--,0===r.usedTimes&&C(e),0===Object.keys(a).length&&d.delete(i)}r.remove(e)}(t),t.isVideoTexture&&u.delete(t)}function R(t){let i=t.target;i.removeEventListener("dispose",R),function(t){let i=t.texture,a=r.get(t),s=r.get(i);if(void 0!==s.__webglTexture&&(e.deleteTexture(s.__webglTexture),n.memory.textures--),t.depthTexture&&t.depthTexture.dispose(),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(a.__webglFramebuffer[t]))for(let i=0;i<a.__webglFramebuffer[t].length;i++)e.deleteFramebuffer(a.__webglFramebuffer[t][i]);else e.deleteFramebuffer(a.__webglFramebuffer[t]);a.__webglDepthbuffer&&e.deleteRenderbuffer(a.__webglDepthbuffer[t])}else{if(Array.isArray(a.__webglFramebuffer))for(let t=0;t<a.__webglFramebuffer.length;t++)e.deleteFramebuffer(a.__webglFramebuffer[t]);else e.deleteFramebuffer(a.__webglFramebuffer);if(a.__webglDepthbuffer&&e.deleteRenderbuffer(a.__webglDepthbuffer),a.__webglMultisampledFramebuffer&&e.deleteFramebuffer(a.__webglMultisampledFramebuffer),a.__webglColorRenderbuffer)for(let t=0;t<a.__webglColorRenderbuffer.length;t++)a.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(a.__webglColorRenderbuffer[t]);a.__webglDepthRenderbuffer&&e.deleteRenderbuffer(a.__webglDepthRenderbuffer)}if(t.isWebGLMultipleRenderTargets)for(let t=0,a=i.length;t<a;t++){let a=r.get(i[t]);a.__webglTexture&&(e.deleteTexture(a.__webglTexture),n.memory.textures--),r.remove(i[t])}r.remove(i),r.remove(t)}(i)}function C(t){let i=r.get(t);e.deleteTexture(i.__webglTexture);let a=t.source,s=d.get(a);delete s[i.__cacheKey],n.memory.textures--}let L=0;function P(t,a){var s;let o,l=r.get(t);if(t.isVideoTexture&&(s=t,o=n.render.frame,u.get(s)!==o&&(u.set(s,o),s.update())),!1===t.isRenderTargetTexture&&t.version>0&&l.__version!==t.version){let e=t.image;if(null===e)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if(!1!==e.complete)return void z(l,t,a);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}i.bindTexture(e.TEXTURE_2D,l.__webglTexture,e.TEXTURE0+a)}let N={1e3:e.REPEAT,1001:e.CLAMP_TO_EDGE,1002:e.MIRRORED_REPEAT},D={1003:e.NEAREST,1004:e.NEAREST_MIPMAP_NEAREST,1005:e.NEAREST_MIPMAP_LINEAR,[p]:e.LINEAR,1007:e.LINEAR_MIPMAP_NEAREST,[m]:e.LINEAR_MIPMAP_LINEAR},O={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function F(i,s,n){if(n?(e.texParameteri(i,e.TEXTURE_WRAP_S,N[s.wrapS]),e.texParameteri(i,e.TEXTURE_WRAP_T,N[s.wrapT]),(i===e.TEXTURE_3D||i===e.TEXTURE_2D_ARRAY)&&e.texParameteri(i,e.TEXTURE_WRAP_R,N[s.wrapR]),e.texParameteri(i,e.TEXTURE_MAG_FILTER,D[s.magFilter]),e.texParameteri(i,e.TEXTURE_MIN_FILTER,D[s.minFilter])):(e.texParameteri(i,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(i,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),(i===e.TEXTURE_3D||i===e.TEXTURE_2D_ARRAY)&&e.texParameteri(i,e.TEXTURE_WRAP_R,e.CLAMP_TO_EDGE),(1001!==s.wrapS||1001!==s.wrapT)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),e.texParameteri(i,e.TEXTURE_MAG_FILTER,A(s.magFilter)),e.texParameteri(i,e.TEXTURE_MIN_FILTER,A(s.minFilter)),1003!==s.minFilter&&s.minFilter!==p&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),s.compareFunction&&(e.texParameteri(i,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(i,e.TEXTURE_COMPARE_FUNC,O[s.compareFunction])),!0===t.has("EXT_texture_filter_anisotropic")){let n=t.get("EXT_texture_filter_anisotropic");1003!==s.magFilter&&(1005===s.minFilter||s.minFilter===m)&&(1015!==s.type||!1!==t.has("OES_texture_float_linear"))&&(!1!==l||1016!==s.type||!1!==t.has("OES_texture_half_float_linear"))&&(s.anisotropy>1||r.get(s).__currentAnisotropy)&&(e.texParameterf(i,n.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(s.anisotropy,a.getMaxAnisotropy())),r.get(s).__currentAnisotropy=s.anisotropy)}}function B(t,i){let r,a=!1;void 0===t.__webglInit&&(t.__webglInit=!0,i.addEventListener("dispose",w));let s=i.source,o=d.get(s);void 0===o&&(o={},d.set(s,o));let l=((r=[]).push(i.wrapS),r.push(i.wrapT),r.push(i.wrapR||0),r.push(i.magFilter),r.push(i.minFilter),r.push(i.anisotropy),r.push(i.internalFormat),r.push(i.format),r.push(i.type),r.push(i.generateMipmaps),r.push(i.premultiplyAlpha),r.push(i.flipY),r.push(i.unpackAlignment),r.push(i.colorSpace),r.join());if(l!==t.__cacheKey){void 0===o[l]&&(o[l]={texture:e.createTexture(),usedTimes:0},n.memory.textures++,a=!0),o[l].usedTimes++;let r=o[t.__cacheKey];void 0!==r&&(o[t.__cacheKey].usedTimes--,0===r.usedTimes&&C(i)),t.__cacheKey=l,t.__webglTexture=o[l].texture}return a}function z(t,n,o){let h=e.TEXTURE_2D;(n.isDataArrayTexture||n.isCompressedArrayTexture)&&(h=e.TEXTURE_2D_ARRAY),n.isData3DTexture&&(h=e.TEXTURE_3D);let c=B(t,n),u=n.source;i.bindTexture(h,t.__webglTexture,e.TEXTURE0+o);let d=r.get(u);if(u.version!==d.__version||!0===c){let t;i.activeTexture(e.TEXTURE0+o);let r=J.getPrimaries(J.workingColorSpace),m=""===n.colorSpace?null:J.getPrimaries(n.colorSpace),f=""===n.colorSpace||r===m?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,n.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,n.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,f);let g=!l&&(1001!==n.wrapS||1001!==n.wrapT||1003!==n.minFilter&&n.minFilter!==p)&&!1===M(n.image),_=v(n.image,g,!1,a.maxTextureSize),x=M(_=j(n,_))||l,y=s.convert(n.format,n.colorSpace),A=s.convert(n.type),w=T(n.internalFormat,y,A,n.colorSpace,n.isVideoTexture);F(h,n,x);let R=n.mipmaps,C=l&&!0!==n.isVideoTexture&&36196!==w,L=void 0===d.__version||!0===c,P=E(n,_,x);if(n.isDepthTexture)w=e.DEPTH_COMPONENT,l?w=1015===n.type?e.DEPTH_COMPONENT32F:1014===n.type?e.DEPTH_COMPONENT24:1020===n.type?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT16:1015===n.type&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),1026===n.format&&w===e.DEPTH_COMPONENT&&1012!==n.type&&1014!==n.type&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),n.type=1014,A=s.convert(n.type)),1027===n.format&&w===e.DEPTH_COMPONENT&&(w=e.DEPTH_STENCIL,1020!==n.type&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),n.type=1020,A=s.convert(n.type))),L&&(C?i.texStorage2D(e.TEXTURE_2D,1,w,_.width,_.height):i.texImage2D(e.TEXTURE_2D,0,w,_.width,_.height,0,y,A,null));else if(n.isDataTexture)if(R.length>0&&x){C&&L&&i.texStorage2D(e.TEXTURE_2D,P,w,R[0].width,R[0].height);for(let r=0,a=R.length;r<a;r++)t=R[r],C?i.texSubImage2D(e.TEXTURE_2D,r,0,0,t.width,t.height,y,A,t.data):i.texImage2D(e.TEXTURE_2D,r,w,t.width,t.height,0,y,A,t.data);n.generateMipmaps=!1}else C?(L&&i.texStorage2D(e.TEXTURE_2D,P,w,_.width,_.height),i.texSubImage2D(e.TEXTURE_2D,0,0,0,_.width,_.height,y,A,_.data)):i.texImage2D(e.TEXTURE_2D,0,w,_.width,_.height,0,y,A,_.data);else if(n.isCompressedTexture)if(n.isCompressedArrayTexture){C&&L&&i.texStorage3D(e.TEXTURE_2D_ARRAY,P,w,R[0].width,R[0].height,_.depth);for(let r=0,a=R.length;r<a;r++)t=R[r],1023!==n.format?null!==y?C?i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,r,0,0,0,t.width,t.height,_.depth,y,t.data,0,0):i.compressedTexImage3D(e.TEXTURE_2D_ARRAY,r,w,t.width,t.height,_.depth,0,t.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):C?i.texSubImage3D(e.TEXTURE_2D_ARRAY,r,0,0,0,t.width,t.height,_.depth,y,A,t.data):i.texImage3D(e.TEXTURE_2D_ARRAY,r,w,t.width,t.height,_.depth,0,y,A,t.data)}else{C&&L&&i.texStorage2D(e.TEXTURE_2D,P,w,R[0].width,R[0].height);for(let r=0,a=R.length;r<a;r++)t=R[r],1023!==n.format?null!==y?C?i.compressedTexSubImage2D(e.TEXTURE_2D,r,0,0,t.width,t.height,y,t.data):i.compressedTexImage2D(e.TEXTURE_2D,r,w,t.width,t.height,0,t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):C?i.texSubImage2D(e.TEXTURE_2D,r,0,0,t.width,t.height,y,A,t.data):i.texImage2D(e.TEXTURE_2D,r,w,t.width,t.height,0,y,A,t.data)}else if(n.isDataArrayTexture)C?(L&&i.texStorage3D(e.TEXTURE_2D_ARRAY,P,w,_.width,_.height,_.depth),i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,_.width,_.height,_.depth,y,A,_.data)):i.texImage3D(e.TEXTURE_2D_ARRAY,0,w,_.width,_.height,_.depth,0,y,A,_.data);else if(n.isData3DTexture)C?(L&&i.texStorage3D(e.TEXTURE_3D,P,w,_.width,_.height,_.depth),i.texSubImage3D(e.TEXTURE_3D,0,0,0,0,_.width,_.height,_.depth,y,A,_.data)):i.texImage3D(e.TEXTURE_3D,0,w,_.width,_.height,_.depth,0,y,A,_.data);else if(n.isFramebufferTexture){if(L)if(C)i.texStorage2D(e.TEXTURE_2D,P,w,_.width,_.height);else{let t=_.width,r=_.height;for(let a=0;a<P;a++)i.texImage2D(e.TEXTURE_2D,a,w,t,r,0,y,A,null),t>>=1,r>>=1}}else if(R.length>0&&x){C&&L&&i.texStorage2D(e.TEXTURE_2D,P,w,R[0].width,R[0].height);for(let r=0,a=R.length;r<a;r++)t=R[r],C?i.texSubImage2D(e.TEXTURE_2D,r,0,0,y,A,t):i.texImage2D(e.TEXTURE_2D,r,w,y,A,t);n.generateMipmaps=!1}else C?(L&&i.texStorage2D(e.TEXTURE_2D,P,w,_.width,_.height),i.texSubImage2D(e.TEXTURE_2D,0,0,0,y,A,_)):i.texImage2D(e.TEXTURE_2D,0,w,y,A,_);S(n,x)&&b(h),d.__version=u.version,n.onUpdate&&n.onUpdate(n)}t.__version=n.version}function H(t,a,n,o,l,c){let u=s.convert(n.format,n.colorSpace),d=s.convert(n.type),p=T(n.internalFormat,u,d,n.colorSpace);if(!r.get(a).__hasExternalTextures){let t=Math.max(1,a.width>>c),r=Math.max(1,a.height>>c);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?i.texImage3D(l,c,p,t,r,a.depth,0,u,d,null):i.texImage2D(l,c,p,t,r,0,u,d,null)}i.bindFramebuffer(e.FRAMEBUFFER,t),X(a)?h.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,o,l,r.get(n).__webglTexture,0,W(a)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,o,l,r.get(n).__webglTexture,c),i.bindFramebuffer(e.FRAMEBUFFER,null)}function G(t,i,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),i.depthBuffer&&!i.stencilBuffer){let a=!0===l?e.DEPTH_COMPONENT24:e.DEPTH_COMPONENT16;if(r||X(i)){let t=i.depthTexture;t&&t.isDepthTexture&&(1015===t.type?a=e.DEPTH_COMPONENT32F:1014===t.type&&(a=e.DEPTH_COMPONENT24));let r=W(i);X(i)?h.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,r,a,i.width,i.height):e.renderbufferStorageMultisample(e.RENDERBUFFER,r,a,i.width,i.height)}else e.renderbufferStorage(e.RENDERBUFFER,a,i.width,i.height);e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,t)}else if(i.depthBuffer&&i.stencilBuffer){let a=W(i);r&&!1===X(i)?e.renderbufferStorageMultisample(e.RENDERBUFFER,a,e.DEPTH24_STENCIL8,i.width,i.height):X(i)?h.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,a,e.DEPTH24_STENCIL8,i.width,i.height):e.renderbufferStorage(e.RENDERBUFFER,e.DEPTH_STENCIL,i.width,i.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.RENDERBUFFER,t)}else{let t=!0===i.isWebGLMultipleRenderTargets?i.texture:[i.texture];for(let a=0;a<t.length;a++){let n=t[a],o=s.convert(n.format,n.colorSpace),l=s.convert(n.type),c=T(n.internalFormat,o,l,n.colorSpace),u=W(i);r&&!1===X(i)?e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,i.width,i.height):X(i)?h.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,u,c,i.width,i.height):e.renderbufferStorage(e.RENDERBUFFER,c,i.width,i.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function k(t){let a=r.get(t),s=!0===t.isWebGLCubeRenderTarget;if(t.depthTexture&&!a.__autoAllocateDepthBuffer){if(s)throw Error("target.depthTexture not supported in Cube render targets");var n=a.__webglFramebuffer;if(t&&t.isWebGLCubeRenderTarget)throw Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(e.FRAMEBUFFER,n),!(t.depthTexture&&t.depthTexture.isDepthTexture))throw Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");r.get(t.depthTexture).__webglTexture&&t.depthTexture.image.width===t.width&&t.depthTexture.image.height===t.height||(t.depthTexture.image.width=t.width,t.depthTexture.image.height=t.height,t.depthTexture.needsUpdate=!0),P(t.depthTexture,0);let o=r.get(t.depthTexture).__webglTexture,l=W(t);if(1026===t.depthTexture.format)X(t)?h.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,o,0,l):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,o,0);else if(1027===t.depthTexture.format)X(t)?h.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,o,0,l):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,o,0);else throw Error("Unknown depthTexture format")}else if(s){a.__webglDepthbuffer=[];for(let r=0;r<6;r++)i.bindFramebuffer(e.FRAMEBUFFER,a.__webglFramebuffer[r]),a.__webglDepthbuffer[r]=e.createRenderbuffer(),G(a.__webglDepthbuffer[r],t,!1)}else i.bindFramebuffer(e.FRAMEBUFFER,a.__webglFramebuffer),a.__webglDepthbuffer=e.createRenderbuffer(),G(a.__webglDepthbuffer,t,!1);i.bindFramebuffer(e.FRAMEBUFFER,null)}function W(e){return Math.min(a.maxSamples,e.samples)}function X(e){let i=r.get(e);return l&&e.samples>0&&!0===t.has("WEBGL_multisampled_render_to_texture")&&!1!==i.__useRenderToTexture}function j(e,i){let r=e.colorSpace,a=e.format,s=e.type;return!0===e.isCompressedTexture||!0===e.isVideoTexture||1035===e.format||r!==g&&""!==r&&(J.getTransfer(r)===y?!1===l?!0===t.has("EXT_sRGB")&&1023===a?(e.format=1035,e.minFilter=p,e.generateMipmaps=!1):i=ee.sRGBToLinear(i):(1023!==a||1009!==s)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",r)),i}this.allocateTextureUnit=function(){let e=L;return e>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+e+" texture units while this GPU supports only "+a.maxTextures),L+=1,e},this.resetTextureUnits=function(){L=0},this.setTexture2D=P,this.setTexture2DArray=function(t,a){let s=r.get(t);t.version>0&&s.__version!==t.version?z(s,t,a):i.bindTexture(e.TEXTURE_2D_ARRAY,s.__webglTexture,e.TEXTURE0+a)},this.setTexture3D=function(t,a){let s=r.get(t);t.version>0&&s.__version!==t.version?z(s,t,a):i.bindTexture(e.TEXTURE_3D,s.__webglTexture,e.TEXTURE0+a)},this.setTextureCube=function(t,n){let o=r.get(t);t.version>0&&o.__version!==t.version?function(t,n,o){if(6!==n.image.length)return;let h=B(t,n),c=n.source;i.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+o);let u=r.get(c);if(c.version!==u.__version||!0===h){let t;i.activeTexture(e.TEXTURE0+o);let r=J.getPrimaries(J.workingColorSpace),d=""===n.colorSpace?null:J.getPrimaries(n.colorSpace),p=""===n.colorSpace||r===d?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,n.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,n.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,p);let m=n.isCompressedTexture||n.image[0].isCompressedTexture,f=n.image[0]&&n.image[0].isDataTexture,g=[];for(let e=0;e<6;e++)m||f?g[e]=f?n.image[e].image:n.image[e]:g[e]=v(n.image[e],!1,!0,a.maxCubemapSize),g[e]=j(n,g[e]);let _=g[0],x=M(_)||l,y=s.convert(n.format,n.colorSpace),A=s.convert(n.type),w=T(n.internalFormat,y,A,n.colorSpace),R=l&&!0!==n.isVideoTexture,C=void 0===u.__version||!0===h,L=E(n,_,x);if(F(e.TEXTURE_CUBE_MAP,n,x),m){R&&C&&i.texStorage2D(e.TEXTURE_CUBE_MAP,L,w,_.width,_.height);for(let r=0;r<6;r++){t=g[r].mipmaps;for(let a=0;a<t.length;a++){let s=t[a];1023!==n.format?null!==y?R?i.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+r,a,0,0,s.width,s.height,y,s.data):i.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+r,a,w,s.width,s.height,0,s.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):R?i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+r,a,0,0,s.width,s.height,y,A,s.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+r,a,w,s.width,s.height,0,y,A,s.data)}}}else{t=n.mipmaps,R&&C&&(t.length>0&&L++,i.texStorage2D(e.TEXTURE_CUBE_MAP,L,w,g[0].width,g[0].height));for(let r=0;r<6;r++)if(f){R?i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+r,0,0,0,g[r].width,g[r].height,y,A,g[r].data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+r,0,w,g[r].width,g[r].height,0,y,A,g[r].data);for(let a=0;a<t.length;a++){let s=t[a].image[r].image;R?i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+r,a+1,0,0,s.width,s.height,y,A,s.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+r,a+1,w,s.width,s.height,0,y,A,s.data)}}else{R?i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+r,0,0,0,y,A,g[r]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+r,0,w,y,A,g[r]);for(let a=0;a<t.length;a++){let s=t[a];R?i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+r,a+1,0,0,y,A,s.image[r]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+r,a+1,w,y,A,s.image[r])}}}S(n,x)&&b(e.TEXTURE_CUBE_MAP),u.__version=c.version,n.onUpdate&&n.onUpdate(n)}t.__version=n.version}(o,t,n):i.bindTexture(e.TEXTURE_CUBE_MAP,o.__webglTexture,e.TEXTURE0+n)},this.rebindTextures=function(t,i,a){let s=r.get(t);void 0!==i&&H(s.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),void 0!==a&&k(t)},this.setupRenderTarget=function(t){let o=t.texture,h=r.get(t),c=r.get(o);t.addEventListener("dispose",R),!0!==t.isWebGLMultipleRenderTargets&&(void 0===c.__webglTexture&&(c.__webglTexture=e.createTexture()),c.__version=o.version,n.memory.textures++);let u=!0===t.isWebGLCubeRenderTarget,d=!0===t.isWebGLMultipleRenderTargets,p=M(t)||l;if(u){h.__webglFramebuffer=[];for(let t=0;t<6;t++)if(l&&o.mipmaps&&o.mipmaps.length>0){h.__webglFramebuffer[t]=[];for(let i=0;i<o.mipmaps.length;i++)h.__webglFramebuffer[t][i]=e.createFramebuffer()}else h.__webglFramebuffer[t]=e.createFramebuffer()}else{if(l&&o.mipmaps&&o.mipmaps.length>0){h.__webglFramebuffer=[];for(let t=0;t<o.mipmaps.length;t++)h.__webglFramebuffer[t]=e.createFramebuffer()}else h.__webglFramebuffer=e.createFramebuffer();if(d)if(a.drawBuffers){let i=t.texture;for(let t=0,a=i.length;t<a;t++){let a=r.get(i[t]);void 0===a.__webglTexture&&(a.__webglTexture=e.createTexture(),n.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(l&&t.samples>0&&!1===X(t)){let r=d?o:[o];h.__webglMultisampledFramebuffer=e.createFramebuffer(),h.__webglColorRenderbuffer=[],i.bindFramebuffer(e.FRAMEBUFFER,h.__webglMultisampledFramebuffer);for(let i=0;i<r.length;i++){let a=r[i];h.__webglColorRenderbuffer[i]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,h.__webglColorRenderbuffer[i]);let n=s.convert(a.format,a.colorSpace),o=s.convert(a.type),l=T(a.internalFormat,n,o,a.colorSpace,!0===t.isXRRenderTarget),c=W(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,c,l,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+i,e.RENDERBUFFER,h.__webglColorRenderbuffer[i])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(h.__webglDepthRenderbuffer=e.createRenderbuffer(),G(h.__webglDepthRenderbuffer,t,!0)),i.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){i.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),F(e.TEXTURE_CUBE_MAP,o,p);for(let i=0;i<6;i++)if(l&&o.mipmaps&&o.mipmaps.length>0)for(let r=0;r<o.mipmaps.length;r++)H(h.__webglFramebuffer[i][r],t,o,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+i,r);else H(h.__webglFramebuffer[i],t,o,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+i,0);S(o,p)&&b(e.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(d){let a=t.texture;for(let s=0,n=a.length;s<n;s++){let n=a[s],o=r.get(n);i.bindTexture(e.TEXTURE_2D,o.__webglTexture),F(e.TEXTURE_2D,n,p),H(h.__webglFramebuffer,t,n,e.COLOR_ATTACHMENT0+s,e.TEXTURE_2D,0),S(n,p)&&b(e.TEXTURE_2D)}i.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(l?r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),i.bindTexture(r,c.__webglTexture),F(r,o,p),l&&o.mipmaps&&o.mipmaps.length>0)for(let i=0;i<o.mipmaps.length;i++)H(h.__webglFramebuffer[i],t,o,e.COLOR_ATTACHMENT0,r,i);else H(h.__webglFramebuffer,t,o,e.COLOR_ATTACHMENT0,r,0);S(o,p)&&b(r),i.unbindTexture()}t.depthBuffer&&k(t)},this.updateRenderTargetMipmap=function(t){let a=M(t)||l,s=!0===t.isWebGLMultipleRenderTargets?t.texture:[t.texture];for(let n=0,o=s.length;n<o;n++){let o=s[n];if(S(o,a)){let a=t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:e.TEXTURE_2D,s=r.get(o).__webglTexture;i.bindTexture(a,s),b(a),i.unbindTexture()}}},this.updateMultisampleRenderTarget=function(t){if(l&&t.samples>0&&!1===X(t)){let a=t.isWebGLMultipleRenderTargets?t.texture:[t.texture],s=t.width,n=t.height,o=e.COLOR_BUFFER_BIT,l=[],h=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=!0===t.isWebGLMultipleRenderTargets;if(d)for(let t=0;t<a.length;t++)i.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),i.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);i.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer),i.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let i=0;i<a.length;i++){l.push(e.COLOR_ATTACHMENT0+i),t.depthBuffer&&l.push(h);let p=void 0!==u.__ignoreDepthValues&&u.__ignoreDepthValues;if(!1===p&&(t.depthBuffer&&(o|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&(o|=e.STENCIL_BUFFER_BIT)),d&&e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[i]),!0===p&&(e.invalidateFramebuffer(e.READ_FRAMEBUFFER,[h]),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[h])),d){let t=r.get(a[i]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,s,n,0,0,s,n,o,e.NEAREST),c&&e.invalidateFramebuffer(e.READ_FRAMEBUFFER,l)}if(i.bindFramebuffer(e.READ_FRAMEBUFFER,null),i.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<a.length;t++){i.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let s=r.get(a[t]).__webglTexture;i.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,s,0)}i.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}},this.setupDepthRenderbuffer=k,this.setupFrameBufferTexture=H,this.useMultisampledRTT=X}function aD(e,t,i){let r=i.isWebGL2;return{convert:function(i,a=""){let s,n=J.getTransfer(a);if(1009===i)return e.UNSIGNED_BYTE;if(1017===i)return e.UNSIGNED_SHORT_4_4_4_4;if(1018===i)return e.UNSIGNED_SHORT_5_5_5_1;if(1010===i)return e.BYTE;if(1011===i)return e.SHORT;if(1012===i)return e.UNSIGNED_SHORT;if(1013===i)return e.INT;if(1014===i)return e.UNSIGNED_INT;if(1015===i)return e.FLOAT;if(1016===i)return r?e.HALF_FLOAT:null!==(s=t.get("OES_texture_half_float"))?s.HALF_FLOAT_OES:null;if(1021===i)return e.ALPHA;if(1023===i)return e.RGBA;if(1024===i)return e.LUMINANCE;if(1025===i)return e.LUMINANCE_ALPHA;if(1026===i)return e.DEPTH_COMPONENT;if(1027===i)return e.DEPTH_STENCIL;if(1035===i)return null!==(s=t.get("EXT_sRGB"))?s.SRGB_ALPHA_EXT:null;if(1028===i)return e.RED;if(1029===i)return e.RED_INTEGER;if(1030===i)return e.RG;if(1031===i)return e.RG_INTEGER;if(1033===i)return e.RGBA_INTEGER;if(33776===i||33777===i||33778===i||33779===i)if(n===y)if(null===(s=t.get("WEBGL_compressed_texture_s3tc_srgb")))return null;else{if(33776===i)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(33777===i)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(33778===i)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(33779===i)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(null===(s=t.get("WEBGL_compressed_texture_s3tc")))return null;if(33776===i)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(33777===i)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(33778===i)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(33779===i)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(35840===i||35841===i||35842===i||35843===i)if(null===(s=t.get("WEBGL_compressed_texture_pvrtc")))return null;else{if(35840===i)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(35841===i)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(35842===i)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(35843===i)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(36196===i)return null!==(s=t.get("WEBGL_compressed_texture_etc1"))?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(37492===i||37496===i)if(null===(s=t.get("WEBGL_compressed_texture_etc")))return null;else{if(37492===i)return n===y?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(37496===i)return n===y?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}if(37808===i||37809===i||37810===i||37811===i||37812===i||37813===i||37814===i||37815===i||37816===i||37817===i||37818===i||37819===i||37820===i||37821===i)if(null===(s=t.get("WEBGL_compressed_texture_astc")))return null;else{if(37808===i)return n===y?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(37809===i)return n===y?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(37810===i)return n===y?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(37811===i)return n===y?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(37812===i)return n===y?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(37813===i)return n===y?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(37814===i)return n===y?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(37815===i)return n===y?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(37816===i)return n===y?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(37817===i)return n===y?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(37818===i)return n===y?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(37819===i)return n===y?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(37820===i)return n===y?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(37821===i)return n===y?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}if(36492===i||36494===i||36495===i)if(null===(s=t.get("EXT_texture_compression_bptc")))return null;else{if(36492===i)return n===y?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(36494===i)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(36495===i)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(36283===i||36284===i||36285===i||36286===i)if(null===(s=t.get("EXT_texture_compression_rgtc")))return null;else{if(36492===i)return s.COMPRESSED_RED_RGTC1_EXT;if(36284===i)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(36285===i)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(36286===i)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return 1020===i?r?e.UNSIGNED_INT_24_8:null!==(s=t.get("WEBGL_depth_texture"))?s.UNSIGNED_INT_24_8_WEBGL:null:void 0!==e[i]?e[i]:null}}}class aO extends iv{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class aF extends tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}let aB={type:"move"};class az{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return null===this._hand&&(this._hand=new aF,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return null===this._targetRay&&(this._targetRay=new aF,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ef,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ef),this._targetRay}getGripSpace(){return null===this._grip&&(this._grip=new aF,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ef,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ef),this._grip}dispatchEvent(e){return null!==this._targetRay&&this._targetRay.dispatchEvent(e),null!==this._grip&&this._grip.dispatchEvent(e),null!==this._hand&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),null!==this._targetRay&&(this._targetRay.visible=!1),null!==this._grip&&(this._grip.visible=!1),null!==this._hand&&(this._hand.visible=!1),this}update(e,t,i){let r=null,a=null,s=null,n=this._targetRay,o=this._grip,l=this._hand;if(e&&"visible-blurred"!==t.session.visibilityState){if(l&&e.hand){for(let r of(s=!0,e.hand.values())){let e=t.getJointPose(r,i),a=this._getHandJoint(l,r);null!==e&&(a.matrix.fromArray(e.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,a.jointRadius=e.radius),a.visible=null!==e}let r=l.joints["index-finger-tip"],a=l.joints["thumb-tip"],n=r.position.distanceTo(a.position);l.inputState.pinching&&n>.025?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&n<=.015&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else null!==o&&e.gripSpace&&null!==(a=t.getPose(e.gripSpace,i))&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1);null!==n&&(null===(r=t.getPose(e.targetRaySpace,i))&&null!==a&&(r=a),null!==r&&(n.matrix.fromArray(r.transform.matrix),n.matrix.decompose(n.position,n.rotation,n.scale),n.matrixWorldNeedsUpdate=!0,r.linearVelocity?(n.hasLinearVelocity=!0,n.linearVelocity.copy(r.linearVelocity)):n.hasLinearVelocity=!1,r.angularVelocity?(n.hasAngularVelocity=!0,n.angularVelocity.copy(r.angularVelocity)):n.hasAngularVelocity=!1,this.dispatchEvent(aB)))}return null!==n&&(n.visible=null!==r),null!==o&&(o.visible=null!==a),null!==l&&(l.visible=null!==s),this}_getHandJoint(e,t){if(void 0===e.joints[t.jointName]){let i=new aF;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class aH extends b{constructor(e,t){super();let i=this,r=null,a=1,s=null,n="local-floor",o=1,l=null,h=null,c=null,u=null,d=null,p=null,m=t.getContextAttributes(),f=null,g=null,_=[],v=[],x=new F,y=null,M=new iv;M.layers.enable(1),M.viewport=new en;let S=new iv;S.layers.enable(2),S.viewport=new en;let b=[M,S],T=new aO;T.layers.enable(1),T.layers.enable(2);let E=null,A=null;function R(e){let t=v.indexOf(e.inputSource);if(-1===t)return;let i=_[t];void 0!==i&&(i.update(e.inputSource,e.frame,l||s),i.dispatchEvent({type:e.type,data:e.inputSource}))}function C(){r.removeEventListener("select",R),r.removeEventListener("selectstart",R),r.removeEventListener("selectend",R),r.removeEventListener("squeeze",R),r.removeEventListener("squeezestart",R),r.removeEventListener("squeezeend",R),r.removeEventListener("end",C),r.removeEventListener("inputsourceschange",L);for(let e=0;e<_.length;e++){let t=v[e];null!==t&&(v[e]=null,_[e].disconnect(t))}E=null,A=null,e.setRenderTarget(f),d=null,u=null,c=null,r=null,g=null,D.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(x.width,x.height,!1),i.dispatchEvent({type:"sessionend"})}function L(e){for(let t=0;t<e.removed.length;t++){let i=e.removed[t],r=v.indexOf(i);r>=0&&(v[r]=null,_[r].disconnect(i))}for(let t=0;t<e.added.length;t++){let i=e.added[t],r=v.indexOf(i);if(-1===r){for(let e=0;e<_.length;e++)if(e>=v.length){v.push(i),r=e;break}else if(null===v[e]){v[e]=i,r=e;break}if(-1===r)break}let a=_[r];a&&a.connect(i)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=_[e];return void 0===t&&(t=new az,_[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=_[e];return void 0===t&&(t=new az,_[e]=t),t.getGripSpace()},this.getHand=function(e){let t=_[e];return void 0===t&&(t=new az,_[e]=t),t.getHandSpace()},this.setFramebufferScaleFactor=function(e){a=e,!0===i.isPresenting&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(e){n=e,!0===i.isPresenting&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(e){l=e},this.getBaseLayer=function(){return null!==u?u:d},this.getBinding=function(){return c},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(h){if(null!==(r=h)){if(f=e.getRenderTarget(),r.addEventListener("select",R),r.addEventListener("selectstart",R),r.addEventListener("selectend",R),r.addEventListener("squeeze",R),r.addEventListener("squeezestart",R),r.addEventListener("squeezeend",R),r.addEventListener("end",C),r.addEventListener("inputsourceschange",L),!0!==m.xrCompatible&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(x),void 0===r.renderState.layers||!1===e.capabilities.isWebGL2){let i={antialias:void 0!==r.renderState.layers||m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:a};d=new XRWebGLLayer(r,t,i),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),g=new el(d.framebufferWidth,d.framebufferHeight,{format:1023,type:1009,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let i=null,s=null,n=null;m.depth&&(n=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,i=m.stencil?1027:1026,s=m.stencil?1020:1014);let o={colorFormat:t.RGBA8,depthFormat:n,scaleFactor:a};u=(c=new XRWebGLBinding(r,t)).createProjectionLayer(o),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),g=new el(u.textureWidth,u.textureHeight,{format:1023,type:1009,depthTexture:new rr(u.textureWidth,u.textureHeight,s,void 0,void 0,void 0,void 0,void 0,void 0,i),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:4*!!m.antialias}),e.properties.get(g).__ignoreDepthValues=u.ignoreDepthValues}g.isXRRenderTarget=!0,this.setFoveation(o),l=null,s=await r.requestReferenceSpace(n),D.setContext(r),D.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(null!==r)return r.environmentBlendMode};let P=new ef,I=new ef;function U(e,t){null===t?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){var t,i,a;let s,n,o,l,h,c,u,d,p,m,f,g,_;if(null===r)return;T.near=S.near=M.near=e.near,T.far=S.far=M.far=e.far,(E!==T.near||A!==T.far)&&(r.updateRenderState({depthNear:T.near,depthFar:T.far}),E=T.near,A=T.far);let v=e.parent,x=T.cameras;U(T,v);for(let e=0;e<x.length;e++)U(x[e],v);2===x.length?(P.setFromMatrixPosition(M.matrixWorld),I.setFromMatrixPosition(S.matrixWorld),s=P.distanceTo(I),n=M.projectionMatrix.elements,o=S.projectionMatrix.elements,l=n[14]/(n[10]-1),h=n[14]/(n[10]+1),c=(n[9]+1)/n[5],u=(n[9]-1)/n[5],d=(n[8]-1)/n[0],f=-((m=s/(-d+(p=(o[8]+1)/o[0])))*d),M.matrixWorld.decompose(T.position,T.quaternion,T.scale),T.translateX(f),T.translateZ(m),T.matrixWorld.compose(T.position,T.quaternion,T.scale),T.matrixWorldInverse.copy(T.matrixWorld).invert(),g=l+m,_=h+m,T.projectionMatrix.makePerspective(l*d-f,l*p+(s-f),c*h/_*g,u*h/_*g,g,_),T.projectionMatrixInverse.copy(T.projectionMatrix).invert()):T.projectionMatrix.copy(M.projectionMatrix),t=e,i=T,null===(a=v)?t.matrix.copy(i.matrixWorld):(t.matrix.copy(a.matrixWorld),t.matrix.invert(),t.matrix.multiply(i.matrixWorld)),t.matrix.decompose(t.position,t.quaternion,t.scale),t.updateMatrixWorld(!0),t.projectionMatrix.copy(i.projectionMatrix),t.projectionMatrixInverse.copy(i.projectionMatrixInverse),t.isPerspectiveCamera&&(t.fov=2*w*Math.atan(1/t.projectionMatrix.elements[5]),t.zoom=1)},this.getCamera=function(){return T},this.getFoveation=function(){if(null!==u||null!==d)return o},this.setFoveation=function(e){o=e,null!==u&&(u.fixedFoveation=e),null!==d&&void 0!==d.fixedFoveation&&(d.fixedFoveation=e)};let N=null,D=new iC;D.setAnimationLoop(function(t,r){if(h=r.getViewerPose(l||s),p=r,null!==h){let t=h.views;null!==d&&(e.setRenderTargetFramebuffer(g,d.framebuffer),e.setRenderTarget(g));let i=!1;t.length!==T.cameras.length&&(T.cameras.length=0,i=!0);for(let r=0;r<t.length;r++){let a=t[r],s=null;if(null!==d)s=d.getViewport(a);else{let t=c.getViewSubImage(u,a);s=t.viewport,0===r&&(e.setRenderTargetTextures(g,t.colorTexture,u.ignoreDepthValues?void 0:t.depthStencilTexture),e.setRenderTarget(g))}let n=b[r];void 0===n&&((n=new iv).layers.enable(r),n.viewport=new en,b[r]=n),n.matrix.fromArray(a.transform.matrix),n.matrix.decompose(n.position,n.quaternion,n.scale),n.projectionMatrix.fromArray(a.projectionMatrix),n.projectionMatrixInverse.copy(n.projectionMatrix).invert(),n.viewport.set(s.x,s.y,s.width,s.height),0===r&&(T.matrix.copy(n.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),!0===i&&T.cameras.push(n)}}for(let e=0;e<_.length;e++){let t=v[e],i=_[e];null!==t&&void 0!==i&&i.update(t,r,l||s)}N&&N(t,r),r.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:r}),p=null}),this.setAnimationLoop=function(e){N=e},this.dispose=function(){}}}function aG(e,t){function i(e,t){!0===e.matrixAutoUpdate&&e.updateMatrix(),t.value.copy(e.matrix)}function r(r,a){r.opacity.value=a.opacity,a.color&&r.diffuse.value.copy(a.color),a.emissive&&r.emissive.value.copy(a.emissive).multiplyScalar(a.emissiveIntensity),a.map&&(r.map.value=a.map,i(a.map,r.mapTransform)),a.alphaMap&&(r.alphaMap.value=a.alphaMap,i(a.alphaMap,r.alphaMapTransform)),a.bumpMap&&(r.bumpMap.value=a.bumpMap,i(a.bumpMap,r.bumpMapTransform),r.bumpScale.value=a.bumpScale,1===a.side&&(r.bumpScale.value*=-1)),a.normalMap&&(r.normalMap.value=a.normalMap,i(a.normalMap,r.normalMapTransform),r.normalScale.value.copy(a.normalScale),1===a.side&&r.normalScale.value.negate()),a.displacementMap&&(r.displacementMap.value=a.displacementMap,i(a.displacementMap,r.displacementMapTransform),r.displacementScale.value=a.displacementScale,r.displacementBias.value=a.displacementBias),a.emissiveMap&&(r.emissiveMap.value=a.emissiveMap,i(a.emissiveMap,r.emissiveMapTransform)),a.specularMap&&(r.specularMap.value=a.specularMap,i(a.specularMap,r.specularMapTransform)),a.alphaTest>0&&(r.alphaTest.value=a.alphaTest);let s=t.get(a).envMap;if(s&&(r.envMap.value=s,r.flipEnvMap.value=s.isCubeTexture&&!1===s.isRenderTargetTexture?-1:1,r.reflectivity.value=a.reflectivity,r.ior.value=a.ior,r.refractionRatio.value=a.refractionRatio),a.lightMap){r.lightMap.value=a.lightMap;let t=!0===e._useLegacyLights?Math.PI:1;r.lightMapIntensity.value=a.lightMapIntensity*t,i(a.lightMap,r.lightMapTransform)}a.aoMap&&(r.aoMap.value=a.aoMap,r.aoMapIntensity.value=a.aoMapIntensity,i(a.aoMap,r.aoMapTransform))}return{refreshFogUniforms:function(t,i){i.color.getRGB(t.fogColor.value,iu(e)),i.isFog?(t.fogNear.value=i.near,t.fogFar.value=i.far):i.isFogExp2&&(t.fogDensity.value=i.density)},refreshMaterialUniforms:function(e,a,s,n,o){var l,h,c,u,d,p,m,f,g,_,v,x,y,M,S,b,T,E,A,w,R,C,L;let P;a.isMeshBasicMaterial||a.isMeshLambertMaterial?r(e,a):a.isMeshToonMaterial?(r(e,a),l=e,(h=a).gradientMap&&(l.gradientMap.value=h.gradientMap)):a.isMeshPhongMaterial?(r(e,a),c=e,u=a,c.specular.value.copy(u.specular),c.shininess.value=Math.max(u.shininess,1e-4)):a.isMeshStandardMaterial?(r(e,a),d=e,p=a,d.metalness.value=p.metalness,p.metalnessMap&&(d.metalnessMap.value=p.metalnessMap,i(p.metalnessMap,d.metalnessMapTransform)),d.roughness.value=p.roughness,p.roughnessMap&&(d.roughnessMap.value=p.roughnessMap,i(p.roughnessMap,d.roughnessMapTransform)),t.get(p).envMap&&(d.envMapIntensity.value=p.envMapIntensity),a.isMeshPhysicalMaterial&&(m=e,f=a,g=o,m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,i(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,i(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,i(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,i(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,i(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),1===f.side&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,i(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,i(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,i(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,i(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,i(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,i(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,i(f.specularIntensityMap,m.specularIntensityMapTransform)))):a.isMeshMatcapMaterial?(r(e,a),_=e,(v=a).matcap&&(_.matcap.value=v.matcap)):a.isMeshDepthMaterial?r(e,a):a.isMeshDistanceMaterial?(r(e,a),x=e,y=a,P=t.get(y).light,x.referencePosition.value.setFromMatrixPosition(P.matrixWorld),x.nearDistance.value=P.shadow.camera.near,x.farDistance.value=P.shadow.camera.far):a.isMeshNormalMaterial?r(e,a):a.isLineBasicMaterial?(M=e,S=a,M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,S.map&&(M.map.value=S.map,i(S.map,M.mapTransform)),a.isLineDashedMaterial&&(b=e,T=a,b.dashSize.value=T.dashSize,b.totalSize.value=T.dashSize+T.gapSize,b.scale.value=T.scale)):a.isPointsMaterial?(E=e,A=a,w=s,R=n,E.diffuse.value.copy(A.color),E.opacity.value=A.opacity,E.size.value=A.size*w,E.scale.value=.5*R,A.map&&(E.map.value=A.map,i(A.map,E.uvTransform)),A.alphaMap&&(E.alphaMap.value=A.alphaMap,i(A.alphaMap,E.alphaMapTransform)),A.alphaTest>0&&(E.alphaTest.value=A.alphaTest)):a.isSpriteMaterial?(C=e,L=a,C.diffuse.value.copy(L.color),C.opacity.value=L.opacity,C.rotation.value=L.rotation,L.map&&(C.map.value=L.map,i(L.map,C.mapTransform)),L.alphaMap&&(C.alphaMap.value=L.alphaMap,i(L.alphaMap,C.alphaMapTransform)),L.alphaTest>0&&(C.alphaTest.value=L.alphaTest)):a.isShadowMaterial?(e.color.value.copy(a.color),e.opacity.value=a.opacity):a.isShaderMaterial&&(a.uniformsNeedUpdate=!1)}}}function ak(e,t,i,r){let a={},s={},n=[],o=i.isWebGL2?e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(e){let t={boundary:0,storage:0};return"number"==typeof e||"boolean"==typeof e?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",e),t}function h(t){let i=t.target;i.removeEventListener("dispose",h);let r=n.indexOf(i.__bindingPointIndex);n.splice(r,1),e.deleteBuffer(a[i.id]),delete a[i.id],delete s[i.id]}return{bind:function(e,t){let i=t.program;r.uniformBlockBinding(e,i)},update:function(i,c){var u;let d,p,m,f,g=a[i.id];void 0===g&&(function(e){let t=e.uniforms,i=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],a=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=a.length;e<r;e++){let r=l(a[e]),s=i%16;0!==s&&16-s<r.boundary&&(i+=16-s),t.__data=new Float32Array(r.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=i,i+=r.storage}}}let r=i%16;r>0&&(i+=16-r),e.__size=i,e.__cache={}}(i),(u=i).__bindingPointIndex=d=function(){for(let e=0;e<o;e++)if(-1===n.indexOf(e))return n.push(e),e;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}(),p=e.createBuffer(),m=u.__size,f=u.usage,e.bindBuffer(e.UNIFORM_BUFFER,p),e.bufferData(e.UNIFORM_BUFFER,m,f),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,d,p),g=p,a[i.id]=g,i.addEventListener("dispose",h));let _=c.program;r.updateUBOMapping(i,_);let v=t.render.frame;s[i.id]!==v&&(function(t){let i=a[t.id],r=t.uniforms,s=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,i);for(let t=0,i=r.length;t<i;t++){let i=Array.isArray(r[t])?r[t]:[r[t]];for(let r=0,a=i.length;r<a;r++){let a=i[r];if(!0===function(e,t,i,r){let a=e.value,s=t+"_"+i;if(void 0===r[s])return"number"==typeof a||"boolean"==typeof a?r[s]=a:r[s]=a.clone(),!0;{let e=r[s];if("number"==typeof a||"boolean"==typeof a){if(e!==a)return r[s]=a,!0}else if(!1===e.equals(a))return e.copy(a),!0}return!1}(a,t,r,s)){let t=a.__offset,i=Array.isArray(a.value)?a.value:[a.value],r=0;for(let s=0;s<i.length;s++){let n=i[s],o=l(n);"number"==typeof n||"boolean"==typeof n?(a.__data[0]=n,e.bufferSubData(e.UNIFORM_BUFFER,t+r,a.__data)):n.isMatrix3?(a.__data[0]=n.elements[0],a.__data[1]=n.elements[1],a.__data[2]=n.elements[2],a.__data[3]=0,a.__data[4]=n.elements[3],a.__data[5]=n.elements[4],a.__data[6]=n.elements[5],a.__data[7]=0,a.__data[8]=n.elements[6],a.__data[9]=n.elements[7],a.__data[10]=n.elements[8],a.__data[11]=0):(n.toArray(a.__data,r),r+=o.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,t,a.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}(i),s[i.id]=v)},dispose:function(){for(let t in a)e.deleteBuffer(a[t]);n=[],a={},s={}}}}class aV{constructor(e={}){let t,i,r,a,s,n,o,h,c,u,d,p,_,v,x,y,M,S,b,T,E,A,w,R,C,{canvas:L=W(),context:P=null,depth:I=!0,stencil:N=!0,alpha:D=!1,antialias:O=!1,premultipliedAlpha:B=!0,preserveDrawingBuffer:z=!1,powerPreference:H="default",failIfMajorPerformanceCaveat:G=!1}=e;this.isWebGLRenderer=!0,t=null!==P?P.getContextAttributes().alpha:D;let k=new Uint32Array(4),V=new Int32Array(4),X=null,j=null,q=[],Y=[];this.domElement=L,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=f,this._useLegacyLights=!1,this.toneMapping=0,this.toneMappingExposure=1;let Z=this,K=!1,J=0,Q=0,$=null,ee=-1,et=null,ei=new en,er=new en,ea=null,es=new tb(0),eo=0,eh=L.width,ec=L.height,eu=1,ed=null,ep=null,em=new en(0,0,eh,ec),eg=new en(0,0,eh,ec),e_=!1,ev=new iR,ex=!1,ey=!1,eM=null,eS=new eX,eb=new F,eT=new ef,eE={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function eA(){return null===$?eu:1}let ew=P;function eR(e,t){for(let i=0;i<e.length;i++){let r=e[i],a=L.getContext(r,t);if(null!==a)return a}return null}try{if("setAttribute"in L&&L.setAttribute("data-engine","three.js r160"),L.addEventListener("webglcontextlost",eP,!1),L.addEventListener("webglcontextrestored",eI,!1),L.addEventListener("webglcontextcreationerror",eU,!1),null===ew){let e=["webgl2","webgl","experimental-webgl"];if(!0===Z.isWebGL1Renderer&&e.shift(),ew=eR(e,{alpha:!0,depth:I,stencil:N,antialias:O,premultipliedAlpha:B,preserveDrawingBuffer:z,powerPreference:H,failIfMajorPerformanceCaveat:G}),null===ew)throw eR(e)?Error("Error creating WebGL context with your selected attributes."):Error("Error creating WebGL context.")}"u">typeof WebGLRenderingContext&&ew instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),void 0===ew.getShaderPrecisionFormat&&(ew.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(e){throw console.error("THREE.WebGLRenderer: "+e.message),e}function eC(){i=new i5(ew),r=new iz(ew,i,e),i.init(r),w=new aD(ew,i,r),a=new aU(ew,i,r),s=new i9(ew),n=new a_,o=new aN(ew,i,a,n,r,w,s),h=new iG(Z),c=new i4(Z),u=new iL(ew,r),R=new iF(ew,i,u,r),d=new i6(ew,u,s,R),p=new ri(ew,d,u,s),T=new rt(ew,r,o),M=new iH(n),_=new ag(Z,h,c,i,r,R,M),v=new aG(Z,n),x=new aM,y=new aw(i,r),b=new iO(Z,h,c,a,p,t,B),S=new aI(Z,p,r),C=new ak(ew,s,r,a),E=new iB(ew,i,s,r),A=new i8(ew,i,s,r),s.programs=_.programs,Z.capabilities=r,Z.extensions=i,Z.properties=n,Z.renderLists=x,Z.shadowMap=S,Z.state=a,Z.info=s}eC();let eL=new aH(Z,ew);function eP(e){e.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),K=!0}function eI(){console.log("THREE.WebGLRenderer: Context Restored."),K=!1;let e=s.autoReset,t=S.enabled,i=S.autoUpdate,r=S.needsUpdate,a=S.type;eC(),s.autoReset=e,S.enabled=t,S.autoUpdate=i,S.needsUpdate=r,S.type=a}function eU(e){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",e.statusMessage)}function eN(e){var t,i;let r,a=e.target;a.removeEventListener("dispose",eN),i=t=a,void 0!==(r=n.get(i).programs)&&(r.forEach(function(e){_.releaseProgram(e)}),i.isShaderMaterial&&_.releaseShaderCache(i)),n.remove(t)}function eD(e,t,i){!0===e.transparent&&e.side===l&&!1===e.forceSinglePass?(e.side=1,e.needsUpdate=!0,eV(e,t,i),e.side=0,e.needsUpdate=!0,eV(e,t,i),e.side=l):eV(e,t,i)}this.xr=eL,this.getContext=function(){return ew},this.getContextAttributes=function(){return ew.getContextAttributes()},this.forceContextLoss=function(){let e=i.get("WEBGL_lose_context");e&&e.loseContext()},this.forceContextRestore=function(){let e=i.get("WEBGL_lose_context");e&&e.restoreContext()},this.getPixelRatio=function(){return eu},this.setPixelRatio=function(e){void 0!==e&&(eu=e,this.setSize(eh,ec,!1))},this.getSize=function(e){return e.set(eh,ec)},this.setSize=function(e,t,i=!0){eL.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(eh=e,ec=t,L.width=Math.floor(e*eu),L.height=Math.floor(t*eu),!0===i&&(L.style.width=e+"px",L.style.height=t+"px"),this.setViewport(0,0,e,t))},this.getDrawingBufferSize=function(e){return e.set(eh*eu,ec*eu).floor()},this.setDrawingBufferSize=function(e,t,i){eh=e,ec=t,eu=i,L.width=Math.floor(e*i),L.height=Math.floor(t*i),this.setViewport(0,0,e,t)},this.getCurrentViewport=function(e){return e.copy(ei)},this.getViewport=function(e){return e.copy(em)},this.setViewport=function(e,t,i,r){e.isVector4?em.set(e.x,e.y,e.z,e.w):em.set(e,t,i,r),a.viewport(ei.copy(em).multiplyScalar(eu).floor())},this.getScissor=function(e){return e.copy(eg)},this.setScissor=function(e,t,i,r){e.isVector4?eg.set(e.x,e.y,e.z,e.w):eg.set(e,t,i,r),a.scissor(er.copy(eg).multiplyScalar(eu).floor())},this.getScissorTest=function(){return e_},this.setScissorTest=function(e){a.setScissorTest(e_=e)},this.setOpaqueSort=function(e){ed=e},this.setTransparentSort=function(e){ep=e},this.getClearColor=function(e){return e.copy(b.getClearColor())},this.setClearColor=function(){b.setClearColor.apply(b,arguments)},this.getClearAlpha=function(){return b.getClearAlpha()},this.setClearAlpha=function(){b.setClearAlpha.apply(b,arguments)},this.clear=function(e=!0,t=!0,i=!0){let r=0;if(e){let e=!1;if(null!==$){let t=$.texture.format;e=1033===t||1031===t||1029===t}if(e){let e=$.texture.type,t=1009===e||1014===e||1012===e||1020===e||1017===e||1018===e,i=b.getClearColor(),r=b.getClearAlpha(),a=i.r,s=i.g,n=i.b;t?(k[0]=a,k[1]=s,k[2]=n,k[3]=r,ew.clearBufferuiv(ew.COLOR,0,k)):(V[0]=a,V[1]=s,V[2]=n,V[3]=r,ew.clearBufferiv(ew.COLOR,0,V))}else r|=ew.COLOR_BUFFER_BIT}t&&(r|=ew.DEPTH_BUFFER_BIT),i&&(r|=ew.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(0xffffffff)),ew.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){L.removeEventListener("webglcontextlost",eP,!1),L.removeEventListener("webglcontextrestored",eI,!1),L.removeEventListener("webglcontextcreationerror",eU,!1),x.dispose(),y.dispose(),n.dispose(),h.dispose(),c.dispose(),p.dispose(),R.dispose(),C.dispose(),_.dispose(),eL.dispose(),eL.removeEventListener("sessionstart",eF),eL.removeEventListener("sessionend",eB),eM&&(eM.dispose(),eM=null),ez.stop()},this.renderBufferDirect=function(e,t,i,s,l,p){null===t&&(t=eE);let m=l.isMesh&&0>l.matrixWorld.determinant(),f=function(e,t,i,s,l){var u,d;!0!==t.isScene&&(t=eE),o.resetTextureUnits();let p=t.fog,m=s.isMeshStandardMaterial?t.environment:null,f=null===$?Z.outputColorSpace:!0===$.isXRRenderTarget?$.texture.colorSpace:g,_=(s.isMeshStandardMaterial?c:h).get(s.envMap||m),x=!0===s.vertexColors&&!!i.attributes.color&&4===i.attributes.color.itemSize,y=!!i.attributes.tangent&&(!!s.normalMap||s.anisotropy>0),S=!!i.morphAttributes.position,b=!!i.morphAttributes.normal,E=!!i.morphAttributes.color,A=0;s.toneMapped&&(null===$||!0===$.isXRRenderTarget)&&(A=Z.toneMapping);let w=i.morphAttributes.position||i.morphAttributes.normal||i.morphAttributes.color,R=void 0!==w?w.length:0,L=n.get(s),P=j.state.lights;if(!0===ex&&(!0===ey||e!==et)){let t=e===et&&s.id===ee;M.setState(s,e,t)}let I=!1;s.version===L.__version?(L.needsLights&&L.lightsStateVersion!==P.state.version||L.outputColorSpace!==f||l.isBatchedMesh&&!1===L.batching||!l.isBatchedMesh&&!0===L.batching||l.isInstancedMesh&&!1===L.instancing||!l.isInstancedMesh&&!0===L.instancing||l.isSkinnedMesh&&!1===L.skinning||!l.isSkinnedMesh&&!0===L.skinning||l.isInstancedMesh&&!0===L.instancingColor&&null===l.instanceColor||l.isInstancedMesh&&!1===L.instancingColor&&null!==l.instanceColor||L.envMap!==_||!0===s.fog&&L.fog!==p||void 0!==L.numClippingPlanes&&(L.numClippingPlanes!==M.numPlanes||L.numIntersection!==M.numIntersection)||L.vertexAlphas!==x||L.vertexTangents!==y||L.morphTargets!==S||L.morphNormals!==b||L.morphColors!==E||L.toneMapping!==A||!0===r.isWebGL2&&L.morphTargetsCount!==R)&&(I=!0):(I=!0,L.__version=s.version);let U=L.currentProgram;!0===I&&(U=eV(s,t,l));let N=!1,D=!1,O=!1,F=U.getUniforms(),B=L.uniforms;if(a.useProgram(U.program)&&(N=!0,D=!0,O=!0),s.id!==ee&&(ee=s.id,D=!0),N||et!==e){F.setValue(ew,"projectionMatrix",e.projectionMatrix),F.setValue(ew,"viewMatrix",e.matrixWorldInverse);let t=F.map.cameraPosition;void 0!==t&&t.setValue(ew,eT.setFromMatrixPosition(e.matrixWorld)),r.logarithmicDepthBuffer&&F.setValue(ew,"logDepthBufFC",2/(Math.log(e.far+1)/Math.LN2)),(s.isMeshPhongMaterial||s.isMeshToonMaterial||s.isMeshLambertMaterial||s.isMeshBasicMaterial||s.isMeshStandardMaterial||s.isShaderMaterial)&&F.setValue(ew,"isOrthographic",!0===e.isOrthographicCamera),et!==e&&(et=e,D=!0,O=!0)}if(l.isSkinnedMesh){F.setOptional(ew,l,"bindMatrix"),F.setOptional(ew,l,"bindMatrixInverse");let e=l.skeleton;e&&(r.floatVertexTextures?(null===e.boneTexture&&e.computeBoneTexture(),F.setValue(ew,"boneTexture",e.boneTexture,o)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}l.isBatchedMesh&&(F.setOptional(ew,l,"batchingTexture"),F.setValue(ew,"batchingTexture",l._matricesTexture,o));let z=i.morphAttributes;if((void 0!==z.position||void 0!==z.normal||void 0!==z.color&&!0===r.isWebGL2)&&T.update(l,i,U),(D||L.receiveShadow!==l.receiveShadow)&&(L.receiveShadow=l.receiveShadow,F.setValue(ew,"receiveShadow",l.receiveShadow)),s.isMeshGouraudMaterial&&null!==s.envMap&&(B.envMap.value=_,B.flipEnvMap.value=_.isCubeTexture&&!1===_.isRenderTargetTexture?-1:1),D&&(F.setValue(ew,"toneMappingExposure",Z.toneMappingExposure),L.needsLights&&(u=B,d=O,u.ambientLightColor.needsUpdate=d,u.lightProbe.needsUpdate=d,u.directionalLights.needsUpdate=d,u.directionalLightShadows.needsUpdate=d,u.pointLights.needsUpdate=d,u.pointLightShadows.needsUpdate=d,u.spotLights.needsUpdate=d,u.spotLightShadows.needsUpdate=d,u.rectAreaLights.needsUpdate=d,u.hemisphereLights.needsUpdate=d),p&&!0===s.fog&&v.refreshFogUniforms(B,p),v.refreshMaterialUniforms(B,s,eu,ec,eM),r8.upload(ew,eW(L),B,o)),s.isShaderMaterial&&!0===s.uniformsNeedUpdate&&(r8.upload(ew,eW(L),B,o),s.uniformsNeedUpdate=!1),s.isSpriteMaterial&&F.setValue(ew,"center",l.center),F.setValue(ew,"modelViewMatrix",l.modelViewMatrix),F.setValue(ew,"normalMatrix",l.normalMatrix),F.setValue(ew,"modelMatrix",l.matrixWorld),s.isShaderMaterial||s.isRawShaderMaterial){let e=s.uniformsGroups;for(let t=0,i=e.length;t<i;t++)if(r.isWebGL2){let i=e[t];C.update(i,U),C.bind(i,U)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return U}(e,t,i,s,l);a.setMaterial(s,m);let _=i.index,x=1;if(!0===s.wireframe){if(void 0===(_=d.getWireframeAttribute(i)))return;x=2}let y=i.drawRange,S=i.attributes.position,b=y.start*x,w=(y.start+y.count)*x;null!==p&&(b=Math.max(b,p.start*x),w=Math.min(w,(p.start+p.count)*x)),null!==_?(b=Math.max(b,0),w=Math.min(w,_.count)):null!=S&&(b=Math.max(b,0),w=Math.min(w,S.count));let L=w-b;if(L<0||1/0===L)return;R.setup(l,s,f,i,_);let P,I=E;if(null!==_&&(P=u.get(_),(I=A).setIndex(P)),l.isMesh)!0===s.wireframe?(a.setLineWidth(s.wireframeLinewidth*eA()),I.setMode(ew.LINES)):I.setMode(ew.TRIANGLES);else if(l.isLine){let e=s.linewidth;void 0===e&&(e=1),a.setLineWidth(e*eA()),l.isLineSegments?I.setMode(ew.LINES):l.isLineLoop?I.setMode(ew.LINE_LOOP):I.setMode(ew.LINE_STRIP)}else l.isPoints?I.setMode(ew.POINTS):l.isSprite&&I.setMode(ew.TRIANGLES);if(l.isBatchedMesh)I.renderMultiDraw(l._multiDrawStarts,l._multiDrawCounts,l._multiDrawCount);else if(l.isInstancedMesh)I.renderInstances(b,L,l.count);else if(i.isInstancedBufferGeometry){let e=void 0!==i._maxInstanceCount?i._maxInstanceCount:1/0,t=Math.min(i.instanceCount,e);I.renderInstances(b,L,t)}else I.render(b,L)},this.compile=function(e,t,i=null){null===i&&(i=e),(j=y.get(i)).init(),Y.push(j),i.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(j.pushLight(e),e.castShadow&&j.pushShadow(e))}),e!==i&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(j.pushLight(e),e.castShadow&&j.pushShadow(e))}),j.setupLights(Z._useLegacyLights);let r=new Set;return e.traverse(function(e){let t=e.material;if(t)if(Array.isArray(t))for(let a=0;a<t.length;a++){let s=t[a];eD(s,i,e),r.add(s)}else eD(t,i,e),r.add(t)}),Y.pop(),j=null,r},this.compileAsync=function(e,t,r=null){let a=this.compile(e,t,r);return new Promise(t=>{function r(){(a.forEach(function(e){n.get(e).currentProgram.isReady()&&a.delete(e)}),0===a.size)?t(e):setTimeout(r,10)}null!==i.get("KHR_parallel_shader_compile")?r():setTimeout(r,10)})};let eO=null;function eF(){ez.stop()}function eB(){ez.start()}let ez=new iC;function eH(e,t,s,n){let h=e.opaque,c=e.transmissive,u=e.transparent;j.setupLightsView(s),!0===ex&&M.setGlobalState(Z.clippingPlanes,s),c.length>0&&function(e,t,a,s){if((!0===a.isScene?a.overrideMaterial:null)!==null)return;let n=r.isWebGL2;null===eM&&(eM=new el(1,1,{generateMipmaps:!0,type:i.has("EXT_color_buffer_half_float")?1016:1009,minFilter:m,samples:4*!!n})),Z.getDrawingBufferSize(eb),n?eM.setSize(eb.x,eb.y):eM.setSize(U(eb.x),U(eb.y));let h=Z.getRenderTarget();Z.setRenderTarget(eM),Z.getClearColor(es),(eo=Z.getClearAlpha())<1&&Z.setClearColor(0xffffff,.5),Z.clear();let c=Z.toneMapping;Z.toneMapping=0,eG(e,a,s),o.updateMultisampleRenderTarget(eM),o.updateRenderTargetMipmap(eM);let u=!1;for(let e=0,i=t.length;e<i;e++){let i=t[e],r=i.object,n=i.geometry,o=i.material,h=i.group;if(o.side===l&&r.layers.test(s.layers)){let e=o.side;o.side=1,o.needsUpdate=!0,ek(r,a,s,n,o,h),o.side=e,o.needsUpdate=!0,u=!0}}!0===u&&(o.updateMultisampleRenderTarget(eM),o.updateRenderTargetMipmap(eM)),Z.setRenderTarget(h),Z.setClearColor(es,eo),Z.toneMapping=c}(h,c,t,s),n&&a.viewport(ei.copy(n)),h.length>0&&eG(h,t,s),c.length>0&&eG(c,t,s),u.length>0&&eG(u,t,s),a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),a.setPolygonOffset(!1)}function eG(e,t,i){let r=!0===t.isScene?t.overrideMaterial:null;for(let a=0,s=e.length;a<s;a++){let s=e[a],n=s.object,o=s.geometry,l=null===r?s.material:r,h=s.group;n.layers.test(i.layers)&&ek(n,t,i,o,l,h)}}function ek(e,t,i,r,a,s){e.onBeforeRender(Z,t,i,r,a,s),e.modelViewMatrix.multiplyMatrices(i.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),a.onBeforeRender(Z,t,i,r,e,s),!0===a.transparent&&a.side===l&&!1===a.forceSinglePass?(a.side=1,a.needsUpdate=!0,Z.renderBufferDirect(i,t,r,a,e,s),a.side=0,a.needsUpdate=!0,Z.renderBufferDirect(i,t,r,a,e,s),a.side=l):Z.renderBufferDirect(i,t,r,a,e,s),e.onAfterRender(Z,t,i,r,a,s)}function eV(e,t,i){var r;!0!==t.isScene&&(t=eE);let a=n.get(e),s=j.state.lights,o=j.state.shadowsArray,l=s.state.version,u=_.getParameters(e,s.state,o,t,i),d=_.getProgramCacheKey(u),p=a.programs;a.environment=e.isMeshStandardMaterial?t.environment:null,a.fog=t.fog,a.envMap=(e.isMeshStandardMaterial?c:h).get(e.envMap||a.environment),void 0===p&&(e.addEventListener("dispose",eN),a.programs=p=new Map);let m=p.get(d);if(void 0!==m){if(a.currentProgram===m&&a.lightsStateVersion===l)return ej(e,u),m}else u.uniforms=_.getUniforms(e),e.onBuild(i,u,Z),e.onBeforeCompile(u,Z),m=_.acquireProgram(u,d),p.set(d,m),a.uniforms=u.uniforms;let f=a.uniforms;return(e.isShaderMaterial||e.isRawShaderMaterial)&&!0!==e.clipping||(f.clippingPlanes=M.uniform),ej(e,u),a.needsLights=(r=e).isMeshLambertMaterial||r.isMeshToonMaterial||r.isMeshPhongMaterial||r.isMeshStandardMaterial||r.isShadowMaterial||r.isShaderMaterial&&!0===r.lights,a.lightsStateVersion=l,a.needsLights&&(f.ambientLightColor.value=s.state.ambient,f.lightProbe.value=s.state.probe,f.directionalLights.value=s.state.directional,f.directionalLightShadows.value=s.state.directionalShadow,f.spotLights.value=s.state.spot,f.spotLightShadows.value=s.state.spotShadow,f.rectAreaLights.value=s.state.rectArea,f.ltc_1.value=s.state.rectAreaLTC1,f.ltc_2.value=s.state.rectAreaLTC2,f.pointLights.value=s.state.point,f.pointLightShadows.value=s.state.pointShadow,f.hemisphereLights.value=s.state.hemi,f.directionalShadowMap.value=s.state.directionalShadowMap,f.directionalShadowMatrix.value=s.state.directionalShadowMatrix,f.spotShadowMap.value=s.state.spotShadowMap,f.spotLightMatrix.value=s.state.spotLightMatrix,f.spotLightMap.value=s.state.spotLightMap,f.pointShadowMap.value=s.state.pointShadowMap,f.pointShadowMatrix.value=s.state.pointShadowMatrix),a.currentProgram=m,a.uniformsList=null,m}function eW(e){if(null===e.uniformsList){let t=e.currentProgram.getUniforms();e.uniformsList=r8.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function ej(e,t){let i=n.get(e);i.outputColorSpace=t.outputColorSpace,i.batching=t.batching,i.instancing=t.instancing,i.instancingColor=t.instancingColor,i.skinning=t.skinning,i.morphTargets=t.morphTargets,i.morphNormals=t.morphNormals,i.morphColors=t.morphColors,i.morphTargetsCount=t.morphTargetsCount,i.numClippingPlanes=t.numClippingPlanes,i.numIntersection=t.numClipIntersection,i.vertexAlphas=t.vertexAlphas,i.vertexTangents=t.vertexTangents,i.toneMapping=t.toneMapping}ez.setAnimationLoop(function(e){eO&&eO(e)}),"u">typeof self&&ez.setContext(self),this.setAnimationLoop=function(e){eO=e,eL.setAnimationLoop(e),null===e?ez.stop():ez.start()},eL.addEventListener("sessionstart",eF),eL.addEventListener("sessionend",eB),this.render=function(e,t){if(void 0!==t&&!0!==t.isCamera)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(!0===K)return;!0===e.matrixWorldAutoUpdate&&e.updateMatrixWorld(),null===t.parent&&!0===t.matrixWorldAutoUpdate&&t.updateMatrixWorld(),!0===eL.enabled&&!0===eL.isPresenting&&(!0===eL.cameraAutoUpdate&&eL.updateCamera(t),t=eL.getCamera()),!0===e.isScene&&e.onBeforeRender(Z,e,t,$),(j=y.get(e,Y.length)).init(),Y.push(j),eS.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),ev.setFromProjectionMatrix(eS),ey=this.localClippingEnabled,ex=M.init(this.clippingPlanes,ey),(X=x.get(e,q.length)).init(),q.push(X),function e(t,i,r,a){if(!1===t.visible)return;if(t.layers.test(i.layers)){if(t.isGroup)r=t.renderOrder;else if(t.isLOD)!0===t.autoUpdate&&t.update(i);else if(t.isLight)j.pushLight(t),t.castShadow&&j.pushShadow(t);else if(t.isSprite){if(!t.frustumCulled||ev.intersectsSprite(t)){a&&eT.setFromMatrixPosition(t.matrixWorld).applyMatrix4(eS);let e=p.update(t),i=t.material;i.visible&&X.push(t,e,i,r,eT.z,null)}}else if((t.isMesh||t.isLine||t.isPoints)&&(!t.frustumCulled||ev.intersectsObject(t))){let e=p.update(t),i=t.material;if(a&&(void 0!==t.boundingSphere?(null===t.boundingSphere&&t.computeBoundingSphere(),eT.copy(t.boundingSphere.center)):(null===e.boundingSphere&&e.computeBoundingSphere(),eT.copy(e.boundingSphere.center)),eT.applyMatrix4(t.matrixWorld).applyMatrix4(eS)),Array.isArray(i)){let a=e.groups;for(let s=0,n=a.length;s<n;s++){let n=a[s],o=i[n.materialIndex];o&&o.visible&&X.push(t,e,o,r,eT.z,n)}}else i.visible&&X.push(t,e,i,r,eT.z,null)}}let s=t.children;for(let t=0,n=s.length;t<n;t++)e(s[t],i,r,a)}(e,t,0,Z.sortObjects),X.finish(),!0===Z.sortObjects&&X.sort(ed,ep),this.info.render.frame++,!0===ex&&M.beginShadows();let i=j.state.shadowsArray;if(S.render(i,e,t),!0===ex&&M.endShadows(),!0===this.info.autoReset&&this.info.reset(),b.render(X,e),j.setupLights(Z._useLegacyLights),t.isArrayCamera){let i=t.cameras;for(let t=0,r=i.length;t<r;t++){let r=i[t];eH(X,e,r,r.viewport)}}else eH(X,e,t);null!==$&&(o.updateMultisampleRenderTarget($),o.updateRenderTargetMipmap($)),!0===e.isScene&&e.onAfterRender(Z,e,t),R.resetDefaultState(),ee=-1,et=null,Y.pop(),j=Y.length>0?Y[Y.length-1]:null,q.pop(),X=q.length>0?q[q.length-1]:null},this.getActiveCubeFace=function(){return J},this.getActiveMipmapLevel=function(){return Q},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(e,t,r){n.get(e.texture).__webglTexture=t,n.get(e.depthTexture).__webglTexture=r;let a=n.get(e);a.__hasExternalTextures=!0,a.__hasExternalTextures&&(a.__autoAllocateDepthBuffer=void 0===r,a.__autoAllocateDepthBuffer||!0===i.has("WEBGL_multisampled_render_to_texture")&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),a.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(e,t){let i=n.get(e);i.__webglFramebuffer=t,i.__useDefaultFramebuffer=void 0===t},this.setRenderTarget=function(e,t=0,i=0){$=e,J=t,Q=i;let s=!0,l=null,h=!1,c=!1;if(e){let u=n.get(e);void 0!==u.__useDefaultFramebuffer?(a.bindFramebuffer(ew.FRAMEBUFFER,null),s=!1):void 0===u.__webglFramebuffer?o.setupRenderTarget(e):u.__hasExternalTextures&&o.rebindTextures(e,n.get(e.texture).__webglTexture,n.get(e.depthTexture).__webglTexture);let d=e.texture;(d.isData3DTexture||d.isDataArrayTexture||d.isCompressedArrayTexture)&&(c=!0);let p=n.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(l=Array.isArray(p[t])?p[t][i]:p[t],h=!0):l=r.isWebGL2&&e.samples>0&&!1===o.useMultisampledRTT(e)?n.get(e).__webglMultisampledFramebuffer:Array.isArray(p)?p[i]:p,ei.copy(e.viewport),er.copy(e.scissor),ea=e.scissorTest}else ei.copy(em).multiplyScalar(eu).floor(),er.copy(eg).multiplyScalar(eu).floor(),ea=e_;if(a.bindFramebuffer(ew.FRAMEBUFFER,l)&&r.drawBuffers&&s&&a.drawBuffers(e,l),a.viewport(ei),a.scissor(er),a.setScissorTest(ea),h){let r=n.get(e.texture);ew.framebufferTexture2D(ew.FRAMEBUFFER,ew.COLOR_ATTACHMENT0,ew.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,i)}else if(c){let r=n.get(e.texture);ew.framebufferTextureLayer(ew.FRAMEBUFFER,ew.COLOR_ATTACHMENT0,r.__webglTexture,i||0,t||0)}ee=-1},this.readRenderTargetPixels=function(e,t,s,o,l,h,c){if(!(e&&e.isWebGLRenderTarget))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let u=n.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&void 0!==c&&(u=u[c]),u){a.bindFramebuffer(ew.FRAMEBUFFER,u);try{let a=e.texture,n=a.format,c=a.type;if(1023!==n&&w.convert(n)!==ew.getParameter(ew.IMPLEMENTATION_COLOR_READ_FORMAT))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");let u=1016===c&&(i.has("EXT_color_buffer_half_float")||r.isWebGL2&&i.has("EXT_color_buffer_float"));if(1009!==c&&w.convert(c)!==ew.getParameter(ew.IMPLEMENTATION_COLOR_READ_TYPE)&&!(1015===c&&(r.isWebGL2||i.has("OES_texture_float")||i.has("WEBGL_color_buffer_float")))&&!u)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");t>=0&&t<=e.width-o&&s>=0&&s<=e.height-l&&ew.readPixels(t,s,o,l,w.convert(n),w.convert(c),h)}finally{let e=null!==$?n.get($).__webglFramebuffer:null;a.bindFramebuffer(ew.FRAMEBUFFER,e)}}},this.copyFramebufferToTexture=function(e,t,i=0){let r=Math.pow(2,-i),s=Math.floor(t.image.width*r),n=Math.floor(t.image.height*r);o.setTexture2D(t,0),ew.copyTexSubImage2D(ew.TEXTURE_2D,i,0,0,e.x,e.y,s,n),a.unbindTexture()},this.copyTextureToTexture=function(e,t,i,r=0){let s=t.image.width,n=t.image.height,l=w.convert(i.format),h=w.convert(i.type);o.setTexture2D(i,0),ew.pixelStorei(ew.UNPACK_FLIP_Y_WEBGL,i.flipY),ew.pixelStorei(ew.UNPACK_PREMULTIPLY_ALPHA_WEBGL,i.premultiplyAlpha),ew.pixelStorei(ew.UNPACK_ALIGNMENT,i.unpackAlignment),t.isDataTexture?ew.texSubImage2D(ew.TEXTURE_2D,r,e.x,e.y,s,n,l,h,t.image.data):t.isCompressedTexture?ew.compressedTexSubImage2D(ew.TEXTURE_2D,r,e.x,e.y,t.mipmaps[0].width,t.mipmaps[0].height,l,t.mipmaps[0].data):ew.texSubImage2D(ew.TEXTURE_2D,r,e.x,e.y,l,h,t.image),0===r&&i.generateMipmaps&&ew.generateMipmap(ew.TEXTURE_2D),a.unbindTexture()},this.copyTextureToTexture3D=function(e,t,i,r,s=0){let n;if(Z.isWebGL1Renderer)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");let l=e.max.x-e.min.x+1,h=e.max.y-e.min.y+1,c=e.max.z-e.min.z+1,u=w.convert(r.format),d=w.convert(r.type);if(r.isData3DTexture)o.setTexture3D(r,0),n=ew.TEXTURE_3D;else{if(!r.isDataArrayTexture&&!r.isCompressedArrayTexture)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");o.setTexture2DArray(r,0),n=ew.TEXTURE_2D_ARRAY}ew.pixelStorei(ew.UNPACK_FLIP_Y_WEBGL,r.flipY),ew.pixelStorei(ew.UNPACK_PREMULTIPLY_ALPHA_WEBGL,r.premultiplyAlpha),ew.pixelStorei(ew.UNPACK_ALIGNMENT,r.unpackAlignment);let p=ew.getParameter(ew.UNPACK_ROW_LENGTH),m=ew.getParameter(ew.UNPACK_IMAGE_HEIGHT),f=ew.getParameter(ew.UNPACK_SKIP_PIXELS),g=ew.getParameter(ew.UNPACK_SKIP_ROWS),_=ew.getParameter(ew.UNPACK_SKIP_IMAGES),v=i.isCompressedTexture?i.mipmaps[s]:i.image;ew.pixelStorei(ew.UNPACK_ROW_LENGTH,v.width),ew.pixelStorei(ew.UNPACK_IMAGE_HEIGHT,v.height),ew.pixelStorei(ew.UNPACK_SKIP_PIXELS,e.min.x),ew.pixelStorei(ew.UNPACK_SKIP_ROWS,e.min.y),ew.pixelStorei(ew.UNPACK_SKIP_IMAGES,e.min.z),i.isDataTexture||i.isData3DTexture?ew.texSubImage3D(n,s,t.x,t.y,t.z,l,h,c,u,d,v.data):i.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),ew.compressedTexSubImage3D(n,s,t.x,t.y,t.z,l,h,c,u,v.data)):ew.texSubImage3D(n,s,t.x,t.y,t.z,l,h,c,u,d,v),ew.pixelStorei(ew.UNPACK_ROW_LENGTH,p),ew.pixelStorei(ew.UNPACK_IMAGE_HEIGHT,m),ew.pixelStorei(ew.UNPACK_SKIP_PIXELS,f),ew.pixelStorei(ew.UNPACK_SKIP_ROWS,g),ew.pixelStorei(ew.UNPACK_SKIP_IMAGES,_),0===s&&r.generateMipmaps&&ew.generateMipmap(n),a.unbindTexture()},this.initTexture=function(e){e.isCubeTexture?o.setTextureCube(e,0):e.isData3DTexture?o.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?o.setTexture2DArray(e,0):o.setTexture2D(e,0),a.unbindTexture()},this.resetState=function(){J=0,Q=0,$=null,a.reset(),R.reset()},"u">typeof __THREE_DEVTOOLS__&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return 2e3}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===_?"display-p3":"srgb",t.unpackColorSpace=J.workingColorSpace===v?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===f?3001:3e3}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=3001===e?f:g}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class aW extends aV{}aW.prototype.isWebGL1Renderer=!0;class aX{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new tb(e),this.density=t}clone(){return new aX(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class aj{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new tb(e),this.near=t,this.far=i}clone(){return new aj(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class aq extends tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,"u">typeof __THREE_DEVTOOLS__&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),null!==e.background&&(this.background=e.background.clone()),null!==e.environment&&(this.environment=e.environment.clone()),null!==e.fog&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,null!==e.overrideMaterial&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return null!==this.fog&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),1!==this.backgroundIntensity&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class aY{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=void 0!==e?e.length/t:0,this.usage=35044,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=R()}onUploadCallback(){}set needsUpdate(e){!0===e&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,a=this.stride;r<a;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){void 0===e.arrayBuffers&&(e.arrayBuffers={}),void 0===this.array.buffer._uuid&&(this.array.buffer._uuid=R()),void 0===e.arrayBuffers[this.array.buffer._uuid]&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return void 0===e.arrayBuffers&&(e.arrayBuffers={}),void 0===this.array.buffer._uuid&&(this.array.buffer._uuid=R()),void 0===e.arrayBuffers[this.array.buffer._uuid]&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}let aZ=new ef;class aK{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)aZ.fromBufferAttribute(this,t),aZ.applyMatrix4(e),this.setXYZ(t,aZ.x,aZ.y,aZ.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)aZ.fromBufferAttribute(this,t),aZ.applyNormalMatrix(e),this.setXYZ(t,aZ.x,aZ.y,aZ.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)aZ.fromBufferAttribute(this,t),aZ.transformDirection(e),this.setXYZ(t,aZ.x,aZ.y,aZ.z);return this}setX(e,t){return this.normalized&&(t=D(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=D(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=D(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=D(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=N(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=N(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=N(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=N(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=D(t,this.array),i=D(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=D(t,this.array),i=D(i,this.array),r=D(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=D(t,this.array),i=D(i,this.array),r=D(r,this.array),a=D(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=a,this}clone(e){if(void 0!==e)return void 0===e.interleavedBuffers&&(e.interleavedBuffers={}),void 0===e.interleavedBuffers[this.data.uuid]&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new aK(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized);{console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let t=0;t<this.count;t++){let i=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[i+t])}return new tU(new this.array.constructor(e),this.itemSize,this.normalized)}}toJSON(e){if(void 0!==e)return void 0===e.interleavedBuffers&&(e.interleavedBuffers={}),void 0===e.interleavedBuffers[this.data.uuid]&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized};{console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let t=0;t<this.count;t++){let i=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[i+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}}}class aJ extends tA{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new tb(0xffffff),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let aQ=new ef,a$=new ef,a0=new ef,a1=new F,a2=new F,a3=new eX,a4=new ef,a5=new ef,a6=new ef,a8=new F,a9=new F,a7=new F;class se extends tn{constructor(e=new aJ){if(super(),this.isSprite=!0,this.type="Sprite",void 0===a){a=new tJ;let e=new aY(new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),5);a.setIndex([0,1,2,0,2,3]),a.setAttribute("position",new aK(e,3,0,!1)),a.setAttribute("uv",new aK(e,2,3,!1))}this.geometry=a,this.material=e,this.center=new F(.5,.5)}raycast(e,t){let i,r;null===e.camera&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),a$.setFromMatrixScale(this.matrixWorld),a3.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),a0.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&!1===this.material.sizeAttenuation&&a$.multiplyScalar(-a0.z);let a=this.material.rotation;0!==a&&(r=Math.cos(a),i=Math.sin(a));let s=this.center;st(a4.set(-.5,-.5,0),a0,s,a$,i,r),st(a5.set(.5,-.5,0),a0,s,a$,i,r),st(a6.set(.5,.5,0),a0,s,a$,i,r),a8.set(0,0),a9.set(1,0),a7.set(1,1);let n=e.ray.intersectTriangle(a4,a5,a6,!1,aQ);if(null===n&&(st(a5.set(-.5,.5,0),a0,s,a$,i,r),a9.set(0,1),null===(n=e.ray.intersectTriangle(a4,a6,a5,!1,aQ))))return;let o=e.ray.origin.distanceTo(aQ);o<e.near||o>e.far||t.push({distance:o,point:aQ.clone(),uv:tv.getInterpolation(aQ,a4,a5,a6,a8,a9,a7,new F),face:null,object:this})}copy(e,t){return super.copy(e,t),void 0!==e.center&&this.center.copy(e.center),this.material=e.material,this}}function st(e,t,i,r,a,s){a1.subVectors(e,i).addScalar(.5).multiply(r),void 0!==a?(a2.x=s*a1.x-a*a1.y,a2.y=a*a1.x+s*a1.y):a2.copy(a1),e.copy(t),e.x+=a2.x,e.y+=a2.y,e.applyMatrix4(a3)}let si=new ef,sr=new ef;class sa extends tn{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);let t=e.levels;for(let e=0,i=t.length;e<i;e++){let i=t[e];this.addLevel(i.object.clone(),i.distance,i.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,i=0){let r;t=Math.abs(t);let a=this.levels;for(r=0;r<a.length&&!(t<a[r].distance);r++);return a.splice(r,0,{distance:t,hysteresis:i,object:e}),this.add(e),this}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){let t=this.levels;if(t.length>0){let i,r;for(i=1,r=t.length;i<r;i++){let r=t[i].distance;if(t[i].object.visible&&(r-=r*t[i].hysteresis),e<r)break}return t[i-1].object}return null}raycast(e,t){if(this.levels.length>0){si.setFromMatrixPosition(this.matrixWorld);let i=e.ray.origin.distanceTo(si);this.getObjectForDistance(i).raycast(e,t)}}update(e){let t=this.levels;if(t.length>1){let i,r;si.setFromMatrixPosition(e.matrixWorld),sr.setFromMatrixPosition(this.matrixWorld);let a=si.distanceTo(sr)/e.zoom;for(t[0].object.visible=!0,i=1,r=t.length;i<r;i++){let e=t[i].distance;if(t[i].object.visible&&(e-=e*t[i].hysteresis),a>=e)t[i-1].object.visible=!1,t[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<r;i++)t[i].object.visible=!1}}toJSON(e){let t=super.toJSON(e);!1===this.autoUpdate&&(t.object.autoUpdate=!1),t.object.levels=[];let i=this.levels;for(let e=0,r=i.length;e<r;e++){let r=i[e];t.object.levels.push({object:r.object.uuid,distance:r.distance,hysteresis:r.hysteresis})}return t}}let ss=new ef,sn=new en,so=new en,sl=new ef,sh=new eX,sc=new ef,su=new eO,sd=new eX,sp=new eW;class sm extends is{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=u,this.bindMatrix=new eX,this.bindMatrixInverse=new eX,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;null===this.boundingBox&&(this.boundingBox=new ev),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let e=0;e<t.count;e++)this.getVertexPosition(e,sc),this.boundingBox.expandByPoint(sc)}computeBoundingSphere(){let e=this.geometry;null===this.boundingSphere&&(this.boundingSphere=new eO),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let e=0;e<t.count;e++)this.getVertexPosition(e,sc),this.boundingSphere.expandByPoint(sc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,null!==e.boundingBox&&(this.boundingBox=e.boundingBox.clone()),null!==e.boundingSphere&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let i=this.material,r=this.matrixWorld;void 0!==i&&(null===this.boundingSphere&&this.computeBoundingSphere(),su.copy(this.boundingSphere),su.applyMatrix4(r),!1!==e.ray.intersectsSphere(su)&&(sd.copy(r).invert(),sp.copy(e.ray).applyMatrix4(sd),(null===this.boundingBox||!1!==sp.intersectsBox(this.boundingBox))&&this._computeIntersections(e,t,sp)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,void 0===t&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new en,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);let r=1/e.manhattanLength();1/0!==r?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===u?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===d?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,r=this.geometry;sn.fromBufferAttribute(r.attributes.skinIndex,e),so.fromBufferAttribute(r.attributes.skinWeight,e),ss.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let e=0;e<4;e++){let r=so.getComponent(e);if(0!==r){let a=sn.getComponent(e);sh.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(sl.copy(ss).applyMatrix4(sh),r)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class sf extends tn{constructor(){super(),this.isBone=!0,this.type="Bone"}}class sg extends es{constructor(e=null,t=1,i=1,r,a,s,n,o,l=1003,h=1003,c,u){super(null,s,n,o,l,h,r,a,c,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let s_=new eX,sv=new eX;class sx{constructor(e=[],t=[]){this.uuid=R(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(16*e.length),0===t.length)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let e=0,t=this.bones.length;e<t;e++)this.boneInverses.push(new eX)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let t=new eX;this.bones[e]&&t.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(t)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let t=this.bones[e];t&&t.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let t=this.bones[e];t&&(t.parent&&t.parent.isBone?(t.matrix.copy(t.parent.matrixWorld).invert(),t.matrix.multiply(t.matrixWorld)):t.matrix.copy(t.matrixWorld),t.matrix.decompose(t.position,t.quaternion,t.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let a=e[r]?e[r].matrixWorld:sv;s_.multiplyMatrices(a,t[r]),s_.toArray(i,16*r)}null!==r&&(r.needsUpdate=!0)}clone(){return new sx(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(4*this.bones.length),t=new Float32Array((e=Math.max(e=4*Math.ceil(e/4),4))*e*4);t.set(this.boneMatrices);let i=new sg(t,e,e,1023,1015);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){null!==this.boneTexture&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){let r=e.bones[i],a=t[r];void 0===a&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new sf),this.bones.push(a),this.boneInverses.push(new eX().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let r=0,a=t.length;r<a;r++){let a=t[r];e.bones.push(a.uuid);let s=i[r];e.boneInverses.push(s.toArray())}return e}}class sy extends tU{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}let sM=new eX,sS=new eX,sb=[],sT=new ev,sE=new eX,sA=new is,sw=new eO;class sR extends is{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new sy(new Float32Array(16*i),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<i;e++)this.setMatrixAt(e,sE)}computeBoundingBox(){let e=this.geometry,t=this.count;null===this.boundingBox&&(this.boundingBox=new ev),null===e.boundingBox&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,sM),sT.copy(e.boundingBox).applyMatrix4(sM),this.boundingBox.union(sT)}computeBoundingSphere(){let e=this.geometry,t=this.count;null===this.boundingSphere&&(this.boundingSphere=new eO),null===e.boundingSphere&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,sM),sw.copy(e.boundingSphere).applyMatrix4(sM),this.boundingSphere.union(sw)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),null!==e.instanceColor&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,null!==e.boundingBox&&(this.boundingBox=e.boundingBox.clone()),null!==e.boundingSphere&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,3*e)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,16*e)}raycast(e,t){let i=this.matrixWorld,r=this.count;if(sA.geometry=this.geometry,sA.material=this.material,void 0!==sA.material&&(null===this.boundingSphere&&this.computeBoundingSphere(),sw.copy(this.boundingSphere),sw.applyMatrix4(i),!1!==e.ray.intersectsSphere(sw)))for(let a=0;a<r;a++){this.getMatrixAt(a,sM),sS.multiplyMatrices(i,sM),sA.matrixWorld=sS,sA.raycast(e,sb);for(let e=0,i=sb.length;e<i;e++){let i=sb[e];i.instanceId=a,i.object=this,t.push(i)}sb.length=0}}setColorAt(e,t){null===this.instanceColor&&(this.instanceColor=new sy(new Float32Array(3*this.instanceMatrix.count),3)),t.toArray(this.instanceColor.array,3*e)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,16*e)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}function sC(e,t){return e.z-t.z}function sL(e,t){return t.z-e.z}class sP{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t){let i=this.pool,r=this.list;this.index>=i.length&&i.push({start:-1,count:-1,z:-1});let a=i[this.index];r.push(a),this.index++,a.start=e.start,a.count=e.count,a.z=t}reset(){this.list.length=0,this.index=0}}let sI="batchId",sU=new eX,sN=new eX,sD=new eX,sO=new eX,sF=new iR,sB=new ev,sz=new eO,sH=new ef,sG=new sP,sk=new is,sV=[];class sW extends is{get maxGeometryCount(){return this._maxGeometryCount}constructor(e,t,i=2*t,r){super(new tJ,r),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._drawRanges=[],this._reservedRanges=[],this._visibility=[],this._active=[],this._bounds=[],this._maxGeometryCount=e,this._maxVertexCount=t,this._maxIndexCount=i,this._geometryInitialized=!1,this._geometryCount=0,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._visibilityChanged=!0,this._matricesTexture=null,this._initMatricesTexture()}_initMatricesTexture(){let e=Math.sqrt(4*this._maxGeometryCount),t=new sg(new Float32Array((e=Math.max(e=4*Math.ceil(e/4),4))*e*4),e,e,1023,1015);this._matricesTexture=t}_initializeGeometry(e){let t=this.geometry,i=this._maxVertexCount,r=this._maxGeometryCount,a=this._maxIndexCount;if(!1===this._geometryInitialized){for(let r in e.attributes){let a=e.getAttribute(r),{array:s,itemSize:n,normalized:o}=a,l=new s.constructor(i*n),h=new a.constructor(l,n,o);h.setUsage(a.usage),t.setAttribute(r,h)}if(null!==e.getIndex()){let e=i>65536?new Uint32Array(a):new Uint16Array(a);t.setIndex(new tU(e,1))}let s=r>65536?new Uint32Array(i):new Uint16Array(i);t.setAttribute(sI,new tU(s,1)),this._geometryInitialized=!0}}_validateGeometry(e){if(e.getAttribute(sI))throw Error(`BatchedMesh: Geometry cannot use attribute "${sI}"`);let t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw Error('BatchedMesh: All geometries must consistently have "index".');for(let i in t.attributes){if(i===sI)continue;if(!e.hasAttribute(i))throw Error(`BatchedMesh: Added geometry missing "${i}". All geometries must have consistent attributes.`);let r=e.getAttribute(i),a=t.getAttribute(i);if(r.itemSize!==a.itemSize||r.normalized!==a.normalized)throw Error("BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){null===this.boundingBox&&(this.boundingBox=new ev);let e=this._geometryCount,t=this.boundingBox,i=this._active;t.makeEmpty();for(let r=0;r<e;r++)!1!==i[r]&&(this.getMatrixAt(r,sU),this.getBoundingBoxAt(r,sB).applyMatrix4(sU),t.union(sB))}computeBoundingSphere(){null===this.boundingSphere&&(this.boundingSphere=new eO);let e=this._geometryCount,t=this.boundingSphere,i=this._active;t.makeEmpty();for(let r=0;r<e;r++)!1!==i[r]&&(this.getMatrixAt(r,sU),this.getBoundingSphereAt(r,sz).applyMatrix4(sU),t.union(sz))}addGeometry(e,t=-1,i=-1){if(this._initializeGeometry(e),this._validateGeometry(e),this._geometryCount>=this._maxGeometryCount)throw Error("BatchedMesh: Maximum geometry count reached.");let r={vertexStart:-1,vertexCount:-1,indexStart:-1,indexCount:-1},a=null,s=this._reservedRanges,n=this._drawRanges,o=this._bounds;0!==this._geometryCount&&(a=s[s.length-1]),-1===t?r.vertexCount=e.getAttribute("position").count:r.vertexCount=t,null===a?r.vertexStart=0:r.vertexStart=a.vertexStart+a.vertexCount;let l=e.getIndex(),h=null!==l;if(h&&(-1===i?r.indexCount=l.count:r.indexCount=i,null===a?r.indexStart=0:r.indexStart=a.indexStart+a.indexCount),-1!==r.indexStart&&r.indexStart+r.indexCount>this._maxIndexCount||r.vertexStart+r.vertexCount>this._maxVertexCount)throw Error("BatchedMesh: Reserved space request exceeds the maximum buffer size.");let c=this._visibility,u=this._active,d=this._matricesTexture,p=this._matricesTexture.image.data;c.push(!0),u.push(!0);let m=this._geometryCount;this._geometryCount++,sD.toArray(p,16*m),d.needsUpdate=!0,s.push(r),n.push({start:h?r.indexStart:r.vertexStart,count:-1}),o.push({boxInitialized:!1,box:new ev,sphereInitialized:!1,sphere:new eO});let f=this.geometry.getAttribute(sI);for(let e=0;e<r.vertexCount;e++)f.setX(r.vertexStart+e,m);return f.needsUpdate=!0,this.setGeometryAt(m,e),m}setGeometryAt(e,t){if(e>=this._geometryCount)throw Error("BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);let i=this.geometry,r=null!==i.getIndex(),a=i.getIndex(),s=t.getIndex(),n=this._reservedRanges[e];if(r&&s.count>n.indexCount||t.attributes.position.count>n.vertexCount)throw Error("BatchedMesh: Reserved space not large enough for provided geometry.");let o=n.vertexStart,l=n.vertexCount;for(let e in i.attributes){if(e===sI)continue;let r=t.getAttribute(e),a=i.getAttribute(e);!function(e,t,i=0){let r=t.itemSize;if(e.isInterleavedBufferAttribute||e.array.constructor!==t.array.constructor){let a=e.count;for(let s=0;s<a;s++)for(let a=0;a<r;a++)t.setComponent(s+i,a,e.getComponent(s,a))}else t.array.set(e.array,i*r);t.needsUpdate=!0}(r,a,o);let s=r.itemSize;for(let e=r.count;e<l;e++){let t=o+e;for(let e=0;e<s;e++)a.setComponent(t,e,0)}a.needsUpdate=!0}if(r){let e=n.indexStart;for(let t=0;t<s.count;t++)a.setX(e+t,o+s.getX(t));for(let t=s.count,i=n.indexCount;t<i;t++)a.setX(e+t,o);a.needsUpdate=!0}let h=this._bounds[e];null!==t.boundingBox?(h.box.copy(t.boundingBox),h.boxInitialized=!0):h.boxInitialized=!1,null!==t.boundingSphere?(h.sphere.copy(t.boundingSphere),h.sphereInitialized=!0):h.sphereInitialized=!1;let c=this._drawRanges[e],u=t.getAttribute("position");return c.count=r?s.count:u.count,this._visibilityChanged=!0,e}deleteGeometry(e){let t=this._active;return e>=t.length||!1===t[e]||(t[e]=!1,this._visibilityChanged=!0),this}getBoundingBoxAt(e,t){if(!1===this._active[e])return this;let i=this._bounds[e],r=i.box,a=this.geometry;if(!1===i.boxInitialized){r.makeEmpty();let t=a.index,s=a.attributes.position,n=this._drawRanges[e];for(let e=n.start,i=n.start+n.count;e<i;e++){let i=e;t&&(i=t.getX(i)),r.expandByPoint(sH.fromBufferAttribute(s,i))}i.boxInitialized=!0}return t.copy(r),t}getBoundingSphereAt(e,t){if(!1===this._active[e])return this;let i=this._bounds[e],r=i.sphere,a=this.geometry;if(!1===i.sphereInitialized){r.makeEmpty(),this.getBoundingBoxAt(e,sB),sB.getCenter(r.center);let t=a.index,s=a.attributes.position,n=this._drawRanges[e],o=0;for(let e=n.start,i=n.start+n.count;e<i;e++){let i=e;t&&(i=t.getX(i)),sH.fromBufferAttribute(s,i),o=Math.max(o,r.center.distanceToSquared(sH))}r.radius=Math.sqrt(o),i.sphereInitialized=!0}return t.copy(r),t}setMatrixAt(e,t){let i=this._active,r=this._matricesTexture,a=this._matricesTexture.image.data;return e>=this._geometryCount||!1===i[e]||(t.toArray(a,16*e),r.needsUpdate=!0),this}getMatrixAt(e,t){let i=this._active,r=this._matricesTexture.image.data;return e>=this._geometryCount||!1===i[e]?null:t.fromArray(r,16*e)}setVisibleAt(e,t){let i=this._visibility,r=this._active;return e>=this._geometryCount||!1===r[e]||i[e]===t||(i[e]=t,this._visibilityChanged=!0),this}getVisibleAt(e){let t=this._visibility,i=this._active;return!(e>=this._geometryCount)&&!1!==i[e]&&t[e]}raycast(e,t){let i=this._visibility,r=this._active,a=this._drawRanges,s=this._geometryCount,n=this.matrixWorld,o=this.geometry;sk.material=this.material,sk.geometry.index=o.index,sk.geometry.attributes=o.attributes,null===sk.geometry.boundingBox&&(sk.geometry.boundingBox=new ev),null===sk.geometry.boundingSphere&&(sk.geometry.boundingSphere=new eO);for(let o=0;o<s;o++){if(!i[o]||!r[o])continue;let s=a[o];sk.geometry.setDrawRange(s.start,s.count),this.getMatrixAt(o,sk.matrixWorld).premultiply(n),this.getBoundingBoxAt(o,sk.geometry.boundingBox),this.getBoundingSphereAt(o,sk.geometry.boundingSphere),sk.raycast(e,sV);for(let e=0,i=sV.length;e<i;e++){let i=sV[e];i.object=this,i.batchId=o,t.push(i)}sV.length=0}sk.material=null,sk.geometry.index=null,sk.geometry.attributes={},sk.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=null!==e.boundingBox?e.boundingBox.clone():null,this.boundingSphere=null!==e.boundingSphere?e.boundingSphere.clone():null,this._drawRanges=e._drawRanges.map(e=>({...e})),this._reservedRanges=e._reservedRanges.map(e=>({...e})),this._visibility=e._visibility.slice(),this._active=e._active.slice(),this._bounds=e._bounds.map(e=>({boxInitialized:e.boxInitialized,box:e.box.clone(),sphereInitialized:e.sphereInitialized,sphere:e.sphere.clone()})),this._maxGeometryCount=e._maxGeometryCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._geometryCount=e._geometryCount,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.slice(),this}dispose(){return this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this}onBeforeRender(e,t,i,r,a){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;let s=r.getIndex(),n=null===s?1:s.array.BYTES_PER_ELEMENT,o=this._visibility,l=this._multiDrawStarts,h=this._multiDrawCounts,c=this._drawRanges,u=this.perObjectFrustumCulled;u&&(sO.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse).multiply(this.matrixWorld),sF.setFromProjectionMatrix(sO,e.isWebGPURenderer?2001:2e3));let d=0;if(this.sortObjects){sN.copy(this.matrixWorld).invert(),sH.setFromMatrixPosition(i.matrixWorld).applyMatrix4(sN);for(let e=0,t=o.length;e<t;e++)if(o[e]){this.getMatrixAt(e,sU),this.getBoundingSphereAt(e,sz).applyMatrix4(sU);let t=!1;if(u&&(t=!sF.intersectsSphere(sz)),!t){let t=sH.distanceTo(sz.center);sG.push(c[e],t)}}let e=sG.list,t=this.customSort;null===t?e.sort(a.transparent?sL:sC):t.call(this,e,i);for(let t=0,i=e.length;t<i;t++){let i=e[t];l[d]=i.start*n,h[d]=i.count,d++}sG.reset()}else for(let e=0,t=o.length;e<t;e++)if(o[e]){let t=!1;if(u&&(this.getMatrixAt(e,sU),this.getBoundingSphereAt(e,sz).applyMatrix4(sU),t=!sF.intersectsSphere(sz)),!t){let t=c[e];l[d]=t.start*n,h[d]=t.count,d++}}this._multiDrawCount=d,this._visibilityChanged=!1}onBeforeShadow(e,t,i,r,a,s){this.onBeforeRender(e,null,r,a,s)}}class sX extends tA{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new tb(0xffffff),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}let sj=new ef,sq=new ef,sY=new eX,sZ=new eW,sK=new eO;class sJ extends tn{constructor(e=new tJ,t=new sX){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(null===e.index){let t=e.attributes.position,i=[0];for(let e=1,r=t.count;e<r;e++)sj.fromBufferAttribute(t,e-1),sq.fromBufferAttribute(t,e),i[e]=i[e-1],i[e]+=sj.distanceTo(sq);e.setAttribute("lineDistance",new tk(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,a=e.params.Line.threshold,s=i.drawRange;if(null===i.boundingSphere&&i.computeBoundingSphere(),sK.copy(i.boundingSphere),sK.applyMatrix4(r),sK.radius+=a,!1===e.ray.intersectsSphere(sK))return;sY.copy(r).invert(),sZ.copy(e.ray).applyMatrix4(sY);let n=a/((this.scale.x+this.scale.y+this.scale.z)/3),o=n*n,l=new ef,h=new ef,c=new ef,u=new ef,d=this.isLineSegments?2:1,p=i.index,m=i.attributes.position;if(null!==p){let i=Math.max(0,s.start),r=Math.min(p.count,s.start+s.count);for(let a=i,s=r-1;a<s;a+=d){let i=p.getX(a),r=p.getX(a+1);if(l.fromBufferAttribute(m,i),h.fromBufferAttribute(m,r),sZ.distanceSqToSegment(l,h,u,c)>o)continue;u.applyMatrix4(this.matrixWorld);let s=e.ray.origin.distanceTo(u);s<e.near||s>e.far||t.push({distance:s,point:c.clone().applyMatrix4(this.matrixWorld),index:a,face:null,faceIndex:null,object:this})}}else{let i=Math.max(0,s.start),r=Math.min(m.count,s.start+s.count);for(let a=i,s=r-1;a<s;a+=d){if(l.fromBufferAttribute(m,a),h.fromBufferAttribute(m,a+1),sZ.distanceSqToSegment(l,h,u,c)>o)continue;u.applyMatrix4(this.matrixWorld);let i=e.ray.origin.distanceTo(u);i<e.near||i>e.far||t.push({distance:i,point:c.clone().applyMatrix4(this.matrixWorld),index:a,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(void 0!==i){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=i.length;e<t;e++){let t=i[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}}let sQ=new ef,s$=new ef;class s0 extends sJ{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(null===e.index){let t=e.attributes.position,i=[];for(let e=0,r=t.count;e<r;e+=2)sQ.fromBufferAttribute(t,e),s$.fromBufferAttribute(t,e+1),i[e]=0===e?0:i[e-1],i[e+1]=i[e]+sQ.distanceTo(s$);e.setAttribute("lineDistance",new tk(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class s1 extends sJ{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class s2 extends tA{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new tb(0xffffff),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let s3=new eX,s4=new eW,s5=new eO,s6=new ef;class s8 extends tn{constructor(e=new tJ,t=new s2){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,a=e.params.Points.threshold,s=i.drawRange;if(null===i.boundingSphere&&i.computeBoundingSphere(),s5.copy(i.boundingSphere),s5.applyMatrix4(r),s5.radius+=a,!1===e.ray.intersectsSphere(s5))return;s3.copy(r).invert(),s4.copy(e.ray).applyMatrix4(s3);let n=a/((this.scale.x+this.scale.y+this.scale.z)/3),o=n*n,l=i.index,h=i.attributes.position;if(null!==l){let i=Math.max(0,s.start),a=Math.min(l.count,s.start+s.count);for(let s=i;s<a;s++){let i=l.getX(s);s6.fromBufferAttribute(h,i),s9(s6,i,o,r,e,t,this)}}else{let i=Math.max(0,s.start),a=Math.min(h.count,s.start+s.count);for(let s=i;s<a;s++)s6.fromBufferAttribute(h,s),s9(s6,s,o,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(void 0!==i){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=i.length;e<t;e++){let t=i[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}}function s9(e,t,i,r,a,s,n){let o=s4.distanceSqToPoint(e);if(o<i){let i=new ef;s4.closestPointToPoint(e,i),i.applyMatrix4(r);let l=a.ray.origin.distanceTo(i);if(l<a.near||l>a.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:i,index:t,face:null,object:n})}}class s7 extends es{constructor(e,t,i,r,a,s,n,o,l){super(e,t,i,r,a,s,n,o,l),this.isVideoTexture=!0,this.minFilter=void 0!==s?s:p,this.magFilter=void 0!==a?a:p,this.generateMipmaps=!1;let h=this;"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(function t(){h.needsUpdate=!0,e.requestVideoFrameCallback(t)})}clone(){return new this.constructor(this.image).copy(this)}update(){let e=this.image;"requestVideoFrameCallback"in e==!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class ne extends es{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=1003,this.minFilter=1003,this.generateMipmaps=!1,this.needsUpdate=!0}}class nt extends es{constructor(e,t,i,r,a,s,n,o,l,h,c,u){super(null,s,n,o,l,h,r,a,c,u),this.isCompressedTexture=!0,this.image={width:t,height:i},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class ni extends nt{constructor(e,t,i,r,a,s){super(e,t,i,a,s),this.isCompressedArrayTexture=!0,this.image.depth=r,this.wrapR=1001}}class nr extends nt{constructor(e,t,i){super(void 0,e[0].width,e[0].height,t,i,301),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}}class na extends es{constructor(e,t,i,r,a,s,n,o,l){super(e,t,i,r,a,s,n,o,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ns{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,r=this.getPoint(0),a=0;t.push(0);for(let s=1;s<=e;s++)t.push(a+=(i=this.getPoint(s/e)).distanceTo(r)),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i,r=this.getLengths(),a=0,s=r.length;i=t||e*r[s-1];let n=0,o=s-1,l;for(;n<=o;)if((l=r[a=Math.floor(n+(o-n)/2)]-i)<0)n=a+1;else if(l>0)o=a-1;else{o=a;break}if(r[a=o]===i)return a/(s-1);let h=r[a],c=r[a+1]-h;return(a+(i-h)/c)/(s-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),s=this.getPoint(r),n=t||(a.isVector2?new F:new ef);return n.copy(s).sub(a).normalize(),n}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new ef,r=[],a=[],s=[],n=new ef,o=new eX;for(let t=0;t<=e;t++){let i=t/e;r[t]=this.getTangentAt(i,new ef)}a[0]=new ef,s[0]=new ef;let l=Number.MAX_VALUE,h=Math.abs(r[0].x),c=Math.abs(r[0].y),u=Math.abs(r[0].z);h<=l&&(l=h,i.set(1,0,0)),c<=l&&(l=c,i.set(0,1,0)),u<=l&&i.set(0,0,1),n.crossVectors(r[0],i).normalize(),a[0].crossVectors(r[0],n),s[0].crossVectors(r[0],a[0]);for(let t=1;t<=e;t++){if(a[t]=a[t-1].clone(),s[t]=s[t-1].clone(),n.crossVectors(r[t-1],r[t]),n.length()>Number.EPSILON){n.normalize();let e=Math.acos(C(r[t-1].dot(r[t]),-1,1));a[t].applyMatrix4(o.makeRotationAxis(n,e))}s[t].crossVectors(r[t],a[t])}if(!0===t){let t=Math.acos(C(a[0].dot(a[e]),-1,1));t/=e,r[0].dot(n.crossVectors(a[0],a[e]))>0&&(t=-t);for(let i=1;i<=e;i++)a[i].applyMatrix4(o.makeRotationAxis(r[i],t*i)),s[i].crossVectors(r[i],a[i])}return{tangents:r,normals:a,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class nn extends ns{constructor(e=0,t=0,i=1,r=1,a=0,s=2*Math.PI,n=!1,o=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=a,this.aEndAngle=s,this.aClockwise=n,this.aRotation=o}getPoint(e,t){let i=t||new F,r=2*Math.PI,a=this.aEndAngle-this.aStartAngle,s=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=r;for(;a>r;)a-=r;a<Number.EPSILON&&(a=s?0:r),!0!==this.aClockwise||s||(a===r?a=-r:a-=r);let n=this.aStartAngle+e*a,o=this.aX+this.xRadius*Math.cos(n),l=this.aY+this.yRadius*Math.sin(n);if(0!==this.aRotation){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),i=o-this.aX,r=l-this.aY;o=i*e-r*t+this.aX,l=i*t+r*e+this.aY}return i.set(o,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class no extends nn{constructor(e,t,i,r,a,s){super(e,t,i,i,r,a,s),this.isArcCurve=!0,this.type="ArcCurve"}}function nl(){let e=0,t=0,i=0,r=0;function a(a,s,n,o){e=a,t=n,i=-3*a+3*s-2*n-o,r=2*a-2*s+n+o}return{initCatmullRom:function(e,t,i,r,s){a(t,i,s*(i-e),s*(r-t))},initNonuniformCatmullRom:function(e,t,i,r,s,n,o){let l=(t-e)/s-(i-e)/(s+n)+(i-t)/n,h=(i-t)/n-(r-t)/(n+o)+(r-i)/o;a(t,i,l*=n,h*=n)},calc:function(a){let s=a*a;return e+t*a+i*s+s*a*r}}}let nh=new ef,nc=new nl,nu=new nl,nd=new nl;class np extends ns{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new ef){let i,r,a=this.points,s=a.length,n=(s-!this.closed)*e,o=Math.floor(n),l=n-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:0===l&&o===s-1&&(o=s-2,l=1),this.closed||o>0?i=a[(o-1)%s]:(nh.subVectors(a[0],a[1]).add(a[0]),i=nh);let h=a[o%s],c=a[(o+1)%s];if(this.closed||o+2<s?r=a[(o+2)%s]:(nh.subVectors(a[s-1],a[s-2]).add(a[s-1]),r=nh),"centripetal"===this.curveType||"chordal"===this.curveType){let e="chordal"===this.curveType?.5:.25,t=Math.pow(i.distanceToSquared(h),e),a=Math.pow(h.distanceToSquared(c),e),s=Math.pow(c.distanceToSquared(r),e);a<1e-4&&(a=1),t<1e-4&&(t=a),s<1e-4&&(s=a),nc.initNonuniformCatmullRom(i.x,h.x,c.x,r.x,t,a,s),nu.initNonuniformCatmullRom(i.y,h.y,c.y,r.y,t,a,s),nd.initNonuniformCatmullRom(i.z,h.z,c.z,r.z,t,a,s)}else"catmullrom"===this.curveType&&(nc.initCatmullRom(i.x,h.x,c.x,r.x,this.tension),nu.initCatmullRom(i.y,h.y,c.y,r.y,this.tension),nd.initCatmullRom(i.z,h.z,c.z,r.z,this.tension));return t.set(nc.calc(l),nu.calc(l),nd.calc(l)),t}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let i=e.points[t];this.points.push(new ef().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function nm(e,t,i,r,a){let s=(r-t)*.5,n=(a-i)*.5,o=e*e;return e*o*(2*i-2*r+s+n)+(-3*i+3*r-2*s-n)*o+s*e+i}function nf(e,t,i,r){let a;return(a=1-e)*a*t+2*(1-e)*e*i+e*e*r}function ng(e,t,i,r,a){let s,n;return(s=1-e)*s*s*t+3*(n=1-e)*n*e*i+3*(1-e)*e*e*r+e*e*e*a}class n_ extends ns{constructor(e=new F,t=new F,i=new F,r=new F){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new F){let i=this.v0,r=this.v1,a=this.v2,s=this.v3;return t.set(ng(e,i.x,r.x,a.x,s.x),ng(e,i.y,r.y,a.y,s.y)),t}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class nv extends ns{constructor(e=new ef,t=new ef,i=new ef,r=new ef){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new ef){let i=this.v0,r=this.v1,a=this.v2,s=this.v3;return t.set(ng(e,i.x,r.x,a.x,s.x),ng(e,i.y,r.y,a.y,s.y),ng(e,i.z,r.z,a.z,s.z)),t}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class nx extends ns{constructor(e=new F,t=new F){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new F){return 1===e?t.copy(this.v2):(t.copy(this.v2).sub(this.v1),t.multiplyScalar(e).add(this.v1)),t}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new F){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ny extends ns{constructor(e=new ef,t=new ef){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new ef){return 1===e?t.copy(this.v2):(t.copy(this.v2).sub(this.v1),t.multiplyScalar(e).add(this.v1)),t}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ef){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class nM extends ns{constructor(e=new F,t=new F,i=new F){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new F){let i=this.v0,r=this.v1,a=this.v2;return t.set(nf(e,i.x,r.x,a.x),nf(e,i.y,r.y,a.y)),t}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class nS extends ns{constructor(e=new ef,t=new ef,i=new ef){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ef){let i=this.v0,r=this.v1,a=this.v2;return t.set(nf(e,i.x,r.x,a.x),nf(e,i.y,r.y,a.y),nf(e,i.z,r.z,a.z)),t}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class nb extends ns{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new F){let i=this.points,r=(i.length-1)*e,a=Math.floor(r),s=r-a,n=i[0===a?a:a-1],o=i[a],l=i[a>i.length-2?i.length-1:a+1],h=i[a>i.length-3?i.length-1:a+2];return t.set(nm(s,n.x,o.x,l.x,h.x),nm(s,n.y,o.y,l.y,h.y)),t}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let i=e.points[t];this.points.push(new F().fromArray(i))}return this}}var nT=Object.freeze({__proto__:null,ArcCurve:no,CatmullRomCurve3:np,CubicBezierCurve:n_,CubicBezierCurve3:nv,EllipseCurve:nn,LineCurve:nx,LineCurve3:ny,QuadraticBezierCurve:nM,QuadraticBezierCurve3:nS,SplineCurve:nb});class nE extends ns{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=!0===e.isVector2?"LineCurve":"LineCurve3";this.curves.push(new nT[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),r=this.getCurveLengths(),a=0;for(;a<r.length;){if(r[a]>=i){let e=r[a]-i,s=this.curves[a],n=s.getLength(),o=0===n?0:1-e/n;return s.getPointAt(o,t)}a++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,r=this.curves.length;i<r;i++)e.push(t+=this.curves[i].getLength());return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t,i=[];for(let r=0,a=this.curves;r<a.length;r++){let s=a[r],n=s.isEllipseCurve?2*e:s.isLineCurve||s.isLineCurve3?1:s.isSplineCurve?e*s.points.length:e,o=s.getPoints(n);for(let e=0;e<o.length;e++){let r=o[e];t&&t.equals(r)||(i.push(r),t=r)}}return this.autoClose&&i.length>1&&!i[i.length-1].equals(i[0])&&i.push(i[0]),i}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let i=e.curves[t];this.curves.push(new nT[i.type]().fromJSON(i))}return this}}class nA extends nE{constructor(e){super(),this.type="Path",this.currentPoint=new F,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new nx(this.currentPoint.clone(),new F(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){let a=new nM(this.currentPoint.clone(),new F(e,t),new F(i,r));return this.curves.push(a),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,a,s){let n=new n_(this.currentPoint.clone(),new F(e,t),new F(i,r),new F(a,s));return this.curves.push(n),this.currentPoint.set(a,s),this}splineThru(e){let t=new nb([this.currentPoint.clone()].concat(e));return this.curves.push(t),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,a,s){let n=this.currentPoint.x,o=this.currentPoint.y;return this.absarc(e+n,t+o,i,r,a,s),this}absarc(e,t,i,r,a,s){return this.absellipse(e,t,i,i,r,a,s),this}ellipse(e,t,i,r,a,s,n,o){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,i,r,a,s,n,o),this}absellipse(e,t,i,r,a,s,n,o){let l=new nn(e,t,i,r,a,s,n,o);if(this.curves.length>0){let e=l.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class nw extends tJ{constructor(e=[new F(0,-.5),new F(.5,0),new F(0,.5)],t=12,i=0,r=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:r},t=Math.floor(t),r=C(r,0,2*Math.PI);let a=[],s=[],n=[],o=[],l=[],h=1/t,c=new ef,u=new F,d=new ef,p=new ef,m=new ef,f=0,g=0;for(let t=0;t<=e.length-1;t++)switch(t){case 0:f=e[t+1].x-e[t].x,d.x=+(g=e[t+1].y-e[t].y),d.y=-f,d.z=0*g,m.copy(d),d.normalize(),o.push(d.x,d.y,d.z);break;case e.length-1:o.push(m.x,m.y,m.z);break;default:f=e[t+1].x-e[t].x,d.x=+(g=e[t+1].y-e[t].y),d.y=-f,d.z=0*g,p.copy(d),d.x+=m.x,d.y+=m.y,d.z+=m.z,d.normalize(),o.push(d.x,d.y,d.z),m.copy(p)}for(let a=0;a<=t;a++){let d=i+a*h*r,p=Math.sin(d),m=Math.cos(d);for(let i=0;i<=e.length-1;i++){c.x=e[i].x*p,c.y=e[i].y,c.z=e[i].x*m,s.push(c.x,c.y,c.z),u.x=a/t,u.y=i/(e.length-1),n.push(u.x,u.y);let r=o[3*i+0]*p,h=o[3*i+1],d=o[3*i+0]*m;l.push(r,h,d)}}for(let i=0;i<t;i++)for(let t=0;t<e.length-1;t++){let r=t+i*e.length,s=r+e.length,n=r+e.length+1,o=r+1;a.push(r,s,o),a.push(n,o,s)}this.setIndex(a),this.setAttribute("position",new tk(s,3)),this.setAttribute("uv",new tk(n,2)),this.setAttribute("normal",new tk(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nw(e.points,e.segments,e.phiStart,e.phiLength)}}class nR extends nw{constructor(e=1,t=1,i=4,r=8){let a=new nA;a.absarc(0,-t/2,e,1.5*Math.PI,0),a.absarc(0,t/2,e,0,.5*Math.PI),super(a.getPoints(i),r),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:r}}static fromJSON(e){return new nR(e.radius,e.length,e.capSegments,e.radialSegments)}}class nC extends tJ{constructor(e=1,t=32,i=0,r=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);let a=[],s=[],n=[],o=[],l=new ef,h=new F;s.push(0,0,0),n.push(0,0,1),o.push(.5,.5);for(let a=0,c=3;a<=t;a++,c+=3){let u=i+a/t*r;l.x=e*Math.cos(u),l.y=e*Math.sin(u),s.push(l.x,l.y,l.z),n.push(0,0,1),h.x=(s[c]/e+1)/2,h.y=(s[c+1]/e+1)/2,o.push(h.x,h.y)}for(let e=1;e<=t;e++)a.push(e,e+1,0);this.setIndex(a),this.setAttribute("position",new tk(s,3)),this.setAttribute("normal",new tk(n,3)),this.setAttribute("uv",new tk(o,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nC(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class nL extends tJ{constructor(e=1,t=1,i=1,r=32,a=1,s=!1,n=0,o=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:a,openEnded:s,thetaStart:n,thetaLength:o};let l=this;r=Math.floor(r),a=Math.floor(a);let h=[],c=[],u=[],d=[],p=0,m=[],f=i/2,g=0;function _(i){let a=p,s=new F,m=new ef,_=0,v=!0===i?e:t,x=!0===i?1:-1;for(let e=1;e<=r;e++)c.push(0,f*x,0),u.push(0,x,0),d.push(.5,.5),p++;let y=p;for(let e=0;e<=r;e++){let t=e/r*o+n,i=Math.cos(t),a=Math.sin(t);m.x=v*a,m.y=f*x,m.z=v*i,c.push(m.x,m.y,m.z),u.push(0,x,0),s.x=.5*i+.5,s.y=.5*a*x+.5,d.push(s.x,s.y),p++}for(let e=0;e<r;e++){let t=a+e,r=y+e;!0===i?h.push(r,r+1,t):h.push(r+1,r,t),_+=3}l.addGroup(g,_,!0===i?1:2),g+=_}(function(){let s=new ef,_=new ef,v=0,x=(t-e)/i;for(let l=0;l<=a;l++){let h=[],g=l/a,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,a=t*o+n,l=Math.sin(a),m=Math.cos(a);_.x=v*l,_.y=-g*i+f,_.z=v*m,c.push(_.x,_.y,_.z),s.set(l,x,m).normalize(),u.push(s.x,s.y,s.z),d.push(t,1-g),h.push(p++)}m.push(h)}for(let e=0;e<r;e++)for(let t=0;t<a;t++){let i=m[t][e],r=m[t+1][e],a=m[t+1][e+1],s=m[t][e+1];h.push(i,r,s),h.push(r,a,s),v+=6}l.addGroup(g,v,0),g+=v})(),!1===s&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new tk(c,3)),this.setAttribute("normal",new tk(u,3)),this.setAttribute("uv",new tk(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nL(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class nP extends nL{constructor(e=1,t=1,i=32,r=1,a=!1,s=0,n=2*Math.PI){super(0,e,t,i,r,a,s,n),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:s,thetaLength:n}}static fromJSON(e){return new nP(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class nI extends tJ{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};let a=[],s=[];function n(e){a.push(e.x,e.y,e.z)}function o(t,i){let r=3*t;i.x=e[r+0],i.y=e[r+1],i.z=e[r+2]}function l(e,t,i,r){r<0&&1===e.x&&(s[t]=e.x-1),0===i.x&&0===i.z&&(s[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}(function(e){let i=new ef,r=new ef,a=new ef;for(let s=0;s<t.length;s+=3)o(t[s+0],i),o(t[s+1],r),o(t[s+2],a),function(e,t,i,r){let a=r+1,s=[];for(let r=0;r<=a;r++){s[r]=[];let n=e.clone().lerp(i,r/a),o=t.clone().lerp(i,r/a),l=a-r;for(let e=0;e<=l;e++)0===e&&r===a?s[r][e]=n:s[r][e]=n.clone().lerp(o,e/l)}for(let e=0;e<a;e++)for(let t=0;t<2*(a-e)-1;t++){let i=Math.floor(t/2);t%2==0?(n(s[e][i+1]),n(s[e+1][i]),n(s[e][i])):(n(s[e][i+1]),n(s[e+1][i+1]),n(s[e+1][i]))}}(i,r,a,e)})(r),function(e){let t=new ef;for(let i=0;i<a.length;i+=3)t.x=a[i+0],t.y=a[i+1],t.z=a[i+2],t.normalize().multiplyScalar(e),a[i+0]=t.x,a[i+1]=t.y,a[i+2]=t.z}(i),function(){let e=new ef;for(let i=0;i<a.length;i+=3){var t;e.x=a[i+0],e.y=a[i+1],e.z=a[i+2];let r=h(e)/2/Math.PI+.5,n=Math.atan2(-(t=e).y,Math.sqrt(t.x*t.x+t.z*t.z))/Math.PI+.5;s.push(r,1-n)}(function(){let e=new ef,t=new ef,i=new ef,r=new ef,n=new F,o=new F,c=new F;for(let u=0,d=0;u<a.length;u+=9,d+=6){e.set(a[u+0],a[u+1],a[u+2]),t.set(a[u+3],a[u+4],a[u+5]),i.set(a[u+6],a[u+7],a[u+8]),n.set(s[d+0],s[d+1]),o.set(s[d+2],s[d+3]),c.set(s[d+4],s[d+5]),r.copy(e).add(t).add(i).divideScalar(3);let p=h(r);l(n,d+0,e,p),l(o,d+2,t,p),l(c,d+4,i,p)}})(),function(){for(let e=0;e<s.length;e+=6){let t=s[e+0],i=s[e+2],r=s[e+4],a=Math.max(t,i,r),n=Math.min(t,i,r);a>.9&&n<.1&&(t<.2&&(s[e+0]+=1),i<.2&&(s[e+2]+=1),r<.2&&(s[e+4]+=1))}}()}(),this.setAttribute("position",new tk(a,3)),this.setAttribute("normal",new tk(a.slice(),3)),this.setAttribute("uv",new tk(s,2)),0===r?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nI(e.vertices,e.indices,e.radius,e.details)}}class nU extends nI{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,r=1/i;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new nU(e.radius,e.detail)}}let nN=new ef,nD=new ef,nO=new ef,nF=new tv;class nB extends tJ{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},null!==e){let i=Math.cos(A*t),r=e.getIndex(),a=e.getAttribute("position"),s=r?r.count:a.count,n=[0,0,0],o=["a","b","c"],l=[,,,],h={},c=[];for(let e=0;e<s;e+=3){r?(n[0]=r.getX(e),n[1]=r.getX(e+1),n[2]=r.getX(e+2)):(n[0]=e,n[1]=e+1,n[2]=e+2);let{a:t,b:s,c:u}=nF;if(t.fromBufferAttribute(a,n[0]),s.fromBufferAttribute(a,n[1]),u.fromBufferAttribute(a,n[2]),nF.getNormal(nO),l[0]=`${Math.round(1e4*t.x)},${Math.round(1e4*t.y)},${Math.round(1e4*t.z)}`,l[1]=`${Math.round(1e4*s.x)},${Math.round(1e4*s.y)},${Math.round(1e4*s.z)}`,l[2]=`${Math.round(1e4*u.x)},${Math.round(1e4*u.y)},${Math.round(1e4*u.z)}`,l[0]!==l[1]&&l[1]!==l[2]&&l[2]!==l[0])for(let e=0;e<3;e++){let t=(e+1)%3,r=l[e],a=l[t],s=nF[o[e]],u=nF[o[t]],d=`${r}_${a}`,p=`${a}_${r}`;p in h&&h[p]?(nO.dot(h[p].normal)<=i&&(c.push(s.x,s.y,s.z),c.push(u.x,u.y,u.z)),h[p]=null):d in h||(h[d]={index0:n[e],index1:n[t],normal:nO.clone()})}}for(let e in h)if(h[e]){let{index0:t,index1:i}=h[e];nN.fromBufferAttribute(a,t),nD.fromBufferAttribute(a,i),c.push(nN.x,nN.y,nN.z),c.push(nD.x,nD.y,nD.z)}this.setAttribute("position",new tk(c,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class nz extends nA{constructor(e){super(e),this.uuid=R(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let i=e.holes[t];this.holes.push(new nA().fromJSON(i))}return this}}let nH=function(e,t,i=2){let r,a,s,n,o,l,h,c=t&&t.length,u=c?t[0]*i:e.length,d=nG(e,0,u,i,!0),p=[];if(!d||d.next===d.prev)return p;if(c&&(d=function(e,t,i,r){let a,s,n,o,l,h=[];for(a=0,s=t.length;a<s;a++)n=t[a]*r,o=a<s-1?t[a+1]*r:e.length,(l=nG(e,n,o,r,!1))===l.next&&(l.steiner=!0),h.push(function(e){let t=e,i=e;do(t.x<i.x||t.x===i.x&&t.y<i.y)&&(i=t),t=t.next;while(t!==e);return i}(l));for(h.sort(nV),a=0;a<h.length;a++)i=function(e,t){let i=function(e,t){let i=t,r=-1/0,a,s=e.x,n=e.y;do{if(n<=i.y&&n>=i.next.y&&i.next.y!==i.y){let e=i.x+(n-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(e<=s&&e>r&&(r=e,a=i.x<i.next.x?i:i.next,e===s))return a}i=i.next}while(i!==t);if(!a)return null;let o=a,l=a.x,h=a.y,c=1/0,u;i=a;do{var d,p;s>=i.x&&i.x>=l&&s!==i.x&&nX(n<h?s:r,n,l,h,n<h?r:s,n,i.x,i.y)&&(u=Math.abs(n-i.y)/(s-i.x),nJ(i,e)&&(u<c||u===c&&(i.x>a.x||i.x===a.x&&(d=a,p=i,0>nj(d.prev,d,p.prev)&&0>nj(p.next,d,d.next))))&&(a=i,c=u)),i=i.next}while(i!==o);return a}(e,t);if(!i)return t;let r=nQ(i,e);return nk(r,r.next),nk(i,i.next)}(h[a],i);return i}(e,t,d,i)),e.length>80*i){r=s=e[0],a=n=e[1];for(let t=i;t<u;t+=i)o=e[t],l=e[t+1],o<r&&(r=o),l<a&&(a=l),o>s&&(s=o),l>n&&(n=l);h=0!==(h=Math.max(s-r,n-a))?32767/h:0}return function e(t,i,r,a,s,n,o){if(!t)return;!o&&n&&function(e,t,i,r){let a=e;do 0===a.z&&(a.z=nW(a.x,a.y,t,i,r)),a.prevZ=a.prev,a.nextZ=a.next,a=a.next;while(a!==e);a.prevZ.nextZ=null,a.prevZ=null,function(e){let t,i,r,a,s,n,o,l,h=1;do{for(i=e,e=null,s=null,n=0;i;){for(n++,r=i,o=0,t=0;t<h&&(o++,r=r.nextZ);t++);for(l=h;o>0||l>0&&r;)0!==o&&(0===l||!r||i.z<=r.z)?(a=i,i=i.nextZ,o--):(a=r,r=r.nextZ,l--),s?s.nextZ=a:e=a,a.prevZ=s,s=a;i=r}s.nextZ=null,h*=2}while(n>1)}(a)}(t,a,s,n);let l=t,h,c;for(;t.prev!==t.next;){if(h=t.prev,c=t.next,n?function(e,t,i,r){let a=e.prev,s=e.next;if(nj(a,e,s)>=0)return!1;let n=a.x,o=e.x,l=s.x,h=a.y,c=e.y,u=s.y,d=n<o?n<l?n:l:o<l?o:l,p=h<c?h<u?h:u:c<u?c:u,m=n>o?n>l?n:l:o>l?o:l,f=h>c?h>u?h:u:c>u?c:u,g=nW(d,p,t,i,r),_=nW(m,f,t,i,r),v=e.prevZ,x=e.nextZ;for(;v&&v.z>=g&&x&&x.z<=_;){if(v.x>=d&&v.x<=m&&v.y>=p&&v.y<=f&&v!==a&&v!==s&&nX(n,h,o,c,l,u,v.x,v.y)&&nj(v.prev,v,v.next)>=0||(v=v.prevZ,x.x>=d&&x.x<=m&&x.y>=p&&x.y<=f&&x!==a&&x!==s&&nX(n,h,o,c,l,u,x.x,x.y)&&nj(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;v&&v.z>=g;){if(v.x>=d&&v.x<=m&&v.y>=p&&v.y<=f&&v!==a&&v!==s&&nX(n,h,o,c,l,u,v.x,v.y)&&nj(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;x&&x.z<=_;){if(x.x>=d&&x.x<=m&&x.y>=p&&x.y<=f&&x!==a&&x!==s&&nX(n,h,o,c,l,u,x.x,x.y)&&nj(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}(t,a,s,n):function(e){let t=e.prev,i=e.next;if(nj(t,e,i)>=0)return!1;let r=t.x,a=e.x,s=i.x,n=t.y,o=e.y,l=i.y,h=r<a?r<s?r:s:a<s?a:s,c=n<o?n<l?n:l:o<l?o:l,u=r>a?r>s?r:s:a>s?a:s,d=n>o?n>l?n:l:o>l?o:l,p=i.next;for(;p!==t;){if(p.x>=h&&p.x<=u&&p.y>=c&&p.y<=d&&nX(r,n,a,o,s,l,p.x,p.y)&&nj(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}(t)){i.push(h.i/r|0),i.push(t.i/r|0),i.push(c.i/r|0),n0(t),t=c.next,l=c.next;continue}if((t=c)===l){o?1===o?e(t=function(e,t,i){let r=e;do{let a=r.prev,s=r.next.next;!nq(a,s)&&nY(a,r,r.next,s)&&nJ(a,s)&&nJ(s,a)&&(t.push(a.i/i|0),t.push(r.i/i|0),t.push(s.i/i|0),n0(r),n0(r.next),r=e=s),r=r.next}while(r!==e);return nk(r)}(nk(t),i,r),i,r,a,s,n,2):2===o&&function(t,i,r,a,s,n){let o=t;do{let t=o.next.next;for(;t!==o.prev;){var l,h;if(o.i!==t.i&&(l=o,h=t,l.next.i!==h.i&&l.prev.i!==h.i&&!function(e,t){let i=e;do{if(i.i!==e.i&&i.next.i!==e.i&&i.i!==t.i&&i.next.i!==t.i&&nY(i,i.next,e,t))return!0;i=i.next}while(i!==e);return!1}(l,h)&&(nJ(l,h)&&nJ(h,l)&&function(e,t){let i=e,r=!1,a=(e.x+t.x)/2,s=(e.y+t.y)/2;do i.y>s!=i.next.y>s&&i.next.y!==i.y&&a<(i.next.x-i.x)*(s-i.y)/(i.next.y-i.y)+i.x&&(r=!r),i=i.next;while(i!==e);return r}(l,h)&&(nj(l.prev,l,h.prev)||nj(l,h.prev,h))||nq(l,h)&&nj(l.prev,l,l.next)>0&&nj(h.prev,h,h.next)>0))){let l=nQ(o,t);o=nk(o,o.next),l=nk(l,l.next),e(o,i,r,a,s,n,0),e(l,i,r,a,s,n,0);return}t=t.next}o=o.next}while(o!==t)}(t,i,r,a,s,n):e(nk(t),i,r,a,s,n,1);break}}}(d,p,i,r,a,h,0),p};function nG(e,t,i,r,a){let s,n;if(a===function(e,t,i,r){let a=0;for(let s=t,n=i-r;s<i;s+=r)a+=(e[n]-e[s])*(e[s+1]+e[n+1]),n=s;return a}(e,t,i,r)>0)for(s=t;s<i;s+=r)n=n$(s,e[s],e[s+1],n);else for(s=i-r;s>=t;s-=r)n=n$(s,e[s],e[s+1],n);return n&&nq(n,n.next)&&(n0(n),n=n.next),n}function nk(e,t){if(!e)return e;t||(t=e);let i=e,r;do if(r=!1,!i.steiner&&(nq(i,i.next)||0===nj(i.prev,i,i.next))){if(n0(i),(i=t=i.prev)===i.next)break;r=!0}else i=i.next;while(r||i!==t);return t}function nV(e,t){return e.x-t.x}function nW(e,t,i,r,a){return(e=((e=((e=((e=((e=(e-i)*a|0)|e<<8)&0xff00ff)|e<<4)&0xf0f0f0f)|e<<2)&0x33333333)|e<<1)&0x55555555)|(t=((t=((t=((t=((t=(t-r)*a|0)|t<<8)&0xff00ff)|t<<4)&0xf0f0f0f)|t<<2)&0x33333333)|t<<1)&0x55555555)<<1}function nX(e,t,i,r,a,s,n,o){return(a-n)*(t-o)>=(e-n)*(s-o)&&(e-n)*(r-o)>=(i-n)*(t-o)&&(i-n)*(s-o)>=(a-n)*(r-o)}function nj(e,t,i){return(t.y-e.y)*(i.x-t.x)-(t.x-e.x)*(i.y-t.y)}function nq(e,t){return e.x===t.x&&e.y===t.y}function nY(e,t,i,r){let a=nK(nj(e,t,i)),s=nK(nj(e,t,r)),n=nK(nj(i,r,e)),o=nK(nj(i,r,t));return!!(a!==s&&n!==o||0===a&&nZ(e,i,t)||0===s&&nZ(e,r,t)||0===n&&nZ(i,e,r)||0===o&&nZ(i,t,r))}function nZ(e,t,i){return t.x<=Math.max(e.x,i.x)&&t.x>=Math.min(e.x,i.x)&&t.y<=Math.max(e.y,i.y)&&t.y>=Math.min(e.y,i.y)}function nK(e){return e>0?1:e<0?-1:0}function nJ(e,t){return 0>nj(e.prev,e,e.next)?nj(e,t,e.next)>=0&&nj(e,e.prev,t)>=0:0>nj(e,t,e.prev)||0>nj(e,e.next,t)}function nQ(e,t){let i=new n1(e.i,e.x,e.y),r=new n1(t.i,t.x,t.y),a=e.next,s=t.prev;return e.next=t,t.prev=e,i.next=a,a.prev=i,r.next=i,i.prev=r,s.next=r,r.prev=s,r}function n$(e,t,i,r){let a=new n1(e,t,i);return r?(a.next=r.next,a.prev=r,r.next.prev=a,r.next=a):(a.prev=a,a.next=a),a}function n0(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function n1(e,t,i){this.i=e,this.x=t,this.y=i,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}class n2{static area(e){let t=e.length,i=0;for(let r=t-1,a=0;a<t;r=a++)i+=e[r].x*e[a].y-e[a].x*e[r].y;return .5*i}static isClockWise(e){return 0>n2.area(e)}static triangulateShape(e,t){let i=[],r=[],a=[];n3(e),n4(i,e);let s=e.length;t.forEach(n3);for(let e=0;e<t.length;e++)r.push(s),s+=t[e].length,n4(i,t[e]);let n=nH(i,r);for(let e=0;e<n.length;e+=3)a.push(n.slice(e,e+3));return a}}function n3(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function n4(e,t){for(let i=0;i<t.length;i++)e.push(t[i].x),e.push(t[i].y)}class n5 extends tJ{constructor(e=new nz([new F(.5,.5),new F(-.5,.5),new F(-.5,-.5),new F(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,r=[],a=[];for(let s=0,n=e.length;s<n;s++)!function(e){let s=[],n=void 0!==t.curveSegments?t.curveSegments:12,o=void 0!==t.steps?t.steps:1,l=void 0!==t.depth?t.depth:1,h=void 0===t.bevelEnabled||t.bevelEnabled,c=void 0!==t.bevelThickness?t.bevelThickness:.2,u=void 0!==t.bevelSize?t.bevelSize:c-.1,d=void 0!==t.bevelOffset?t.bevelOffset:0,p=void 0!==t.bevelSegments?t.bevelSegments:3,m=t.extrudePath,f=void 0!==t.UVGenerator?t.UVGenerator:n6,g,_=!1,v,x,y,M;m&&(g=m.getSpacedPoints(o),_=!0,h=!1,v=m.computeFrenetFrames(o,!1),x=new ef,y=new ef,M=new ef),h||(p=0,c=0,u=0,d=0);let S=e.extractPoints(n),b=S.shape,T=S.holes;if(!n2.isClockWise(b)){b=b.reverse();for(let e=0,t=T.length;e<t;e++){let t=T[e];n2.isClockWise(t)&&(T[e]=t.reverse())}}let E=n2.triangulateShape(b,T),A=b;for(let e=0,t=T.length;e<t;e++){let t=T[e];b=b.concat(t)}function w(e,t,i){return t||console.error("THREE.ExtrudeGeometry: vec does not exist"),e.clone().addScaledVector(t,i)}let R=b.length,C=E.length;function L(e,t,i){let r,a,s,n=e.x-t.x,o=e.y-t.y,l=i.x-e.x,h=i.y-e.y,c=n*n+o*o;if(Math.abs(n*h-o*l)>Number.EPSILON){let u=Math.sqrt(c),d=Math.sqrt(l*l+h*h),p=t.x-o/u,m=t.y+n/u,f=((i.x-h/d-p)*h-(i.y+l/d-m)*l)/(n*h-o*l),g=(r=p+n*f-e.x)*r+(a=m+o*f-e.y)*a;if(g<=2)return new F(r,a);s=Math.sqrt(g/2)}else{let e=!1;n>Number.EPSILON?l>Number.EPSILON&&(e=!0):n<-Number.EPSILON?l<-Number.EPSILON&&(e=!0):Math.sign(o)===Math.sign(h)&&(e=!0),e?(r=-o,a=n,s=Math.sqrt(c)):(r=n,a=o,s=Math.sqrt(c/2))}return new F(r/s,a/s)}let P=[];for(let e=0,t=A.length,i=t-1,r=e+1;e<t;e++,i++,r++)i===t&&(i=0),r===t&&(r=0),P[e]=L(A[e],A[i],A[r]);let I=[],U,N=P.concat();for(let e=0,t=T.length;e<t;e++){let t=T[e];U=[];for(let e=0,i=t.length,r=i-1,a=e+1;e<i;e++,r++,a++)r===i&&(r=0),a===i&&(a=0),U[e]=L(t[e],t[r],t[a]);I.push(U),N=N.concat(U)}for(let e=0;e<p;e++){let t=e/p,i=c*Math.cos(t*Math.PI/2),r=u*Math.sin(t*Math.PI/2)+d;for(let e=0,t=A.length;e<t;e++){let t=w(A[e],P[e],r);B(t.x,t.y,-i)}for(let e=0,t=T.length;e<t;e++){let t=T[e];U=I[e];for(let e=0,a=t.length;e<a;e++){let a=w(t[e],U[e],r);B(a.x,a.y,-i)}}}let D=u+d;for(let e=0;e<R;e++){let t=h?w(b[e],N[e],D):b[e];_?(y.copy(v.normals[0]).multiplyScalar(t.x),x.copy(v.binormals[0]).multiplyScalar(t.y),M.copy(g[0]).add(y).add(x),B(M.x,M.y,M.z)):B(t.x,t.y,0)}for(let e=1;e<=o;e++)for(let t=0;t<R;t++){let i=h?w(b[t],N[t],D):b[t];_?(y.copy(v.normals[e]).multiplyScalar(i.x),x.copy(v.binormals[e]).multiplyScalar(i.y),M.copy(g[e]).add(y).add(x),B(M.x,M.y,M.z)):B(i.x,i.y,l/o*e)}for(let e=p-1;e>=0;e--){let t=e/p,i=c*Math.cos(t*Math.PI/2),r=u*Math.sin(t*Math.PI/2)+d;for(let e=0,t=A.length;e<t;e++){let t=w(A[e],P[e],r);B(t.x,t.y,l+i)}for(let e=0,t=T.length;e<t;e++){let t=T[e];U=I[e];for(let e=0,a=t.length;e<a;e++){let a=w(t[e],U[e],r);_?B(a.x,a.y+g[o-1].y,g[o-1].x+i):B(a.x,a.y,l+i)}}}function O(e,t){let a=e.length;for(;--a>=0;){let s=a,n=a-1;n<0&&(n=e.length-1);for(let e=0,a=o+2*p;e<a;e++){let a=R*e,o=R*(e+1);!function(e,t,a,s){H(e),H(t),H(s),H(t),H(a),H(s);let n=r.length/3,o=f.generateSideWallUV(i,r,n-6,n-3,n-2,n-1);G(o[0]),G(o[1]),G(o[3]),G(o[1]),G(o[2]),G(o[3])}(t+s+a,t+n+a,t+n+o,t+s+o)}}}function B(e,t,i){s.push(e),s.push(t),s.push(i)}function z(e,t,a){H(e),H(t),H(a);let s=r.length/3,n=f.generateTopUV(i,r,s-3,s-2,s-1);G(n[0]),G(n[1]),G(n[2])}function H(e){r.push(s[3*e+0]),r.push(s[3*e+1]),r.push(s[3*e+2])}function G(e){a.push(e.x),a.push(e.y)}(function(){let e=r.length/3;if(h){let e=0*R;for(let t=0;t<C;t++){let i=E[t];z(i[2]+e,i[1]+e,i[0]+e)}e=R*(o+2*p);for(let t=0;t<C;t++){let i=E[t];z(i[0]+e,i[1]+e,i[2]+e)}}else{for(let e=0;e<C;e++){let t=E[e];z(t[2],t[1],t[0])}for(let e=0;e<C;e++){let t=E[e];z(t[0]+R*o,t[1]+R*o,t[2]+R*o)}}i.addGroup(e,r.length/3-e,0)})(),function(){let e=r.length/3,t=0;O(A,0),t+=A.length;for(let e=0,i=T.length;e<i;e++){let i=T[e];O(i,t),t+=i.length}i.addGroup(e,r.length/3-e,1)}()}(e[s]);this.setAttribute("position",new tk(r,3)),this.setAttribute("uv",new tk(a,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return function(e,t,i){if(i.shapes=[],Array.isArray(e))for(let t=0,r=e.length;t<r;t++){let r=e[t];i.shapes.push(r.uuid)}else i.shapes.push(e.uuid);return i.options=Object.assign({},t),void 0!==t.extrudePath&&(i.options.extrudePath=t.extrudePath.toJSON()),i}(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let i=[];for(let r=0,a=e.shapes.length;r<a;r++){let a=t[e.shapes[r]];i.push(a)}let r=e.options.extrudePath;return void 0!==r&&(e.options.extrudePath=new nT[r.type]().fromJSON(r)),new n5(i,e.options)}}let n6={generateTopUV:function(e,t,i,r,a){let s=t[3*i],n=t[3*i+1],o=t[3*r],l=t[3*r+1],h=t[3*a],c=t[3*a+1];return[new F(s,n),new F(o,l),new F(h,c)]},generateSideWallUV:function(e,t,i,r,a,s){let n=t[3*i],o=t[3*i+1],l=t[3*i+2],h=t[3*r],c=t[3*r+1],u=t[3*r+2],d=t[3*a],p=t[3*a+1],m=t[3*a+2],f=t[3*s],g=t[3*s+1],_=t[3*s+2];return Math.abs(o-c)<Math.abs(n-h)?[new F(n,1-l),new F(h,1-u),new F(d,1-m),new F(f,1-_)]:[new F(o,1-l),new F(c,1-u),new F(p,1-m),new F(g,1-_)]}};class n8 extends nI{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2;super([-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n8(e.radius,e.detail)}}class n9 extends nI{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n9(e.radius,e.detail)}}class n7 extends tJ{constructor(e=.5,t=1,i=32,r=1,a=0,s=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:a,thetaLength:s},i=Math.max(3,i),r=Math.max(1,r);let n=[],o=[],l=[],h=[],c=e,u=(t-e)/r,d=new ef,p=new F;for(let e=0;e<=r;e++){for(let e=0;e<=i;e++){let r=a+e/i*s;d.x=c*Math.cos(r),d.y=c*Math.sin(r),o.push(d.x,d.y,d.z),l.push(0,0,1),p.x=(d.x/t+1)/2,p.y=(d.y/t+1)/2,h.push(p.x,p.y)}c+=u}for(let e=0;e<r;e++){let t=e*(i+1);for(let e=0;e<i;e++){let r=e+t,a=r+i+1,s=r+i+2,o=r+1;n.push(r,a,o),n.push(a,s,o)}}this.setIndex(n),this.setAttribute("position",new tk(o,3)),this.setAttribute("normal",new tk(l,3)),this.setAttribute("uv",new tk(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n7(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class oe extends tJ{constructor(e=new nz([new F(0,.5),new F(-.5,-.5),new F(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],r=[],a=[],s=[],n=0,o=0;if(!1===Array.isArray(e))l(e);else for(let t=0;t<e.length;t++)l(e[t]),this.addGroup(n,o,t),n+=o,o=0;function l(e){let n=r.length/3,l=e.extractPoints(t),h=l.shape,c=l.holes;!1===n2.isClockWise(h)&&(h=h.reverse());for(let e=0,t=c.length;e<t;e++){let t=c[e];!0===n2.isClockWise(t)&&(c[e]=t.reverse())}let u=n2.triangulateShape(h,c);for(let e=0,t=c.length;e<t;e++){let t=c[e];h=h.concat(t)}for(let e=0,t=h.length;e<t;e++){let t=h[e];r.push(t.x,t.y,0),a.push(0,0,1),s.push(t.x,t.y)}for(let e=0,t=u.length;e<t;e++){let t=u[e],r=t[0]+n,a=t[1]+n,s=t[2]+n;i.push(r,a,s),o+=3}}this.setIndex(i),this.setAttribute("position",new tk(r,3)),this.setAttribute("normal",new tk(a,3)),this.setAttribute("uv",new tk(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return function(e,t){if(t.shapes=[],Array.isArray(e))for(let i=0,r=e.length;i<r;i++){let r=e[i];t.shapes.push(r.uuid)}else t.shapes.push(e.uuid);return t}(this.parameters.shapes,e)}static fromJSON(e,t){let i=[];for(let r=0,a=e.shapes.length;r<a;r++){let a=t[e.shapes[r]];i.push(a)}return new oe(i,e.curveSegments)}}class ot extends tJ{constructor(e=1,t=32,i=16,r=0,a=2*Math.PI,s=0,n=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:a,thetaStart:s,thetaLength:n},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let o=Math.min(s+n,Math.PI),l=0,h=[],c=new ef,u=new ef,d=[],p=[],m=[],f=[];for(let d=0;d<=i;d++){let g=[],_=d/i,v=0;0===d&&0===s?v=.5/t:d===i&&o===Math.PI&&(v=-.5/t);for(let i=0;i<=t;i++){let o=i/t;c.x=-e*Math.cos(r+o*a)*Math.sin(s+_*n),c.y=e*Math.cos(s+_*n),c.z=e*Math.sin(r+o*a)*Math.sin(s+_*n),p.push(c.x,c.y,c.z),u.copy(c).normalize(),m.push(u.x,u.y,u.z),f.push(o+v,1-_),g.push(l++)}h.push(g)}for(let e=0;e<i;e++)for(let r=0;r<t;r++){let t=h[e][r+1],a=h[e][r],n=h[e+1][r],l=h[e+1][r+1];(0!==e||s>0)&&d.push(t,a,l),(e!==i-1||o<Math.PI)&&d.push(a,n,l)}this.setIndex(d),this.setAttribute("position",new tk(p,3)),this.setAttribute("normal",new tk(m,3)),this.setAttribute("uv",new tk(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ot(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class oi extends nI{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new oi(e.radius,e.detail)}}class or extends tJ{constructor(e=1,t=.4,i=12,r=48,a=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:a},i=Math.floor(i),r=Math.floor(r);let s=[],n=[],o=[],l=[],h=new ef,c=new ef,u=new ef;for(let s=0;s<=i;s++)for(let d=0;d<=r;d++){let p=d/r*a,m=s/i*Math.PI*2;c.x=(e+t*Math.cos(m))*Math.cos(p),c.y=(e+t*Math.cos(m))*Math.sin(p),c.z=t*Math.sin(m),n.push(c.x,c.y,c.z),h.x=e*Math.cos(p),h.y=e*Math.sin(p),u.subVectors(c,h).normalize(),o.push(u.x,u.y,u.z),l.push(d/r),l.push(s/i)}for(let e=1;e<=i;e++)for(let t=1;t<=r;t++){let i=(r+1)*e+t-1,a=(r+1)*(e-1)+t-1,n=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(i,a,o),s.push(a,n,o)}this.setIndex(s),this.setAttribute("position",new tk(n,3)),this.setAttribute("normal",new tk(o,3)),this.setAttribute("uv",new tk(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new or(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class oa extends tJ{constructor(e=1,t=.4,i=64,r=8,a=2,s=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:r,p:a,q:s},i=Math.floor(i),r=Math.floor(r);let n=[],o=[],l=[],h=[],c=new ef,u=new ef,d=new ef,p=new ef,m=new ef,f=new ef,g=new ef;for(let n=0;n<=i;++n){let v=n/i*a*Math.PI*2;_(v,a,s,e,d),_(v+.01,a,s,e,p),f.subVectors(p,d),g.addVectors(p,d),m.crossVectors(f,g),g.crossVectors(m,f),m.normalize(),g.normalize();for(let e=0;e<=r;++e){let a=e/r*Math.PI*2,s=-t*Math.cos(a),p=t*Math.sin(a);c.x=d.x+(s*g.x+p*m.x),c.y=d.y+(s*g.y+p*m.y),c.z=d.z+(s*g.z+p*m.z),o.push(c.x,c.y,c.z),u.subVectors(c,d).normalize(),l.push(u.x,u.y,u.z),h.push(n/i),h.push(e/r)}}for(let e=1;e<=i;e++)for(let t=1;t<=r;t++){let i=(r+1)*(e-1)+(t-1),a=(r+1)*e+(t-1),s=(r+1)*e+t,o=(r+1)*(e-1)+t;n.push(i,a,o),n.push(a,s,o)}function _(e,t,i,r,a){let s=Math.cos(e),n=Math.sin(e),o=i/t*e,l=Math.cos(o);a.x=r*(2+l)*.5*s,a.y=r*(2+l)*n*.5,a.z=r*Math.sin(o)*.5}this.setIndex(n),this.setAttribute("position",new tk(o,3)),this.setAttribute("normal",new tk(l,3)),this.setAttribute("uv",new tk(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oa(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class os extends tJ{constructor(e=new nS(new ef(-1,-1,0),new ef(-1,1,0),new ef(1,1,0)),t=64,i=1,r=8,a=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:r,closed:a};let s=e.computeFrenetFrames(t,a);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals;let n=new ef,o=new ef,l=new F,h=new ef,c=[],u=[],d=[],p=[];function m(a){h=e.getPointAt(a/t,h);let l=s.normals[a],d=s.binormals[a];for(let e=0;e<=r;e++){let t=e/r*Math.PI*2,a=Math.sin(t),s=-Math.cos(t);o.x=s*l.x+a*d.x,o.y=s*l.y+a*d.y,o.z=s*l.z+a*d.z,o.normalize(),u.push(o.x,o.y,o.z),n.x=h.x+i*o.x,n.y=h.y+i*o.y,n.z=h.z+i*o.z,c.push(n.x,n.y,n.z)}}(function(){for(let e=0;e<t;e++)m(e);m(!1===a?t:0),function(){for(let e=0;e<=t;e++)for(let i=0;i<=r;i++)l.x=e/t,l.y=i/r,d.push(l.x,l.y)}(),function(){for(let e=1;e<=t;e++)for(let t=1;t<=r;t++){let i=(r+1)*(e-1)+(t-1),a=(r+1)*e+(t-1),s=(r+1)*e+t,n=(r+1)*(e-1)+t;p.push(i,a,n),p.push(a,s,n)}}()})(),this.setIndex(p),this.setAttribute("position",new tk(c,3)),this.setAttribute("normal",new tk(u,3)),this.setAttribute("uv",new tk(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new os(new nT[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class on extends tJ{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},null!==e){let t=[],i=new Set,r=new ef,a=new ef;if(null!==e.index){let s=e.attributes.position,n=e.index,o=e.groups;0===o.length&&(o=[{start:0,count:n.count,materialIndex:0}]);for(let e=0,l=o.length;e<l;++e){let l=o[e],h=l.start,c=l.count;for(let e=h,o=h+c;e<o;e+=3)for(let o=0;o<3;o++){let l=n.getX(e+o),h=n.getX(e+(o+1)%3);r.fromBufferAttribute(s,l),a.fromBufferAttribute(s,h),!0===oo(r,a,i)&&(t.push(r.x,r.y,r.z),t.push(a.x,a.y,a.z))}}}else{let s=e.attributes.position;for(let e=0,n=s.count/3;e<n;e++)for(let n=0;n<3;n++){let o=3*e+n,l=3*e+(n+1)%3;r.fromBufferAttribute(s,o),a.fromBufferAttribute(s,l),!0===oo(r,a,i)&&(t.push(r.x,r.y,r.z),t.push(a.x,a.y,a.z))}}this.setAttribute("position",new tk(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function oo(e,t,i){let r=`${e.x},${e.y},${e.z}-${t.x},${t.y},${t.z}`,a=`${t.x},${t.y},${t.z}-${e.x},${e.y},${e.z}`;return!0!==i.has(r)&&!0!==i.has(a)&&(i.add(r),i.add(a),!0)}var ol=Object.freeze({__proto__:null,BoxGeometry:il,CapsuleGeometry:nR,CircleGeometry:nC,ConeGeometry:nP,CylinderGeometry:nL,DodecahedronGeometry:nU,EdgesGeometry:nB,ExtrudeGeometry:n5,IcosahedronGeometry:n8,LatheGeometry:nw,OctahedronGeometry:n9,PlaneGeometry:iP,PolyhedronGeometry:nI,RingGeometry:n7,ShapeGeometry:oe,SphereGeometry:ot,TetrahedronGeometry:oi,TorusGeometry:or,TorusKnotGeometry:oa,TubeGeometry:os,WireframeGeometry:on});class oh extends tA{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new tb(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class oc extends ig{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ou extends tA{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new tb(0xffffff),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tb(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new F(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class od extends ou{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new F(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return C(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new tb(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new tb(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new tb(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class op extends tA{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new tb(0xffffff),this.specular=new tb(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tb(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new F(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class om extends tA{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new tb(0xffffff),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tb(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new F(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class of extends tA{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new F(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class og extends tA{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new tb(0xffffff),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tb(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new F(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class o_ extends tA{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new tb(0xffffff),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new F(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ov extends sX{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function ox(e,t,i){return e&&(i||e.constructor!==t)?"number"==typeof t.BYTES_PER_ELEMENT?new t(e):Array.prototype.slice.call(e):e}function oy(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function oM(e){let t=e.length,i=Array(t);for(let e=0;e!==t;++e)i[e]=e;return i.sort(function(t,i){return e[t]-e[i]}),i}function oS(e,t,i){let r=e.length,a=new e.constructor(r);for(let s=0,n=0;n!==r;++s){let r=i[s]*t;for(let i=0;i!==t;++i)a[n++]=e[r+i]}return a}function ob(e,t,i,r){let a=1,s=e[0];for(;void 0!==s&&void 0===s[r];)s=e[a++];if(void 0===s)return;let n=s[r];if(void 0!==n)if(Array.isArray(n))do void 0!==(n=s[r])&&(t.push(s.time),i.push.apply(i,n)),s=e[a++];while(void 0!==s);else if(void 0!==n.toArray)do void 0!==(n=s[r])&&(t.push(s.time),n.toArray(i,i.length)),s=e[a++];while(void 0!==s);else do void 0!==(n=s[r])&&(t.push(s.time),i.push(n)),s=e[a++];while(void 0!==s)}class oT{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=void 0!==r?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],a=t[i-1];e:{t:{let s;i:{r:if(!(e<r)){for(let s=i+2;;){if(void 0===r){if(e<a)break r;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===s)break;if(a=r,e<(r=t[++i]))break t}s=t.length;break i}if(!(e>=a)){let n=t[1];e<n&&(i=2,a=n);for(let s=i-2;;){if(void 0===a)return this._cachedIndex=0,this.copySampleValue_(0);if(i===s)break;if(r=a,e>=(a=t[--i-1]))break t}s=i,i=0;break i}break e}for(;i<s;){let r=i+s>>>1;e<t[r]?s=r:i=r+1}if(r=t[i],void 0===(a=t[i-1]))return this._cachedIndex=0,this.copySampleValue_(0);if(void 0===r)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,r)}return this.interpolate_(i,a,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,a=e*r;for(let e=0;e!==r;++e)t[e]=i[a+e];return t}interpolate_(){throw Error("call to abstract method")}intervalChanged_(){}}class oE extends oT{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(e,t,i){let r=this.parameterPositions,a=e-2,s=e+1,n=r[a],o=r[s];if(void 0===n)switch(this.getSettings_().endingStart){case 2401:a=e,n=2*t-i;break;case 2402:a=r.length-2,n=t+r[a]-r[a+1];break;default:a=e,n=i}if(void 0===o)switch(this.getSettings_().endingEnd){case 2401:s=e,o=2*i-t;break;case 2402:s=1,o=i+r[1]-r[0];break;default:s=e-1,o=t}let l=(i-t)*.5,h=this.valueSize;this._weightPrev=l/(t-n),this._weightNext=l/(o-i),this._offsetPrev=a*h,this._offsetNext=s*h}interpolate_(e,t,i,r){let a=this.resultBuffer,s=this.sampleValues,n=this.valueSize,o=e*n,l=o-n,h=this._offsetPrev,c=this._offsetNext,u=this._weightPrev,d=this._weightNext,p=(i-t)/(r-t),m=p*p,f=m*p,g=-u*f+2*u*m-u*p,_=(1+u)*f+(-1.5-2*u)*m+(-.5+u)*p+1,v=(-1-d)*f+(1.5+d)*m+.5*p,x=d*f-d*m;for(let e=0;e!==n;++e)a[e]=g*s[h+e]+_*s[l+e]+v*s[o+e]+x*s[c+e];return a}}class oA extends oT{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let a=this.resultBuffer,s=this.sampleValues,n=this.valueSize,o=e*n,l=o-n,h=(i-t)/(r-t),c=1-h;for(let e=0;e!==n;++e)a[e]=s[l+e]*c+s[o+e]*h;return a}}class ow extends oT{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class oR{constructor(e,t,i,r){if(void 0===e)throw Error("THREE.KeyframeTrack: track name is undefined");if(void 0===t||0===t.length)throw Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ox(t,this.TimeBufferType),this.values=ox(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t,i=e.constructor;if(i.toJSON!==this.toJSON)t=i.toJSON(e);else{t={name:e.name,times:ox(e.times,Array),values:ox(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(t.interpolation=i)}return t.type=e.ValueTypeName,t}InterpolantFactoryMethodDiscrete(e){return new ow(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new oA(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new oE(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case 2300:t=this.InterpolantFactoryMethodDiscrete;break;case 2301:t=this.InterpolantFactoryMethodLinear;break;case 2302:t=this.InterpolantFactoryMethodSmooth}if(void 0===t){let t="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(void 0===this.createInterpolant)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t);return console.warn("THREE.KeyframeTrack:",t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302}}getValueSize(){return this.values.length/this.times.length}shift(e){if(0!==e){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(1!==e){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,a=0,s=r-1;for(;a!==r&&i[a]<e;)++a;for(;-1!==s&&i[s]>t;)--s;if(++s,0!==a||s!==r){a>=s&&(a=(s=Math.max(s,1))-1);let e=this.getValueSize();this.times=i.slice(a,s),this.values=this.values.slice(a*e,s*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,a=i.length;0===a&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let t=0;t!==a;t++){let r=i[t];if("number"==typeof r&&isNaN(r)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,t,r),e=!1;break}if(null!==s&&s>r){console.error("THREE.KeyframeTrack: Out of order keys.",this,t,r,s),e=!1;break}s=r}if(void 0!==r&&oy(r))for(let t=0,i=r.length;t!==i;++t){let i=r[t];if(isNaN(i)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,t,i),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=2302===this.getInterpolation(),a=e.length-1,s=1;for(let n=1;n<a;++n){let a=!1,o=e[n];if(o!==e[n+1]&&(1!==n||o!==e[0]))if(r)a=!0;else{let e=n*i,r=e-i,s=e+i;for(let n=0;n!==i;++n){let i=t[e+n];if(i!==t[r+n]||i!==t[s+n]){a=!0;break}}}if(a){if(n!==s){e[s]=e[n];let r=n*i,a=s*i;for(let e=0;e!==i;++e)t[a+e]=t[r+e]}++s}}if(a>0){e[s]=e[a];for(let e=a*i,r=s*i,n=0;n!==i;++n)t[r+n]=t[e+n];++s}return s!==e.length?(this.times=e.slice(0,s),this.values=t.slice(0,s*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=new this.constructor(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}oR.prototype.TimeBufferType=Float32Array,oR.prototype.ValueBufferType=Float32Array,oR.prototype.DefaultInterpolation=2301;class oC extends oR{}oC.prototype.ValueTypeName="bool",oC.prototype.ValueBufferType=Array,oC.prototype.DefaultInterpolation=2300,oC.prototype.InterpolantFactoryMethodLinear=void 0,oC.prototype.InterpolantFactoryMethodSmooth=void 0;class oL extends oR{}oL.prototype.ValueTypeName="color";class oP extends oR{}oP.prototype.ValueTypeName="number";class oI extends oT{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let a=this.resultBuffer,s=this.sampleValues,n=this.valueSize,o=(i-t)/(r-t),l=e*n;for(let e=l+n;l!==e;l+=4)em.slerpFlat(a,0,s,l-n,s,l,o);return a}}class oU extends oR{InterpolantFactoryMethodLinear(e){return new oI(this.times,this.values,this.getValueSize(),e)}}oU.prototype.ValueTypeName="quaternion",oU.prototype.DefaultInterpolation=2301,oU.prototype.InterpolantFactoryMethodSmooth=void 0;class oN extends oR{}oN.prototype.ValueTypeName="string",oN.prototype.ValueBufferType=Array,oN.prototype.DefaultInterpolation=2300,oN.prototype.InterpolantFactoryMethodLinear=void 0,oN.prototype.InterpolantFactoryMethodSmooth=void 0;class oD extends oR{}oD.prototype.ValueTypeName="vector";class oO{constructor(e,t=-1,i,r=2500){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=R(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,r=1/(e.fps||1);for(let e=0,a=i.length;e!==a;++e)t.push((function(e){if(void 0===e.type)throw Error("THREE.KeyframeTrack: track type undefined, can not parse");let t=function(e){switch(e.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return oP;case"vector":case"vector2":case"vector3":case"vector4":return oD;case"color":return oL;case"quaternion":return oU;case"bool":case"boolean":return oC;case"string":return oN}throw Error("THREE.KeyframeTrack: Unsupported typeName: "+e)}(e.type);if(void 0===e.times){let t=[],i=[];ob(e.keys,t,i,"value"),e.times=t,e.values=i}return void 0!==t.parse?t.parse(e):new t(e.name,e.times,e.values,e.interpolation)})(i[e]).scale(r));let a=new this(e.name,e.duration,t,e.blendMode);return a.uuid=e.uuid,a}static toJSON(e){let t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let e=0,r=i.length;e!==r;++e)t.push(oR.toJSON(i[e]));return r}static CreateFromMorphTargetSequence(e,t,i,r){let a=t.length,s=[];for(let e=0;e<a;e++){let n=[],o=[];n.push((e+a-1)%a,e,(e+1)%a),o.push(0,1,0);let l=oM(n);n=oS(n,1,l),o=oS(o,1,l),r||0!==n[0]||(n.push(a),o.push(o[0])),s.push(new oP(".morphTargetInfluences["+t[e].name+"]",n,o).scale(1/i))}return new this(e,-1,s)}static findByName(e,t){let i=e;Array.isArray(e)||(i=e.geometry&&e.geometry.animations||e.animations);for(let e=0;e<i.length;e++)if(i[e].name===t)return i[e];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let r={},a=/^([\w-]*?)([\d]+)$/;for(let t=0,i=e.length;t<i;t++){let i=e[t],s=i.name.match(a);if(s&&s.length>1){let e=s[1],t=r[e];t||(r[e]=t=[]),t.push(i)}}let s=[];for(let e in r)s.push(this.CreateFromMorphTargetSequence(e,r[e],t,i));return s}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let i=function(e,t,i,r,a){if(0!==i.length){let s=[],n=[];ob(i,s,n,r),0!==s.length&&a.push(new e(t,s,n))}},r=[],a=e.name||"default",s=e.fps||30,n=e.blendMode,o=e.length||-1,l=e.hierarchy||[];for(let e=0;e<l.length;e++){let a=l[e].keys;if(!(!a||0===a.length))if(a[0].morphTargets){let e,t={};for(e=0;e<a.length;e++)if(a[e].morphTargets)for(let i=0;i<a[e].morphTargets.length;i++)t[a[e].morphTargets[i]]=-1;for(let i in t){let t=[],s=[];for(let r=0;r!==a[e].morphTargets.length;++r){let r=a[e];t.push(r.time),s.push(+(r.morphTarget===i))}r.push(new oP(".morphTargetInfluence["+i+"]",t,s))}o=t.length*s}else{let s=".bones["+t[e].name+"]";i(oD,s+".position",a,"pos",r),i(oU,s+".quaternion",a,"rot",r),i(oD,s+".scale",a,"scl",r)}}return 0===r.length?null:new this(a,o,r,n)}resetDuration(){let e=this.tracks,t=0;for(let i=0,r=e.length;i!==r;++i){let e=this.tracks[i];t=Math.max(t,e.times[e.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}let oF={enabled:!1,files:{},add:function(e,t){!1!==this.enabled&&(this.files[e]=t)},get:function(e){if(!1!==this.enabled)return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};class oB{constructor(e,t,i){let r=this,a=!1,s=0,n=0,o,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(e){n++,!1===a&&void 0!==r.onStart&&r.onStart(e,s,n),a=!0},this.itemEnd=function(e){s++,void 0!==r.onProgress&&r.onProgress(e,s,n),s===n&&(a=!1,void 0!==r.onLoad&&r.onLoad())},this.itemError=function(e){void 0!==r.onError&&r.onError(e)},this.resolveURL=function(e){return o?o(e):e},this.setURLModifier=function(e){return o=e,this},this.addHandler=function(e,t){return l.push(e,t),this},this.removeHandler=function(e){let t=l.indexOf(e);return -1!==t&&l.splice(t,2),this},this.getHandler=function(e){for(let t=0,i=l.length;t<i;t+=2){let i=l[t],r=l[t+1];if(i.global&&(i.lastIndex=0),i.test(e))return r}return null}}}let oz=new oB;class oH{constructor(e){this.manager=void 0!==e?e:oz,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,a){i.load(e,r,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}oH.DEFAULT_MATERIAL_NAME="__DEFAULT";let oG={};class ok extends Error{constructor(e,t){super(e),this.response=t}}class oV extends oH{constructor(e){super(e)}load(e,t,i,r){void 0===e&&(e=""),void 0!==this.path&&(e=this.path+e),e=this.manager.resolveURL(e);let a=oF.get(e);if(void 0!==a)return this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0),a;if(void 0!==oG[e])return void oG[e].push({onLoad:t,onProgress:i,onError:r});oG[e]=[],oG[e].push({onLoad:t,onProgress:i,onError:r});let s=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),n=this.mimeType,o=this.responseType;fetch(s).then(t=>{if(200===t.status||0===t.status){if(0===t.status&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||void 0===t.body||void 0===t.body.getReader)return t;let i=oG[e],r=t.body.getReader(),a=t.headers.get("Content-Length")||t.headers.get("X-File-Size"),s=a?parseInt(a):0,n=0!==s,o=0;return new Response(new ReadableStream({start(e){!function t(){r.read().then(({done:r,value:a})=>{if(r)e.close();else{let r=new ProgressEvent("progress",{lengthComputable:n,loaded:o+=a.byteLength,total:s});for(let e=0,t=i.length;e<t;e++){let t=i[e];t.onProgress&&t.onProgress(r)}e.enqueue(a),t()}})}()}}))}throw new ok(`fetch for "${t.url}" responded with ${t.status}: ${t.statusText}`,t)}).then(e=>{switch(o){case"arraybuffer":return e.arrayBuffer();case"blob":return e.blob();case"document":return e.text().then(e=>new DOMParser().parseFromString(e,n));case"json":return e.json();default:if(void 0===n)return e.text();{let t=/charset="?([^;"\s]*)"?/i.exec(n),i=new TextDecoder(t&&t[1]?t[1].toLowerCase():void 0);return e.arrayBuffer().then(e=>i.decode(e))}}}).then(t=>{oF.add(e,t);let i=oG[e];delete oG[e];for(let e=0,r=i.length;e<r;e++){let r=i[e];r.onLoad&&r.onLoad(t)}}).catch(t=>{let i=oG[e];if(void 0===i)throw this.manager.itemError(e),t;delete oG[e];for(let e=0,r=i.length;e<r;e++){let r=i[e];r.onError&&r.onError(t)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class oW extends oH{constructor(e){super(e)}load(e,t,i,r){let a=this,s=new oV(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,function(i){try{t(a.parse(JSON.parse(i)))}catch(t){r?r(t):console.error(t),a.manager.itemError(e)}},i,r)}parse(e){let t=[];for(let i=0;i<e.length;i++){let r=oO.parse(e[i]);t.push(r)}return t}}class oX extends oH{constructor(e){super(e)}load(e,t,i,r){let a=this,s=[],n=new nt,o=new oV(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(a.withCredentials);let l=0;if(Array.isArray(e))for(let h=0,c=e.length;h<c;++h)!function(h){o.load(e[h],function(e){let i=a.parse(e,!0);s[h]={width:i.width,height:i.height,format:i.format,mipmaps:i.mipmaps},6===(l+=1)&&(1===i.mipmapCount&&(n.minFilter=p),n.image=s,n.format=i.format,n.needsUpdate=!0,t&&t(n))},i,r)}(h);else o.load(e,function(e){let i=a.parse(e,!0);if(i.isCubemap){let e=i.mipmaps.length/i.mipmapCount;for(let t=0;t<e;t++){s[t]={mipmaps:[]};for(let e=0;e<i.mipmapCount;e++)s[t].mipmaps.push(i.mipmaps[t*i.mipmapCount+e]),s[t].format=i.format,s[t].width=i.width,s[t].height=i.height}n.image=s}else n.image.width=i.width,n.image.height=i.height,n.mipmaps=i.mipmaps;1===i.mipmapCount&&(n.minFilter=p),n.format=i.format,n.needsUpdate=!0,t&&t(n)},i,r);return n}}class oj extends oH{constructor(e){super(e)}load(e,t,i,r){void 0!==this.path&&(e=this.path+e),e=this.manager.resolveURL(e);let a=this,s=oF.get(e);if(void 0!==s)return a.manager.itemStart(e),setTimeout(function(){t&&t(s),a.manager.itemEnd(e)},0),s;let n=V("img");function o(){h(),oF.add(e,this),t&&t(this),a.manager.itemEnd(e)}function l(t){h(),r&&r(t),a.manager.itemError(e),a.manager.itemEnd(e)}function h(){n.removeEventListener("load",o,!1),n.removeEventListener("error",l,!1)}return n.addEventListener("load",o,!1),n.addEventListener("error",l,!1),"data:"!==e.slice(0,5)&&void 0!==this.crossOrigin&&(n.crossOrigin=this.crossOrigin),a.manager.itemStart(e),n.src=e,n}}class oq extends oH{constructor(e){super(e)}load(e,t,i,r){let a=new iy;a.colorSpace=f;let s=new oj(this.manager);s.setCrossOrigin(this.crossOrigin),s.setPath(this.path);let n=0;for(let i=0;i<e.length;++i)!function(i){s.load(e[i],function(e){a.images[i]=e,6==++n&&(a.needsUpdate=!0,t&&t(a))},void 0,r)}(i);return a}}class oY extends oH{constructor(e){super(e)}load(e,t,i,r){let a=this,s=new sg,n=new oV(this.manager);return n.setResponseType("arraybuffer"),n.setRequestHeader(this.requestHeader),n.setPath(this.path),n.setWithCredentials(a.withCredentials),n.load(e,function(e){let i;try{i=a.parse(e)}catch(e){if(void 0===r)return void console.error(e);r(e)}void 0!==i.image?s.image=i.image:void 0!==i.data&&(s.image.width=i.width,s.image.height=i.height,s.image.data=i.data),s.wrapS=void 0!==i.wrapS?i.wrapS:1001,s.wrapT=void 0!==i.wrapT?i.wrapT:1001,s.magFilter=void 0!==i.magFilter?i.magFilter:p,s.minFilter=void 0!==i.minFilter?i.minFilter:p,s.anisotropy=void 0!==i.anisotropy?i.anisotropy:1,void 0!==i.colorSpace?s.colorSpace=i.colorSpace:void 0!==i.encoding&&(s.encoding=i.encoding),void 0!==i.flipY&&(s.flipY=i.flipY),void 0!==i.format&&(s.format=i.format),void 0!==i.type&&(s.type=i.type),void 0!==i.mipmaps&&(s.mipmaps=i.mipmaps,s.minFilter=m),1===i.mipmapCount&&(s.minFilter=p),void 0!==i.generateMipmaps&&(s.generateMipmaps=i.generateMipmaps),s.needsUpdate=!0,t&&t(s,i)},i,r),s}}class oZ extends oH{constructor(e){super(e)}load(e,t,i,r){let a=new es,s=new oj(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(e){a.image=e,a.needsUpdate=!0,void 0!==t&&t(a)},i,r),a}}class oK extends tn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new tb(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,void 0!==this.groundColor&&(t.object.groundColor=this.groundColor.getHex()),void 0!==this.distance&&(t.object.distance=this.distance),void 0!==this.angle&&(t.object.angle=this.angle),void 0!==this.decay&&(t.object.decay=this.decay),void 0!==this.penumbra&&(t.object.penumbra=this.penumbra),void 0!==this.shadow&&(t.object.shadow=this.shadow.toJSON()),t}}class oJ extends oK{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new tb(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}let oQ=new eX,o$=new ef,o0=new ef;class o1{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new F(512,512),this.map=null,this.mapPass=null,this.matrix=new eX,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new iR,this._frameExtents=new F(1,1),this._viewportCount=1,this._viewports=[new en(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;o$.setFromMatrixPosition(e.matrixWorld),t.position.copy(o$),o0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(o0),t.updateMatrixWorld(),oQ.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(oQ),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(oQ)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return 0!==this.bias&&(e.bias=this.bias),0!==this.normalBias&&(e.normalBias=this.normalBias),1!==this.radius&&(e.radius=this.radius),(512!==this.mapSize.x||512!==this.mapSize.y)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class o2 extends o1{constructor(){super(new iv(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=2*w*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,a=e.distance||t.far;(i!==t.fov||r!==t.aspect||a!==t.far)&&(t.fov=i,t.aspect=r,t.far=a,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class o3 extends oK{constructor(e,t,i=0,r=Math.PI/3,a=0,s=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.target=new tn,this.distance=i,this.angle=r,this.penumbra=a,this.decay=s,this.map=null,this.shadow=new o2}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}let o4=new eX,o5=new ef,o6=new ef;class o8 extends o1{constructor(){super(new iv(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new F(4,2),this._viewportCount=6,this._viewports=[new en(2,1,1,1),new en(0,1,1,1),new en(3,1,1,1),new en(1,1,1,1),new en(3,0,1,1),new en(1,0,1,1)],this._cubeDirections=[new ef(1,0,0),new ef(-1,0,0),new ef(0,0,1),new ef(0,0,-1),new ef(0,1,0),new ef(0,-1,0)],this._cubeUps=[new ef(0,1,0),new ef(0,1,0),new ef(0,1,0),new ef(0,1,0),new ef(0,0,1),new ef(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,r=this.matrix,a=e.distance||i.far;a!==i.far&&(i.far=a,i.updateProjectionMatrix()),o5.setFromMatrixPosition(e.matrixWorld),i.position.copy(o5),o6.copy(i.position),o6.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(o6),i.updateMatrixWorld(),r.makeTranslation(-o5.x,-o5.y,-o5.z),o4.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(o4)}}class o9 extends oK{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new o8}get power(){return 4*this.intensity*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class o7 extends o1{constructor(){super(new ik(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class le extends oK{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.target=new tn,this.shadow=new o7}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class lt extends oK{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class li extends oK{constructor(e,t,i=10,r=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=i,this.height=r}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){let t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class lr{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new ef)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){let i=e.x,r=e.y,a=e.z,s=this.coefficients;return t.copy(s[0]).multiplyScalar(.282095),t.addScaledVector(s[1],.488603*r),t.addScaledVector(s[2],.488603*a),t.addScaledVector(s[3],.488603*i),t.addScaledVector(s[4],i*r*1.092548),t.addScaledVector(s[5],r*a*1.092548),t.addScaledVector(s[6],.315392*(3*a*a-1)),t.addScaledVector(s[7],i*a*1.092548),t.addScaledVector(s[8],.546274*(i*i-r*r)),t}getIrradianceAt(e,t){let i=e.x,r=e.y,a=e.z,s=this.coefficients;return t.copy(s[0]).multiplyScalar(.886227),t.addScaledVector(s[1],1.023328*r),t.addScaledVector(s[2],1.023328*a),t.addScaledVector(s[3],1.023328*i),t.addScaledVector(s[4],.858086*i*r),t.addScaledVector(s[5],.858086*r*a),t.addScaledVector(s[6],.743125*a*a-.247708),t.addScaledVector(s[7],.858086*i*a),t.addScaledVector(s[8],.429043*(i*i-r*r)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let i=0;i<9;i++)this.coefficients[i].addScaledVector(e.coefficients[i],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let i=0;i<9;i++)this.coefficients[i].lerp(e.coefficients[i],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){let i=this.coefficients;for(let r=0;r<9;r++)i[r].fromArray(e,t+3*r);return this}toArray(e=[],t=0){let i=this.coefficients;for(let r=0;r<9;r++)i[r].toArray(e,t+3*r);return e}static getBasisAt(e,t){let i=e.x,r=e.y,a=e.z;t[0]=.282095,t[1]=.488603*r,t[2]=.488603*a,t[3]=.488603*i,t[4]=1.092548*i*r,t[5]=1.092548*r*a,t[6]=.315392*(3*a*a-1),t[7]=1.092548*i*a,t[8]=.546274*(i*i-r*r)}}class la extends oK{constructor(e=new lr,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){let t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}class ls extends oH{constructor(e){super(e),this.textures={}}load(e,t,i,r){let a=this,s=new oV(a.manager);s.setPath(a.path),s.setRequestHeader(a.requestHeader),s.setWithCredentials(a.withCredentials),s.load(e,function(i){try{t(a.parse(JSON.parse(i)))}catch(t){r?r(t):console.error(t),a.manager.itemError(e)}},i,r)}parse(e){let t=this.textures;function i(e){return void 0===t[e]&&console.warn("THREE.MaterialLoader: Undefined texture",e),t[e]}let r=ls.createMaterialFromType(e.type);if(void 0!==e.uuid&&(r.uuid=e.uuid),void 0!==e.name&&(r.name=e.name),void 0!==e.color&&void 0!==r.color&&r.color.setHex(e.color),void 0!==e.roughness&&(r.roughness=e.roughness),void 0!==e.metalness&&(r.metalness=e.metalness),void 0!==e.sheen&&(r.sheen=e.sheen),void 0!==e.sheenColor&&(r.sheenColor=new tb().setHex(e.sheenColor)),void 0!==e.sheenRoughness&&(r.sheenRoughness=e.sheenRoughness),void 0!==e.emissive&&void 0!==r.emissive&&r.emissive.setHex(e.emissive),void 0!==e.specular&&void 0!==r.specular&&r.specular.setHex(e.specular),void 0!==e.specularIntensity&&(r.specularIntensity=e.specularIntensity),void 0!==e.specularColor&&void 0!==r.specularColor&&r.specularColor.setHex(e.specularColor),void 0!==e.shininess&&(r.shininess=e.shininess),void 0!==e.clearcoat&&(r.clearcoat=e.clearcoat),void 0!==e.clearcoatRoughness&&(r.clearcoatRoughness=e.clearcoatRoughness),void 0!==e.iridescence&&(r.iridescence=e.iridescence),void 0!==e.iridescenceIOR&&(r.iridescenceIOR=e.iridescenceIOR),void 0!==e.iridescenceThicknessRange&&(r.iridescenceThicknessRange=e.iridescenceThicknessRange),void 0!==e.transmission&&(r.transmission=e.transmission),void 0!==e.thickness&&(r.thickness=e.thickness),void 0!==e.attenuationDistance&&(r.attenuationDistance=e.attenuationDistance),void 0!==e.attenuationColor&&void 0!==r.attenuationColor&&r.attenuationColor.setHex(e.attenuationColor),void 0!==e.anisotropy&&(r.anisotropy=e.anisotropy),void 0!==e.anisotropyRotation&&(r.anisotropyRotation=e.anisotropyRotation),void 0!==e.fog&&(r.fog=e.fog),void 0!==e.flatShading&&(r.flatShading=e.flatShading),void 0!==e.blending&&(r.blending=e.blending),void 0!==e.combine&&(r.combine=e.combine),void 0!==e.side&&(r.side=e.side),void 0!==e.shadowSide&&(r.shadowSide=e.shadowSide),void 0!==e.opacity&&(r.opacity=e.opacity),void 0!==e.transparent&&(r.transparent=e.transparent),void 0!==e.alphaTest&&(r.alphaTest=e.alphaTest),void 0!==e.alphaHash&&(r.alphaHash=e.alphaHash),void 0!==e.depthFunc&&(r.depthFunc=e.depthFunc),void 0!==e.depthTest&&(r.depthTest=e.depthTest),void 0!==e.depthWrite&&(r.depthWrite=e.depthWrite),void 0!==e.colorWrite&&(r.colorWrite=e.colorWrite),void 0!==e.blendSrc&&(r.blendSrc=e.blendSrc),void 0!==e.blendDst&&(r.blendDst=e.blendDst),void 0!==e.blendEquation&&(r.blendEquation=e.blendEquation),void 0!==e.blendSrcAlpha&&(r.blendSrcAlpha=e.blendSrcAlpha),void 0!==e.blendDstAlpha&&(r.blendDstAlpha=e.blendDstAlpha),void 0!==e.blendEquationAlpha&&(r.blendEquationAlpha=e.blendEquationAlpha),void 0!==e.blendColor&&void 0!==r.blendColor&&r.blendColor.setHex(e.blendColor),void 0!==e.blendAlpha&&(r.blendAlpha=e.blendAlpha),void 0!==e.stencilWriteMask&&(r.stencilWriteMask=e.stencilWriteMask),void 0!==e.stencilFunc&&(r.stencilFunc=e.stencilFunc),void 0!==e.stencilRef&&(r.stencilRef=e.stencilRef),void 0!==e.stencilFuncMask&&(r.stencilFuncMask=e.stencilFuncMask),void 0!==e.stencilFail&&(r.stencilFail=e.stencilFail),void 0!==e.stencilZFail&&(r.stencilZFail=e.stencilZFail),void 0!==e.stencilZPass&&(r.stencilZPass=e.stencilZPass),void 0!==e.stencilWrite&&(r.stencilWrite=e.stencilWrite),void 0!==e.wireframe&&(r.wireframe=e.wireframe),void 0!==e.wireframeLinewidth&&(r.wireframeLinewidth=e.wireframeLinewidth),void 0!==e.wireframeLinecap&&(r.wireframeLinecap=e.wireframeLinecap),void 0!==e.wireframeLinejoin&&(r.wireframeLinejoin=e.wireframeLinejoin),void 0!==e.rotation&&(r.rotation=e.rotation),void 0!==e.linewidth&&(r.linewidth=e.linewidth),void 0!==e.dashSize&&(r.dashSize=e.dashSize),void 0!==e.gapSize&&(r.gapSize=e.gapSize),void 0!==e.scale&&(r.scale=e.scale),void 0!==e.polygonOffset&&(r.polygonOffset=e.polygonOffset),void 0!==e.polygonOffsetFactor&&(r.polygonOffsetFactor=e.polygonOffsetFactor),void 0!==e.polygonOffsetUnits&&(r.polygonOffsetUnits=e.polygonOffsetUnits),void 0!==e.dithering&&(r.dithering=e.dithering),void 0!==e.alphaToCoverage&&(r.alphaToCoverage=e.alphaToCoverage),void 0!==e.premultipliedAlpha&&(r.premultipliedAlpha=e.premultipliedAlpha),void 0!==e.forceSinglePass&&(r.forceSinglePass=e.forceSinglePass),void 0!==e.visible&&(r.visible=e.visible),void 0!==e.toneMapped&&(r.toneMapped=e.toneMapped),void 0!==e.userData&&(r.userData=e.userData),void 0!==e.vertexColors&&("number"==typeof e.vertexColors?r.vertexColors=e.vertexColors>0:r.vertexColors=e.vertexColors),void 0!==e.uniforms)for(let t in e.uniforms){let a=e.uniforms[t];switch(r.uniforms[t]={},a.type){case"t":r.uniforms[t].value=i(a.value);break;case"c":r.uniforms[t].value=new tb().setHex(a.value);break;case"v2":r.uniforms[t].value=new F().fromArray(a.value);break;case"v3":r.uniforms[t].value=new ef().fromArray(a.value);break;case"v4":r.uniforms[t].value=new en().fromArray(a.value);break;case"m3":r.uniforms[t].value=new B().fromArray(a.value);break;case"m4":r.uniforms[t].value=new eX().fromArray(a.value);break;default:r.uniforms[t].value=a.value}}if(void 0!==e.defines&&(r.defines=e.defines),void 0!==e.vertexShader&&(r.vertexShader=e.vertexShader),void 0!==e.fragmentShader&&(r.fragmentShader=e.fragmentShader),void 0!==e.glslVersion&&(r.glslVersion=e.glslVersion),void 0!==e.extensions)for(let t in e.extensions)r.extensions[t]=e.extensions[t];if(void 0!==e.lights&&(r.lights=e.lights),void 0!==e.clipping&&(r.clipping=e.clipping),void 0!==e.size&&(r.size=e.size),void 0!==e.sizeAttenuation&&(r.sizeAttenuation=e.sizeAttenuation),void 0!==e.map&&(r.map=i(e.map)),void 0!==e.matcap&&(r.matcap=i(e.matcap)),void 0!==e.alphaMap&&(r.alphaMap=i(e.alphaMap)),void 0!==e.bumpMap&&(r.bumpMap=i(e.bumpMap)),void 0!==e.bumpScale&&(r.bumpScale=e.bumpScale),void 0!==e.normalMap&&(r.normalMap=i(e.normalMap)),void 0!==e.normalMapType&&(r.normalMapType=e.normalMapType),void 0!==e.normalScale){let t=e.normalScale;!1===Array.isArray(t)&&(t=[t,t]),r.normalScale=new F().fromArray(t)}return void 0!==e.displacementMap&&(r.displacementMap=i(e.displacementMap)),void 0!==e.displacementScale&&(r.displacementScale=e.displacementScale),void 0!==e.displacementBias&&(r.displacementBias=e.displacementBias),void 0!==e.roughnessMap&&(r.roughnessMap=i(e.roughnessMap)),void 0!==e.metalnessMap&&(r.metalnessMap=i(e.metalnessMap)),void 0!==e.emissiveMap&&(r.emissiveMap=i(e.emissiveMap)),void 0!==e.emissiveIntensity&&(r.emissiveIntensity=e.emissiveIntensity),void 0!==e.specularMap&&(r.specularMap=i(e.specularMap)),void 0!==e.specularIntensityMap&&(r.specularIntensityMap=i(e.specularIntensityMap)),void 0!==e.specularColorMap&&(r.specularColorMap=i(e.specularColorMap)),void 0!==e.envMap&&(r.envMap=i(e.envMap)),void 0!==e.envMapIntensity&&(r.envMapIntensity=e.envMapIntensity),void 0!==e.reflectivity&&(r.reflectivity=e.reflectivity),void 0!==e.refractionRatio&&(r.refractionRatio=e.refractionRatio),void 0!==e.lightMap&&(r.lightMap=i(e.lightMap)),void 0!==e.lightMapIntensity&&(r.lightMapIntensity=e.lightMapIntensity),void 0!==e.aoMap&&(r.aoMap=i(e.aoMap)),void 0!==e.aoMapIntensity&&(r.aoMapIntensity=e.aoMapIntensity),void 0!==e.gradientMap&&(r.gradientMap=i(e.gradientMap)),void 0!==e.clearcoatMap&&(r.clearcoatMap=i(e.clearcoatMap)),void 0!==e.clearcoatRoughnessMap&&(r.clearcoatRoughnessMap=i(e.clearcoatRoughnessMap)),void 0!==e.clearcoatNormalMap&&(r.clearcoatNormalMap=i(e.clearcoatNormalMap)),void 0!==e.clearcoatNormalScale&&(r.clearcoatNormalScale=new F().fromArray(e.clearcoatNormalScale)),void 0!==e.iridescenceMap&&(r.iridescenceMap=i(e.iridescenceMap)),void 0!==e.iridescenceThicknessMap&&(r.iridescenceThicknessMap=i(e.iridescenceThicknessMap)),void 0!==e.transmissionMap&&(r.transmissionMap=i(e.transmissionMap)),void 0!==e.thicknessMap&&(r.thicknessMap=i(e.thicknessMap)),void 0!==e.anisotropyMap&&(r.anisotropyMap=i(e.anisotropyMap)),void 0!==e.sheenColorMap&&(r.sheenColorMap=i(e.sheenColorMap)),void 0!==e.sheenRoughnessMap&&(r.sheenRoughnessMap=i(e.sheenRoughnessMap)),r}setTextures(e){return this.textures=e,this}static createMaterialFromType(e){return new({ShadowMaterial:oh,SpriteMaterial:aJ,RawShaderMaterial:oc,ShaderMaterial:ig,PointsMaterial:s2,MeshPhysicalMaterial:od,MeshStandardMaterial:ou,MeshPhongMaterial:op,MeshToonMaterial:om,MeshNormalMaterial:of,MeshLambertMaterial:og,MeshDepthMaterial:aR,MeshDistanceMaterial:aC,MeshBasicMaterial:tw,MeshMatcapMaterial:o_,LineDashedMaterial:ov,LineBasicMaterial:sX,Material:tA})[e]}}class ln{static decodeText(e){if("u">typeof TextDecoder)return new TextDecoder().decode(e);let t="";for(let i=0,r=e.length;i<r;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return -1===t?"./":e.slice(0,t+1)}static resolveURL(e,t){return"string"!=typeof e||""===e?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class lo extends tJ{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class ll extends oH{constructor(e){super(e)}load(e,t,i,r){let a=this,s=new oV(a.manager);s.setPath(a.path),s.setRequestHeader(a.requestHeader),s.setWithCredentials(a.withCredentials),s.load(e,function(i){try{t(a.parse(JSON.parse(i)))}catch(t){r?r(t):console.error(t),a.manager.itemError(e)}},i,r)}parse(e){let t={},i={};function r(e,r){if(void 0!==t[r])return t[r];let a=e.interleavedBuffers[r],s=function(e,t){if(void 0!==i[t])return i[t];let r=new Uint32Array(e.arrayBuffers[t]).buffer;return i[t]=r,r}(e,a.buffer),n=new aY(k(a.type,s),a.stride);return n.uuid=a.uuid,t[r]=n,n}let a=e.isInstancedBufferGeometry?new lo:new tJ,s=e.data.index;if(void 0!==s){let e=k(s.type,s.array);a.setIndex(new tU(e,1))}let n=e.data.attributes;for(let t in n){let i,s=n[t];if(s.isInterleavedBufferAttribute)i=new aK(r(e.data,s.data),s.itemSize,s.offset,s.normalized);else{let e=k(s.type,s.array);i=new(s.isInstancedBufferAttribute?sy:tU)(e,s.itemSize,s.normalized)}void 0!==s.name&&(i.name=s.name),void 0!==s.usage&&i.setUsage(s.usage),a.setAttribute(t,i)}let o=e.data.morphAttributes;if(o)for(let t in o){let i=o[t],s=[];for(let t=0,a=i.length;t<a;t++){let a,n=i[t];a=n.isInterleavedBufferAttribute?new aK(r(e.data,n.data),n.itemSize,n.offset,n.normalized):new tU(k(n.type,n.array),n.itemSize,n.normalized),void 0!==n.name&&(a.name=n.name),s.push(a)}a.morphAttributes[t]=s}e.data.morphTargetsRelative&&(a.morphTargetsRelative=!0);let l=e.data.groups||e.data.drawcalls||e.data.offsets;if(void 0!==l)for(let e=0,t=l.length;e!==t;++e){let t=l[e];a.addGroup(t.start,t.count,t.materialIndex)}let h=e.data.boundingSphere;if(void 0!==h){let e=new ef;void 0!==h.center&&e.fromArray(h.center),a.boundingSphere=new eO(e,h.radius)}return e.name&&(a.name=e.name),e.userData&&(a.userData=e.userData),a}}class lh extends oH{constructor(e){super(e)}load(e,t,i,r){let a=this,s=""===this.path?ln.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||s;let n=new oV(this.manager);n.setPath(this.path),n.setRequestHeader(this.requestHeader),n.setWithCredentials(this.withCredentials),n.load(e,function(i){let s=null;try{s=JSON.parse(i)}catch(t){void 0!==r&&r(t),console.error("THREE:ObjectLoader: Can't parse "+e+".",t.message);return}let n=s.metadata;if(void 0===n||void 0===n.type||"geometry"===n.type.toLowerCase()){void 0!==r&&r(Error("THREE.ObjectLoader: Can't load "+e)),console.error("THREE.ObjectLoader: Can't load "+e);return}a.parse(s,t)},i,r)}async loadAsync(e,t){let i=""===this.path?ln.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||i;let r=new oV(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials);let a=JSON.parse(await r.loadAsync(e,t)),s=a.metadata;if(void 0===s||void 0===s.type||"geometry"===s.type.toLowerCase())throw Error("THREE.ObjectLoader: Can't load "+e);return await this.parseAsync(a)}parse(e,t){let i=this.parseAnimations(e.animations),r=this.parseShapes(e.shapes),a=this.parseGeometries(e.geometries,r),s=this.parseImages(e.images,function(){void 0!==t&&t(l)}),n=this.parseTextures(e.textures,s),o=this.parseMaterials(e.materials,n),l=this.parseObject(e.object,a,o,n,i),h=this.parseSkeletons(e.skeletons,l);if(this.bindSkeletons(l,h),void 0!==t){let e=!1;for(let t in s)if(s[t].data instanceof HTMLImageElement){e=!0;break}!1===e&&t(l)}return l}async parseAsync(e){let t=this.parseAnimations(e.animations),i=this.parseShapes(e.shapes),r=this.parseGeometries(e.geometries,i),a=await this.parseImagesAsync(e.images),s=this.parseTextures(e.textures,a),n=this.parseMaterials(e.materials,s),o=this.parseObject(e.object,r,n,s,t),l=this.parseSkeletons(e.skeletons,o);return this.bindSkeletons(o,l),o}parseShapes(e){let t={};if(void 0!==e)for(let i=0,r=e.length;i<r;i++){let r=new nz().fromJSON(e[i]);t[r.uuid]=r}return t}parseSkeletons(e,t){let i={},r={};if(t.traverse(function(e){e.isBone&&(r[e.uuid]=e)}),void 0!==e)for(let t=0,a=e.length;t<a;t++){let a=new sx().fromJSON(e[t],r);i[a.uuid]=a}return i}parseGeometries(e,t){let i={};if(void 0!==e){let r=new ll;for(let a=0,s=e.length;a<s;a++){let s,n=e[a];switch(n.type){case"BufferGeometry":case"InstancedBufferGeometry":s=r.parse(n);break;default:n.type in ol?s=ol[n.type].fromJSON(n,t):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${n.type}"`)}s.uuid=n.uuid,void 0!==n.name&&(s.name=n.name),void 0!==n.userData&&(s.userData=n.userData),i[n.uuid]=s}}return i}parseMaterials(e,t){let i={},r={};if(void 0!==e){let a=new ls;a.setTextures(t);for(let t=0,s=e.length;t<s;t++){let s=e[t];void 0===i[s.uuid]&&(i[s.uuid]=a.parse(s)),r[s.uuid]=i[s.uuid]}}return r}parseAnimations(e){let t={};if(void 0!==e)for(let i=0;i<e.length;i++){let r=e[i],a=oO.parse(r);t[a.uuid]=a}return t}parseImages(e,t){let i,r=this,a={};function s(e){var t;return"string"!=typeof e?e.data?{data:k(e.type,e.data),width:e.width,height:e.height}:null:(t=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(e)?e:r.resourcePath+e,r.manager.itemStart(t),i.load(t,function(){r.manager.itemEnd(t)},void 0,function(){r.manager.itemError(t),r.manager.itemEnd(t)}))}if(void 0!==e&&e.length>0){(i=new oj(new oB(t))).setCrossOrigin(this.crossOrigin);for(let t=0,i=e.length;t<i;t++){let i=e[t],r=i.url;if(Array.isArray(r)){let e=[];for(let t=0,i=r.length;t<i;t++){let i=s(r[t]);null!==i&&(i instanceof HTMLImageElement?e.push(i):e.push(new sg(i.data,i.width,i.height)))}a[i.uuid]=new ei(e)}else{let e=s(i.url);a[i.uuid]=new ei(e)}}}return a}async parseImagesAsync(e){let t,i=this,r={};async function a(e){if("string"!=typeof e)return e.data?{data:k(e.type,e.data),width:e.width,height:e.height}:null;{let r=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(e)?e:i.resourcePath+e;return await t.loadAsync(r)}}if(void 0!==e&&e.length>0){(t=new oj(this.manager)).setCrossOrigin(this.crossOrigin);for(let t=0,i=e.length;t<i;t++){let i=e[t],s=i.url;if(Array.isArray(s)){let e=[];for(let t=0,i=s.length;t<i;t++){let i=s[t],r=await a(i);null!==r&&(r instanceof HTMLImageElement?e.push(r):e.push(new sg(r.data,r.width,r.height)))}r[i.uuid]=new ei(e)}else{let e=await a(i.url);r[i.uuid]=new ei(e)}}}return r}parseTextures(e,t){function i(e,t){return"number"==typeof e?e:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",e),t[e])}let r={};if(void 0!==e)for(let a=0,s=e.length;a<s;a++){let s,n=e[a];void 0===n.image&&console.warn('THREE.ObjectLoader: No "image" specified for',n.uuid),void 0===t[n.image]&&console.warn("THREE.ObjectLoader: Undefined image",n.image);let o=t[n.image],l=o.data;Array.isArray(l)?(s=new iy,6===l.length&&(s.needsUpdate=!0)):(s=l&&l.data?new sg:new es,l&&(s.needsUpdate=!0)),s.source=o,s.uuid=n.uuid,void 0!==n.name&&(s.name=n.name),void 0!==n.mapping&&(s.mapping=i(n.mapping,lc)),void 0!==n.channel&&(s.channel=n.channel),void 0!==n.offset&&s.offset.fromArray(n.offset),void 0!==n.repeat&&s.repeat.fromArray(n.repeat),void 0!==n.center&&s.center.fromArray(n.center),void 0!==n.rotation&&(s.rotation=n.rotation),void 0!==n.wrap&&(s.wrapS=i(n.wrap[0],lu),s.wrapT=i(n.wrap[1],lu)),void 0!==n.format&&(s.format=n.format),void 0!==n.internalFormat&&(s.internalFormat=n.internalFormat),void 0!==n.type&&(s.type=n.type),void 0!==n.colorSpace&&(s.colorSpace=n.colorSpace),void 0!==n.encoding&&(s.encoding=n.encoding),void 0!==n.minFilter&&(s.minFilter=i(n.minFilter,ld)),void 0!==n.magFilter&&(s.magFilter=i(n.magFilter,ld)),void 0!==n.anisotropy&&(s.anisotropy=n.anisotropy),void 0!==n.flipY&&(s.flipY=n.flipY),void 0!==n.generateMipmaps&&(s.generateMipmaps=n.generateMipmaps),void 0!==n.premultiplyAlpha&&(s.premultiplyAlpha=n.premultiplyAlpha),void 0!==n.unpackAlignment&&(s.unpackAlignment=n.unpackAlignment),void 0!==n.compareFunction&&(s.compareFunction=n.compareFunction),void 0!==n.userData&&(s.userData=n.userData),r[n.uuid]=s}return r}parseObject(e,t,i,r,a){let s,n,o;function l(e){return void 0===t[e]&&console.warn("THREE.ObjectLoader: Undefined geometry",e),t[e]}function h(e){if(void 0!==e){if(Array.isArray(e)){let t=[];for(let r=0,a=e.length;r<a;r++){let a=e[r];void 0===i[a]&&console.warn("THREE.ObjectLoader: Undefined material",a),t.push(i[a])}return t}return void 0===i[e]&&console.warn("THREE.ObjectLoader: Undefined material",e),i[e]}}function c(e){return void 0===r[e]&&console.warn("THREE.ObjectLoader: Undefined texture",e),r[e]}switch(e.type){case"Scene":s=new aq,void 0!==e.background&&(Number.isInteger(e.background)?s.background=new tb(e.background):s.background=c(e.background)),void 0!==e.environment&&(s.environment=c(e.environment)),void 0!==e.fog&&("Fog"===e.fog.type?s.fog=new aj(e.fog.color,e.fog.near,e.fog.far):"FogExp2"===e.fog.type&&(s.fog=new aX(e.fog.color,e.fog.density)),""!==e.fog.name&&(s.fog.name=e.fog.name)),void 0!==e.backgroundBlurriness&&(s.backgroundBlurriness=e.backgroundBlurriness),void 0!==e.backgroundIntensity&&(s.backgroundIntensity=e.backgroundIntensity);break;case"PerspectiveCamera":s=new iv(e.fov,e.aspect,e.near,e.far),void 0!==e.focus&&(s.focus=e.focus),void 0!==e.zoom&&(s.zoom=e.zoom),void 0!==e.filmGauge&&(s.filmGauge=e.filmGauge),void 0!==e.filmOffset&&(s.filmOffset=e.filmOffset),void 0!==e.view&&(s.view=Object.assign({},e.view));break;case"OrthographicCamera":s=new ik(e.left,e.right,e.top,e.bottom,e.near,e.far),void 0!==e.zoom&&(s.zoom=e.zoom),void 0!==e.view&&(s.view=Object.assign({},e.view));break;case"AmbientLight":s=new lt(e.color,e.intensity);break;case"DirectionalLight":s=new le(e.color,e.intensity);break;case"PointLight":s=new o9(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":s=new li(e.color,e.intensity,e.width,e.height);break;case"SpotLight":s=new o3(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay);break;case"HemisphereLight":s=new oJ(e.color,e.groundColor,e.intensity);break;case"LightProbe":s=new la().fromJSON(e);break;case"SkinnedMesh":s=new sm(n=l(e.geometry),o=h(e.material)),void 0!==e.bindMode&&(s.bindMode=e.bindMode),void 0!==e.bindMatrix&&s.bindMatrix.fromArray(e.bindMatrix),void 0!==e.skeleton&&(s.skeleton=e.skeleton);break;case"Mesh":s=new is(n=l(e.geometry),o=h(e.material));break;case"InstancedMesh":n=l(e.geometry),o=h(e.material);let u=e.count,d=e.instanceMatrix,p=e.instanceColor;(s=new sR(n,o,u)).instanceMatrix=new sy(new Float32Array(d.array),16),void 0!==p&&(s.instanceColor=new sy(new Float32Array(p.array),p.itemSize));break;case"BatchedMesh":n=l(e.geometry),o=h(e.material),(s=new sW(e.maxGeometryCount,e.maxVertexCount,e.maxIndexCount,o)).geometry=n,s.perObjectFrustumCulled=e.perObjectFrustumCulled,s.sortObjects=e.sortObjects,s._drawRanges=e.drawRanges,s._reservedRanges=e.reservedRanges,s._visibility=e.visibility,s._active=e.active,s._bounds=e.bounds.map(e=>{let t=new ev;t.min.fromArray(e.boxMin),t.max.fromArray(e.boxMax);let i=new eO;return i.radius=e.sphereRadius,i.center.fromArray(e.sphereCenter),{boxInitialized:e.boxInitialized,box:t,sphereInitialized:e.sphereInitialized,sphere:i}}),s._maxGeometryCount=e.maxGeometryCount,s._maxVertexCount=e.maxVertexCount,s._maxIndexCount=e.maxIndexCount,s._geometryInitialized=e.geometryInitialized,s._geometryCount=e.geometryCount,s._matricesTexture=c(e.matricesTexture.uuid);break;case"LOD":s=new sa;break;case"Line":s=new sJ(l(e.geometry),h(e.material));break;case"LineLoop":s=new s1(l(e.geometry),h(e.material));break;case"LineSegments":s=new s0(l(e.geometry),h(e.material));break;case"PointCloud":case"Points":s=new s8(l(e.geometry),h(e.material));break;case"Sprite":s=new se(h(e.material));break;case"Group":s=new aF;break;case"Bone":s=new sf;break;default:s=new tn}if(s.uuid=e.uuid,void 0!==e.name&&(s.name=e.name),void 0!==e.matrix?(s.matrix.fromArray(e.matrix),void 0!==e.matrixAutoUpdate&&(s.matrixAutoUpdate=e.matrixAutoUpdate),s.matrixAutoUpdate&&s.matrix.decompose(s.position,s.quaternion,s.scale)):(void 0!==e.position&&s.position.fromArray(e.position),void 0!==e.rotation&&s.rotation.fromArray(e.rotation),void 0!==e.quaternion&&s.quaternion.fromArray(e.quaternion),void 0!==e.scale&&s.scale.fromArray(e.scale)),void 0!==e.up&&s.up.fromArray(e.up),void 0!==e.castShadow&&(s.castShadow=e.castShadow),void 0!==e.receiveShadow&&(s.receiveShadow=e.receiveShadow),e.shadow&&(void 0!==e.shadow.bias&&(s.shadow.bias=e.shadow.bias),void 0!==e.shadow.normalBias&&(s.shadow.normalBias=e.shadow.normalBias),void 0!==e.shadow.radius&&(s.shadow.radius=e.shadow.radius),void 0!==e.shadow.mapSize&&s.shadow.mapSize.fromArray(e.shadow.mapSize),void 0!==e.shadow.camera&&(s.shadow.camera=this.parseObject(e.shadow.camera))),void 0!==e.visible&&(s.visible=e.visible),void 0!==e.frustumCulled&&(s.frustumCulled=e.frustumCulled),void 0!==e.renderOrder&&(s.renderOrder=e.renderOrder),void 0!==e.userData&&(s.userData=e.userData),void 0!==e.layers&&(s.layers.mask=e.layers),void 0!==e.children){let n=e.children;for(let e=0;e<n.length;e++)s.add(this.parseObject(n[e],t,i,r,a))}if(void 0!==e.animations){let t=e.animations;for(let e=0;e<t.length;e++){let i=t[e];s.animations.push(a[i])}}if("LOD"===e.type){void 0!==e.autoUpdate&&(s.autoUpdate=e.autoUpdate);let t=e.levels;for(let e=0;e<t.length;e++){let i=t[e],r=s.getObjectByProperty("uuid",i.object);void 0!==r&&s.addLevel(r,i.distance,i.hysteresis)}}return s}bindSkeletons(e,t){0!==Object.keys(t).length&&e.traverse(function(e){if(!0===e.isSkinnedMesh&&void 0!==e.skeleton){let i=t[e.skeleton];void 0===i?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",e.skeleton):e.bind(i,e.bindMatrix)}})}}let lc={UVMapping:300,CubeReflectionMapping:301,CubeRefractionMapping:302,EquirectangularReflectionMapping:303,EquirectangularRefractionMapping:304,CubeUVReflectionMapping:306},lu={RepeatWrapping:1e3,ClampToEdgeWrapping:1001,MirroredRepeatWrapping:1002},ld={NearestFilter:1003,NearestMipmapNearestFilter:1004,NearestMipmapLinearFilter:1005,LinearFilter:p,LinearMipmapNearestFilter:1007,LinearMipmapLinearFilter:m};class lp extends oH{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,r){void 0===e&&(e=""),void 0!==this.path&&(e=this.path+e),e=this.manager.resolveURL(e);let a=this,s=oF.get(e);if(void 0!==s)return(a.manager.itemStart(e),s.then)?void s.then(i=>{t&&t(i),a.manager.itemEnd(e)}).catch(e=>{r&&r(e)}):(setTimeout(function(){t&&t(s),a.manager.itemEnd(e)},0),s);let n={};n.credentials="anonymous"===this.crossOrigin?"same-origin":"include",n.headers=this.requestHeader;let o=fetch(e,n).then(function(e){return e.blob()}).then(function(e){return createImageBitmap(e,Object.assign(a.options,{colorSpaceConversion:"none"}))}).then(function(i){return oF.add(e,i),t&&t(i),a.manager.itemEnd(e),i}).catch(function(t){r&&r(t),oF.remove(e),a.manager.itemError(e),a.manager.itemEnd(e)});oF.add(e,o),a.manager.itemStart(e)}}class lm{static getContext(){return void 0===s&&(s=new(window.AudioContext||window.webkitAudioContext)),s}static setContext(e){s=e}}class lf extends oH{constructor(e){super(e)}load(e,t,i,r){let a=this,s=new oV(this.manager);function n(t){r?r(t):console.error(t),a.manager.itemError(e)}s.setResponseType("arraybuffer"),s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,function(e){try{let i=e.slice(0);lm.getContext().decodeAudioData(i,function(e){t(e)}).catch(n)}catch(e){n(e)}},i,r)}}let lg=new eX,l_=new eX,lv=new eX;class lx{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new iv,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new iv,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){let t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){let i,r;t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,lv.copy(e.projectionMatrix);let a=t.eyeSep/2,s=a*t.near/t.focus,n=t.near*Math.tan(A*t.fov*.5)/t.zoom;l_.elements[12]=-a,lg.elements[12]=a,i=-n*t.aspect+s,r=n*t.aspect+s,lv.elements[0]=2*t.near/(r-i),lv.elements[8]=(r+i)/(r-i),this.cameraL.projectionMatrix.copy(lv),i=-n*t.aspect-s,r=n*t.aspect-s,lv.elements[0]=2*t.near/(r-i),lv.elements[8]=(r+i)/(r-i),this.cameraR.projectionMatrix.copy(lv)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(l_),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(lg)}}class ly{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=lM(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=lM();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function lM(){return(typeof performance>"u"?Date:performance).now()}let lS=new ef,lb=new em,lT=new ef,lE=new ef;class lA extends tn{constructor(){super(),this.type="AudioListener",this.context=lm.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new ly}getInput(){return this.gain}removeFilter(){return null!==this.filter&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return null!==this.filter?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);let t=this.context.listener,i=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(lS,lb,lT),lE.set(0,0,-1).applyQuaternion(lb),t.positionX){let e=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(lS.x,e),t.positionY.linearRampToValueAtTime(lS.y,e),t.positionZ.linearRampToValueAtTime(lS.z,e),t.forwardX.linearRampToValueAtTime(lE.x,e),t.forwardY.linearRampToValueAtTime(lE.y,e),t.forwardZ.linearRampToValueAtTime(lE.z,e),t.upX.linearRampToValueAtTime(i.x,e),t.upY.linearRampToValueAtTime(i.y,e),t.upZ.linearRampToValueAtTime(i.z,e)}else t.setPosition(lS.x,lS.y,lS.z),t.setOrientation(lE.x,lE.y,lE.z,i.x,i.y,i.z)}}class lw extends tn{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(!0===this.isPlaying)return void console.warn("THREE.Audio: Audio is already playing.");if(!1===this.hasPlaybackControl)return void console.warn("THREE.Audio: this Audio has no playback control.");this._startedAt=this.context.currentTime+e;let t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){return!1===this.hasPlaybackControl?void console.warn("THREE.Audio: this Audio has no playback control."):(!0===this.isPlaying&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,!0===this.loop&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this)}stop(){return!1===this.hasPlaybackControl?void console.warn("THREE.Audio: this Audio has no playback control."):(this._progress=0,null!==this.source&&(this.source.stop(),this.source.onended=null),this.isPlaying=!1,this)}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(!1!==this._connected){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),!0===this._connected?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,void 0!==this.source.detune)return!0===this.isPlaying&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){return!1===this.hasPlaybackControl?void console.warn("THREE.Audio: this Audio has no playback control."):(this.playbackRate=e,!0===this.isPlaying&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this)}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return!1===this.hasPlaybackControl?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){return!1===this.hasPlaybackControl?void console.warn("THREE.Audio: this Audio has no playback control."):(this.loop=e,!0===this.isPlaying&&(this.source.loop=this.loop),this)}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}let lR=new ef,lC=new em,lL=new ef,lP=new ef;class lI extends lw{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){super.connect(),this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,i){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=i,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),!0===this.hasPlaybackControl&&!1===this.isPlaying)return;this.matrixWorld.decompose(lR,lC,lL),lP.set(0,0,1).applyQuaternion(lC);let t=this.panner;if(t.positionX){let e=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(lR.x,e),t.positionY.linearRampToValueAtTime(lR.y,e),t.positionZ.linearRampToValueAtTime(lR.z,e),t.orientationX.linearRampToValueAtTime(lP.x,e),t.orientationY.linearRampToValueAtTime(lP.y,e),t.orientationZ.linearRampToValueAtTime(lP.z,e)}else t.setPosition(lR.x,lR.y,lR.z),t.setOrientation(lP.x,lP.y,lP.z)}}class lU{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0,t=this.getFrequencyData();for(let i=0;i<t.length;i++)e+=t[i];return e/t.length}}class lN{constructor(e,t,i){let r,a,s;switch(this.binding=e,this.valueSize=i,t){case"quaternion":r=this._slerp,a=this._slerpAdditive,s=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(6*i),this._workIndex=5;break;case"string":case"bool":r=this._select,a=this._select,s=this._setAdditiveIdentityOther,this.buffer=Array(5*i);break;default:r=this._lerp,a=this._lerpAdditive,s=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(5*i)}this._mixBufferRegion=r,this._mixBufferRegionAdditive=a,this._setIdentity=s,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let i=this.buffer,r=this.valueSize,a=e*r+r,s=this.cumulativeWeight;if(0===s){for(let e=0;e!==r;++e)i[a+e]=i[e];s=t}else{s+=t;let e=t/s;this._mixBufferRegion(i,a,0,e,r)}this.cumulativeWeight=s}accumulateAdditive(e){let t=this.buffer,i=this.valueSize,r=i*this._addIndex;0===this.cumulativeWeightAdditive&&this._setIdentity(),this._mixBufferRegionAdditive(t,r,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,i=this.buffer,r=e*t+t,a=this.cumulativeWeight,s=this.cumulativeWeightAdditive,n=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,a<1){let e=t*this._origIndex;this._mixBufferRegion(i,r,e,1-a,t)}s>0&&this._mixBufferRegionAdditive(i,r,this._addIndex*t,1,t);for(let e=t,a=t+t;e!==a;++e)if(i[e]!==i[e+t]){n.setValue(i,r);break}}saveOriginalState(){let e=this.binding,t=this.buffer,i=this.valueSize,r=i*this._origIndex;e.getValue(t,r);for(let e=i;e!==r;++e)t[e]=t[r+e%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=3*this.valueSize;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,r,a){if(r>=.5)for(let r=0;r!==a;++r)e[t+r]=e[i+r]}_slerp(e,t,i,r){em.slerpFlat(e,t,e,t,e,i,r)}_slerpAdditive(e,t,i,r,a){let s=this._workIndex*a;em.multiplyQuaternionsFlat(e,s,e,t,e,i),em.slerpFlat(e,t,e,t,e,s,r)}_lerp(e,t,i,r,a){let s=1-r;for(let n=0;n!==a;++n){let a=t+n;e[a]=e[a]*s+e[i+n]*r}}_lerpAdditive(e,t,i,r,a){for(let s=0;s!==a;++s){let a=t+s;e[a]=e[a]+e[i+s]*r}}}let lD="\\[\\]\\.:\\/",lO=RegExp("["+lD+"]","g"),lF="[^"+lD+"]",lB="[^"+lD.replace("\\.","")+"]",lz=RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",lF)+/(WCOD+)?/.source.replace("WCOD",lB)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",lF)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",lF)+"$"),lH=["material","materials","bones","map"];class lG{constructor(e,t,i){let r=i||lk.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];void 0!==r&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,a=i.length;r!==a;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class lk{constructor(e,t,i){this.path=t,this.parsedPath=i||lk.parseTrackName(t),this.node=lk.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new lk.Composite(e,t,i):new lk(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(lO,"")}static parseTrackName(e){let t=lz.exec(e);if(null===t)throw Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(void 0!==r&&-1!==r){let e=i.nodeName.substring(r+1);-1!==lH.indexOf(e)&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=e)}if(null===i.propertyName||0===i.propertyName.length)throw Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(void 0===t||""===t||"."===t||-1===t||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(void 0!==i)return i}if(e.children){let i=function(e){for(let r=0;r<e.length;r++){let a=e[r];if(a.name===t||a.uuid===t)return a;let s=i(a.children);if(s)return s}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let r=0,a=i.length;r!==a;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let r=0,a=i.length;r!==a;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,a=i.length;r!==a;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,a=i.length;r!==a;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,r=t.propertyName,a=t.propertyIndex;if(e||(e=lk.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");if(i){let r=t.objectIndex;switch(i){case"materials":if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let t=0;t<e.length;t++)if(e[t].name===r){r=t;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(void 0===e[i])return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[i]}if(void 0!==r){if(void 0===e[r])return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[r]}}let s=e[r];if(void 0===s)return void console.error("THREE.PropertyBinding: Trying to update property for track: "+t.nodeName+"."+r+" but it wasn't found.",e);let n=this.Versioning.None;this.targetObject=e,void 0!==e.needsUpdate?n=this.Versioning.NeedsUpdate:void 0!==e.matrixWorldNeedsUpdate&&(n=this.Versioning.MatrixWorldNeedsUpdate);let o=this.BindingType.Direct;if(void 0!==a){if("morphTargetInfluences"===r){if(!e.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);void 0!==e.morphTargetDictionary[a]&&(a=e.morphTargetDictionary[a])}o=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=a}else void 0!==s.fromArray&&void 0!==s.toArray?(o=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(o=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=r;this.getValue=this.GetterByBindingType[o],this.setValue=this.SetterByBindingTypeAndVersioning[o][n]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}lk.Composite=lG,lk.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},lk.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},lk.prototype.GetterByBindingType=[lk.prototype._getValue_direct,lk.prototype._getValue_array,lk.prototype._getValue_arrayElement,lk.prototype._getValue_toArray],lk.prototype.SetterByBindingTypeAndVersioning=[[lk.prototype._setValue_direct,lk.prototype._setValue_direct_setNeedsUpdate,lk.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[lk.prototype._setValue_array,lk.prototype._setValue_array_setNeedsUpdate,lk.prototype._setValue_array_setMatrixWorldNeedsUpdate],[lk.prototype._setValue_arrayElement,lk.prototype._setValue_arrayElement_setNeedsUpdate,lk.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[lk.prototype._setValue_fromArray,lk.prototype._setValue_fromArray_setNeedsUpdate,lk.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class lV{constructor(){this.isAnimationObjectGroup=!0,this.uuid=R(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;let e={};this._indicesByUUID=e;for(let t=0,i=arguments.length;t!==i;++t)e[arguments[t].uuid]=t;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};let t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){let e=this._objects,t=this._indicesByUUID,i=this._paths,r=this._parsedPaths,a=this._bindings,s=a.length,n,o=e.length,l=this.nCachedObjects_;for(let h=0,c=arguments.length;h!==c;++h){let c=arguments[h],u=c.uuid,d=t[u];if(void 0===d){d=o++,t[u]=d,e.push(c);for(let e=0;e!==s;++e)a[e].push(new lk(c,i[e],r[e]))}else if(d<l){n=e[d];let o=--l,h=e[o];t[h.uuid]=d,e[d]=h,t[u]=o,e[o]=c;for(let e=0;e!==s;++e){let t=a[e],s=t[o],n=t[d];t[d]=s,void 0===n&&(n=new lk(c,i[e],r[e])),t[o]=n}}else e[d]!==n&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=l}remove(){let e=this._objects,t=this._indicesByUUID,i=this._bindings,r=i.length,a=this.nCachedObjects_;for(let s=0,n=arguments.length;s!==n;++s){let n=arguments[s],o=n.uuid,l=t[o];if(void 0!==l&&l>=a){let s=a++,h=e[s];t[h.uuid]=l,e[l]=h,t[o]=s,e[s]=n;for(let e=0;e!==r;++e){let t=i[e],r=t[s],a=t[l];t[l]=r,t[s]=a}}}this.nCachedObjects_=a}uncache(){let e=this._objects,t=this._indicesByUUID,i=this._bindings,r=i.length,a=this.nCachedObjects_,s=e.length;for(let n=0,o=arguments.length;n!==o;++n){let o=arguments[n],l=o.uuid,h=t[l];if(void 0!==h)if(delete t[l],h<a){let n=--a,o=e[n],l=--s,c=e[l];t[o.uuid]=h,e[h]=o,t[c.uuid]=n,e[n]=c,e.pop();for(let e=0;e!==r;++e){let t=i[e],r=t[n],a=t[l];t[h]=r,t[n]=a,t.pop()}}else{let a=--s,n=e[a];a>0&&(t[n.uuid]=h),e[h]=n,e.pop();for(let e=0;e!==r;++e){let t=i[e];t[h]=t[a],t.pop()}}}this.nCachedObjects_=a}subscribe_(e,t){let i=this._bindingsIndicesByPath,r=i[e],a=this._bindings;if(void 0!==r)return a[r];let s=this._paths,n=this._parsedPaths,o=this._objects,l=o.length,h=this.nCachedObjects_,c=Array(l);r=a.length,i[e]=r,s.push(e),n.push(t),a.push(c);for(let i=h,r=o.length;i!==r;++i){let r=o[i];c[i]=new lk(r,e,t)}return c}unsubscribe_(e){let t=this._bindingsIndicesByPath,i=t[e];if(void 0!==i){let r=this._paths,a=this._parsedPaths,s=this._bindings,n=s.length-1,o=s[n];t[e[n]]=i,s[i]=o,s.pop(),a[i]=a[n],a.pop(),r[i]=r[n],r.pop()}}}class lW{constructor(e,t,i=null,r=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=r;let a=t.tracks,s=a.length,n=Array(s),o={endingStart:2400,endingEnd:2400};for(let e=0;e!==s;++e){let t=a[e].createInterpolant(null);n[e]=t,t.settings=o}this._interpolantSettings=o,this._interpolants=n,this._propertyBindings=Array(s),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=2201,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&0!==this.timeScale&&null===this._startTime&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i){if(e.fadeOut(t),this.fadeIn(t),i){let i=this._clip.duration,r=e._clip.duration;e.warp(1,r/i,t),this.warp(i/r,1,t)}return this}crossFadeTo(e,t,i){return e.crossFadeFrom(this,t,i)}stopFading(){let e=this._weightInterpolant;return null!==e&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){let r=this._mixer,a=r.time,s=this.timeScale,n=this._timeScaleInterpolant;null===n&&(n=r._lendControlInterpolant(),this._timeScaleInterpolant=n);let o=n.parameterPositions,l=n.sampleValues;return o[0]=a,o[1]=a+i,l[0]=e/s,l[1]=t/s,this}stopWarping(){let e=this._timeScaleInterpolant;return null!==e&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,r){if(!this.enabled)return void this._updateWeight(e);let a=this._startTime;if(null!==a){let r=(e-a)*i;r<0||0===i?t=0:(this._startTime=null,t=i*r)}t*=this._updateTimeScale(e);let s=this._updateTime(t),n=this._updateWeight(e);if(n>0){let e=this._interpolants,t=this._propertyBindings;if(2501===this.blendMode)for(let i=0,r=e.length;i!==r;++i)e[i].evaluate(s),t[i].accumulateAdditive(n);else for(let i=0,a=e.length;i!==a;++i)e[i].evaluate(s),t[i].accumulate(r,n)}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let i=this._weightInterpolant;if(null!==i){let r=i.evaluate(e)[0];t*=r,e>i.parameterPositions[1]&&(this.stopFading(),0===r&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let i=this._timeScaleInterpolant;null!==i&&(t*=i.evaluate(e)[0],e>i.parameterPositions[1]&&(this.stopWarping(),0===t?this.paused=!0:this.timeScale=t))}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,i=this.loop,r=this.time+e,a=this._loopCount,s=2202===i;if(0===e)return -1===a?r:s&&(1&a)==1?t-r:r;if(2200===i){-1===a&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(r>=t)r=t;else if(r<0)r=0;else{this.time=r;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(-1===a&&(e>=0?(a=0,this._setEndings(!0,0===this.repetitions,s)):this._setEndings(0===this.repetitions,!0,s)),r>=t||r<0){let i=Math.floor(r/t);r-=t*i,a+=Math.abs(i);let n=this.repetitions-a;if(n<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=e>0?t:0,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(1===n){let t=e<0;this._setEndings(t,!t,s)}else this._setEndings(!1,!1,s);this._loopCount=a,this.time=r,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:i})}}else this.time=r;if(s&&(1&a)==1)return t-r}return r}_setEndings(e,t,i){let r=this._interpolantSettings;i?(r.endingStart=2401,r.endingEnd=2401):(e?r.endingStart=this.zeroSlopeAtStart?2401:2400:r.endingStart=2402,t?r.endingEnd=this.zeroSlopeAtEnd?2401:2400:r.endingEnd=2402)}_scheduleFading(e,t,i){let r=this._mixer,a=r.time,s=this._weightInterpolant;null===s&&(s=r._lendControlInterpolant(),this._weightInterpolant=s);let n=s.parameterPositions,o=s.sampleValues;return n[0]=a,o[0]=t,n[1]=a+e,o[1]=i,this}}let lX=new Float32Array(1);class lj extends b{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let i=e._localRoot||this._root,r=e._clip.tracks,a=r.length,s=e._propertyBindings,n=e._interpolants,o=i.uuid,l=this._bindingsByRootAndName,h=l[o];void 0===h&&(h={},l[o]=h);for(let e=0;e!==a;++e){let a=r[e],l=a.name,c=h[l];if(void 0!==c)++c.referenceCount,s[e]=c;else{if(void 0!==(c=s[e])){null===c._cacheIndex&&(++c.referenceCount,this._addInactiveBinding(c,o,l));continue}let r=t&&t._propertyBindings[e].binding.parsedPath;c=new lN(lk.create(i,l,r),a.ValueTypeName,a.getValueSize()),++c.referenceCount,this._addInactiveBinding(c,o,l),s[e]=c}n[e].resultBuffer=c.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(null===e._cacheIndex){let t=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,t)}let t=e._propertyBindings;for(let e=0,i=t.length;e!==i;++e){let i=t[e];0==i.useCount++&&(this._lendBinding(i),i.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let e=0,i=t.length;e!==i;++e){let i=t[e];0==--i.useCount&&(i.restoreOriginalState(),this._takeBackBinding(i))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return null!==t&&t<this._nActiveActions}_addInactiveAction(e,t,i){let r=this._actions,a=this._actionsByClip,s=a[t];if(void 0===s)s={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,a[t]=s;else{let t=s.knownActions;e._byClipCacheIndex=t.length,t.push(e)}e._cacheIndex=r.length,r.push(e),s.actionByRoot[i]=e}_removeInactiveAction(e){let t=this._actions,i=t[t.length-1],r=e._cacheIndex;i._cacheIndex=r,t[r]=i,t.pop(),e._cacheIndex=null;let a=e._clip.uuid,s=this._actionsByClip,n=s[a],o=n.knownActions,l=o[o.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,o[h]=l,o.pop(),e._byClipCacheIndex=null;let c=n.actionByRoot,u=(e._localRoot||this._root).uuid;delete c[u],0===o.length&&delete s[a],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let e=0,i=t.length;e!==i;++e){let i=t[e];0==--i.referenceCount&&this._removeInactiveBinding(i)}}_lendAction(e){let t=this._actions,i=e._cacheIndex,r=this._nActiveActions++,a=t[r];e._cacheIndex=r,t[r]=e,a._cacheIndex=i,t[i]=a}_takeBackAction(e){let t=this._actions,i=e._cacheIndex,r=--this._nActiveActions,a=t[r];e._cacheIndex=r,t[r]=e,a._cacheIndex=i,t[i]=a}_addInactiveBinding(e,t,i){let r=this._bindingsByRootAndName,a=this._bindings,s=r[t];void 0===s&&(s={},r[t]=s),s[i]=e,e._cacheIndex=a.length,a.push(e)}_removeInactiveBinding(e){let t=this._bindings,i=e.binding,r=i.rootNode.uuid,a=i.path,s=this._bindingsByRootAndName,n=s[r],o=t[t.length-1],l=e._cacheIndex;o._cacheIndex=l,t[l]=o,t.pop(),delete n[a],0===Object.keys(n).length&&delete s[r]}_lendBinding(e){let t=this._bindings,i=e._cacheIndex,r=this._nActiveBindings++,a=t[r];e._cacheIndex=r,t[r]=e,a._cacheIndex=i,t[i]=a}_takeBackBinding(e){let t=this._bindings,i=e._cacheIndex,r=--this._nActiveBindings,a=t[r];e._cacheIndex=r,t[r]=e,a._cacheIndex=i,t[i]=a}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,i=e[t];return void 0===i&&((i=new oA(new Float32Array(2),new Float32Array(2),1,lX)).__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){let t=this._controlInterpolants,i=e.__cacheIndex,r=--this._nActiveControlInterpolants,a=t[r];e.__cacheIndex=r,t[r]=e,a.__cacheIndex=i,t[i]=a}clipAction(e,t,i){let r=t||this._root,a=r.uuid,s="string"==typeof e?oO.findByName(r,e):e,n=null!==s?s.uuid:e,o=this._actionsByClip[n],l=null;if(void 0===i&&(i=null!==s?s.blendMode:2500),void 0!==o){let e=o.actionByRoot[a];if(void 0!==e&&e.blendMode===i)return e;l=o.knownActions[0],null===s&&(s=l._clip)}if(null===s)return null;let h=new lW(this,s,t,i);return this._bindAction(h,l),this._addInactiveAction(h,n,a),h}existingAction(e,t){let i=t||this._root,r=i.uuid,a="string"==typeof e?oO.findByName(i,e):e,s=a?a.uuid:e,n=this._actionsByClip[s];return void 0!==n&&n.actionByRoot[r]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this}update(e){e*=this.timeScale;let t=this._actions,i=this._nActiveActions,r=this.time+=e,a=Math.sign(e),s=this._accuIndex^=1;for(let n=0;n!==i;++n)t[n]._update(r,e,a,s);let n=this._bindings,o=this._nActiveBindings;for(let e=0;e!==o;++e)n[e].apply(s);return this}setTime(e){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,i=e.uuid,r=this._actionsByClip,a=r[i];if(void 0!==a){let e=a.knownActions;for(let i=0,r=e.length;i!==r;++i){let r=e[i];this._deactivateAction(r);let a=r._cacheIndex,s=t[t.length-1];r._cacheIndex=null,r._byClipCacheIndex=null,s._cacheIndex=a,t[a]=s,t.pop(),this._removeInactiveBindingsForAction(r)}delete r[i]}}uncacheRoot(e){let t=e.uuid,i=this._actionsByClip;for(let e in i){let r=i[e].actionByRoot[t];void 0!==r&&(this._deactivateAction(r),this._removeInactiveAction(r))}let r=this._bindingsByRootAndName[t];if(void 0!==r)for(let e in r){let t=r[e];t.restoreOriginalState(),this._removeInactiveBinding(t)}}uncacheAction(e,t){let i=this.existingAction(e,t);null!==i&&(this._deactivateAction(i),this._removeInactiveAction(i))}}class lq{constructor(e){this.value=e}clone(){return new lq(void 0===this.value.clone?this.value:this.value.clone())}}let lY=0;class lZ extends b{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:lY++}),this.name="",this.usage=35044,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){let t=this.uniforms.indexOf(e);return -1!==t&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){return this.dispatchEvent({type:"dispose"}),this}copy(e){this.name=e.name,this.usage=e.usage;let t=e.uniforms;this.uniforms.length=0;for(let e=0,i=t.length;e<i;e++){let i=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0;e<i.length;e++)this.uniforms.push(i[e].clone())}return this}clone(){return new this.constructor().copy(this)}}class lK extends aY{constructor(e,t,i=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){let t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){let t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class lJ{constructor(e,t,i,r,a){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=i,this.elementSize=r,this.count=a,this.version=0}set needsUpdate(e){!0===e&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}class lQ{constructor(e,t,i=0,r=1/0){this.ray=new eW(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new e2,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return l0(e,this,i,t),i.sort(l$),i}intersectObjects(e,t=!0,i=[]){for(let r=0,a=e.length;r<a;r++)l0(e[r],this,i,t);return i.sort(l$),i}}function l$(e,t){return e.distance-t.distance}function l0(e,t,i,r){if(e.layers.test(t.layers)&&e.raycast(t,i),!0===r){let r=e.children;for(let e=0,a=r.length;e<a;e++)l0(r[e],t,i,!0)}}class l1{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),0===this.radius?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(C(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class l2{constructor(e=1,t=0,i=0){return this.radius=e,this.theta=t,this.y=i,this}set(e,t,i){return this.radius=e,this.theta=t,this.y=i,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+i*i),this.theta=Math.atan2(e,i),this.y=t,this}clone(){return new this.constructor().copy(this)}}let l3=new F;class l4{constructor(e=new F(1/0,1/0),t=new F(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=l3.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,l3).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}let l5=new ef,l6=new ef;class l8{constructor(e=new ef,t=new ef){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){l5.subVectors(e,this.start),l6.subVectors(this.end,this.start);let i=l6.dot(l6),r=l6.dot(l5)/i;return t&&(r=C(r,0,1)),r}closestPointToPoint(e,t,i){let r=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(r).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}let l9=new ef;class l7 extends tn{constructor(e,t){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";let i=new tJ,r=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let e=0,t=1;e<32;e++,t++){let i=e/32*Math.PI*2,a=t/32*Math.PI*2;r.push(Math.cos(i),Math.sin(i),1,Math.cos(a),Math.sin(a),1)}i.setAttribute("position",new tk(r,3));let a=new sX({fog:!1,toneMapped:!1});this.cone=new s0(i,a),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1);let e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),l9.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(l9),void 0!==this.color?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}let he=new ef,ht=new eX,hi=new eX;class hr extends s0{constructor(e){let t=function e(t){let i=[];!0===t.isBone&&i.push(t);for(let r=0;r<t.children.length;r++)i.push.apply(i,e(t.children[r]));return i}(e),i=new tJ,r=[],a=[],s=new tb(0,0,1),n=new tb(0,1,0);for(let e=0;e<t.length;e++){let i=t[e];i.parent&&i.parent.isBone&&(r.push(0,0,0),r.push(0,0,0),a.push(s.r,s.g,s.b),a.push(n.r,n.g,n.b))}i.setAttribute("position",new tk(r,3)),i.setAttribute("color",new tk(a,3)),super(i,new sX({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0})),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){let t=this.bones,i=this.geometry,r=i.getAttribute("position");hi.copy(this.root.matrixWorld).invert();for(let e=0,i=0;e<t.length;e++){let a=t[e];a.parent&&a.parent.isBone&&(ht.multiplyMatrices(hi,a.matrixWorld),he.setFromMatrixPosition(ht),r.setXYZ(i,he.x,he.y,he.z),ht.multiplyMatrices(hi,a.parent.matrixWorld),he.setFromMatrixPosition(ht),r.setXYZ(i+1,he.x,he.y,he.z),i+=2)}i.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose()}}class ha extends is{constructor(e,t,i){super(new ot(t,4,2),new tw({wireframe:!0,fog:!1,toneMapped:!1})),this.light=e,this.color=i,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),void 0!==this.color?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}let hs=new ef,hn=new tb,ho=new tb;class hl extends tn{constructor(e,t,i){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=i,this.type="HemisphereLightHelper";let r=new n9(t);r.rotateY(.5*Math.PI),this.material=new tw({wireframe:!0,fog:!1,toneMapped:!1}),void 0===this.color&&(this.material.vertexColors=!0);let a=new Float32Array(3*r.getAttribute("position").count);r.setAttribute("color",new tU(a,3)),this.add(new is(r,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){let e=this.children[0];if(void 0!==this.color)this.material.color.set(this.color);else{let t=e.geometry.getAttribute("color");hn.copy(this.light.color),ho.copy(this.light.groundColor);for(let e=0,i=t.count;e<i;e++){let r=e<i/2?hn:ho;t.setXYZ(e,r.r,r.g,r.b)}t.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),e.lookAt(hs.setFromMatrixPosition(this.light.matrixWorld).negate())}}class hh extends s0{constructor(e=10,t=10,i=4473924,r=8947848){i=new tb(i),r=new tb(r);let a=t/2,s=e/t,n=e/2,o=[],l=[];for(let e=0,h=0,c=-n;e<=t;e++,c+=s){o.push(-n,0,c,n,0,c),o.push(c,0,-n,c,0,n);let t=e===a?i:r;t.toArray(l,h),h+=3,t.toArray(l,h),h+=3,t.toArray(l,h),h+=3,t.toArray(l,h),h+=3}let h=new tJ;h.setAttribute("position",new tk(o,3)),h.setAttribute("color",new tk(l,3)),super(h,new sX({vertexColors:!0,toneMapped:!1})),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class hc extends s0{constructor(e=10,t=16,i=8,r=64,a=4473924,s=8947848){a=new tb(a),s=new tb(s);let n=[],o=[];if(t>1)for(let i=0;i<t;i++){let r=i/t*(2*Math.PI),l=Math.sin(r)*e,h=Math.cos(r)*e;n.push(0,0,0),n.push(l,0,h);let c=1&i?a:s;o.push(c.r,c.g,c.b),o.push(c.r,c.g,c.b)}for(let t=0;t<i;t++){let l=1&t?a:s,h=e-e/i*t;for(let e=0;e<r;e++){let t=e/r*(2*Math.PI),i=Math.sin(t)*h,a=Math.cos(t)*h;n.push(i,0,a),o.push(l.r,l.g,l.b),i=Math.sin(t=(e+1)/r*(2*Math.PI))*h,a=Math.cos(t)*h,n.push(i,0,a),o.push(l.r,l.g,l.b)}}let l=new tJ;l.setAttribute("position",new tk(n,3)),l.setAttribute("color",new tk(o,3)),super(l,new sX({vertexColors:!0,toneMapped:!1})),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}let hu=new ef,hd=new ef,hp=new ef;class hm extends tn{constructor(e,t,i){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=i,this.type="DirectionalLightHelper",void 0===t&&(t=1);let r=new tJ;r.setAttribute("position",new tk([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));let a=new sX({fog:!1,toneMapped:!1});this.lightPlane=new sJ(r,a),this.add(this.lightPlane),(r=new tJ).setAttribute("position",new tk([0,0,0,0,0,1],3)),this.targetLine=new sJ(r,a),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),hu.setFromMatrixPosition(this.light.matrixWorld),hd.setFromMatrixPosition(this.light.target.matrixWorld),hp.subVectors(hd,hu),this.lightPlane.lookAt(hd),void 0!==this.color?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(hd),this.targetLine.scale.z=hp.length()}}let hf=new ef,hg=new i_;class h_ extends s0{constructor(e){let t=new tJ,i=new sX({color:0xffffff,vertexColors:!0,toneMapped:!1}),r=[],a=[],s={};function n(e,t){o(e),o(t)}function o(e){r.push(0,0,0),a.push(0,0,0),void 0===s[e]&&(s[e]=[]),s[e].push(r.length/3-1)}n("n1","n2"),n("n2","n4"),n("n4","n3"),n("n3","n1"),n("f1","f2"),n("f2","f4"),n("f4","f3"),n("f3","f1"),n("n1","f1"),n("n2","f2"),n("n3","f3"),n("n4","f4"),n("p","n1"),n("p","n2"),n("p","n3"),n("p","n4"),n("u1","u2"),n("u2","u3"),n("u3","u1"),n("c","t"),n("p","c"),n("cn1","cn2"),n("cn3","cn4"),n("cf1","cf2"),n("cf3","cf4"),t.setAttribute("position",new tk(r,3)),t.setAttribute("color",new tk(a,3)),super(t,i),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=s,this.update();let l=new tb(0xffaa00),h=new tb(0xff0000),c=new tb(43775),u=new tb(0xffffff),d=new tb(3355443);this.setColors(l,h,c,u,d)}setColors(e,t,i,r,a){let s=this.geometry.getAttribute("color");s.setXYZ(0,e.r,e.g,e.b),s.setXYZ(1,e.r,e.g,e.b),s.setXYZ(2,e.r,e.g,e.b),s.setXYZ(3,e.r,e.g,e.b),s.setXYZ(4,e.r,e.g,e.b),s.setXYZ(5,e.r,e.g,e.b),s.setXYZ(6,e.r,e.g,e.b),s.setXYZ(7,e.r,e.g,e.b),s.setXYZ(8,e.r,e.g,e.b),s.setXYZ(9,e.r,e.g,e.b),s.setXYZ(10,e.r,e.g,e.b),s.setXYZ(11,e.r,e.g,e.b),s.setXYZ(12,e.r,e.g,e.b),s.setXYZ(13,e.r,e.g,e.b),s.setXYZ(14,e.r,e.g,e.b),s.setXYZ(15,e.r,e.g,e.b),s.setXYZ(16,e.r,e.g,e.b),s.setXYZ(17,e.r,e.g,e.b),s.setXYZ(18,e.r,e.g,e.b),s.setXYZ(19,e.r,e.g,e.b),s.setXYZ(20,e.r,e.g,e.b),s.setXYZ(21,e.r,e.g,e.b),s.setXYZ(22,e.r,e.g,e.b),s.setXYZ(23,e.r,e.g,e.b),s.setXYZ(24,t.r,t.g,t.b),s.setXYZ(25,t.r,t.g,t.b),s.setXYZ(26,t.r,t.g,t.b),s.setXYZ(27,t.r,t.g,t.b),s.setXYZ(28,t.r,t.g,t.b),s.setXYZ(29,t.r,t.g,t.b),s.setXYZ(30,t.r,t.g,t.b),s.setXYZ(31,t.r,t.g,t.b),s.setXYZ(32,i.r,i.g,i.b),s.setXYZ(33,i.r,i.g,i.b),s.setXYZ(34,i.r,i.g,i.b),s.setXYZ(35,i.r,i.g,i.b),s.setXYZ(36,i.r,i.g,i.b),s.setXYZ(37,i.r,i.g,i.b),s.setXYZ(38,r.r,r.g,r.b),s.setXYZ(39,r.r,r.g,r.b),s.setXYZ(40,a.r,a.g,a.b),s.setXYZ(41,a.r,a.g,a.b),s.setXYZ(42,a.r,a.g,a.b),s.setXYZ(43,a.r,a.g,a.b),s.setXYZ(44,a.r,a.g,a.b),s.setXYZ(45,a.r,a.g,a.b),s.setXYZ(46,a.r,a.g,a.b),s.setXYZ(47,a.r,a.g,a.b),s.setXYZ(48,a.r,a.g,a.b),s.setXYZ(49,a.r,a.g,a.b),s.needsUpdate=!0}update(){let e=this.geometry,t=this.pointMap;hg.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),hv("c",t,e,hg,0,0,-1),hv("t",t,e,hg,0,0,1),hv("n1",t,e,hg,-1,-1,-1),hv("n2",t,e,hg,1,-1,-1),hv("n3",t,e,hg,-1,1,-1),hv("n4",t,e,hg,1,1,-1),hv("f1",t,e,hg,-1,-1,1),hv("f2",t,e,hg,1,-1,1),hv("f3",t,e,hg,-1,1,1),hv("f4",t,e,hg,1,1,1),hv("u1",t,e,hg,.7,1.1,-1),hv("u2",t,e,hg,-.7,1.1,-1),hv("u3",t,e,hg,0,2,-1),hv("cf1",t,e,hg,-1,0,1),hv("cf2",t,e,hg,1,0,1),hv("cf3",t,e,hg,0,-1,1),hv("cf4",t,e,hg,0,1,1),hv("cn1",t,e,hg,-1,0,-1),hv("cn2",t,e,hg,1,0,-1),hv("cn3",t,e,hg,0,-1,-1),hv("cn4",t,e,hg,0,1,-1),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function hv(e,t,i,r,a,s,n){hf.set(a,s,n).unproject(r);let o=t[e];if(void 0!==o){let e=i.getAttribute("position");for(let t=0,i=o.length;t<i;t++)e.setXYZ(o[t],hf.x,hf.y,hf.z)}}let hx=new ev;class hy extends s0{constructor(e,t=0xffff00){let i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),r=new Float32Array(24),a=new tJ;a.setIndex(new tU(i,1)),a.setAttribute("position",new tU(r,3)),super(a,new sX({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(e){if(void 0!==e&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),void 0!==this.object&&hx.setFromObject(this.object),hx.isEmpty())return;let t=hx.min,i=hx.max,r=this.geometry.attributes.position,a=r.array;a[0]=i.x,a[1]=i.y,a[2]=i.z,a[3]=t.x,a[4]=i.y,a[5]=i.z,a[6]=t.x,a[7]=t.y,a[8]=i.z,a[9]=i.x,a[10]=t.y,a[11]=i.z,a[12]=i.x,a[13]=i.y,a[14]=t.z,a[15]=t.x,a[16]=i.y,a[17]=t.z,a[18]=t.x,a[19]=t.y,a[20]=t.z,a[21]=i.x,a[22]=t.y,a[23]=t.z,r.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class hM extends s0{constructor(e,t=0xffff00){let i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),r=new tJ;r.setIndex(new tU(i,1)),r.setAttribute("position",new tk([1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],3)),super(r,new sX({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){let t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}}class hS extends sJ{constructor(e,t=1,i=0xffff00){let r=new tJ;r.setAttribute("position",new tk([1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],3)),r.computeBoundingSphere(),super(r,new sX({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;let a=new tJ;a.setAttribute("position",new tk([1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],3)),a.computeBoundingSphere(),this.add(new is(a,new tw({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}let hb=new ef;class hT extends tn{constructor(e=new ef(0,0,1),t=new ef(0,0,0),i=1,r=0xffff00,a=.2*i,s=.2*a){super(),this.type="ArrowHelper",void 0===n&&((n=new tJ).setAttribute("position",new tk([0,0,0,0,1,0],3)),(o=new nL(0,.5,1,5,1)).translate(0,-.5,0)),this.position.copy(t),this.line=new sJ(n,new sX({color:r,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new is(o,new tw({color:r,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(i,a,s)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{hb.set(e.z,0,-e.x).normalize();let t=Math.acos(e.y);this.quaternion.setFromAxisAngle(hb,t)}}setLength(e,t=.2*e,i=.2*t){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(i,t,i),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class hE extends s0{constructor(e=1){let t=new tJ;t.setAttribute("position",new tk([0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],3)),t.setAttribute("color",new tk([1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],3)),super(t,new sX({vertexColors:!0,toneMapped:!1})),this.type="AxesHelper"}setColors(e,t,i){let r=new tb,a=this.geometry.attributes.color.array;return r.set(e),r.toArray(a,0),r.toArray(a,3),r.set(t),r.toArray(a,6),r.toArray(a,9),r.set(i),r.toArray(a,12),r.toArray(a,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class hA{constructor(){this.type="ShapePath",this.color=new tb,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new nA,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,i,r){return this.currentPath.quadraticCurveTo(e,t,i,r),this}bezierCurveTo(e,t,i,r,a,s){return this.currentPath.bezierCurveTo(e,t,i,r,a,s),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){let t,i,r,a,s=n2.isClockWise,n=this.subPaths;if(0===n.length)return[];let o=[];if(1===n.length)return i=n[0],(r=new nz).curves=i.curves,o.push(r),o;let l=!s(n[0].getPoints());l=e?!l:l;let h=[],c=[],u=[],d=0,p;c[0]=void 0,u[d]=[];for(let r=0,a=n.length;r<a;r++)t=s(p=(i=n[r]).getPoints()),(t=e?!t:t)?(!l&&c[d]&&d++,c[d]={s:new nz,p:p},c[d].s.curves=i.curves,l&&d++,u[d]=[]):u[d].push({h:i,p:p[0]});if(!c[0])return function(e){let t=[];for(let i=0,r=e.length;i<r;i++){let r=e[i],a=new nz;a.curves=r.curves,t.push(a)}return t}(n);if(c.length>1){let e=!1,t=0;for(let e=0,t=c.length;e<t;e++)h[e]=[];for(let i=0,r=c.length;i<r;i++){let r=u[i];for(let a=0;a<r.length;a++){let s=r[a],n=!0;for(let r=0;r<c.length;r++)(function(e,t){let i=t.length,r=!1;for(let a=i-1,s=0;s<i;a=s++){let i=t[a],n=t[s],o=n.x-i.x,l=n.y-i.y;if(Math.abs(l)>Number.EPSILON){if(l<0&&(i=t[s],o=-o,n=t[a],l=-l),e.y<i.y||e.y>n.y)continue;if(e.y===i.y){if(e.x===i.x)return!0}else{let t=l*(e.x-i.x)-o*(e.y-i.y);if(0===t)return!0;if(t<0)continue;r=!r}}else{if(e.y!==i.y)continue;if(n.x<=e.x&&e.x<=i.x||i.x<=e.x&&e.x<=n.x)return!0}}return r})(s.p,c[r].p)&&(i!==r&&t++,n?(n=!1,h[r].push(s)):e=!0);n&&h[i].push(s)}}t>0&&!1===e&&(u=h)}for(let e=0,t=c.length;e<t;e++){r=c[e].s,o.push(r),a=u[e];for(let e=0,t=a.length;e<t;e++)r.holes.push(a[e].h)}return o}}"u">typeof __THREE_DEVTOOLS__&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}})),window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160";let hw=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:c,AddEquation:100,AddOperation:2,AdditiveAnimationBlendMode:2501,AdditiveBlending:h,AgXToneMapping:6,AlphaFormat:1021,AlwaysCompare:519,AlwaysDepth:1,AlwaysStencilFunc:519,AmbientLight:lt,AnimationAction:lW,AnimationClip:oO,AnimationLoader:oW,AnimationMixer:lj,AnimationObjectGroup:lV,AnimationUtils:{convertArray:ox,isTypedArray:oy,getKeyframeOrder:oM,sortedArray:oS,flattenJSON:ob,subclip:function(e,t,i,r,a=30){let s=e.clone();s.name=t;let n=[];for(let e=0;e<s.tracks.length;++e){let t=s.tracks[e],o=t.getValueSize(),l=[],h=[];for(let e=0;e<t.times.length;++e){let s=t.times[e]*a;if(!(s<i||s>=r)){l.push(t.times[e]);for(let i=0;i<o;++i)h.push(t.values[e*o+i])}}0!==l.length&&(t.times=ox(l,t.times.constructor),t.values=ox(h,t.values.constructor),n.push(t))}s.tracks=n;let o=1/0;for(let e=0;e<s.tracks.length;++e)o>s.tracks[e].times[0]&&(o=s.tracks[e].times[0]);for(let e=0;e<s.tracks.length;++e)s.tracks[e].shift(-1*o);return s.resetDuration(),s},makeClipAdditive:function(e,t=0,i=e,r=30){r<=0&&(r=30);let a=i.tracks.length,s=t/r;for(let t=0;t<a;++t){let r,a=i.tracks[t],n=a.ValueTypeName;if("bool"===n||"string"===n)continue;let o=e.tracks.find(function(e){return e.name===a.name&&e.ValueTypeName===n});if(void 0===o)continue;let l=0,h=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(l=h/3);let c=0,u=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(c=u/3);let d=a.times.length-1;if(s<=a.times[0]){let e=l,t=h-l;r=a.values.slice(e,t)}else if(s>=a.times[d]){let e=d*h+l,t=e+h-l;r=a.values.slice(e,t)}else{let e=a.createInterpolant(),t=l,i=h-l;e.evaluate(s),r=e.resultBuffer.slice(t,i)}"quaternion"===n&&new em().fromArray(r).normalize().conjugate().toArray(r);let p=o.times.length;for(let e=0;e<p;++e){let t=e*u+c;if("quaternion"===n)em.multiplyQuaternionsFlat(o.values,t,r,0,o.values,t);else{let e=u-2*c;for(let i=0;i<e;++i)o.values[t+i]-=r[i]}}}return e.blendMode=2501,e}},ArcCurve:no,ArrayCamera:aO,ArrowHelper:hT,AttachedBindMode:u,Audio:lw,AudioAnalyser:lU,AudioContext:lm,AudioListener:lA,AudioLoader:lf,AxesHelper:hE,BackSide:1,BasicDepthPacking:3200,BasicShadowMap:0,BatchedMesh:sW,Bone:sf,BooleanKeyframeTrack:oC,Box2:l4,Box3:ev,Box3Helper:hM,BoxGeometry:il,BoxHelper:hy,BufferAttribute:tU,BufferGeometry:tJ,BufferGeometryLoader:ll,ByteType:1010,Cache:oF,Camera:i_,CameraHelper:h_,CanvasTexture:na,CapsuleGeometry:nR,CatmullRomCurve3:np,CineonToneMapping:3,CircleGeometry:nC,ClampToEdgeWrapping:1001,Clock:ly,Color:tb,ColorKeyframeTrack:oL,ColorManagement:J,CompressedArrayTexture:ni,CompressedCubeTexture:nr,CompressedTexture:nt,CompressedTextureLoader:oX,ConeGeometry:nP,ConstantAlphaFactor:213,ConstantColorFactor:211,CubeCamera:ix,CubeReflectionMapping:301,CubeRefractionMapping:302,CubeTexture:iy,CubeTextureLoader:oq,CubeUVReflectionMapping:306,CubicBezierCurve:n_,CubicBezierCurve3:nv,CubicInterpolant:oE,CullFaceBack:1,CullFaceFront:2,CullFaceFrontBack:3,CullFaceNone:0,Curve:ns,CurvePath:nE,CustomBlending:5,CustomToneMapping:5,CylinderGeometry:nL,Cylindrical:l2,Data3DTexture:eu,DataArrayTexture:eh,DataTexture:sg,DataTextureLoader:oY,DataUtils:{toHalfFloat:tC,fromHalfFloat:tL},DecrementStencilOp:7683,DecrementWrapStencilOp:34056,DefaultLoadingManager:oz,DepthFormat:1026,DepthStencilFormat:1027,DepthTexture:rr,DetachedBindMode:d,DirectionalLight:le,DirectionalLightHelper:hm,DiscreteInterpolant:ow,DisplayP3ColorSpace:_,DodecahedronGeometry:nU,DoubleSide:l,DstAlphaFactor:206,DstColorFactor:208,DynamicCopyUsage:35050,DynamicDrawUsage:35048,DynamicReadUsage:35049,EdgesGeometry:nB,EllipseCurve:nn,EqualCompare:514,EqualDepth:4,EqualStencilFunc:514,EquirectangularReflectionMapping:303,EquirectangularRefractionMapping:304,Euler:e1,EventDispatcher:b,ExtrudeGeometry:n5,FileLoader:oV,Float16BufferAttribute:tG,Float32BufferAttribute:tk,Float64BufferAttribute:tV,FloatType:1015,Fog:aj,FogExp2:aX,FramebufferTexture:ne,FrontSide:0,Frustum:iR,GLBufferAttribute:lJ,GLSL1:"100",GLSL3:S,GreaterCompare:516,GreaterDepth:6,GreaterEqualCompare:518,GreaterEqualDepth:5,GreaterEqualStencilFunc:518,GreaterStencilFunc:516,GridHelper:hh,Group:aF,HalfFloatType:1016,HemisphereLight:oJ,HemisphereLightHelper:hl,IcosahedronGeometry:n8,ImageBitmapLoader:lp,ImageLoader:oj,ImageUtils:ee,IncrementStencilOp:7682,IncrementWrapStencilOp:34055,InstancedBufferAttribute:sy,InstancedBufferGeometry:lo,InstancedInterleavedBuffer:lK,InstancedMesh:sR,Int16BufferAttribute:tF,Int32BufferAttribute:tz,Int8BufferAttribute:tN,IntType:1013,InterleavedBuffer:aY,InterleavedBufferAttribute:aK,Interpolant:oT,InterpolateDiscrete:2300,InterpolateLinear:2301,InterpolateSmooth:2302,InvertStencilOp:5386,KeepStencilOp:7680,KeyframeTrack:oR,LOD:sa,LatheGeometry:nw,Layers:e2,LessCompare:513,LessDepth:2,LessEqualCompare:515,LessEqualDepth:3,LessEqualStencilFunc:515,LessStencilFunc:513,Light:oK,LightProbe:la,Line:sJ,Line3:l8,LineBasicMaterial:sX,LineCurve:nx,LineCurve3:ny,LineDashedMaterial:ov,LineLoop:s1,LineSegments:s0,LinearDisplayP3ColorSpace:v,LinearEncoding:3e3,LinearFilter:p,LinearInterpolant:oA,LinearMipMapLinearFilter:1008,LinearMipMapNearestFilter:1007,LinearMipmapLinearFilter:m,LinearMipmapNearestFilter:1007,LinearSRGBColorSpace:g,LinearToneMapping:1,LinearTransfer:x,Loader:oH,LoaderUtils:ln,LoadingManager:oB,LoopOnce:2200,LoopPingPong:2202,LoopRepeat:2201,LuminanceAlphaFormat:1025,LuminanceFormat:1024,MOUSE:{LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Material:tA,MaterialLoader:ls,MathUtils:O,Matrix3:B,Matrix4:eX,MaxEquation:104,Mesh:is,MeshBasicMaterial:tw,MeshDepthMaterial:aR,MeshDistanceMaterial:aC,MeshLambertMaterial:og,MeshMatcapMaterial:o_,MeshNormalMaterial:of,MeshPhongMaterial:op,MeshPhysicalMaterial:od,MeshStandardMaterial:ou,MeshToonMaterial:om,MinEquation:103,MirroredRepeatWrapping:1002,MixOperation:1,MultiplyBlending:4,MultiplyOperation:0,NearestFilter:1003,NearestMipMapLinearFilter:1005,NearestMipMapNearestFilter:1004,NearestMipmapLinearFilter:1005,NearestMipmapNearestFilter:1004,NeverCompare:512,NeverDepth:0,NeverStencilFunc:512,NoBlending:0,NoColorSpace:"",NoToneMapping:0,NormalAnimationBlendMode:2500,NormalBlending:1,NotEqualCompare:517,NotEqualDepth:7,NotEqualStencilFunc:517,NumberKeyframeTrack:oP,Object3D:tn,ObjectLoader:lh,ObjectSpaceNormalMap:1,OctahedronGeometry:n9,OneFactor:201,OneMinusConstantAlphaFactor:214,OneMinusConstantColorFactor:212,OneMinusDstAlphaFactor:207,OneMinusDstColorFactor:209,OneMinusSrcAlphaFactor:205,OneMinusSrcColorFactor:203,OrthographicCamera:ik,P3Primaries:"p3",PCFShadowMap:1,PCFSoftShadowMap:2,PMREMGenerator:iQ,Path:nA,PerspectiveCamera:iv,Plane:iE,PlaneGeometry:iP,PlaneHelper:hS,PointLight:o9,PointLightHelper:ha,Points:s8,PointsMaterial:s2,PolarGridHelper:hc,PolyhedronGeometry:nI,PositionalAudio:lI,PropertyBinding:lk,PropertyMixer:lN,QuadraticBezierCurve:nM,QuadraticBezierCurve3:nS,Quaternion:em,QuaternionKeyframeTrack:oU,QuaternionLinearInterpolant:oI,RED_GREEN_RGTC2_Format:36285,RED_RGTC1_Format:36283,REVISION:"160",RGBADepthPacking:3201,RGBAFormat:1023,RGBAIntegerFormat:1033,RGBA_ASTC_10x10_Format:37819,RGBA_ASTC_10x5_Format:37816,RGBA_ASTC_10x6_Format:37817,RGBA_ASTC_10x8_Format:37818,RGBA_ASTC_12x10_Format:37820,RGBA_ASTC_12x12_Format:37821,RGBA_ASTC_4x4_Format:37808,RGBA_ASTC_5x4_Format:37809,RGBA_ASTC_5x5_Format:37810,RGBA_ASTC_6x5_Format:37811,RGBA_ASTC_6x6_Format:37812,RGBA_ASTC_8x5_Format:37813,RGBA_ASTC_8x6_Format:37814,RGBA_ASTC_8x8_Format:37815,RGBA_BPTC_Format:36492,RGBA_ETC2_EAC_Format:37496,RGBA_PVRTC_2BPPV1_Format:35843,RGBA_PVRTC_4BPPV1_Format:35842,RGBA_S3TC_DXT1_Format:33777,RGBA_S3TC_DXT3_Format:33778,RGBA_S3TC_DXT5_Format:33779,RGB_BPTC_SIGNED_Format:36494,RGB_BPTC_UNSIGNED_Format:36495,RGB_ETC1_Format:36196,RGB_ETC2_Format:37492,RGB_PVRTC_2BPPV1_Format:35841,RGB_PVRTC_4BPPV1_Format:35840,RGB_S3TC_DXT1_Format:33776,RGFormat:1030,RGIntegerFormat:1031,RawShaderMaterial:oc,Ray:eW,Raycaster:lQ,Rec709Primaries:M,RectAreaLight:li,RedFormat:1028,RedIntegerFormat:1029,ReinhardToneMapping:2,RenderTarget:eo,RepeatWrapping:1e3,ReplaceStencilOp:7681,ReverseSubtractEquation:102,RingGeometry:n7,SIGNED_RED_GREEN_RGTC2_Format:36286,SIGNED_RED_RGTC1_Format:36284,SRGBColorSpace:f,SRGBTransfer:y,Scene:aq,ShaderChunk:iI,ShaderLib:iN,ShaderMaterial:ig,ShadowMaterial:oh,Shape:nz,ShapeGeometry:oe,ShapePath:hA,ShapeUtils:n2,ShortType:1011,Skeleton:sx,SkeletonHelper:hr,SkinnedMesh:sm,Source:ei,Sphere:eO,SphereGeometry:ot,Spherical:l1,SphericalHarmonics3:lr,SplineCurve:nb,SpotLight:o3,SpotLightHelper:l7,Sprite:se,SpriteMaterial:aJ,SrcAlphaFactor:204,SrcAlphaSaturateFactor:210,SrcColorFactor:202,StaticCopyUsage:35046,StaticDrawUsage:35044,StaticReadUsage:35045,StereoCamera:lx,StreamCopyUsage:35042,StreamDrawUsage:35040,StreamReadUsage:35041,StringKeyframeTrack:oN,SubtractEquation:101,SubtractiveBlending:3,TOUCH:{ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},TangentSpaceNormalMap:0,TetrahedronGeometry:oi,Texture:es,TextureLoader:oZ,TorusGeometry:or,TorusKnotGeometry:oa,Triangle:tv,TriangleFanDrawMode:2,TriangleStripDrawMode:1,TrianglesDrawMode:0,TubeGeometry:os,TwoPassDoubleSide:2,UVMapping:300,Uint16BufferAttribute:tB,Uint32BufferAttribute:tH,Uint8BufferAttribute:tD,Uint8ClampedBufferAttribute:tO,Uniform:lq,UniformsGroup:lZ,UniformsLib:iU,UniformsUtils:id,UnsignedByteType:1009,UnsignedInt248Type:1020,UnsignedIntType:1014,UnsignedShort4444Type:1017,UnsignedShort5551Type:1018,UnsignedShortType:1012,VSMShadowMap:3,Vector2:F,Vector3:ef,Vector4:en,VectorKeyframeTrack:oD,VideoTexture:s7,WebGL1Renderer:aW,WebGL3DRenderTarget:ed,WebGLArrayRenderTarget:ec,WebGLCoordinateSystem:2e3,WebGLCubeRenderTarget:iM,WebGLMultipleRenderTargets:ep,WebGLRenderTarget:el,WebGLRenderer:aV,WebGLUtils:aD,WebGPUCoordinateSystem:2001,WireframeGeometry:on,WrapAroundEnding:2402,ZeroCurvatureEnding:2400,ZeroFactor:200,ZeroSlopeEnding:2401,ZeroStencilOp:0,_SRGBAFormat:1035,createCanvasElement:W,sRGBEncoding:3001},Symbol.toStringTag,{value:"Module"}));function hR(e,t){if(0===t)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),e;if(2!==t&&1!==t)return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),e;{let i=e.getIndex();if(null===i){let t=[],r=e.getAttribute("position");if(void 0===r)return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),e;for(let e=0;e<r.count;e++)t.push(e);e.setIndex(t),i=e.getIndex()}let r=i.count-2,a=[];if(2===t)for(let e=1;e<=r;e++)a.push(i.getX(0)),a.push(i.getX(e)),a.push(i.getX(e+1));else for(let e=0;e<r;e++)e%2==0?(a.push(i.getX(e)),a.push(i.getX(e+1)),a.push(i.getX(e+2))):(a.push(i.getX(e+2)),a.push(i.getX(e+1)),a.push(i.getX(e)));a.length/3!==r&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let s=e.clone();return s.setIndex(a),s.clearGroups(),s}}class hC extends oH{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new hD(e)}),this.register(function(e){return new hW(e)}),this.register(function(e){return new hX(e)}),this.register(function(e){return new hj(e)}),this.register(function(e){return new hF(e)}),this.register(function(e){return new hB(e)}),this.register(function(e){return new hz(e)}),this.register(function(e){return new hH(e)}),this.register(function(e){return new hN(e)}),this.register(function(e){return new hG(e)}),this.register(function(e){return new hO(e)}),this.register(function(e){return new hV(e)}),this.register(function(e){return new hk(e)}),this.register(function(e){return new hI(e)}),this.register(function(e){return new hq(e)}),this.register(function(e){return new hY(e)})}load(e,t,i,r){let a,s=this;if(""!==this.resourcePath)a=this.resourcePath;else if(""!==this.path){let t=ln.extractUrlBase(e);a=ln.resolveURL(t,this.path)}else a=ln.extractUrlBase(e);this.manager.itemStart(e);let n=function(t){r?r(t):console.error(t),s.manager.itemError(e),s.manager.itemEnd(e)},o=new oV(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(i){try{s.parse(i,a,function(i){t(i),s.manager.itemEnd(e)},n)}catch(e){n(e)}},i,n)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return -1===this.pluginCallbacks.indexOf(e)&&this.pluginCallbacks.push(e),this}unregister(e){return -1!==this.pluginCallbacks.indexOf(e)&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,r){let a,s={},n={},o=new TextDecoder;if("string"==typeof e)a=JSON.parse(e);else if(e instanceof ArrayBuffer)if(o.decode(new Uint8Array(e,0,4))===hZ){try{s[hP.KHR_BINARY_GLTF]=new hK(e)}catch(e){r&&r(e);return}a=JSON.parse(s[hP.KHR_BINARY_GLTF].content)}else a=JSON.parse(o.decode(e));else a=e;if(void 0===a.asset||a.asset.version[0]<2){r&&r(Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new cn(a,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let e=0;e<this.pluginCallbacks.length;e++){let t=this.pluginCallbacks[e](l);t.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),n[t.name]=t,s[t.name]=!0}if(a.extensionsUsed)for(let e=0;e<a.extensionsUsed.length;++e){let t=a.extensionsUsed[e],i=a.extensionsRequired||[];switch(t){case hP.KHR_MATERIALS_UNLIT:s[t]=new hU;break;case hP.KHR_DRACO_MESH_COMPRESSION:s[t]=new hJ(a,this.dracoLoader);break;case hP.KHR_TEXTURE_TRANSFORM:s[t]=new hQ;break;case hP.KHR_MESH_QUANTIZATION:s[t]=new h$;break;default:i.indexOf(t)>=0&&void 0===n[t]&&console.warn('THREE.GLTFLoader: Unknown extension "'+t+'".')}}l.setExtensions(s),l.setPlugins(n),l.parse(i,r)}parseAsync(e,t){let i=this;return new Promise(function(r,a){i.parse(e,t,r,a)})}}function hL(){let e={};return{get:function(t){return e[t]},add:function(t,i){e[t]=i},remove:function(t){delete e[t]},removeAll:function(){e={}}}}let hP={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class hI{constructor(e){this.parser=e,this.name=hP.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let i=0,r=t.length;i<r;i++){let r=t[i];r.extensions&&r.extensions[this.name]&&void 0!==r.extensions[this.name].light&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t,i=this.parser,r="light:"+e,a=i.cache.get(r);if(a)return a;let s=i.json,n=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e],o=new tb(0xffffff);void 0!==n.color&&o.setRGB(n.color[0],n.color[1],n.color[2],g);let l=void 0!==n.range?n.range:0;switch(n.type){case"directional":(t=new le(o)).target.position.set(0,0,-1),t.add(t.target);break;case"point":(t=new o9(o)).distance=l;break;case"spot":(t=new o3(o)).distance=l,n.spot=n.spot||{},n.spot.innerConeAngle=void 0!==n.spot.innerConeAngle?n.spot.innerConeAngle:0,n.spot.outerConeAngle=void 0!==n.spot.outerConeAngle?n.spot.outerConeAngle:Math.PI/4,t.angle=n.spot.outerConeAngle,t.penumbra=1-n.spot.innerConeAngle/n.spot.outerConeAngle,t.target.position.set(0,0,-1),t.add(t.target);break;default:throw Error("THREE.GLTFLoader: Unexpected light type: "+n.type)}return t.position.set(0,0,0),t.decay=2,ci(t,n),void 0!==n.intensity&&(t.intensity=n.intensity),t.name=i.createUniqueName(n.name||"light_"+e),a=Promise.resolve(t),i.cache.add(r,a),a}getDependency(e,t){if("light"===e)return this._loadLight(t)}createNodeAttachment(e){let t=this,i=this.parser,r=i.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return void 0===a?null:this._loadLight(a).then(function(e){return i._getNodeRef(t.cache,a,e)})}}class hU{constructor(){this.name=hP.KHR_MATERIALS_UNLIT}getMaterialType(){return tw}extendParams(e,t,i){let r=[];e.color=new tb(1,1,1),e.opacity=1;let a=t.pbrMetallicRoughness;if(a){if(Array.isArray(a.baseColorFactor)){let t=a.baseColorFactor;e.color.setRGB(t[0],t[1],t[2],g),e.opacity=t[3]}void 0!==a.baseColorTexture&&r.push(i.assignTexture(e,"map",a.baseColorTexture,f))}return Promise.all(r)}}class hN{constructor(e){this.parser=e,this.name=hP.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name].emissiveStrength;return void 0!==r&&(t.emissiveIntensity=r),Promise.resolve()}}class hD{constructor(e){this.parser=e,this.name=hP.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let t=this.parser.json.materials[e];return t.extensions&&t.extensions[this.name]?od:null}extendMaterialParams(e,t){let i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let a=[],s=r.extensions[this.name];if(void 0!==s.clearcoatFactor&&(t.clearcoat=s.clearcoatFactor),void 0!==s.clearcoatTexture&&a.push(i.assignTexture(t,"clearcoatMap",s.clearcoatTexture)),void 0!==s.clearcoatRoughnessFactor&&(t.clearcoatRoughness=s.clearcoatRoughnessFactor),void 0!==s.clearcoatRoughnessTexture&&a.push(i.assignTexture(t,"clearcoatRoughnessMap",s.clearcoatRoughnessTexture)),void 0!==s.clearcoatNormalTexture&&(a.push(i.assignTexture(t,"clearcoatNormalMap",s.clearcoatNormalTexture)),void 0!==s.clearcoatNormalTexture.scale)){let e=s.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new F(e,e)}return Promise.all(a)}}class hO{constructor(e){this.parser=e,this.name=hP.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let t=this.parser.json.materials[e];return t.extensions&&t.extensions[this.name]?od:null}extendMaterialParams(e,t){let i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let a=[],s=r.extensions[this.name];return void 0!==s.iridescenceFactor&&(t.iridescence=s.iridescenceFactor),void 0!==s.iridescenceTexture&&a.push(i.assignTexture(t,"iridescenceMap",s.iridescenceTexture)),void 0!==s.iridescenceIor&&(t.iridescenceIOR=s.iridescenceIor),void 0===t.iridescenceThicknessRange&&(t.iridescenceThicknessRange=[100,400]),void 0!==s.iridescenceThicknessMinimum&&(t.iridescenceThicknessRange[0]=s.iridescenceThicknessMinimum),void 0!==s.iridescenceThicknessMaximum&&(t.iridescenceThicknessRange[1]=s.iridescenceThicknessMaximum),void 0!==s.iridescenceThicknessTexture&&a.push(i.assignTexture(t,"iridescenceThicknessMap",s.iridescenceThicknessTexture)),Promise.all(a)}}class hF{constructor(e){this.parser=e,this.name=hP.KHR_MATERIALS_SHEEN}getMaterialType(e){let t=this.parser.json.materials[e];return t.extensions&&t.extensions[this.name]?od:null}extendMaterialParams(e,t){let i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let a=[];t.sheenColor=new tb(0,0,0),t.sheenRoughness=0,t.sheen=1;let s=r.extensions[this.name];if(void 0!==s.sheenColorFactor){let e=s.sheenColorFactor;t.sheenColor.setRGB(e[0],e[1],e[2],g)}return void 0!==s.sheenRoughnessFactor&&(t.sheenRoughness=s.sheenRoughnessFactor),void 0!==s.sheenColorTexture&&a.push(i.assignTexture(t,"sheenColorMap",s.sheenColorTexture,f)),void 0!==s.sheenRoughnessTexture&&a.push(i.assignTexture(t,"sheenRoughnessMap",s.sheenRoughnessTexture)),Promise.all(a)}}class hB{constructor(e){this.parser=e,this.name=hP.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let t=this.parser.json.materials[e];return t.extensions&&t.extensions[this.name]?od:null}extendMaterialParams(e,t){let i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let a=[],s=r.extensions[this.name];return void 0!==s.transmissionFactor&&(t.transmission=s.transmissionFactor),void 0!==s.transmissionTexture&&a.push(i.assignTexture(t,"transmissionMap",s.transmissionTexture)),Promise.all(a)}}class hz{constructor(e){this.parser=e,this.name=hP.KHR_MATERIALS_VOLUME}getMaterialType(e){let t=this.parser.json.materials[e];return t.extensions&&t.extensions[this.name]?od:null}extendMaterialParams(e,t){let i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let a=[],s=r.extensions[this.name];t.thickness=void 0!==s.thicknessFactor?s.thicknessFactor:0,void 0!==s.thicknessTexture&&a.push(i.assignTexture(t,"thicknessMap",s.thicknessTexture)),t.attenuationDistance=s.attenuationDistance||1/0;let n=s.attenuationColor||[1,1,1];return t.attenuationColor=new tb().setRGB(n[0],n[1],n[2],g),Promise.all(a)}}class hH{constructor(e){this.parser=e,this.name=hP.KHR_MATERIALS_IOR}getMaterialType(e){let t=this.parser.json.materials[e];return t.extensions&&t.extensions[this.name]?od:null}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.ior=void 0!==r.ior?r.ior:1.5,Promise.resolve()}}class hG{constructor(e){this.parser=e,this.name=hP.KHR_MATERIALS_SPECULAR}getMaterialType(e){let t=this.parser.json.materials[e];return t.extensions&&t.extensions[this.name]?od:null}extendMaterialParams(e,t){let i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let a=[],s=r.extensions[this.name];t.specularIntensity=void 0!==s.specularFactor?s.specularFactor:1,void 0!==s.specularTexture&&a.push(i.assignTexture(t,"specularIntensityMap",s.specularTexture));let n=s.specularColorFactor||[1,1,1];return t.specularColor=new tb().setRGB(n[0],n[1],n[2],g),void 0!==s.specularColorTexture&&a.push(i.assignTexture(t,"specularColorMap",s.specularColorTexture,f)),Promise.all(a)}}class hk{constructor(e){this.parser=e,this.name=hP.EXT_MATERIALS_BUMP}getMaterialType(e){let t=this.parser.json.materials[e];return t.extensions&&t.extensions[this.name]?od:null}extendMaterialParams(e,t){let i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let a=[],s=r.extensions[this.name];return t.bumpScale=void 0!==s.bumpFactor?s.bumpFactor:1,void 0!==s.bumpTexture&&a.push(i.assignTexture(t,"bumpMap",s.bumpTexture)),Promise.all(a)}}class hV{constructor(e){this.parser=e,this.name=hP.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let t=this.parser.json.materials[e];return t.extensions&&t.extensions[this.name]?od:null}extendMaterialParams(e,t){let i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let a=[],s=r.extensions[this.name];return void 0!==s.anisotropyStrength&&(t.anisotropy=s.anisotropyStrength),void 0!==s.anisotropyRotation&&(t.anisotropyRotation=s.anisotropyRotation),void 0!==s.anisotropyTexture&&a.push(i.assignTexture(t,"anisotropyMap",s.anisotropyTexture)),Promise.all(a)}}class hW{constructor(e){this.parser=e,this.name=hP.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,i=t.json,r=i.textures[e];if(!r.extensions||!r.extensions[this.name])return null;let a=r.extensions[this.name],s=t.options.ktx2Loader;if(!s){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,a.source,s)}}class hX{constructor(e){this.parser=e,this.name=hP.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,i=this.parser,r=i.json,a=r.textures[e];if(!a.extensions||!a.extensions[t])return null;let s=a.extensions[t],n=r.images[s.source],o=i.textureLoader;if(n.uri){let e=i.options.manager.getHandler(n.uri);null!==e&&(o=e)}return this.detectSupport().then(function(a){if(a)return i.loadTextureImage(e,s.source,o);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(1===t.height)}})),this.isSupported}}class hj{constructor(e){this.parser=e,this.name=hP.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,i=this.parser,r=i.json,a=r.textures[e];if(!a.extensions||!a.extensions[t])return null;let s=a.extensions[t],n=r.images[s.source],o=i.textureLoader;if(n.uri){let e=i.options.manager.getHandler(n.uri);null!==e&&(o=e)}return this.detectSupport().then(function(a){if(a)return i.loadTextureImage(e,s.source,o);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(1===t.height)}})),this.isSupported}}class hq{constructor(e){this.name=hP.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,i=t.bufferViews[e];if(!i.extensions||!i.extensions[this.name])return null;{let e=i.extensions[this.name],r=this.parser.getDependency("buffer",e.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(t){let i=e.byteOffset||0,r=e.byteLength||0,s=e.count,n=e.byteStride,o=new Uint8Array(t,i,r);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(s,n,o,e.mode,e.filter).then(function(e){return e.buffer}):a.ready.then(function(){let t=new ArrayBuffer(s*n);return a.decodeGltfBuffer(new Uint8Array(t),s,n,o,e.mode,e.filter),t})})}}}class hY{constructor(e){this.name=hP.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||void 0===i.mesh)return null;for(let e of t.meshes[i.mesh].primitives)if(e.mode!==h3.TRIANGLES&&e.mode!==h3.TRIANGLE_STRIP&&e.mode!==h3.TRIANGLE_FAN&&void 0!==e.mode)return null;let r=i.extensions[this.name].attributes,a=[],s={};for(let e in r)a.push(this.parser.getDependency("accessor",r[e]).then(t=>(s[e]=t,s[e])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(e=>{let t=e.pop(),i=t.isGroup?t.children:[t],r=e[0].count,a=[];for(let e of i){let t=new eX,i=new ef,n=new em,o=new ef(1,1,1),l=new sR(e.geometry,e.material,r);for(let e=0;e<r;e++)s.TRANSLATION&&i.fromBufferAttribute(s.TRANSLATION,e),s.ROTATION&&n.fromBufferAttribute(s.ROTATION,e),s.SCALE&&o.fromBufferAttribute(s.SCALE,e),l.setMatrixAt(e,t.compose(i,n,o));for(let t in s)if("_COLOR_0"===t){let e=s[t];l.instanceColor=new sy(e.array,e.itemSize,e.normalized)}else"TRANSLATION"!==t&&"ROTATION"!==t&&"SCALE"!==t&&e.geometry.setAttribute(t,s[t]);tn.prototype.copy.call(l,e),this.parser.assignFinalMaterial(l),a.push(l)}return t.isGroup?(t.clear(),t.add(...a),t):a[0]}))}}let hZ="glTF";class hK{constructor(e){this.name=hP.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,12),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==hZ)throw Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw Error("THREE.GLTFLoader: Legacy binary file detected.");let r=this.header.length-12,a=new DataView(e,12),s=0;for(;s<r;){let t=a.getUint32(s,!0);s+=4;let r=a.getUint32(s,!0);if(s+=4,0x4e4f534a===r){let r=new Uint8Array(e,12+s,t);this.content=i.decode(r)}else if(5130562===r){let i=12+s;this.body=e.slice(i,i+t)}s+=t}if(null===this.content)throw Error("THREE.GLTFLoader: JSON content not found.")}}class hJ{constructor(e,t){if(!t)throw Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=hP.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let i=this.json,r=this.dracoLoader,a=e.extensions[this.name].bufferView,s=e.extensions[this.name].attributes,n={},o={},l={};for(let e in s)n[h9[e]||e.toLowerCase()]=s[e];for(let t in e.attributes){let r=h9[t]||t.toLowerCase();if(void 0!==s[t]){let a=i.accessors[e.attributes[t]],s=h4[a.componentType];l[r]=s.name,o[r]=!0===a.normalized}}return t.getDependency("bufferView",a).then(function(e){return new Promise(function(t,i){r.decodeDracoFile(e,function(e){for(let t in e.attributes){let i=e.attributes[t],r=o[t];void 0!==r&&(i.normalized=r)}t(e)},n,l,g,i)})})}}class hQ{constructor(){this.name=hP.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(void 0===t.texCoord||t.texCoord===e.channel)&&void 0===t.offset&&void 0===t.rotation&&void 0===t.scale||(e=e.clone(),void 0!==t.texCoord&&(e.channel=t.texCoord),void 0!==t.offset&&e.offset.fromArray(t.offset),void 0!==t.rotation&&(e.rotation=t.rotation),void 0!==t.scale&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class h${constructor(){this.name=hP.KHR_MESH_QUANTIZATION}}class h0 extends oT{constructor(e,t,i,r){super(e,t,i,r)}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,a=e*r*3+r;for(let e=0;e!==r;e++)t[e]=i[a+e];return t}interpolate_(e,t,i,r){let a=this.resultBuffer,s=this.sampleValues,n=this.valueSize,o=2*n,l=3*n,h=r-t,c=(i-t)/h,u=c*c,d=u*c,p=e*l,m=p-l,f=-2*d+3*u,g=d-u,_=1-f,v=g-u+c;for(let e=0;e!==n;e++){let t=s[m+e+n],i=s[m+e+o]*h,r=s[p+e+n],l=s[p+e]*h;a[e]=_*t+v*i+f*r+g*l}return a}}let h1=new em;class h2 extends h0{interpolate_(e,t,i,r){let a=super.interpolate_(e,t,i,r);return h1.fromArray(a).normalize().toArray(a),a}}let h3={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},h4={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},h5={9728:1003,9729:p,9984:1004,9985:1007,9986:1005,9987:m},h6={33071:1001,33648:1002,10497:1e3},h8={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},h9={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},h7={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},ce={CUBICSPLINE:void 0,LINEAR:2301,STEP:2300};function ct(e,t,i){for(let r in i.extensions)void 0===e[r]&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[r]=i.extensions[r])}function ci(e,t){void 0!==t.extras&&("object"==typeof t.extras?Object.assign(e.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function cr(e){let t="",i=Object.keys(e).sort();for(let r=0,a=i.length;r<a;r++)t+=i[r]+":"+e[i[r]]+";";return t}function ca(e){switch(e){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}let cs=new eX;class cn{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new hL,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,r=!1,a=-1;"u">typeof navigator&&(i=!0===/^((?!chrome|android).)*safari/i.test(navigator.userAgent),a=(r=navigator.userAgent.indexOf("Firefox")>-1)?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||i||r&&a<98?this.textureLoader=new oZ(this.options.manager):this.textureLoader=new lp(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new oV(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),"use-credentials"===this.options.crossOrigin&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let i=this,r=this.json,a=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(e){return e._markDefs&&e._markDefs()}),Promise.all(this._invokeAll(function(e){return e.beforeRoot&&e.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(t){let s={scene:t[0][r.scene||0],scenes:t[0],animations:t[1],cameras:t[2],asset:r.asset,parser:i,userData:{}};return ct(a,s,r),ci(s,r),Promise.all(i._invokeAll(function(e){return e.afterRoot&&e.afterRoot(s)})).then(function(){e(s)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let r=t[i].joints;for(let t=0,i=r.length;t<i;t++)e[r[t]].isBone=!0}for(let t=0,r=e.length;t<r;t++){let r=e[t];void 0!==r.mesh&&(this._addNodeRef(this.meshCache,r.mesh),void 0!==r.skin&&(i[r.mesh].isSkinnedMesh=!0)),void 0!==r.camera&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){void 0!==t&&(void 0===e.refs[t]&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;let r=i.clone(),a=(e,t)=>{let i=this.associations.get(e);for(let[r,s]of(null!=i&&this.associations.set(t,i),e.children.entries()))a(s,t.children[r])};return a(i,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){let r=e(t[i]);if(r)return r}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let i=[];for(let r=0;r<t.length;r++){let a=e(t[r]);a&&i.push(a)}return i}getDependency(e,t){let i=e+":"+t,r=this.cache.get(i);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(e){return e.loadNode&&e.loadNode(t)});break;case"mesh":r=this._invokeOne(function(e){return e.loadMesh&&e.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(e){return e.loadBufferView&&e.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(e){return e.loadMaterial&&e.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(e){return e.loadTexture&&e.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(e){return e.loadAnimation&&e.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(!(r=this._invokeOne(function(i){return i!=this&&i.getDependency&&i.getDependency(e,t)})))throw Error("Unknown type: "+e)}this.cache.add(i,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){let i=this;t=Promise.all((this.json[e+("mesh"===e?"es":"s")]||[]).map(function(t,r){return i.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],i=this.fileLoader;if(t.type&&"arraybuffer"!==t.type)throw Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(void 0===t.uri&&0===e)return Promise.resolve(this.extensions[hP.KHR_BINARY_GLTF].body);let r=this.options;return new Promise(function(e,a){i.load(ln.resolveURL(t.uri,r.path),e,void 0,function(){a(Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(e){let i=t.byteLength||0,r=t.byteOffset||0;return e.slice(r,r+i)})}loadAccessor(e){let t=this,i=this.json,r=this.json.accessors[e];if(void 0===r.bufferView&&void 0===r.sparse){let e=h8[r.type],t=h4[r.componentType],i=!0===r.normalized;return Promise.resolve(new tU(new t(r.count*e),e,i))}let a=[];return void 0!==r.bufferView?a.push(this.getDependency("bufferView",r.bufferView)):a.push(null),void 0!==r.sparse&&(a.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),a.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(a).then(function(e){let a,s=e[0],n=h8[r.type],o=h4[r.componentType],l=o.BYTES_PER_ELEMENT,h=l*n,c=r.byteOffset||0,u=void 0!==r.bufferView?i.bufferViews[r.bufferView].byteStride:void 0,d=!0===r.normalized;if(u&&u!==h){let e=Math.floor(c/u),i="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+e+":"+r.count,h=t.cache.get(i);h||(h=new aY(new o(s,e*u,r.count*u/l),u/l),t.cache.add(i,h)),a=new aK(h,n,c%u/l,d)}else a=new tU(null===s?new o(r.count*n):new o(s,c,r.count*n),n,d);if(void 0!==r.sparse){let t=h8.SCALAR,i=h4[r.sparse.indices.componentType],l=r.sparse.indices.byteOffset||0,h=r.sparse.values.byteOffset||0,c=new i(e[1],l,r.sparse.count*t),u=new o(e[2],h,r.sparse.count*n);null!==s&&(a=new tU(a.array.slice(),a.itemSize,a.normalized));for(let e=0,t=c.length;e<t;e++){let t=c[e];if(a.setX(t,u[e*n]),n>=2&&a.setY(t,u[e*n+1]),n>=3&&a.setZ(t,u[e*n+2]),n>=4&&a.setW(t,u[e*n+3]),n>=5)throw Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return a})}loadTexture(e){let t=this.json,i=this.options,r=t.textures[e].source,a=t.images[r],s=this.textureLoader;if(a.uri){let e=i.manager.getHandler(a.uri);null!==e&&(s=e)}return this.loadTextureImage(e,r,s)}loadTextureImage(e,t,i){let r=this,a=this.json,s=a.textures[e],n=a.images[t],o=(n.uri||n.bufferView)+":"+s.sampler;if(this.textureCache[o])return this.textureCache[o];let l=this.loadImageSource(t,i).then(function(t){t.flipY=!1,t.name=s.name||n.name||"",""===t.name&&"string"==typeof n.uri&&!1===n.uri.startsWith("data:image/")&&(t.name=n.uri);let i=(a.samplers||{})[s.sampler]||{};return t.magFilter=h5[i.magFilter]||p,t.minFilter=h5[i.minFilter]||m,t.wrapS=h6[i.wrapS]||1e3,t.wrapT=h6[i.wrapT]||1e3,r.associations.set(t,{textures:e}),t}).catch(function(){return null});return this.textureCache[o]=l,l}loadImageSource(e,t){let i=this.json,r=this.options;if(void 0!==this.sourceCache[e])return this.sourceCache[e].then(e=>e.clone());let a=i.images[e],s=self.URL||self.webkitURL,n=a.uri||"",o=!1;if(void 0!==a.bufferView)n=this.getDependency("bufferView",a.bufferView).then(function(e){o=!0;let t=new Blob([e],{type:a.mimeType});return n=s.createObjectURL(t)});else if(void 0===a.uri)throw Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let l=Promise.resolve(n).then(function(e){return new Promise(function(i,a){let s=i;!0===t.isImageBitmapLoader&&(s=function(e){let t=new es(e);t.needsUpdate=!0,i(t)}),t.load(ln.resolveURL(e,r.path),s,void 0,a)})}).then(function(e){var t;return!0===o&&s.revokeObjectURL(n),e.userData.mimeType=a.mimeType||((t=a.uri).search(/\.jpe?g($|\?)/i)>0||0===t.search(/^data\:image\/jpeg/)?"image/jpeg":t.search(/\.webp($|\?)/i)>0||0===t.search(/^data\:image\/webp/)?"image/webp":"image/png"),e}).catch(function(e){throw console.error("THREE.GLTFLoader: Couldn't load texture",n),e});return this.sourceCache[e]=l,l}assignTexture(e,t,i,r){let a=this;return this.getDependency("texture",i.index).then(function(s){if(!s)return null;if(void 0!==i.texCoord&&i.texCoord>0&&((s=s.clone()).channel=i.texCoord),a.extensions[hP.KHR_TEXTURE_TRANSFORM]){let e=void 0!==i.extensions?i.extensions[hP.KHR_TEXTURE_TRANSFORM]:void 0;if(e){let t=a.associations.get(s);s=a.extensions[hP.KHR_TEXTURE_TRANSFORM].extendTexture(s,e),a.associations.set(s,t)}}return void 0!==r&&(s.colorSpace=r),e[t]=s,s})}assignFinalMaterial(e){let t=e.geometry,i=e.material,r=void 0===t.attributes.tangent,a=void 0!==t.attributes.color,s=void 0===t.attributes.normal;if(e.isPoints){let e="PointsMaterial:"+i.uuid,t=this.cache.get(e);t||(t=new s2,tA.prototype.copy.call(t,i),t.color.copy(i.color),t.map=i.map,t.sizeAttenuation=!1,this.cache.add(e,t)),i=t}else if(e.isLine){let e="LineBasicMaterial:"+i.uuid,t=this.cache.get(e);t||(t=new sX,tA.prototype.copy.call(t,i),t.color.copy(i.color),t.map=i.map,this.cache.add(e,t)),i=t}if(r||a||s){let e="ClonedMaterial:"+i.uuid+":";r&&(e+="derivative-tangents:"),a&&(e+="vertex-colors:"),s&&(e+="flat-shading:");let t=this.cache.get(e);t||(t=i.clone(),a&&(t.vertexColors=!0),s&&(t.flatShading=!0),r&&(t.normalScale&&(t.normalScale.y*=-1),t.clearcoatNormalScale&&(t.clearcoatNormalScale.y*=-1)),this.cache.add(e,t),this.associations.set(t,this.associations.get(i))),i=t}e.material=i}getMaterialType(){return ou}loadMaterial(e){let t,i=this,r=this.json,a=this.extensions,s=r.materials[e],n={},o=s.extensions||{},h=[];if(o[hP.KHR_MATERIALS_UNLIT]){let e=a[hP.KHR_MATERIALS_UNLIT];t=e.getMaterialType(),h.push(e.extendParams(n,s,i))}else{let r=s.pbrMetallicRoughness||{};if(n.color=new tb(1,1,1),n.opacity=1,Array.isArray(r.baseColorFactor)){let e=r.baseColorFactor;n.color.setRGB(e[0],e[1],e[2],g),n.opacity=e[3]}void 0!==r.baseColorTexture&&h.push(i.assignTexture(n,"map",r.baseColorTexture,f)),n.metalness=void 0!==r.metallicFactor?r.metallicFactor:1,n.roughness=void 0!==r.roughnessFactor?r.roughnessFactor:1,void 0!==r.metallicRoughnessTexture&&(h.push(i.assignTexture(n,"metalnessMap",r.metallicRoughnessTexture)),h.push(i.assignTexture(n,"roughnessMap",r.metallicRoughnessTexture))),t=this._invokeOne(function(t){return t.getMaterialType&&t.getMaterialType(e)}),h.push(Promise.all(this._invokeAll(function(t){return t.extendMaterialParams&&t.extendMaterialParams(e,n)})))}!0===s.doubleSided&&(n.side=l);let c=s.alphaMode||"OPAQUE";if("BLEND"===c?(n.transparent=!0,n.depthWrite=!1):(n.transparent=!1,"MASK"===c&&(n.alphaTest=void 0!==s.alphaCutoff?s.alphaCutoff:.5)),void 0!==s.normalTexture&&t!==tw&&(h.push(i.assignTexture(n,"normalMap",s.normalTexture)),n.normalScale=new F(1,1),void 0!==s.normalTexture.scale)){let e=s.normalTexture.scale;n.normalScale.set(e,e)}if(void 0!==s.occlusionTexture&&t!==tw&&(h.push(i.assignTexture(n,"aoMap",s.occlusionTexture)),void 0!==s.occlusionTexture.strength&&(n.aoMapIntensity=s.occlusionTexture.strength)),void 0!==s.emissiveFactor&&t!==tw){let e=s.emissiveFactor;n.emissive=new tb().setRGB(e[0],e[1],e[2],g)}return void 0!==s.emissiveTexture&&t!==tw&&h.push(i.assignTexture(n,"emissiveMap",s.emissiveTexture,f)),Promise.all(h).then(function(){let r=new t(n);return s.name&&(r.name=s.name),ci(r,s),i.associations.set(r,{materials:e}),s.extensions&&ct(a,r,s),r})}createUniqueName(e){let t=lk.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,i=this.extensions,r=this.primitiveCache,a=[];for(let s=0,n=e.length;s<n;s++){let n=e[s],o=function(e){let t,i=e.extensions&&e.extensions[hP.KHR_DRACO_MESH_COMPRESSION];if(t=i?"draco:"+i.bufferView+":"+i.indices+":"+cr(i.attributes):e.indices+":"+cr(e.attributes)+":"+e.mode,void 0!==e.targets)for(let i=0,r=e.targets.length;i<r;i++)t+=":"+cr(e.targets[i]);return t}(n),l=r[o];if(l)a.push(l.promise);else{let e;e=n.extensions&&n.extensions[hP.KHR_DRACO_MESH_COMPRESSION]?function(e){return i[hP.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(e,t).then(function(i){return co(i,e,t)})}(n):co(new tJ,n,t),r[o]={primitive:n,promise:e},a.push(e)}}return Promise.all(a)}loadMesh(e){let t=this,i=this.json,r=this.extensions,a=i.meshes[e],s=a.primitives,n=[];for(let e=0,t=s.length;e<t;e++){var o;let t=void 0===s[e].material?(void 0===(o=this.cache).DefaultMaterial&&(o.DefaultMaterial=new ou({color:0xffffff,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:0})),o.DefaultMaterial):this.getDependency("material",s[e].material);n.push(t)}return n.push(t.loadGeometries(s)),Promise.all(n).then(function(i){let n=i.slice(0,i.length-1),o=i[i.length-1],l=[];for(let i=0,h=o.length;i<h;i++){let h,c=o[i],u=s[i],d=n[i];if(u.mode===h3.TRIANGLES||u.mode===h3.TRIANGLE_STRIP||u.mode===h3.TRIANGLE_FAN||void 0===u.mode)!0===(h=!0===a.isSkinnedMesh?new sm(c,d):new is(c,d)).isSkinnedMesh&&h.normalizeSkinWeights(),u.mode===h3.TRIANGLE_STRIP?h.geometry=hR(h.geometry,1):u.mode===h3.TRIANGLE_FAN&&(h.geometry=hR(h.geometry,2));else if(u.mode===h3.LINES)h=new s0(c,d);else if(u.mode===h3.LINE_STRIP)h=new sJ(c,d);else if(u.mode===h3.LINE_LOOP)h=new s1(c,d);else if(u.mode===h3.POINTS)h=new s8(c,d);else throw Error("THREE.GLTFLoader: Primitive mode unsupported: "+u.mode);Object.keys(h.geometry.morphAttributes).length>0&&function(e,t){if(e.updateMorphTargets(),void 0!==t.weights)for(let i=0,r=t.weights.length;i<r;i++)e.morphTargetInfluences[i]=t.weights[i];if(t.extras&&Array.isArray(t.extras.targetNames)){let i=t.extras.targetNames;if(e.morphTargetInfluences.length===i.length){e.morphTargetDictionary={};for(let t=0,r=i.length;t<r;t++)e.morphTargetDictionary[i[t]]=t}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}(h,a),h.name=t.createUniqueName(a.name||"mesh_"+e),ci(h,a),u.extensions&&ct(r,h,u),t.assignFinalMaterial(h),l.push(h)}for(let i=0,r=l.length;i<r;i++)t.associations.set(l[i],{meshes:e,primitives:i});if(1===l.length)return a.extensions&&ct(r,l[0],a),l[0];let h=new aF;a.extensions&&ct(r,h,a),t.associations.set(h,{meshes:e});for(let e=0,t=l.length;e<t;e++)h.add(l[e]);return h})}loadCamera(e){let t,i=this.json.cameras[e],r=i[i.type];return r?("perspective"===i.type?t=new iv(O.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):"orthographic"===i.type&&(t=new ik(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),ci(t,i),Promise.resolve(t)):void console.warn("THREE.GLTFLoader: Missing camera parameters.")}loadSkin(e){let t=this.json.skins[e],i=[];for(let e=0,r=t.joints.length;e<r;e++)i.push(this._loadNodeShallow(t.joints[e]));return void 0!==t.inverseBindMatrices?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(e){let i=e.pop(),r=[],a=[];for(let s=0,n=e.length;s<n;s++){let n=e[s];if(n){r.push(n);let e=new eX;null!==i&&e.fromArray(i.array,16*s),a.push(e)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[s])}return new sx(r,a)})}loadAnimation(e){let t=this.json,i=this,r=t.animations[e],a=r.name?r.name:"animation_"+e,s=[],n=[],o=[],l=[],h=[];for(let e=0,t=r.channels.length;e<t;e++){let t=r.channels[e],i=r.samplers[t.sampler],a=t.target,c=a.node,u=void 0!==r.parameters?r.parameters[i.input]:i.input,d=void 0!==r.parameters?r.parameters[i.output]:i.output;void 0!==a.node&&(s.push(this.getDependency("node",c)),n.push(this.getDependency("accessor",u)),o.push(this.getDependency("accessor",d)),l.push(i),h.push(a))}return Promise.all([Promise.all(s),Promise.all(n),Promise.all(o),Promise.all(l),Promise.all(h)]).then(function(e){let t=e[0],r=e[1],s=e[2],n=e[3],o=e[4],l=[];for(let e=0,a=t.length;e<a;e++){let a=t[e],h=r[e],c=s[e],u=n[e],d=o[e];if(void 0===a)continue;a.updateMatrix&&a.updateMatrix();let p=i._createAnimationTracks(a,h,c,u,d);if(p)for(let e=0;e<p.length;e++)l.push(p[e])}return new oO(a,void 0,l)})}createNodeMesh(e){let t=this.json,i=this,r=t.nodes[e];return void 0===r.mesh?null:i.getDependency("mesh",r.mesh).then(function(e){let t=i._getNodeRef(i.meshCache,r.mesh,e);return void 0!==r.weights&&t.traverse(function(e){if(e.isMesh)for(let t=0,i=r.weights.length;t<i;t++)e.morphTargetInfluences[t]=r.weights[t]}),t})}loadNode(e){let t=this.json.nodes[e],i=this._loadNodeShallow(e),r=[],a=t.children||[];for(let e=0,t=a.length;e<t;e++)r.push(this.getDependency("node",a[e]));let s=void 0===t.skin?Promise.resolve(null):this.getDependency("skin",t.skin);return Promise.all([i,Promise.all(r),s]).then(function(e){let t=e[0],i=e[1],r=e[2];null!==r&&t.traverse(function(e){e.isSkinnedMesh&&e.bind(r,cs)});for(let e=0,r=i.length;e<r;e++)t.add(i[e]);return t})}_loadNodeShallow(e){let t=this.json,i=this.extensions,r=this;if(void 0!==this.nodeCache[e])return this.nodeCache[e];let a=t.nodes[e],s=a.name?r.createUniqueName(a.name):"",n=[],o=r._invokeOne(function(t){return t.createNodeMesh&&t.createNodeMesh(e)});return o&&n.push(o),void 0!==a.camera&&n.push(r.getDependency("camera",a.camera).then(function(e){return r._getNodeRef(r.cameraCache,a.camera,e)})),r._invokeAll(function(t){return t.createNodeAttachment&&t.createNodeAttachment(e)}).forEach(function(e){n.push(e)}),this.nodeCache[e]=Promise.all(n).then(function(t){let n;if((n=!0===a.isBone?new sf:t.length>1?new aF:1===t.length?t[0]:new tn)!==t[0])for(let e=0,i=t.length;e<i;e++)n.add(t[e]);if(a.name&&(n.userData.name=a.name,n.name=s),ci(n,a),a.extensions&&ct(i,n,a),void 0!==a.matrix){let e=new eX;e.fromArray(a.matrix),n.applyMatrix4(e)}else void 0!==a.translation&&n.position.fromArray(a.translation),void 0!==a.rotation&&n.quaternion.fromArray(a.rotation),void 0!==a.scale&&n.scale.fromArray(a.scale);return r.associations.has(n)||r.associations.set(n,{}),r.associations.get(n).nodes=e,n}),this.nodeCache[e]}loadScene(e){let t=this.extensions,i=this.json.scenes[e],r=this,a=new aF;i.name&&(a.name=r.createUniqueName(i.name)),ci(a,i),i.extensions&&ct(t,a,i);let s=i.nodes||[],n=[];for(let e=0,t=s.length;e<t;e++)n.push(r.getDependency("node",s[e]));return Promise.all(n).then(function(e){for(let t=0,i=e.length;t<i;t++)a.add(e[t]);return r.associations=(e=>{let t=new Map;for(let[e,i]of r.associations)(e instanceof tA||e instanceof es)&&t.set(e,i);return e.traverse(e=>{let i=r.associations.get(e);null!=i&&t.set(e,i)}),t})(a),a})}_createAnimationTracks(e,t,i,r,a){let s,n=[],o=e.name?e.name:e.uuid,l=[];switch(h7[a.path]===h7.weights?e.traverse(function(e){e.morphTargetInfluences&&l.push(e.name?e.name:e.uuid)}):l.push(o),h7[a.path]){case h7.weights:s=oP;break;case h7.rotation:s=oU;break;case h7.position:case h7.scale:s=oD;break;default:s=1===i.itemSize?oP:oD}let h=void 0!==r.interpolation?ce[r.interpolation]:2301,c=this._getArrayFromAccessor(i);for(let e=0,i=l.length;e<i;e++){let i=new s(l[e]+"."+h7[a.path],t.array,c,h);"CUBICSPLINE"===r.interpolation&&this._createCubicSplineTrackInterpolant(i),n.push(i)}return n}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let e=ca(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*e;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(e){return new(this instanceof oU?h2:h0)(this.times,this.values,this.getValueSize()/3,e)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function co(e,t,i){let r=t.attributes,a=[];for(let t in r){let s=h9[t]||t.toLowerCase();s in e.attributes||a.push(function(t,r){return i.getDependency("accessor",t).then(function(t){e.setAttribute(r,t)})}(r[t],s))}if(void 0!==t.indices&&!e.index){let r=i.getDependency("accessor",t.indices).then(function(t){e.setIndex(t)});a.push(r)}return J.workingColorSpace!==g&&"COLOR_0"in r&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${J.workingColorSpace}" not supported.`),ci(e,t),function(e,t,i){let r=t.attributes,a=new ev;if(void 0===r.POSITION)return;{let e=i.json.accessors[r.POSITION],t=e.min,s=e.max;if(void 0===t||void 0===s)return console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");if(a.set(new ef(t[0],t[1],t[2]),new ef(s[0],s[1],s[2])),e.normalized){let t=ca(h4[e.componentType]);a.min.multiplyScalar(t),a.max.multiplyScalar(t)}}let s=t.targets;if(void 0!==s){let e=new ef,t=new ef;for(let r=0,a=s.length;r<a;r++){let a=s[r];if(void 0!==a.POSITION){let r=i.json.accessors[a.POSITION],s=r.min,n=r.max;if(void 0!==s&&void 0!==n){if(t.setX(Math.max(Math.abs(s[0]),Math.abs(n[0]))),t.setY(Math.max(Math.abs(s[1]),Math.abs(n[1]))),t.setZ(Math.max(Math.abs(s[2]),Math.abs(n[2]))),r.normalized){let e=ca(h4[r.componentType]);t.multiplyScalar(e)}e.max(t)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}a.expandByVector(e)}e.boundingBox=a;let n=new eO;a.getCenter(n.center),n.radius=a.min.distanceTo(a.max)/2,e.boundingSphere=n}(e,t,i),Promise.all(a).then(function(){return void 0!==t.targets?function(e,t,i){let r=!1,a=!1,s=!1;for(let e=0,i=t.length;e<i;e++){let i=t[e];if(void 0!==i.POSITION&&(r=!0),void 0!==i.NORMAL&&(a=!0),void 0!==i.COLOR_0&&(s=!0),r&&a&&s)break}if(!r&&!a&&!s)return Promise.resolve(e);let n=[],o=[],l=[];for(let h=0,c=t.length;h<c;h++){let c=t[h];if(r){let t=void 0!==c.POSITION?i.getDependency("accessor",c.POSITION):e.attributes.position;n.push(t)}if(a){let t=void 0!==c.NORMAL?i.getDependency("accessor",c.NORMAL):e.attributes.normal;o.push(t)}if(s){let t=void 0!==c.COLOR_0?i.getDependency("accessor",c.COLOR_0):e.attributes.color;l.push(t)}}return Promise.all([Promise.all(n),Promise.all(o),Promise.all(l)]).then(function(t){let i=t[0],n=t[1],o=t[2];return r&&(e.morphAttributes.position=i),a&&(e.morphAttributes.normal=n),s&&(e.morphAttributes.color=o),e.morphTargetsRelative=!0,e})}(e,t.targets,i):e})}let cl=Object.freeze(Object.defineProperty({__proto__:null,GLTFLoader:hC},Symbol.toStringTag,{value:"Module"}));class ch extends aq{constructor(e=null){super();let t=new il;t.deleteAttribute("uv");let i=new ou({side:1}),r=new ou,a=5;null!==e&&!1===e._useLegacyLights&&(a=900);let s=new o9(0xffffff,a,28,2);s.position.set(.418,16.199,.3),this.add(s);let n=new is(t,i);n.position.set(-.757,13.219,.717),n.scale.set(31.713,28.305,28.591),this.add(n);let o=new is(t,r);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);let l=new is(t,r);l.position.set(-5.607,-.754,-.758),l.rotation.set(0,.994,0),l.scale.set(1.97,1.534,3.955),this.add(l);let h=new is(t,r);h.position.set(6.167,.857,7.803),h.rotation.set(0,.561,0),h.scale.set(3.927,6.285,3.687),this.add(h);let c=new is(t,r);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);let u=new is(t,r);u.position.set(2.291,-.756,-2.621),u.rotation.set(0,-.286,0),u.scale.set(1.546,1.552,1.496),this.add(u);let d=new is(t,r);d.position.set(-2.193,-.369,-5.547),d.rotation.set(0,.516,0),d.scale.set(3.875,3.487,2.986),this.add(d);let p=new is(t,cc(50));p.position.set(-16.116,14.37,8.208),p.scale.set(.1,2.428,2.739),this.add(p);let m=new is(t,cc(50));m.position.set(-16.109,18.021,-8.207),m.scale.set(.1,2.425,2.751),this.add(m);let f=new is(t,cc(17));f.position.set(14.904,12.198,-1.832),f.scale.set(.15,4.265,6.331),this.add(f);let g=new is(t,cc(43));g.position.set(-.462,8.89,14.52),g.scale.set(4.38,5.441,.088),this.add(g);let _=new is(t,cc(20));_.position.set(3.235,11.486,-12.541),_.scale.set(2.5,2,.1),this.add(_);let v=new is(t,cc(100));v.position.set(0,20,0),v.scale.set(1,.1,1),this.add(v)}dispose(){let e=new Set;for(let t of(this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))}),e))t.dispose()}}function cc(e){let t=new tw;return t.color.setScalar(e),t}let cu=Object.freeze(Object.defineProperty({__proto__:null,RoomEnvironment:ch},Symbol.toStringTag,{value:"Module"})),cd=new ef;function cp(e,t,i,r,a,s){let n=2*Math.PI*a/4,o=Math.max(s-2*a,0),l=Math.PI/4;cd.copy(t),cd[r]=0,cd.normalize();let h=.5*n/(n+o),c=1-cd.angleTo(e)/l;return 1===Math.sign(cd[i])?c*h:o/(n+o)+h+h*(1-c)}class cm extends il{constructor(e=1,t=1,i=1,r=2,a=.1){if(r=2*r+1,a=Math.min(e/2,t/2,i/2,a),super(1,1,1,r,r,r),1===r)return;let s=this.toNonIndexed();this.index=null,this.attributes.position=s.attributes.position,this.attributes.normal=s.attributes.normal,this.attributes.uv=s.attributes.uv;let n=new ef,o=new ef,l=new ef(e,t,i).divideScalar(2).subScalar(a),h=this.attributes.position.array,c=this.attributes.normal.array,u=this.attributes.uv.array,d=h.length/6,p=new ef,m=.5/r;for(let r=0,s=0;r<h.length;r+=3,s+=2)switch(n.fromArray(h,r),o.copy(n),o.x-=Math.sign(o.x)*m,o.y-=Math.sign(o.y)*m,o.z-=Math.sign(o.z)*m,o.normalize(),h[r+0]=l.x*Math.sign(n.x)+o.x*a,h[r+1]=l.y*Math.sign(n.y)+o.y*a,h[r+2]=l.z*Math.sign(n.z)+o.z*a,c[r+0]=o.x,c[r+1]=o.y,c[r+2]=o.z,Math.floor(r/d)){case 0:p.set(1,0,0),u[s+0]=cp(p,o,"z","y",a,i),u[s+1]=1-cp(p,o,"y","z",a,t);break;case 1:p.set(-1,0,0),u[s+0]=1-cp(p,o,"z","y",a,i),u[s+1]=1-cp(p,o,"y","z",a,t);break;case 2:p.set(0,1,0),u[s+0]=1-cp(p,o,"x","z",a,e),u[s+1]=cp(p,o,"z","x",a,i);break;case 3:p.set(0,-1,0),u[s+0]=1-cp(p,o,"x","z",a,e),u[s+1]=1-cp(p,o,"z","x",a,i);break;case 4:p.set(0,0,1),u[s+0]=1-cp(p,o,"x","y",a,e),u[s+1]=1-cp(p,o,"y","x",a,t);break;case 5:p.set(0,0,-1),u[s+0]=cp(p,o,"x","y",a,e),u[s+1]=1-cp(p,o,"y","x",a,t)}}}}}]);