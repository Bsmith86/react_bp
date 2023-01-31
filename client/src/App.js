import { useState } from 'react';
import './App.css';
import Board from './components/board';
import Header from './components/header'
import Player from './components/player';


function App() {

let [winner, setWinner] = useState("X");

//O now wins

setTimeout(() => {
  if (winner === "X") {
    setWinner("O")
  }
  else if (winner === "O") {
    setWinner("X")
  }
  
}, 3000)

  return (
    <div className="App">
      <Header />
      {/* X */}
      <Player whichPlayer="X" winner={winner}/>
      {/* O */}
      <Player whichPlayer="O" winner={winner}/>
      <Board />
    </div>
  );
}

export default App;
