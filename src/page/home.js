import React from 'react';
import './App.css';
import { FirstComponent } from './components/FirstComponent';


const home = () => {
  return (
    <div className="App">
        <header className="App-header">
            <FirstComponent />
        </header>
        <h1>pagina de home</h1>
    </div>
  )
}
export default home
