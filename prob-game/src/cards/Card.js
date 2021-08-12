import React from 'react';

export default class ChooseCard extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        return(
            <div>
                <select name="Pick the color" id="color">
                    <option value="red">Red</option>
                    <option value="black">Black</option>
                </select>
                <select name='Pick the value' id="number">
                    <option value="1">1</option>
                    <option value='2'>2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">J</option>
                    <option value="12">Q</option>
                    <option value="13">K</option>
                </select>
            </div>
        )
    }
}