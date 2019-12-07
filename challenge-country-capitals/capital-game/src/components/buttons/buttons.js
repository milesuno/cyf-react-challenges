import React, { Component } from 'react';
import Button from '../button/button.js';
import './buttons.css';
import * as json from './capitals.json';


class Buttons extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            countries: [
                { country:'', capital:'' }
            ],
            index: Math.floor(Math.random()* 5),
            correctAnswer: () => {
                let answer = this.state.countries[this.state.index];
                return answer;
            },
            userResult: ''
        }
    };
    
    randomGenerator = () => {
        let countries = [];
        for (let i = 0; i < 5; i++){
            let index = Math.floor(Math.random()* 244);
            countries.push(json.default[index]);
        }
        let userResult = '';
        this.setState({ countries, userResult })
    };


    getResult = (capital) => {        
        if (capital === this.state.correctAnswer().capital){
            let userResult = "You're Correct!";
            this.setState({ userResult })
            return true;
        } else {
            let userResult = "You're WRONG!";
            this.setState({ userResult })
        }  
    }

    componentWillMount(){
        this.randomGenerator();
    }


    render() { 
       const { countries, correctAnswer} = this.state;
        return ( 
            <div>
            <p>What is the Capital of {correctAnswer().name} ?</p>
            {countries.map((country) => {                
                return (
                    <Button 
                    name={country.name} 
                    capital={country.capital} 
                    getResult={this.getResult}
                    />)
            })}
            
            <span>You Result is:
                {this.state.userResult ? <div>{this.state.userResult}</div> : <div>{this.state.userResult}</div>}
            </span>
            <button id='reset' onClick={this.randomGenerator}>Reset</button>
        </div>
        );
    }
}
 
export default Buttons;