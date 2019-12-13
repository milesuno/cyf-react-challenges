import React, { Component } from "react";
import "./episode.css";

class Episode extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { episode } = this.props;
		const { id, name, number, season, airdate, image, summary } = episode;
		return (
			<div id={id} className="episode-box">
				<h3>{`S${season} E${number}: ${name}`}</h3>
				<img src={image ? image.medium : null} />
				<p>{summary}</p>
				<p>{`Air Date: ${airdate}`}</p>
			</div>
		);
	}
}

export default Episode;
