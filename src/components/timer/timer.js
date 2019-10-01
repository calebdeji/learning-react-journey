import React from 'react'
export default class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {date : new Date()};
        this.tick = this.tick.bind(this);
    }

    /**
     * life cycles methods implementation
     */
    componentDidMount(){
        this.timerId = setInterval(()=>{
            this.tick();
        },1000);
    }
    componentWillUnmount(){
        clearInterval(this.timerId);
    }

    tick(){
        this.setState({
            date : new Date()
        });
    }
    /**
     * the render method will be called anytime there exists an update
     */
    render(){
        //replacing the props to state
        return(
            <div>
                <h1>Hello World, Look at the time updates itself</h1>
                <h2>It is {this.state.date.toLocaleString()}</h2>
            </div>
        );
    }
}
