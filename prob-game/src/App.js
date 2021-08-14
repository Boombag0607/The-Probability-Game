import logo from './logo.svg';
import React from 'react';
import './App.css';
import {ProbScore, UserScore} from './score/Score' ;
import ChooseCard from './cards/Card'



export default function App() {
  return (
    <div className="App">
      {/* {<ProbScore input = 'true'/>} */}
      {/* {<UserScore input = 'false'/>} */}
      <ChooseCard />
    </div>
  );
}


