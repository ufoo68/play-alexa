import React from 'react'
import './App.css'
const m4a = require('./assets/playAlexa.m4a')

const audio = new Audio(m4a)
const playAlexa = () => audio.play()

function App() {
  return (
    <div className="App">
     <button onClick={playAlexa} className="playButton">ラジオ体操</button>
    </div>
  );
}

export default App;
