import React from 'react';
// import ReactDOM from 'react-dom';
import './form.css';

export default class Form extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.props = props;
    //     this.state = {email : '',
    //         passwordValue : '', 
    //         selectValue : '',
    //         multipleSelect : []
    //     };
    //     this.handleEmailInput = this.handleEmailInput.bind(this);
    //     this.handleSelection = this.handleSelection.bind(this);
    //     this.handlePasswordInput = this.handlePasswordInput.bind(this);
    //     this.handleFormSubmit = this.handleFormSubmit.bind(this);

    // }

    // Alternative and fastest way to do the above...
    state = {email : '',
            passwordValue : '', 
            selectValue : '',
            multipleSelect : []
        }

    handleEmailInput = (event) => {
        this.setState({email: event.target.value.toLowerCase()});
    }
    handleSelection = (event) => {
        this.setState({selectValue:event.target.value});
    }
    handlePasswordInput = (event) => {
        this.setState({passwordValue : event.target.value});
    }
    handleFormSubmit = (event) => {
        event.preventDefault();
        console.log("state", this.state);
    }

    render(){
        return(
            <form action="#" method="POST" className="form" onSubmit={this.handleFormSubmit}>
                <input type="email" placeholder="email" className="form__field" value={this.state.email} onChange={this.handleEmailInput} autoFocus/>
                <select name="select_for_country" id="select" value={this.state.selectValue} onChange={this.handleSelection} className="form__field">
                    <option value="Nigeria">Nigeria</option>
                    <option value="Cameroon">Cameroon</option>
                    <option value="South_Africa">South Africa</option>
                </select>
                <input type="password" placeholder="****" className="form__field" value={this.state.passwordValue} onChange={this.handlePasswordInput}/>
                <input type="submit" value="Submit" className="form__button"/>
            </form>
        );
    }
}