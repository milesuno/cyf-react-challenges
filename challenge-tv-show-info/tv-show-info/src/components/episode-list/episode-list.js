import React, { Component } from "react";
import Episode from "../episode/episode";
import * as json from "../../data/simpson.json";
import './episode-list.css';

class EpisodeList extends Component {
	state = {};


	render() {
		return (
			<main className='episode-list'>
				{json.default.map(episode => {
					return <Episode key={episode.id} episode={episode} />;
				})}
			</main>
		);
	}
}

export default EpisodeList;
