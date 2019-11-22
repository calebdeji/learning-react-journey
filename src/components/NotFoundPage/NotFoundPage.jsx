import React from 'react';
import './notFoundPage.css';
import Gif from './not.gif';

export default class NotFoundPage extends React.Component{
    constructor(props){
        super(props);
        this.props = props;
    }
    render(){
        return(
            <div className="not-found-section">
                <img src={Gif} alt="Not found animation" className="not-found-section__animation-gif"/>
                <h1 className="not-found-section__text">Oops, this page seems not to exist on this server. We are gonna look into this</h1>
            </div>
        );
    }
}