import React, { Component } from "react";
import Episode from "../episode/episode";
import json from "../../data/simpson.json";
import "./episode-list.css";
import EpisodeJumpDropdown from "../episode-jump-dropdown/episode-jump-dropdown";

class EpisodeList extends Component {
	render() {
		return (
			<main className="episode-list">
				<EpisodeJumpDropdown data={this.props.data} />
				<h2>All Episode Details</h2>
				{this.props.data
					? this.props.data.map(episode => {
							return (
								<Episode key={episode.id} episode={episode} />
							);
					  })
					: json.map(episode => {
							return (
								<Episode key={episode.id} episode={episode} />
							);
					  })}
				{/* Add button to route back */}
			</main>
		);
	}
}

export default EpisodeList;
