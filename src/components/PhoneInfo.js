import React, { Component, Fragment } from 'react';

class PhoneInfo extends Component {

    state = {
        editing: false,
        name: '',
        phone: ''
    }

    shouldComponentUpdate(nextProps, nextState) {
        //state가 바뀔때마다 render
        if(this.state !== nextState){
            return true;
        }
        //data가 바뀌지 않으면 render하지 않음
        return this.props.info !== nextProps.info;
    }
    

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
            
    handleRemove = () => {
        const { info, onRemove } = this.props;
        onRemove(info.id);
    }

    handleEditToggle = () => {
        const { info, onUpdate } = this.props;
        if(this.state.editing){
            onUpdate(info.id, {name: this.state.name, phone: this.state.phone});
        }else{
            this.setState({
                name: info.name,
                phone: info.phone
            })
        }
        this.setState({
            editing: !this.state.editing
        })
    }

    render() {
        const { name, phone } = this.props.info;
        const { editing } =this.state;

        const style = {
            border: '0.25rem solid lightgray',
            borderRadius: '8px',
            padding: '0.5rem',
            display: 'inline-block',
            margin: '0.5rem'
        }

        return (
            <div style={style}>
                {editing ? (
                    <div>
                        <input 
                        onChange={this.handleChange} 
                        value = {this.state.name} 
                        name = "name"
                        /><br/>
                        <input 
                        onChange={this.handleChange} 
                        value = {this.state.phone} 
                        name = "phone"/>
                    </div>
                ) : (
                    <Fragment>
                        <div><b>{name}</b></div>
                        <div>{phone}</div>
                    </Fragment>
                )
                }
                <button onClick={this.handleRemove}>Delete</button>
                <button onClick={this.handleEditToggle}>
                {editing ? 'Apply' : 'Edit'}
                </button>
            </div>
        );
    }
}

export default PhoneInfo;