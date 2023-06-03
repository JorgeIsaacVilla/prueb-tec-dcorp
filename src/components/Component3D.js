import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { Estacion } from './components3D/Estacion';
import { OrbitControls } from "@react-three/drei";
import { Mark42 } from "./components3D/Mark42"
import '../style.css';

const Component3D = () => {

  const desappearCanva3d = () => {
    const closeCanva = document.querySelector(".close");
    const mark42 = document.querySelector(".mark-42");
    const openCanva = document.querySelector(".visor-bottom");

    closeCanva.addEventListener("click", () =>{
      mark42.classList.add("appear");
    });

    openCanva.addEventListener("click", () => {
      mark42.classList.remove("appear");
    });
  }

  return (
    <>
      <div className="description-project">
        <h1>Bienvenido a mi prueba de conocimiento con React</h1>
        <h2>JORGE ISAAC VILLA LÓPEZ</h2>
        <div className="photo"></div>
        <h3>Con el fin de poner a pruebas mis conocimientos con React en cuanto a codificación, consumo de API´s, navegación interna de la página web, maquetación web, y estética del proyecto. 🐱‍🏍 Espero que les guste!⚡</h3>
      </div>

      <Canvas camera={{zoom:1,  position:[1,0.5,0]}} className="canva-estation-nave">
          <ambientLight intensity={0.5} />
          <pointLight position={[35, 35, 0]} intensity={ 0.4 }/>
          <pointLight position={[-35, 35, 0]} intensity={ 0.4 }/>
          <Suspense fallback={null}>
            <Estacion />
          </Suspense>
          <OrbitControls  
            enableZoom={true}  //Deshabilita la funcionalidad de zoom
            minDistance={-2} // Distancia mínima de zoom permitida
            maxDistance={2} // Distancia máxima de zoom permitida
            autoRotate={true}
            autoRotateSpeed={0.5}
            enableDamping={false} // Habilitar el movimiento suave
            dampingFactor={0.1} // Factor de amortiguación (ajustar según preferencia)
            rotateSpeed={0.05} // Velocidad de rotación (ajustar según preferencia)
            minPolarAngle={Math.PI / 2} // Ángulo mínimo de inclinación de la cámara (45 grados)
            maxPolarAngle={Math.PI / 4} // Ángulo máximo de inclinación de la cámara (90 grados)
            minAzimuthAngle={-Math.PI * 0.008} // Ángulo mínimo de giro horizontal de la cámara (-0.8% de 360 grados)
            maxAzimuthAngle={Infinity} // Ángulo máximo de giro horizontal de la cámara (0.8% de 360 grados)
          />
      </Canvas>

    <div className="mark-42 appear">
    <Canvas camera={{zoom:20,  position:[50,0,50]}}>
      <ambientLight intensity={1} />
          <pointLight position={[100, 100, 100]} intensity={ 25 }/>
          <pointLight position={[-100, -100, -100]} intensity={ 25 }/>
          <Suspense fallback={null}>
            <Mark42 />
          </Suspense>
          <OrbitControls
          autoRotate={true}
          autoRotateSpeed={0.5}
          />
      </Canvas>
      <button onClick={desappearCanva3d} className='close'>CERRAR</button>
    </div>
      
    <img src="https://i.gifer.com/MImN.gif" className="visor-bottom" onClick={desappearCanva3d}></img>

    </>
  );
}
export default Component3D;
