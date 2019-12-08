import React, { Component } from 'react';
import Image from '../image/image.js';

class Images extends Component {
    state = { 
        //This can be more accessable is img array is obj with img and alt.
        img:[
            "https://images.unsplash.com/photo-1561196643-35c381cb6a6d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", 
            "https://images.unsplash.com/photo-1563923683738-4ad77b43411c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
            "https://images.unsplash.com/photo-1563734956808-602dab25525f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1558237316-d4762d4b8ce7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1562569633-622303bafef5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        ],
        index: 0,
        //this can be a obj with a switch to run code or not.
        autoPlay:''
    }

    handleIncrementImage = () => {
       console.log('Increment Image');
       if (this.state.index < this.state.img.length - 1) {
           let index = this.state.index + 1;
           this.setState({ index });
       } else {
            let index = 0;
            this.setState({ index });
       }
    };

    handleDecrementImage = () => {
       console.log('Decrement Image');
       if (this.state.index > 0) {
        let index = this.state.index - 1;
        this.setState({ index });
        } else {
         let index = this.state.img.length - 1;
         this.setState({ index });
    }
    };

    handleStopImageChange = () => {
       console.log('Stop Image');
       clearInterval(this.state.autoPlay)

    };

    handleAutoForward = () => {
       console.log('Auto Forward Image');
       let autoPlay = setInterval(() => {
        console.log('Next Pic');
        this.handleIncrementImage()
        }, 1500)
        this.setState({ autoPlay })
    };

    handleAutoBackward = () => {
        console.log('Auto Backward Image');
        let autoPlay = setInterval(() => {
            console.log('Last Pic');
            this.handleDecrementImage()
            }, 1500)
            this.setState({ autoPlay })
     };

    render() { 
        return ( 
            <div className="App">
                {console.log('Index', this.state.index)}
                <h1>Image Carousel</h1>
                <Image 
                img={this.state.img} 
                index={this.state.index}
                onIncrementImage={this.handleIncrementImage}
                onDecrementImage={this.handleDecrementImage}
                onStopImage={this.handleStopImageChange}
                onAutoForward={this.handleAutoForward}
                onAutoBackward={this.handleAutoBackward}

                />
            </div>
         );
    }
}

export default Images;