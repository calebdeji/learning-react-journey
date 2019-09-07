// import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

const timer = () => {
    const timerElement = (
        <div>
            <h1> Hello World, your favourite budding dev is learning react</h1>;
            <h3>See this timer</h3>
            <p>{new Date().toLocaleTimeString()}</p>
        </div>
    );
    ReactDOM.render(timerElement, document.getElementById('root'));
}
setInterval(timer, 1000);
// timer();
