import React from 'react'
import Clock from '../timer/timer'
import './main.css'
export default function Body(props){
    return(
        <div className="timer">
            <Clock/>
            <p>{props.text}</p>
        </div>
    );
}