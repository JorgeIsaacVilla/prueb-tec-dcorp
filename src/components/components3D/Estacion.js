import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import estacion3D from "./estacion.gltf"

export function Estacion(props) {
  const { nodes, materials } = useGLTF(estacion3D)
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.Plane_Details_Cevre_0.geometry} material={materials.Details_Cevre} />
          <mesh geometry={nodes.Plane_Details_Cevre_0_1.geometry} material={materials.Details_Cevre} />
          <mesh geometry={nodes.Plane_Details_Cevre_0_2.geometry} material={materials.Details_Cevre} />
        </group>
        <mesh geometry={nodes.Cylinder001_Base_0.geometry} material={materials.Base} position={[0, 12.32, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      </group>
    </group>
  )
}

useGLTF.preload(estacion3D)
/*('/estacion.gltf')*/