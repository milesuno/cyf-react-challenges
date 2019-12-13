//FIX: Bugs with The Wire and True Blood
//FIX: Cors issue
//FIX: <p> in description
import React from "react";
import "./App.css";
import EpisodeList from "./components/episode-list/episode-list";
import ShowSelector from "./components/show-selector/show-selector";

function App() {
	return (
		<div className="App">
			<ShowSelector />
		</div>
	);
}

export default App;
