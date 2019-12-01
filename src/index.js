
import React from 'react'
import ReactDOM from 'react-dom'
// import Nav from './components/nav/nav'
import {Route, Link, BrowserRouter as Router, Switch} from 'react-router-dom';
import Form from './components/Form/Form'
import Greeting from './components/Greeting/greeting'
import Body from './components/indexmain/main'
import MultipleList from './components/MultipleList/MultipleList'
import ToggleButton from './components/swicth/swicth'
import Calculator from './Temparature/Calculator/Calculator'
import Footer from './components/footer/footer'
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import './App.css';
import './index.css';
import * as serviceWorker from './serviceWorker'

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

/**
 * to save user session status
 */

class Routing extends React.Component{
    constructor(props){
        super(props);
        this.props = props;
    }
    render(){
        return(
            <Router>
                <nav className="nav">
                    <Link to= '/' className = "nav__element">Home</Link>
                    <Link to = '/components/Form' className = "nav__element">Form</Link>
                    <Link to = '/Temperature/Calculator' className = "nav__element">Calculator</Link>
                </nav>
                <Switch>
                    <Route exact path = '/' component={All}/>
                    <Route path ='/components/Form' component={Form}/>
                    <Route path = '/Temperature/Calculator' component={Calculator}/>
                    <Route component ={NotFoundPage}/>
                </Switch>
            </Router>
        );
    }
}
class All extends React.Component{
    
    render(){
        return(
            
            <div className = "all">
                {/* the clock component was already called in the main component */}
                <Greeting/>
                
                <Body text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci nam voluptas reprehenderit nulla dignissimos quos facere molestias ratione temporibus quia consequuntur, aut distinctio nobis doloribus deleniti perspiciatis quod consequatur voluptatibus harum illum. Quas repudiandae fugiat ab esse deserunt accusamus dolor quia aliquid, minus magnam eligendi pariatur consequatur, natus nostrum velit accusantium ducimus, quisquam voluptas possimus? Autem, consectetur? Maxime molestias earum est quia nisi cumque facere, alias eum id veniam velit vel quae amet suscipit! Culpa ab minima natus, tempore fuga, facere deleniti officiis magni fugiat recusandae id inventore. Ipsum voluptates repellat voluptatum suscipit assumenda ea porro eligendi perspiciatis nostrum nam!"/>
                <MultipleList/>
                <ToggleButton/>
                <Footer/>
            </div>
        )
    }
}

ReactDOM.render(<Routing/>,document.getElementById('root'));
