import React, { Component } from "react";

class Controls extends Component {
	playNote = () => {
		console.log("Play note");
	};

	render() {
		return (
			<div>
				<button onClick={this.playNote}>A3</button>
				<button onClick={this.playNote}>C4</button>
				<button onClick={this.playNote}>D4</button>
				<button onClick={this.playNote}>E4</button>
				<button onClick={this.playNote}>A4</button>
				<button onClick={this.playNote}>C5</button>
			</div>
		);
	}
}

export default Controls;
