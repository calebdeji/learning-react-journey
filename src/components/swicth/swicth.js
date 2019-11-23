import React from 'react'
import './switch.css'
export default class ToggleButton extends React.Component{
    constructor(props){
        super(props);
        this.state = {toogle: false};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(data){
        this.setState((state)=>({
            toogle : !state.toogle
        }));
        // console.log(data)
    }
     //yet to learn, to pass parameter to an handler
     /**
      *  ononClick={
      *     (event)=>{
      *         this.whatever(PARAMETER,EVENT)
      *     }
      * }
      */
    render(){
        return(
            <button className="button-toogle" onClick={ this.handleClick }>{this.state.toogle ? 'on' : 'off'}</button>
            // <button className="button-toogle" onClick={ () => this.handleClick('I am here...') }>{this.state.toogle ? 'on' : 'off'}</button>

        )
    }
}