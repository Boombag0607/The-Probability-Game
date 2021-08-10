import logo from './logo.svg';
import './App.css';
import {ProbScore, UserScore} from './score/score' ;


function App() {
  return (
    <div className="App">
      <ProbScore input = {true}/>
      <UserScore input = {false}/>
    </div>
  );
}

export default App;
