import React, { Component } from 'react';
import Counter from '../counter/counter';
import './counters.css';   

class Counters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counters:[
                { name: 'Veg', id: 1, value: 0 },
                { name: 'Meat', id: 2, value: 0 },
                { name: 'Carbs', id: 3, value: 0 }
            ],
            total: 0
         };
    }

    handleIncrement = (counterId) => {
        this.state.counters.forEach((counter) => {
            if(counter.id === counterId){
                const value = counter.value++; 
                this.setState({ value });
            }
        });

        let values = this.state.counters.map(c => c.value);
        let total = values.reduce((a,c) => {return a + c}, 0);
        this.setState({ total });
    }

    handleDecrement = (counterId) => {
        this.state.counters.forEach((counter) => {
            if (counter.id === counterId) {
                if (counter.value > 0) {
                    const value = counter.value--;
                    this.setState({ value });
                } 
            }

            let values = this.state.counters.map(c => c.value);
            let total = values.reduce((a,c) => {return a + c}, 0);
            this.setState({ total });
        });
    }

    handleReset = () => {
        const counters = this.state.counters.map((counter) => {
            counter.value = 0;
            return counter;
        })
        this.setState({ counters });
        
        let values = this.state.counters.map(c => c.value);
        let total = values.reduce((a,c) => {return a + c}, 0);
        this.setState({ total });
    }
    
    render() { 
        return ( 
            <div>
                {this.state.counters.map((counter) => {
                    return (
                        <Counter
                        key={counter.id}
                        counter={counter}
                        onReset={this.handleReset} 
                        onIncrement={this.handleIncrement} 
                        onDecrement={this.handleDecrement}/>
                        )
                    })}
                <button onClick={this.handleReset}>Reset</button>
                <div>Total: {this.state.total}</div>
            </div>
         );
    }
}
 
export default Counters;