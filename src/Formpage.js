import React from 'react';
import ReactDOM from 'react-dom';
import Form from './components/Form/Form';

class FormPage extends React.Component{
    constructor(props){
        super(props);
        this.props = props;
    }
    render(){
        return(
            <Form />
        );
    }
}
ReactDOM.render(FormPage,)