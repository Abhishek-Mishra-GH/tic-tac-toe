import { useState } from 'react'
import './App.css'

function Square({value, handleClick}) {
  return <div className='square' onClick={handleClick}>
    {value}
  </div>
}


function Board() {  

  const [boxValues, setBoxValues] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  function handleClick(i) {
    if(boxValues[i]) return;
    const isWinner = calculateWinner(boxValues);
    if(isWinner) return;
    const newBoxValues = [...boxValues];
    if(isXNext) {
      newBoxValues[i] = "X";
    } else {
      newBoxValues[i] = "O"
    }
    setBoxValues(newBoxValues);
    setIsXNext(current => setIsXNext(!current));
  }

  let content;
  let winner = calculateWinner(boxValues);
  if(winner) {
    content = "The Winner is: " + winner;
  } else { 
    let player = isXNext ? "X" : "O";
    content = "Player: " + player;
  }
  

  return ( 
   <>
   <div> {content} </div>
  <div className='board'>
    <div className='row flex-align'>
      <Square value={boxValues[0]} handleClick={() => {handleClick(0)}}/>
      <Square value={boxValues[1]} handleClick={() => {handleClick(1)}}/>
      <Square value={boxValues[2]} handleClick={() => {handleClick(2)}}/>
    </div>
    <div className='row flex-align'>
      <Square value={boxValues[3]} handleClick={() => {handleClick(3)}}/>
      <Square value={boxValues[4]} handleClick={() => {handleClick(4)}}/>
      <Square value={boxValues[5]} handleClick={() => {handleClick(5)}}/>
    </div>
    <div className='row flex-align'>
      <Square value={boxValues[6]} handleClick={() => {handleClick(6)}}/>
      <Square value={boxValues[7]} handleClick={() => {handleClick(7)}}/>
      <Square value={boxValues[8]} handleClick={() => {handleClick(8)}}/>
    </div>
  </div>
  </>);
}

function App() {
  
  return (
    <div>
    <Board/>
    </div>
  )
}

function calculateWinner(boxValues) {

  const possibleWins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  for(let i = 0; i < possibleWins.length; i++) {
    const [a, b, c] = possibleWins[i];
    if(boxValues[a] === boxValues[b] && boxValues[a] === boxValues[c]) {
      return boxValues[a];
    }
  }
  
  return null;

}

export default App