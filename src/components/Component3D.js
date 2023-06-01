import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { Estacion } from './components3D/Estacion';
import { OrbitControls } from "@react-three/drei"; 

const Component3D = () => {
  return (
    <>
      <div>
        <Canvas camera={{zoom:1,  position:[1,0.5,0]}} style={{widt:"100%", height:"92vh"}}>
        <ambientLight intensity={0.5} />
        <pointLight position={[35, 35, 0]} intensity={ 0.4 }/>
        <pointLight position={[-35, 35, 0]} intensity={ 0.4 }/>
        <Suspense fallback={null}>
          <Estacion />
        </Suspense>
        <OrbitControls
          autoRotate={true}
          autoRotateSpeed={0.5}
          enableDamping={true} // Habilitar el movimiento suave
          dampingFactor={0.1} // Factor de amortiguación (ajustar según preferencia)
          rotateSpeed={0.05} // Velocidad de rotación (ajustar según preferencia)
          minPolarAngle={Math.PI / 2} // Ángulo mínimo de inclinación de la cámara (45 grados)
          maxPolarAngle={Math.PI / 4} // Ángulo máximo de inclinación de la cámara (90 grados)
          minAzimuthAngle={-Math.PI * 0.008} // Ángulo mínimo de giro horizontal de la cámara (-0.8% de 360 grados)
          maxAzimuthAngle={Infinity} // Ángulo máximo de giro horizontal de la cámara (0.8% de 360 grados)
        />
      </Canvas>
      </div>
    </>
  );
}

export default Component3D;
