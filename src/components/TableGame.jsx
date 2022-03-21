import {useState} from 'react';
import './style.css';



export default function TableGame( ){

    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isX, setIsX] = useState(true);
    
    const calculateWinners = (squares) => {
        const winningPatterns = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],
        ]

        for(let i = 0; i< winningPatterns.length; i++) {
            const [a,b,c] = winningPatterns[i];
            if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
                return squares[a];
            }
        }

        return null
    }

    const handleClick = (i)=>{
        if( calculateWinners(squares) || squares[i]) {
            return
        }
      
        squares[i] = isX ?  '❌' : '⭕';
        setSquares(squares);
        setIsX(!isX);
    }

    const Square = ({value, onClick})=>{
        return (
            <button 
            className="square"
            onClick={onClick}
            >
            {value}
            </button>
        )
    }

    const winner = calculateWinners(squares);

    const restartGame = () =>{
        setIsX(true);
        setSquares(Array(9).fill(null))
    }

    let status;

    if(winner) {
        
        status = `Winner: ${winner}`;
    } else {
        status = `Next player: ${isX ? 'X' : 'O'}`
    }
 
    const renderSquare = (a) => {
        return <Square value={squares[a]} onClick={()=>handleClick(a)}/>
    }
    

    function Board(){
        return(
            <div className="board">
               <div className="board-row">
                   {renderSquare(0)}
                   {renderSquare(1)}
                   {renderSquare(2)}
               </div>
               <div className="board-row">
                   {renderSquare(3)}
                   {renderSquare(4)}
                   {renderSquare(5)}

               </div>
               <div className="board-row"> 
                    {renderSquare(6)}
                    {renderSquare(7)}
                    {renderSquare(8)}
               </div>
               {status}
               <span className="buttonRestartGame" onClick={restartGame}>Restart</span>
            </div>
        )
    }

return(
    <div>
        {Board()}
    </div>
)


}