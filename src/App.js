import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  // squares = [null, null, null, null, null, null, null, null, null]
  // setSquares = [null, null, null, null, null, null, null, null, null] //UPDATED WHEN CLICKED
  const [isPlayerOne,setIsPlayerOne] = useState(true);

  const handleSquares = (index) => { // replace the null value to an X 
    let updatedSquares = [...squares] // new array variable updatedSquares to a copy of squares array
    if(isPlayerOne && updatedSquares[index]=== null){
      updatedSquares[index] = "❌"   
    }  else if (!isPlayerOne && updatedSquares[index]=== null){
      updatedSquares[index] = "⭕️"
    } 
  
    setSquares(updatedSquares)
    setIsPlayerOne(!isPlayerOne)  
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