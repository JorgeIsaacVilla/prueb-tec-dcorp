import React, { useState } from 'react';
import '../style.css';


export const FirstComponent = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (index) => {
    setSelectedItem(index);
    
  };

  const getItemClassName = (index) => {
    return selectedItem === index ? 'selected' : '';
  };

  return (
    <div className="firstComponentContainer">
      <div className="firstComponentContainerLeft">
        <div className="logoMarvel"></div>
        <ul>
          <li
            className={getItemClassName(0)}
            onClick={() => handleItemClick(0)}
            id="home" >
            HOME
          </li>
          <li
            className={getItemClassName(1)}
            onClick={() => handleItemClick(1)}
            id="characters">
            PERSONAJES
          </li>
        </ul>
      </div>
      <div className="firstComponentContainerRight">
        <div className="elementsContainerRight campaign"></div>
        <div className="elementsContainerRight mesh"></div>
      </div>
    </div>
  );
};