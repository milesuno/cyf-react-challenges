import React, { Component } from "react";
import json from "../../data/simpson.json";

class EpisodeJumpDropdown extends Component {
	constructor(props) {
		super(props);
	}

	jumpToEpisode = e => {
		if (e.target.value) {
			window.location = e.target.value;
		}
	};
	render() {
		return (
			<select onChange={this.jumpToEpisode}>
				<optgroup label="Episode List">
					{this.props.data
						? this.props.data.map(episode => {
								const { id, name, number, season } = episode;
								return (
									<option key={id} value={`#${id}`}>
										{`S${season} E${number}: ${name}`}
									</option>
								);
						  })
						: json.map(episode => {
								const { id, name, number, season } = episode;
								return (
									<option key={id} value={`#${id}`}>
										{`S${season} E${number}: ${name}`}
									</option>
								);
						  })}
				</optgroup>
			</select>
		);
	}
}

export default EpisodeJumpDropdown;
