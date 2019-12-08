import React, { Component } from 'react';

class Image extends Component {
    constructor(props){
        super(props);
        this.state = {
            img:this.props.img,
            index: this.props.index
        }
    }
    render() { 
        return ( 
            <div className="App">
                <img src={this.state.img[this.props.index]}/>
                <div id='controls'>
                    <button onClick={this.props.onAutoBackward}>Auto Back</button>
                    <button onClick={this.props.onDecrementImage}>Back</button>
                    <button onClick={this.props.onStopImage}>Stop</button>
                    <button onClick={this.props.onIncrementImage}>Next</button>
                    <button onClick={this.props.onAutoForward}>Auto Next</button>
                </div>
            </div>
        );
    }
}
 
export default Image; 