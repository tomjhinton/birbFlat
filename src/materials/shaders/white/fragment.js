export default /* glsl */`uniform float uTime;

varying vec2 vUv;
uniform vec3 uMousePosition;
varying vec3 pos;
uniform float u_progress;

uniform sampler2D uTexture;
uniform sampler2D uTexture2;
uniform sampler2D uTexture3;
uniform sampler2D uTexture4;

float PI = 3.142;

  
vec2 rotate2D (vec2 _st, float _angle) {
    _st -= 0.5;
    _st =  mat2(cos(_angle),-sin(_angle),
                sin(_angle),cos(_angle)) * _st;
    _st += 0.5;
    return _st;

}

void coswarp(inout vec3 trip, float warpsScale ){

  trip.xyz += warpsScale * .1 * sin(3. * trip.yzx + (uTime * .15));
  trip.xyz += warpsScale * .05 * sin(11. * trip.yzx + (uTime * .15));
  trip.xyz += warpsScale * .025 * sin(17. * trip.yzx + (uTime * .15));
  
}  

void uvRipple(inout vec2 uv, float intensity){

vec2 p = uv -.5;


  float cLength=length(p);

   uv= uv +(p/cLength)*cos(cLength*15.0-uTime*.5)*intensity;

} 


uniform vec3 lightDirection;

varying vec3 vNormal;
varying vec3 vWorldPosition;



float circularSineWave(vec2 st, float radius, float frequency, float amplitude) {
  float dist = length(st) - radius;
  float angle = atan(st.y, st.x);
  float wave = sin(angle * frequency) * amplitude;
  return smoothstep(0.0, wave + dist, abs(dist));
}  

void main(){




  vec2 uv = vUv;


 

 



  vec2 uv2 = fract(uv * 5.);

  // uv = fract(uv * 10.);
  
  float t = (uTime * .2) +length(uv-.5);

  
	
	vec3 color = vec3(uv.x, uv.y, 1.);
  
  coswarp(color, 3.);
  coswarp(color, 3.);
  coswarp(color, 3.);

  vec3 color2 = color;

  //uv.x += color.r * .1;

 

  vec4 tex = texture2D(uTexture, uv);

float alpha =1.;


  color = vec3(1.);

  if(uMousePosition.x != 0.){
   uv = rotate2D(uv,  PI + uMousePosition.x);
    tex = texture2D(uTexture, uv);
    color = tex.rgb ;
  }

  

  // color = mix(color, vec3(1.), 1.-circularSineWave(uv2-.5, 0.95 * sin(t), 40. , 0.01) );
  

  
  // color = mix(color, vec3(uv.x, uv.y, 1.), squishFactor *( (sin(u_progress) +1.) * .5) * 1.5 );

  // color -= 1. -pos.z;
  gl_FragColor = vec4(color, alpha );
}`