import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import resetImg from './Reset.jpeg';
function App() {
  return (<>
  <Board />
  </> 

  );
}




function Square({value, onSquareClick})
 {
  //const [value,setValue] = useState(null);

  return <button className="square" 
                  onClick={onSquareClick} > 
                     {value}
          </button>;
 
}

function Board() {
  const [isXnext,setisXsNext] = useState(true);
  const [squares,setSquares] = useState(Array(9).fill("'"))
  const nextSquare = squares.slice();

 

  function handleClick(i)
  {
    if(squares[i]!="'")
    {
      return;
    }
    if(isXnext==true)
    {
      nextSquare[i] = "X";
    }
    else
    {
      nextSquare[i] = "0";
    }
    setisXsNext(!isXnext);
    
    
    setSquares(nextSquare);
  }

  const reset = () => 
  {
    setSquares(Array(9).fill("'"));
    setisXsNext(true);
  }
  return(
    <>
    <div className = "Boardx">
    <div className = "row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
        <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
        <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
      </div>
      <div className = "row">
        <Square value={squares[3]}onSquareClick={() => handleClick(3)}/>
        <Square value={squares[4]}onSquareClick={() => handleClick(4)}/>
        <Square value={squares[5]}onSquareClick={() => handleClick(5)}/>
      </div>
      <div className = "row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
        <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
      </div>
      
      <img src={resetImg} alt="Description" onClick = {reset} />      
      </div>
      
      </>
  ) ;
}


export default App;
