import React from 'react';
// import ReactDOM from 'react-dom';
import './form.css';

export default class Form extends React.Component{
    constructor(props){
        super(props);
        this.props = props;
    }
    render(){
        return(
            <form action="#" method="POST" className="form">
                <input type="email" placeholder="email" className="form__field"/>
                <input type="password" placeholder="****" className="form__field"/>
                <input type="submit" value="Login" className="submit_button"/>
            </form>
        );
    }
}