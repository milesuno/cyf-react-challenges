import React, { Component } from "react";
import EpisodeList from "../episode-list/episode-list";

class ShowSelector extends Component {
	state = {
		shows: {
			"Breaking Bad": "http://api.tvmaze.com/shows/169/episodes",
			"Game Of Thrones": "http://api.tvmaze.com/shows/82/episodes",
			Lost: "http://api.tvmaze.com/shows/123/episodes",
			Sherlock: "http://api.tvmaze.com/shows/335/episodes",
			"Star Trek TNG": "http://api.tvmaze.com/shows/491/episodes",
			"The Daily Show": "http://api.tvmaze.com/shows/3928/episodes",
			"The Simpsons": "http://api.tvmaze.com/shows/83/episodes",
			"The Sopranos": "http://api.tvmaze.com/shows/527/episodes",
			"The Walking Dead": "http://api.tvmaze.com/shows/73/episodes",
			"The Wire": "http://www.tvmaze.com/shows/179/the-wire",
			"The X - Files": "http://api.tvmaze.com/shows/430/episodes",
			TrueBlood: "http://api.tvmaze.com/shows/22/episodes"
		},
		data: ""
	};

	shows = [
		"Breaking Bad",
		"Game Of Thrones",
		"Lost",
		"Sherlock",
		"Star Trek TNG",
		"The Daily Show",
		"The Simpsons",
		"The Sopranos",
		"The Walking Dead",
		"The Wire",
		"The X - Files",
		"True Blood"
	];

	getData = e => {
		console.log("e", e.target.value);
		fetch(this.state.shows[e.target.value])
			.then(data => data.json())
			.then(json => this.setState({ data: json }));
	};

	render() {
		return (
			<>
				<select onChange={this.getData}>
					<option selected disabled>
						Please choose a Show ...
					</option>
					{this.shows.map(show => {
						return <option value={show}>{show}</option>;
					})}
				</select>
				<h1>TV Show Info</h1>
				<EpisodeList data={this.state.data} />
			</>
		);
	}
}

export default ShowSelector;
