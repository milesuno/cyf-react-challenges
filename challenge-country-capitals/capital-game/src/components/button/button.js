import React, { Component } from 'react';

class Button extends Component {
    // constructor(props){
    //     super(props);
    // }

    render() { 
        return ( 
            <div>
                {console.log('props', this.props)}
                <button onClick={() => this.props.getResult(this.props.capital)}>
                    {this.props.capital}
                </button>
            </div>
         );
    }
}
 
export default Button;