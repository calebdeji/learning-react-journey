import React from 'react'
import './link.css'

export default function DefaultLink({ homeLink, linkAlternateText, linkText }){
    return(
        <a href={homeLink} alt={linkAlternateText} className ="nav-link">{linkText}</a>
    );
}