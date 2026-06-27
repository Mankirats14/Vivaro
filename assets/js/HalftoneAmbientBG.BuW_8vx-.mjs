import{t as e}from"./rolldown-runtime.DKrEzeHb.mjs";import{A as t,E as n,F as r,P as i,V as a,l as o,o as s,z as c}from"./react.q9REGo3O.mjs";import{$ as l,N as u,o as d}from"./framer.BjUO6P2W.mjs";function f(e){if(!e)return[0,0,0];let t=e.replace(`#`,``);if(/^[a-f\d]{3}$/i.test(t)&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),/^[a-f\d]{6,8}$/i.test(t))return[parseInt(t.slice(0,2),16)/255,parseInt(t.slice(2,4),16)/255,parseInt(t.slice(4,6),16)/255];let n=/rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)/.exec(e);return n?[n[1]/255,n[2]/255,n[3]/255]:[0,0,0]}function p(e,t,n){let r=e.createShader(t);return r?(e.shaderSource(r,n),e.compileShader(r),e.getShaderParameter(r,e.COMPILE_STATUS)?r:(console.error(e.getShaderInfoLog(r)),e.deleteShader(r),null)):null}function m(e,t,n){let r=p(e,e.VERTEX_SHADER,t),i=p(e,e.FRAGMENT_SHADER,n);if(!r||!i)return null;let a=e.createProgram();return e.attachShader(a,r),e.attachShader(a,i),e.linkProgram(a),e.deleteShader(r),e.deleteShader(i),e.getProgramParameter(a,e.LINK_STATUS)?a:(console.error(e.getProgramInfoLog(a)),e.deleteProgram(a),null)}function h({preset:e=`Ocean`,quality:n=`Full`,paused:s=!1,colors:c=g.Ocean,animation:l={speed:.3,warp:1,wave:1,noise:0,glow:0,gradientAngle:0,blobVariety:0},halftone:u={dotSize:8,dotShape:`Circle`,blobSize:1,softness:.02},interaction:d={mouseMode:`Off`,mouseRadius:.3,mouseStrength:1},style:p}){let{colorA:h,colorB:y,colorC:b,bgColor:x}=e===`Custom`?c:g[e]||g.Ocean,{speed:S=.3,warp:C=1,wave:w=1,noise:T=0,glow:E=0,gradientAngle:D=0,blobVariety:O=0}=l,{dotSize:k=8,dotShape:A=`Circle`,blobSize:j=1,softness:M=.02}=u,{mouseMode:N=`Off`,mouseRadius:P=.3,mouseStrength:F=1}=d,I=A===`Square`?1:A===`Diamond`?2:A===`Ring`?3:0,L=N===`Distort`?2:N===`Attract`?1:N===`Repel`?-1:0,R=t(null),z=t(null),B=t(0),V=t(performance.now()),H=t({x:.5,y:.5}),U=t({x:.5,y:.5}),W=t({x:0,y:0}),G=t(!1),K=t(0),q=t(n===`Half`?1:Math.min(a.devicePixelRatio||1,2)),J=D*(Math.PI/180),Y=t(!1),X=t(s);X.current=s,r(()=>{let e=a.matchMedia(`(prefers-reduced-motion: reduce)`);Y.current=e.matches;let t=e=>{Y.current=e.matches};return e.addEventListener(`change`,t),()=>e.removeEventListener(`change`,t)},[]);let Z=t({rgbA:f(h),rgbB:f(y),rgbC:f(b),rgbBg:f(x),speed:S,warp:C,wave:w,noise:T,glow:E,gradientAngleRad:J,blobVariety:O,dotSize:k,dotShapeNum:I,blobSize:j,softness:M,mouseModeNum:L,mouseRadius:P,mouseStrength:F});Z.current={rgbA:f(h),rgbB:f(y),rgbC:f(b),rgbBg:f(x),speed:S,warp:C,wave:w,noise:T,glow:E,gradientAngleRad:J,blobVariety:O,dotSize:k,dotShapeNum:I,blobSize:j,softness:M,mouseModeNum:L,mouseRadius:P,mouseStrength:F},r(()=>{q.current=n===`Half`?1:Math.min(a.devicePixelRatio||1,2);let e=R.current;if(!e)return;let{width:t,height:r}=e.getBoundingClientRect();e.width=t*q.current,e.height=r*q.current;let i=z.current;i&&i.gl.viewport(0,0,e.width,e.height)},[n]);let Q=i(e=>{let t=e.currentTarget.getBoundingClientRect();H.current={x:(e.clientX-t.left)/t.width,y:1-(e.clientY-t.top)/t.height},G.current=!0},[]),$=i(()=>{G.current=!1},[]);return r(()=>{let e=R.current;if(!e)return;let t=!0,n=e.getContext(`webgl`,{alpha:!1,antialias:!1,premultipliedAlpha:!1});if(!n)return;let r=()=>{let e=m(n,_,v);if(!e)return null;let t=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,t),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),n.STATIC_DRAW);let r=n.getAttribLocation(e,`a_position`);n.enableVertexAttribArray(r),n.vertexAttribPointer(r,2,n.FLOAT,!1,0,0),n.useProgram(e);let i=t=>n.getUniformLocation(e,t);return{program:e,buf:t,locs:{u_resolution:i(`u_resolution`),u_time:i(`u_time`),u_colorA:i(`u_colorA`),u_colorB:i(`u_colorB`),u_colorC:i(`u_colorC`),u_bgColor:i(`u_bgColor`),u_speed:i(`u_speed`),u_warp:i(`u_warp`),u_wave:i(`u_wave`),u_blobSize:i(`u_blobSize`),u_softness:i(`u_softness`),u_dotSize:i(`u_dotSize`),u_dotShape:i(`u_dotShape`),u_mouse:i(`u_mouse`),u_mouseRadius:i(`u_mouseRadius`),u_mouseMode:i(`u_mouseMode`),u_noise:i(`u_noise`),u_glow:i(`u_glow`),u_gradientAngle:i(`u_gradientAngle`),u_blobVariety:i(`u_blobVariety`),u_mouseVel:i(`u_mouseVel`),u_mouseStrength:i(`u_mouseStrength`)}}},i=r();if(!i)return;let a=i.buf;z.current={gl:n,program:i.program,locs:i.locs};let o=e=>{e.preventDefault(),cancelAnimationFrame(B.current),z.current=null},s=()=>{let e=r();!e||!t||(a=e.buf,z.current={gl:n,program:e.program,locs:e.locs},B.current=requestAnimationFrame(h))};e.addEventListener(`webglcontextlost`,o),e.addEventListener(`webglcontextrestored`,s);let c=0,l=new ResizeObserver(()=>{cancelAnimationFrame(c),c=requestAnimationFrame(()=>{if(!t)return;let{width:r,height:i}=e.getBoundingClientRect();e.width=r*q.current,e.height=i*q.current,n.viewport(0,0,e.width,e.height)})});l.observe(e);let{width:u,height:d}=e.getBoundingClientRect();e.width=u*q.current,e.height=d*q.current,n.viewport(0,0,e.width,e.height);let f=0,p=0,h=()=>{if(!t)return;if(B.current=requestAnimationFrame(h),X.current||Y.current){p===0&&(p=performance.now());return}p>0&&(f+=performance.now()-p,p=0);let n=z.current;if(!n)return;let{gl:r,locs:i}=n,a=Z.current,o=(performance.now()-V.current-f)/1e3,s=U.current,c=H.current,l=s.x,u=s.y;s.x+=(c.x-s.x)*.08,s.y+=(c.y-s.y)*.08,W.current.x=s.x-l,W.current.y=s.y-u;let d=G.current?1:0;K.current+=(d-K.current)*.04;let m=U.current,g=W.current;r.uniform2f(i.u_resolution,e.width,e.height),r.uniform1f(i.u_time,o),r.uniform3f(i.u_colorA,a.rgbA[0],a.rgbA[1],a.rgbA[2]),r.uniform3f(i.u_colorB,a.rgbB[0],a.rgbB[1],a.rgbB[2]),r.uniform3f(i.u_colorC,a.rgbC[0],a.rgbC[1],a.rgbC[2]),r.uniform3f(i.u_bgColor,a.rgbBg[0],a.rgbBg[1],a.rgbBg[2]),r.uniform1f(i.u_speed,a.speed),r.uniform1f(i.u_warp,a.warp),r.uniform1f(i.u_wave,a.wave),r.uniform1f(i.u_noise,a.noise),r.uniform1f(i.u_glow,a.glow),r.uniform1f(i.u_gradientAngle,a.gradientAngleRad),r.uniform1f(i.u_blobVariety,a.blobVariety),r.uniform1f(i.u_blobSize,a.blobSize),r.uniform1f(i.u_softness,a.softness),r.uniform1f(i.u_dotSize,a.dotSize*q.current),r.uniform1f(i.u_dotShape,a.dotShapeNum),r.uniform2f(i.u_mouse,m.x,m.y),r.uniform1f(i.u_mouseRadius,a.mouseRadius),r.uniform1f(i.u_mouseMode,a.mouseModeNum),r.uniform2f(i.u_mouseVel,g.x,g.y),r.uniform1f(i.u_mouseStrength,a.mouseStrength*K.current),r.drawArrays(r.TRIANGLE_STRIP,0,4)};return B.current=requestAnimationFrame(h),()=>{t=!1,cancelAnimationFrame(B.current),cancelAnimationFrame(c),l.disconnect(),e.removeEventListener(`webglcontextlost`,o),e.removeEventListener(`webglcontextrestored`,s),z.current&&n.deleteProgram(z.current.program),n.deleteBuffer(a),z.current=null}},[]),o(`canvas`,{ref:R,onPointerMove:Q,onPointerLeave:$,style:{display:`block`,width:`100%`,height:`100%`,background:x,...p}})}var g,_,v,y=e((()=>{c(),s(),l(),n(),g={Ocean:{colorA:`#0b1026`,colorB:`#3dd6c8`,colorC:`#c8e64e`,bgColor:`#060610`},Sunset:{colorA:`#1c0826`,colorB:`#e86533`,colorC:`#ffd166`,bgColor:`#0c0310`},Neon:{colorA:`#0a0118`,colorB:`#ff2d95`,colorC:`#39ff14`,bgColor:`#040010`},Forest:{colorA:`#081a0e`,colorB:`#2d9b5e`,colorC:`#c9a227`,bgColor:`#030d06`},Mono:{colorA:`#1a1a22`,colorB:`#7a7a8a`,colorC:`#d8d8e0`,bgColor:`#08080c`}},_=`
attribute vec2 a_position;
void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
}`,v=`
precision highp float;

uniform vec2 u_resolution;
uniform float u_time;
uniform vec3 u_colorA;
uniform vec3 u_colorB;
uniform vec3 u_colorC;
uniform vec3 u_bgColor;
uniform float u_speed;
uniform float u_warp;
uniform float u_wave;
uniform float u_blobSize;
uniform float u_softness;
uniform float u_dotSize;
uniform float u_dotShape;
uniform vec2 u_mouse;
uniform float u_mouseRadius;
uniform float u_mouseMode;
uniform float u_noise;
uniform float u_glow;
uniform float u_gradientAngle;
uniform float u_blobVariety;
uniform vec2 u_mouseVel;
uniform float u_mouseStrength;

// Hash-based pseudo-random
float hash(vec2 p) {
    vec3 p3 = fract(vec3(p.xyx) * 0.1031);
    p3 += dot(p3, p3.yzx + 33.33);
    return fract((p3.x + p3.y) * p3.z);
}

float vnoise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    vec2 shift = vec2(100.0);
    mat2 rot = mat2(0.8, 0.6, -0.6, 0.8);
    for (int i = 0; i < 3; i++) {
        v += a * vnoise(p);
        p = rot * p * 2.0 + shift;
        a *= 0.5;
    }
    return v;
}

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution;
    float aspect = u_resolution.x / u_resolution.y;
    vec2 st = vec2((uv.x - 0.5) * aspect, uv.y - 0.5);

    float t = u_time * u_speed;

    // Domain warp for organic blob shapes
    vec2 wst = st + u_warp * 0.06 * vec2(
        sin(st.y * 5.0 + t * 0.5) + sin(st.x * 3.7 + t * 0.3),
        cos(st.x * 4.3 + t * 0.4) + cos(st.y * 3.1 + t * 0.6)
    );

    // Mouse position in scene space
    vec2 mp = vec2((u_mouse.x - 0.5) * aspect, u_mouse.y - 0.5);

    // Distort mode: swirl space around cursor (before blob field)
    if (u_mouseMode > 1.5) {
        vec2 toMouse = wst - mp;
        float dm = length(toMouse);
        float distortMask = smoothstep(u_mouseRadius * 2.5, 0.0, dm);
        float velMag = length(u_mouseVel);
        float strength = u_mouseStrength * distortMask * (1.0 + velMag * 3.0);
        float swirlAngle = strength * 5.0;
        float cs = cos(swirlAngle), sn = sin(swirlAngle);
        vec2 rotated = vec2(toMouse.x * cs - toMouse.y * sn, toMouse.x * sn + toMouse.y * cs);
        wst = mp + mix(toMouse, rotated, distortMask);
    }

    float field = 0.0;

    for (int i = 0; i < 6; i++) {
        float fi = float(i);
        float p1 = fi * 2.39996322;
        float p2 = fi * 1.61803398;

        // Original orbital center
        vec2 centerOrbital = vec2(
            (0.22 + fi * 0.04) * sin(t * (0.15 + fi * 0.035) + p1)
                + 0.07 * sin(t * (0.29 + fi * 0.06) + p2 * 2.1),
            (0.22 + fi * 0.04) * cos(t * (0.12 + fi * 0.05) + p2)
                + 0.07 * cos(t * (0.23 + fi * 0.04) + p1 * 1.7)
        );

        // Lissajous / figure-8 center
        float lissA = 0.22 + fi * 0.03;
        float freqX = 1.0 + fi * 0.5;
        float freqY = 2.0 + fi * 0.3;
        vec2 centerLissajous = vec2(
            lissA * sin(t * 0.18 * freqX + p1),
            lissA * sin(t * 0.18 * freqY + p2)
        );

        // Odd-indexed blobs get Lissajous variety
        float useLissajous = u_blobVariety * mod(fi, 2.0);
        vec2 center = mix(centerOrbital, centerLissajous, useLissajous);

        float breathe = 1.0 + 0.2 * sin(t * (0.2 + fi * 0.07) + fi * 3.14159);
        float radius = u_blobSize * (0.14 + fi * 0.02) * breathe;

        float d = length(wst - center);
        field += (radius * radius) / (d * d + u_softness);
    }

    // Mouse attract / repel
    if (abs(u_mouseMode) > 0.5 && u_mouseMode < 1.5) {
        float md = length(wst - mp);
        float velMag = length(u_mouseVel);
        float dynamicBoost = 1.0 + velMag * 5.0;
        float strength = u_mouseMode * u_mouseRadius * u_mouseRadius * u_mouseStrength * dynamicBoost;
        field += strength / (md * md + u_softness * 0.5);

        // Ripple ring around cursor
        float ringDist = length(st - mp);
        float ring = sin(ringDist * 30.0 - u_time * 5.0) * 0.5 + 0.5;
        float ringMask = smoothstep(u_mouseRadius * 1.8, u_mouseRadius * 0.1, ringDist)
                       * smoothstep(0.0, u_mouseRadius * 0.3, ringDist);
        field += u_mouseMode * ringMask * u_mouseStrength * ring * 0.6;
    }

    // Noise overlay: organic texture in the field
    if (u_noise > 0.0) {
        float n = fbm(st * 6.0 + t * 0.15);
        field += u_noise * (n - 0.5) * 1.2 * smoothstep(0.1, 1.0, field);
    }

    // Gradient angle: rotate color mapping direction
    float fieldForColor = field;
    if (abs(u_gradientAngle) > 0.001) {
        vec2 dir = vec2(cos(u_gradientAngle), sin(u_gradientAngle));
        float directional = dot(st, dir) * 2.5 + 1.25;
        fieldForColor = mix(field, field * 0.5 + directional * 0.5, 0.5);
    }

    // 3-stop color gradient: A -> B -> C
    float lo = smoothstep(0.2, 1.4, fieldForColor);
    float hi = smoothstep(1.4, 3.2, fieldForColor);

    vec3 color = mix(u_colorA, u_colorB, lo);
    color = mix(color, u_colorC, hi);

    // Glow / bloom: soft halo around bright regions
    if (u_glow > 0.0) {
        float glowMask = smoothstep(0.6, 2.5, field);
        float glowExtend = smoothstep(0.2, 1.8, field);
        vec3 glowColor = mix(color, vec3(1.0), 0.35 * glowMask);
        color = mix(color, glowColor, u_glow * glowExtend);
        color += u_glow * 0.12 * glowMask * (color + 0.15);
    }

    // Vignette
    float vig = 1.0 - 0.25 * smoothstep(0.3, 0.85, length(uv - 0.5) * 1.4);
    color *= vig;

    // --- Halftone ---
    float luma = dot(color, vec3(0.299, 0.587, 0.114));
    vec2 cellUV = fract(gl_FragCoord.xy / u_dotSize) - 0.5;

    vec2 ac = abs(cellUV);
    float dist;
    if (u_dotShape < 0.5) {
        dist = length(cellUV);
    } else if (u_dotShape < 1.5) {
        dist = max(ac.x, ac.y);
    } else if (u_dotShape < 2.5) {
        dist = (ac.x + ac.y) * 0.7071;
    } else {
        dist = abs(length(cellUV) - 0.22);
    }

    float wave = u_wave * 0.04 * sin(uv.x * 8.0 + uv.y * 6.0 + t * 1.2);
    float dotRadius = sqrt(clamp(luma + wave, 0.0, 1.0)) * 0.48;
    float ht = 1.0 - smoothstep(dotRadius - 0.04, dotRadius + 0.04, dist);

    vec3 finalColor = mix(u_bgColor, color, ht);

    gl_FragColor = vec4(finalColor, 1.0);
}`,h.displayName=`DuoToneAmbient`,h.defaultProps={width:800,height:600},u(h,{preset:{type:d.Enum,title:`Preset`,defaultValue:`Ocean`,options:[`Ocean`,`Sunset`,`Neon`,`Forest`,`Mono`,`Custom`],optionTitles:[`Ocean`,`Sunset`,`Neon`,`Forest`,`Mono`,`Custom`]},quality:{type:d.Enum,title:`Quality`,defaultValue:`Full`,options:[`Full`,`Half`],optionTitles:[`Full`,`Half`]},paused:{type:d.Boolean,title:`Paused`,defaultValue:!1},colors:{type:d.Object,title:`Colors`,hidden:e=>e.preset!==`Custom`,controls:{colorA:{type:d.Color,title:`Color A`,defaultValue:`#0b1026`},colorB:{type:d.Color,title:`Color B`,defaultValue:`#3dd6c8`},colorC:{type:d.Color,title:`Color C`,defaultValue:`#c8e64e`},bgColor:{type:d.Color,title:`Background`,defaultValue:`#060610`}}},animation:{type:d.Object,title:`Animation`,controls:{speed:{type:d.Number,title:`Speed`,defaultValue:.3,min:.05,max:2,step:.05},warp:{type:d.Number,title:`Warp`,defaultValue:1,min:0,max:3,step:.1},wave:{type:d.Number,title:`Wave`,defaultValue:1,min:0,max:3,step:.1},noise:{type:d.Number,title:`Noise`,defaultValue:0,min:0,max:1,step:.05},glow:{type:d.Number,title:`Glow`,defaultValue:0,min:0,max:1,step:.05},gradientAngle:{type:d.Number,title:`Gradient Angle`,defaultValue:0,min:0,max:360,step:5},blobVariety:{type:d.Number,title:`Blob Variety`,defaultValue:0,min:0,max:1,step:.05}}},halftone:{type:d.Object,title:`Halftone`,controls:{dotSize:{type:d.Number,title:`Dot Size`,defaultValue:8,min:3,max:25,step:1},dotShape:{type:d.Enum,title:`Dot Shape`,defaultValue:`Circle`,options:[`Circle`,`Square`,`Diamond`,`Ring`],optionTitles:[`Circle`,`Square`,`Diamond`,`Ring`]},blobSize:{type:d.Number,title:`Blob Size`,defaultValue:1,min:.3,max:3,step:.1},softness:{type:d.Number,title:`Softness`,defaultValue:.02,min:.005,max:.1,step:.005}}},interaction:{type:d.Object,title:`Interaction`,controls:{mouseMode:{type:d.Enum,title:`Mouse`,defaultValue:`Off`,options:[`Off`,`Attract`,`Repel`,`Distort`],optionTitles:[`Off`,`Attract`,`Repel`,`Distort`]},mouseRadius:{type:d.Number,title:`Radius`,defaultValue:.3,min:.1,max:1,step:.05},mouseStrength:{type:d.Number,title:`Strength`,defaultValue:1,min:.2,max:3,step:.1}}}})}));export{y as n,h as t};
//# sourceMappingURL=HalftoneAmbientBG.BuW_8vx-.mjs.map