import React, { useState } from 'react';
import './App.css';
import { SecondComponent } from './components/SecondComponent';
import { ThirdComponent } from './components/ThirdComponent';
import Component3D from './components/Component3D';

function App() {
  const [selectedItem, setSelectedItem] = useState('home');

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="App">
      
      <div className="firstComponentContainer">
        <div className="firstComponentContainerLeft">
          <div className="logoMarvel"></div>
          <ul>
            <li
              id="home"
              onClick={() => handleItemClick('home')}
              className={selectedItem === 'home' ? 'selected' : ''}
            >
              HOME
            </li>
            <li
              id="characters"
              onClick={() => handleItemClick('characters')}
              className={selectedItem === 'characters' ? 'selected' : ''}
            >
              PERSONAJES
            </li>
          </ul>
        </div>
        <div className="firstComponentContainerRight">
          <div className="elementsContainerRight campaign"></div>
          <div className="elementsContainerRight mesh"></div>
        </div>
      </div>

      <div className='canva'>
        {selectedItem === 'home' ? <Component3D /> : null}
        {selectedItem === 'characters' ? (
          <>
            <SecondComponent />
            <ThirdComponent />
          </>
        ) : null}
      </div>

      {/*
      <div>
        <div className='technical-support'>
          <div></div>  {/*aca ira un width 100% con un height de 2vh en el total superior derecho una crus que simulará boton de cerrar.
          <h3>SOPORTE TÉCNICO.</h3>
          <p>Si tienes consultas sobre el proceso de desarrollo de esta web, puedes contactar con el soporte técnico por medio del siguiente enlace.</p>
          <a href='https://www.linkedin.com/in/jorge-villa-l%C3%B3pez-742647b5/'>https://www.linkedin.com/in/jorge-villa-l%C3%B3pez-742647b5/</a>
          <p>O tambien puedes visualizar su experiencia. Haz click en este enlace:</p>
          <a href='https://jorgeisaacvilla.github.io/my_portafolio/'>https://jorgeisaacvilla.github.io/my_portafolio/</a>
        </div>
      </div>*/} 
    </div>
  );
}

export default App;
