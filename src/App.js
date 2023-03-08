import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  // squares = [null, null, null, null, null, null, null, null, null]
  // setSquares = [null, null, null, null, null, null, null, null, null] //UPDATED WHEN CLICKED
  const [isPlayerOne,setIsPlayerOne] = useState(true);
  const [winner,setWinner] = useState (null); 
  const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const handleSquares = (index) => { // replace the null value to an X 
    let updatedSquares = [...squares] // new array variable updatedSquares to a copy of squares array
    const theWinner = () => {
        for (let i = 0; i < winCombos.length; i++){
        const [a, b, c] = winCombos[i]; 
        if (squares[a] &&     
          // if there is a value in square a ,
          squares[a] === squares[b]
          // and it is equal to what is in square in square b, and
           && squares[a] === squares[c]) {
            // it is equal to what is in square c
          // isPlayerOne ? setWinner("playa one"): setWinner("playa two")
          // return alert(`the winner is :${winner}`)
          // return the value in square a
          if(winner !== null){
            return(null)
          }
          }
         else if(isPlayerOne === true){
            setWinner("playa one")
          }
          else if(isPlayerOne === false) {
            setWinner("playa two")
          }
        }
      return null 
}
    if(isPlayerOne && updatedSquares[index]=== null){
      updatedSquares[index] = "❌"   
      theWinner()
      setIsPlayerOne(false) 
    }  else if (!isPlayerOne && updatedSquares[index]=== null){
      updatedSquares[index] = "⭕️" 
      theWinner()
      setIsPlayerOne(true)
    } 
    setSquares(updatedSquares) 
    if(winner !== null){
      alert(`the winner is ${winner}`)
    }
    // setIsPlayerOne(!isPlayerOne)  
  } 

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className="game-board">
        {squares.map((value,index)=>{
          return (
            <Square 
            value={value}
              key={index}
              index={index}
              handleSquares={handleSquares}/>
          )
        })}
      </div>
     </>
    ) 
}

export default App