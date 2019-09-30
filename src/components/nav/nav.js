import React from 'react'
import Link from '../anchor/link'
import './nav.css'

export default function Nav(props){
    return(
        <nav>
            <Link homeLink="#body" linkAlternateText="Just a link in the nav bar" linkText="Facebook"/>
            <Link homeLink="#" linkAlternateText="instagram alternate text" linkText="Instagram"/>
            <Link homeLink="#" linkAlternateText="twitter alternate text" linkText="Twitter"/>
        </nav>
    );
}