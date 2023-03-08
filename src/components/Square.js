import React from 'react'
  // const [value, setValue] = useState(null);


const Square = ( {value, index, handleSquares} ) => {
  const handleClick = () => {
    handleSquares(index)
//     if(setSquares[index] || theWinner ((setSquares))) 
//  {  return;
//  }
} 
  

  return (
    <div className="square" onClick={handleClick}>
      {value}
    </div>
  )
}
export default Square

