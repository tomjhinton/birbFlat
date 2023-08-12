

import React, { useEffect, useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";
import * as THREE from 'three'
import { useFrame } from "@react-three/fiber";
import Title from "./Title/Title.js"

import { yellowMaterial, lightYellowMaterial, redMaterial, blackMaterial, whiteMaterial } from "./materials/materials";



export default function Experience(props) {
  const { nodes, materials } = useGLTF("eric.glb");


  const yellowMaterial = useRef()
  const lightYellowMaterial = useRef()
  const blackMaterial = useRef()
  const whiteMaterial = useRef()
  const redMaterial = useRef()

  let groupRef = useRef()

  let materialArray = [yellowMaterial, lightYellowMaterial, blackMaterial, whiteMaterial, redMaterial]
  const eric = useTexture('eric.jpeg');
  eric.flipY = false
  console.log(eric)

  useEffect(() =>{

    materialArray.map(x => {

      x.current.material.uniforms.uTexture.value = eric
    } )

  })

  useFrame(() => {
    // Update the time uniform
    materialArray.map(x=>{
       x.current.material.uniforms.uTime.value += 0.01;
   })

    if(groupRef){
      groupRef.current.rotation.x += 0.001
      groupRef.current.rotation.z += 0.0013

    }
    
  })

  const handleMouseOver = (event) => {

    console.log(event)

    event.object.material.uniforms.uMousePosition.value = event.point
    
    // materialArray.map(x =>{

    //   x.current.material.uniforms.uMousePosition.value = event.point
    // })

  };


  const handleMouseLeave = (event) => {
    
    materialArray.map(x =>{

      x.current.material.uniforms.uMousePosition.value = [0,0,0]
    })

  };



  return (
    <>
   <OrbitControls />
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={2.463}
      
      ref={groupRef}>
        <mesh
          castShadow
          receiveShadow
          onPointerMove={handleMouseOver}
      onPointerLeave={handleMouseLeave}
          geometry={nodes.Plane_1.geometry}
          ref={yellowMaterial}
         
        >
          <yellowMaterial side={THREE.DoubleSide} />
        </mesh >
        <mesh
          castShadow
          receiveShadow
          onPointerMove={handleMouseOver}
      onPointerLeave={handleMouseLeave}
          geometry={nodes.Plane_2.geometry}
          ref={blackMaterial} 
            
        >
        <blackMaterial side={THREE.DoubleSide} />
      </mesh >
        <mesh
          castShadow
          receiveShadow
          onPointerMove={handleMouseOver}
      onPointerLeave={handleMouseLeave}
          geometry={nodes.Plane_3.geometry}
          ref={whiteMaterial} 
           
        >
        <whiteMaterial side={THREE.DoubleSide} />
      </mesh >
        <mesh
          castShadow
          receiveShadow
          onPointerMove={handleMouseOver}
      onPointerLeave={handleMouseLeave}
          geometry={nodes.Plane_4.geometry}
          ref={redMaterial} 
            
        >
        <redMaterial side={THREE.DoubleSide} />
      </mesh >
        <mesh
          castShadow
          receiveShadow
          onPointerMove={handleMouseOver}
      onPointerLeave={handleMouseLeave}
          geometry={nodes.Plane_5.geometry}
          ref={lightYellowMaterial} 
           
        >
        <lightYellowMaterial side={THREE.DoubleSide} />
      </mesh >
      </group>
    </group>
    </>
  );
}

useGLTF.preload("eric.glb");



