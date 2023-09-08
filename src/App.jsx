import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Header from './components/Header';
import Player from './components/Player';
import Board from './components/Board';
import Square from './components/Square';
import './style.css';

function App() {
  
  return (
    <div>
      <Header/>
      <Player whichPlayer='X'/>
      <Player whichPlayer='O'/>
      <Board/>
    
    
    </div>

  );
}

export default App;
