import React, { Component } from 'react';
import './css/PhoneForm.css';

class PhoneForm extends Component {
    state = {
        name: '',
        phone: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onCreate(this.state);
        this.setState({
            name: '',
            phone: ''
        })
    }
    render() {
        return (
            <div className="phoneForm">
                <form onSubmit={this.handleSubmit}>
                    <input 
                        name = "name"
                        placeholder="Name" 
                        onChange={this.handleChange} 
                        value={this.state.name}
                    /><br></br>
                    <input 
                        name = "phone"
                        placeholder="Phone Number" 
                        onChange={this.handleChange}
                        value={this.state.phone}
                    /><br></br>
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        );
    }
}

export default PhoneForm;