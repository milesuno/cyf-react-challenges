import React, { Component } from "react";
import './episode.css';

class Episode extends Component {
	constructor(props) {
        super(props);
        this.state = {
            img: this.props.episode.image
        }
	}

	render() {
		const { episode } = this.props;
        const { name, number, season, airdate, image, summary } = episode;
		return (
			<div className='episode-box'>
				<h1>{`S${season} E${number}: ${name}`}</h1>
                <img src={image ? image.medium : null} />
				<p>{summary}</p>
				<p>{`Air Date: ${airdate}`}</p>
			</div>
		);
	}
}

export default Episode;
