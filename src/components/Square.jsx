import react from 'react';
import './style';

export default function Square(props){
    return (

        <button 
        className="square" 
        onClick={props.onClick}
        >
            {props.value}
        </button>
    )
}