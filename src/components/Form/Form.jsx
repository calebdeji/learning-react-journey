import React from 'react';
// import ReactDOM from 'react-dom';
import './form.css';

export default class Form extends React.Component{
    constructor(props){
        super(props);
        this.props = props;
        this.handlePasswordInput = this.handlePasswordInput.bind(this);
        this.state = {};
    }
    handlePasswordInput(){
        
    }
    render(){
        return(
            <form action="#" method="POST" className="form">
                <input type="email" placeholder="email" className="form__field" autoFocus/>
                <input type="password" placeholder="****" className="form__field" onInput={this.handlePasswordInput}/>
                <input type="submit" value="Login" className="form__button"/>
            </form>
        );
    }
}