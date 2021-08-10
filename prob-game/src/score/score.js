import React from 'react';
import ReactDOM from 'react-dom';

class ProbScore extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            input: false,
            score: 0
        }
        this.incScore = this.incScore.bind(this);
        this.trigIncScore = this.trigIncScore.bind(this);
    }
    incScore() {
        this.setState(state => ({
            score: state.score + 1
        }));
    }
    trigIncScore() {
        if(this.state.input === true) {
            this.incScore();    
        }   
    }
    render(){
        return (
         <div>
            <p>{this.props.input}</p>
         </div>   
       );
    }
}

class UserScore extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            input: false,
            score: 0
        }
        this.incScore = this.incScore.bind(this);
        this.trigIncScore = this.trigIncScore.bind(this);
    }
    incScore() {
        this.setState(state => ({
            score: state.score + 1
        }));
    }
    decScore() {
        this.setState(state => ({
            score: state.score - 1
        }));
    }
    trigIncScore() {
        if(this.state.input === true) {
            this.incScore();    
        } else {
            this.decScore();
        }  
    }
    render(){
        return (
         <div>
            <p>{this.props.input}</p>
         </div>   
       );
    }
}

export {ProbScore, UserScore};