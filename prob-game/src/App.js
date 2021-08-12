import logo from './logo.svg';
import React from 'react';
import './App.css';
import {ProbScore, UserScore} from './score/Score' ;
import ChooseCard from './cards/Card'


export class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      input : ''
    }
  }
  handleChange = (event)  => {
    this.setState({
      input: event.target.value
    })
  }
  render() {
    return (
      <div>
        <input value = {this.state.input} onChange = {this.handleChange} placeholder = 'name of the card'></input>
        <p>{this.state.input}</p>
      </div>
    )
  }
}

export default function App() {
  return (
    <div className="App">
      {/* {<ProbScore input = 'true'/>} */}
      {/* {<UserScore input = 'false'/>} */}
      <ChooseCard />
    </div>
  );
}


