import React, {Fragment}from 'react';
import './multiple.css'
const listObject = [
    {Project : "To-Do App", id:"1", link :"https://to-do-web-app.netlify.com"},
    {Project : "Game-Quiz", id:"2", link :"https://game-quiz.netlify.com"},
    {Project : "Voice-My-Text", id:"3", link : "https://voice-my-text.netlify.com"},
    {Project : "Play with API", id:"4", link : "https://play-with-api.netlify.com"}
];
class ProjectList extends React.Component{
    constructor(props){
        super(props);
        this.props = props;
    }
    render(){
        return(
            <Fragment>
                {
                    this.props.list.map((currentValue,index)=>{
                        return (
                            <li key ={currentValue.id}> {index + 1} {currentValue.Project} link : <a href ={currentValue.link} className = "project-link">{currentValue.link}</a></li>
                        );
                    })
                }
            </Fragment>
        )
    }
}
export default class MultipleList extends React.Component{
    
    render(){
        return(
            <div className = "container">
                
                <div>
                    <h3>My Recent Projects</h3>
                    <span></span>
                    <ul>
                        <ProjectList list={listObject}/>
                    </ul>
                </div>
            </div>
        ) 
    }
}