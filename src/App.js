import React, { Component } from 'react';
import './App.css';
import Resume from './component/resume';


export default class App extends Component{
  render() {
    return (
      <div className="App">
        <h2>Resume</h2>

        <Resume/>
      </div>
    )
  }
}