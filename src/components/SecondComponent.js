import React, { useState } from 'react';
import '../style.css';
import video from "../assets/img/videos/video2.mp4"

export const SecondComponent = () => {
  const [progress, setProgress] = useState(40); // automate progress bar(ej: 50%)

  return (
    <div className="secondComponentContainer">
      <div className="ContainerProgress">
        <h2 className='tittleProgress'>PROGRESO DE PELÍCULAS PRODUCIDAS</h2>
        
          <p> (82) Películas Meta de Producción</p>
          <progress className="customProgress" value={progress} max={100}></progress>
          <p>{progress}% Películas Producidas</p>
        
      </div>
      <div className="ContainerImage" style={{color:"white"}}>
        <video src={video} controls></video>
      </div>
      <div className="ContainerImage" style={{marginRight:"62px", display: 'flex', justifyContent: 'center' }}><img src='https://cloudfront-us-east-1.images.arcpublishing.com/copesa/VLIY2K7RARHTZPWKV6XCAI6RDE.jpg' /></div>
    </div>
  );
};

export default SecondComponent