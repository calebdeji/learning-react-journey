import React from 'react'
class UserGreeting extends React.Component{
    constructor(props){
        super(props);
        this.props = props;
    }
    render(){
        return(
            /**
             * applying inline if   
             */
            <p>Welcome Back {this.props.userName.length!==0 && this.props.userName}</p>
            /**
             * you can use ternary operator for inline div
             */
        );
    }
}
class GuestGreeting extends React.Component{
    render(){
        return(
            <p>Please Sign Up</p>
        );
    }
}
export default class Greeting extends React.Component{
    constructor(props){
        super(props);
        this.props = props;
        /**
         * user logged in status is fetched from localstorage
         */
        this.storageStatus = localStorage.getItem('user-status');
        if(this.storageStatus){
            this.state = {isUserLoggedIn: true};
        }
        else{
            this.state = {isUserLoggedIn : false}
        }
    }
    componentDidMount(){
        if(!this.state.isUserLoggedIn){
            localStorage.setItem("user-status",true);
        }
    }
    render(){
        if(this.state.isUserLoggedIn){
            console.log("logged in : ",this.state.isUserLoggedIn);
            return(
                <UserGreeting userName="Caleb"/>
            );
            
        }
        else{
            return <GuestGreeting/>;
        }
    }
}