import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import mark42 from "./Mark42.gltf"

export function Mark42(props) {
  const { nodes, materials } = useGLTF(mark42)
  return (
    <group {...props} dispose={null}>
      <group position={[0, -1.82, 1.86]} rotation={[-Math.PI, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <primitive object={nodes._rootJoint} />
          <mesh geometry={nodes.Object_4.geometry} material={materials.mark_42__mark42_d_tga} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/Mark42.gltf')
