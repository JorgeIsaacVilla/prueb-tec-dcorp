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
    </div>
  );
}

export default App;
