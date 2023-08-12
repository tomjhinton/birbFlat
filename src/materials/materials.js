
import { extend, useLoader } from "@react-three/fiber";
import { shaderMaterial, useTexture } from "@react-three/drei";
import * as THREE from 'three'
import { TextureLoader } from 'three/src/loaders/TextureLoader'

import vertexShaderYellow from './shaders/yellow/vertex.js'
import fragmentShaderYellow from './shaders/yellow/fragment.js'

import vertexShaderLightYellow from './shaders/lightYellow/vertex.js'
import fragmentShaderLightYellow from './shaders/lightYellow/fragment.js'

import vertexShaderBlack from './shaders/black/vertex.js'
import fragmentShaderBlack from './shaders/black/fragment.js'

import vertexShaderWhite from './shaders/white/vertex.js'
import fragmentShaderWhite from './shaders/white/fragment.js'

import vertexShaderRed from './shaders/red/vertex.js'
import fragmentShaderRed from './shaders/red/fragment.js'




const YellowMaterial = shaderMaterial(
    {
      uTime: 0,
      transparent: true,
      uSquishStrength: 0,
      uMousePosition: [0, 0, 0],
      u_progress: 0,
      uTexture: null,
      uTexture2: null,
      uTexture3: null,
      uTexture4: null
      
    },
    vertexShaderYellow,
    fragmentShaderYellow
  );
  
  extend({ YellowMaterial });

  export { YellowMaterial}

  const LightYellowMaterial = shaderMaterial(
    {
      uTime: 0,
      uSquishStrength: 0,
      uMousePosition: [0, 0, 0],
      u_progress: 0,
      uTexture: null,
  
      
    },
    vertexShaderLightYellow,
    fragmentShaderLightYellow
  );
  
  extend({ LightYellowMaterial });

  export { LightYellowMaterial}

  const BlackMaterial = shaderMaterial(
    {
      uTime: 0,
      uSquishStrength: 0,
      uMousePosition: [0, 0, 0],
      u_progress: 0,
      uTexture: null,
      
    },
    vertexShaderBlack,
    fragmentShaderBlack
  );
  
  extend({ BlackMaterial });

  export { BlackMaterial}

 
  

  const WhiteMaterial = shaderMaterial(
    {
      uTime: 0,
      uSquishStrength: 0,
      uMousePosition: [0, 0, 0],
      u_progress: 0,
      uTexture: null
      
      
    },
    vertexShaderWhite,
    fragmentShaderWhite
  );
  
  extend({ WhiteMaterial });

  export { WhiteMaterial}

  const RedMaterial = shaderMaterial(
    {
      uTime: 0,
      uSquishStrength: 0,
      uMousePosition: [0, 0, 0],
      u_progress: 0,
      uTexture: null
      
    },
    vertexShaderRed,
    fragmentShaderRed
  );
  
  extend({ RedMaterial });

  export { RedMaterial}