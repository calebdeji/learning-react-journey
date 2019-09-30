import React from 'react'
// import ReactDOM from 'react-dom'
import './link.css'

export default function DefaultLink(props){
    return(
        <a href={props.homeLink} alt={props.linkAlternateText}>{props.linkText}</a>
    );
}