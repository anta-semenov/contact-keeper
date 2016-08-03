import React, { Component } from 'react';
import Contacts from '../contacts/Contacts'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Contacts {...this.props}/>
        {this.props.children}
      </div>
    )
  }
}

export default App
