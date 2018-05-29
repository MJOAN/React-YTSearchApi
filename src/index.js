// create new component that gets put into DOM
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'
import SearchBar from './components/searchbar'
import VideoList from './components/videolist'
import VideoDetail from './components/videodetail'

const API_KEY = 'AIzaSyCQJeJqGlgfhiEC1dfYwcZfbOfrgusXZJE'

class App extends Component {
	constructor(props) {
		super(props) 

		this.state = { videos: [] } // list of vidoes aka objects

// does search and gets response back on this.setState 
		YTSearch({ key: API_KEY, term: 'surfboards' }, (videos) => {
			this.setState({ videos })
// when search is complete it updates with new list of videos using setState
// this.setState({ videos: videos }) only works when key/var are same name
		})
	}

	render() {
		return (
			<div>
				<SearchBar />
				<VideoDetail video={this.state.videos[0]} />
				<VideoList video={this.state.videos} />

			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.container')); 


// need to pass an instance of class not App
// App is a class
// instance wraps in tags <App/>
// hey, when you render App, after the comma
// you have to insert it into this element
// that will exist in HTML doc. hence
// the reason for the document.query 'container!'
// YT API key:
// YouTube API search