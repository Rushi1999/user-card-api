import React, { Component } from 'react';
import './App.css';
 import TopNav from './Nav';
 import MainArea from './MainArea';

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: [

      ]
    }
  }
  onChange(newPeople) {   this.setState({ people: newPeople });}

  render() {
    return (
      <div className="App">
        <TopNav people={this.state.people } onPeopleChange ={this.onChange}/>

        <div id="loader"></div>
      </div>
    
    );
  }
}
export default App;
