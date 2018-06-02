import _ from 'lodash'
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

		this.state = { 
			videos: [], 
			selectedVideo: null
		} // list of vidoes aka objects

		this.videoSearch('surfboards')
// does search and gets response back on this.setState 
	}

	videoSearch(term) {
		YTSearch({ key: API_KEY, term: term}, (videos) => {
			this.setState({ 
				videos: videos,
				selectedVideo: videos[0] 
			})	
// when search is complete it updates with new list of videos using setState
// this.setState({ videos: videos }) only works when key/var are same name

		})
	}

	render() {
	//thislodash takes in term, which can only b called 300 ms
		const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300)

		return (
			<div>
				<SearchBar onSearchTermChange={term => this.videoSearch(term)} />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList 
					onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
					videos={this.state.videos} />

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