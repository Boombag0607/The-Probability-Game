import React from 'react';

function anyCase(str, checkStr) {
    let str2 = str.toLowerCase();
    if(checkStr === str2){
        return true;
    }
    return false;
}
export default class ChooseCard extends React.Component{
    state = {
        color: '', 
        type: ''
    }  
    handleClickRed = () => {
        this.setState ({
            color: 'red'
        })
    }
    handleClickBlack = () => {
        this.setState ({
            color: 'black'
        })
    }
    handleClickType = () => {
    }
    render() {
        return(
            <div>
                <label for='color'>Choose the color of the card:</label><br></br>
                <button onClick = {this.handleClickRed} name="color" value='red'>Red</button>
                <button onClick = {this.handleClickBlack} name="color" value='black'>Black</button> <br></br>
                <label for='type'>Choose the type:</label>
                {(this.state.color) === 'red' ? 
                    <div>
                    <select name='type' id='type'>
                        <option value='heart' onClick = {this.handleClickType}>Hearts</option>
                        <option value='diamond' onClick ={this.handleClickType}>Diamonds</option>
                    </select> <br></br> </div>: (this.state.color) === 'black' ? 
                    <div>
                    <select name='type' id='type'>
                        <option value='club' onClick={this.handleClickType}>Clubs</option>
                        <option value='spade' onClick={this.handleClickType}>Spades</option><br></br>
                    </select><br></br></div> : 
                    <div><br></br></div>}
                <label>Choose the value of the card: </label>
                    <select>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                        <option>J</option>
                        <option>Q</option>
                        <option>K</option>
                    </select>
            </div>
        )
    }
}