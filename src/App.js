import React from 'react';
import './App.css';
import DrumContainer from './components/DrumContainer.js'
function App() {
  return (
    <div className="App">
      <header className="center">
        <h1 className="headCenter" aria-label={`this project is made for freeCodeCamp`}>Drum Machine</h1>
      </header>
      <DrumContainer />
    </div>
  );
}

export default App;
