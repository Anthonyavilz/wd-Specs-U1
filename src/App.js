import {useState} from 'react'
import logo from './logo.svg';
import './App.css';
import Square from './Square';

function App() {
  const [squares, setSquares] = useState(['','','','','','','','',''])
  const [player, setPlayer] = useState(true)
  
  const handleClick = () => {
    setSquares(['','','','','','','','',''])
    setPlayer(true)
  }

  const calculateWinner = (arr) => {
    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
    ]

    //Above are the indexes, the below code checks in the squares array what the 'winning' array is because we 
    //hardcoded the winning lines so once the if statements checks what combo is winning then what ever the 
    //initial value is 'X' or 'O' then that's what wins.

    for(let i = 0; i < lines.length; i++){
      const [a, b, c] = lines[i]
      if (
        arr[a] && arr[a] === arr[b] && arr[a] === arr[c]
      ) {
        return `${arr[a]} won!`
      }
    }
    return 'Who will win?'
  }

  return (
    <div className="App">
      <span>{calculateWinner(squares)}</span>
      <div className='container'>
        {squares.map((val, index) => {
          return (
            <Square 
                squares={squares}
                setSquares={setSquares}
                player={player}
                setPlayer={setPlayer}
                squareValue={val}
                index={index}
            />
          )
        })}
      </div>
      <button onClick={handleClick}>Reset</button>
    </div>
  );
}

export default App;
