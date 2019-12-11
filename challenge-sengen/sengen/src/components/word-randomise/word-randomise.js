import React, { Component } from 'react';
import './word-randomise.css';

class WordRandomise extends Component {
    constructor(props) {
        super(props);
        this.state = {
            words: this.props.words,
            index: Math.floor(Math.random()* this.props.words.length)
        }
    };


    handleRandomise = () => {
        let index = Math.floor(Math.random()* this.props.words.length);
        console.log('random index', index)
        this.setState({ index })
        console.log('state', this.state);

    };

    render() { 
        const { words, index } = this.state;
        
        return ( 
            <>
                <button onClick={this.handleRandomise}>{words[index]}</button>
            </>
         );
    }
}
 
export default WordRandomise;
