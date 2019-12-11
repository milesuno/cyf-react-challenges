import   React, { Component } from 'react';
import './counter.css';

class Counter extends Component {
    constructor(props) {
        super(props);
    }

    render() { 
        return (
            <div className='counter'>
                <div className='food'>
                    <h2>{this.props.counter.name}</h2>
                    <div className='buttons'>
                        <button onClick={() => this.props.onIncrement(this.props.counter.id)}>+</button>
                        <button onClick={() => this.props.onDecrement(this.props.counter.id)}>-</button>
                    </div>
                </div>
                <p className='count'>{this.props.counter.value}</p>
            </div>
         );
    }
}
 
export default Counter;