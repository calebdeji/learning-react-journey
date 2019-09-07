
import React from 'react'
import ReactDOM from 'react-dom'
import Comment from './comment-component'
import './App.css';
import './index.css';
import image from './cartoon.png'
import * as serviceWorker from './serviceWorker'

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();



const timer = () => {
    const timerElement = (
        <div>
            <h1> Hello World, your favourite budding dev is learning react</h1>
            <h3>See this timer</h3>
            <p>{new Date().toLocaleTimeString()}</p>
        </div>
    );
    ReactDOM.render(timerElement, document.getElementById('root'));
}
setInterval(timer, 1000);

/**
 * 
 * i should have created another fuile but i don't know how to link files in react yet. 
 * to create a component in react using es6 arrow function
 * @param {*} props properties
 */
const Keynote = (props) =>{
    return <h1>{props.name}, You know you will not learn anything if you don't have anything to learn</h1>
}

const ElementKeyPoint = ()=>{
    return(
        <div>
            <Keynote name="Caleb" />
            <Keynote name="Deji" />
            <Keynote name="Grace" />
        </div>
    );
}

const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
      avatarUrl: image,
    }
}; 
console.log("avatar link", comment);
/**
 * whenever you want to render a component surround it with a tag
 */
ReactDOM.render(<ElementKeyPoint/>,document.getElementById("keynote"));
ReactDOM.render(
    <Comment 
        author={comment.author}
        text = {comment.text}
        date = {comment.date}
    />, 
    document.getElementById("comment")
);
// timer();
