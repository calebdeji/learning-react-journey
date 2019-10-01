
import React from 'react'
import ReactDOM from 'react-dom'
import Nav from './components/nav/nav'
import Body from './components/indexmain/main'
import ToggleButton from './components/swicth/swicth'
import Footer from './components/footer/footer'
import './App.css';
import './index.css';
import * as serviceWorker from './serviceWorker'

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

function All(){
    return(
        <div className = "all">
            <Nav/>
            <Body text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci nam voluptas reprehenderit nulla dignissimos quos facere molestias ratione temporibus quia consequuntur, aut distinctio nobis doloribus deleniti perspiciatis quod consequatur voluptatibus harum illum. Quas repudiandae fugiat ab esse deserunt accusamus dolor quia aliquid, minus magnam eligendi pariatur consequatur, natus nostrum velit accusantium ducimus, quisquam voluptas possimus? Autem, consectetur? Maxime molestias earum est quia nisi cumque facere, alias eum id veniam velit vel quae amet suscipit! Culpa ab minima natus, tempore fuga, facere deleniti officiis magni fugiat recusandae id inventore. Ipsum voluptates repellat voluptatum suscipit assumenda ea porro eligendi perspiciatis nostrum nam!"/>
            <ToggleButton/>
            <Footer/>
        </div>
    )
}
ReactDOM.render(<All/>,document.getElementById('body'));
