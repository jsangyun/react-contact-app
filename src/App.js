import React, { Component } from 'react';
import './App.css';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component {
  id = 0
  state = {
    information: [],
    keyword: ''
  }

  handleChange = (e) => {
    this.setState({
      keyword: e.target.value
    })
  }

  handleCreate = (data) => {
    //비구조화 할당
    const {information} = this.state
    console.log(data)
    this.setState({
      information: information.concat(Object.assign(data, {id: this.id++}))
    })
  }
  handleRemove = (id) => {
    const {information} = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    })
  }

  handleUpdate = (id, data) => {
    const { information } = this.state;
    this.setState({
      information: information.map((info) => {
        if(info.id === id){
          return {
            id,
            ...data
          }
        }
        return info;
      })
    })
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          Contact
        </div>
        <div className="body">
          <PhoneForm onCreate={this.handleCreate}/>
          <p>
          <input 
            placeholder="Search"
            value={this.state.keyword}
            onChange={this.handleChange}
          />
          </p>
          <PhoneInfoList 
            data={this.state.information.filter(
              info => info.name.indexOf(this.state.keyword) > -1
            )} 
            onRemove = {this.handleRemove}
            onUpdate = {this.handleUpdate}
          />
        </div>
      </div>
    );
  }
}

export default App;
