import React from 'react';
import './App.css';
import { FirstComponent } from './components/FirstComponent';
import { SecondComponent } from './components/SecondComponent';
import { ThirdComponent } from './components/ThirdComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FirstComponent />
      </header>
      <div className='canva'>
        <SecondComponent />
        <ThirdComponent />
      </div>
    </div>
  );
}

export default App;
