import React, { Component } from 'react'


// passed element to where we want to handle event in the 'input'
// all browser events that get triggered - event objects are handling it!
// onChange is a REACT special property!!!! then we pass in our
// event handler then inside class we define the event handler
// and we use event.target.value to console log it!
// STATE is a JS object that is used to record and react to user events!
// each class based component we create has its own STATE object
// whenever a components state is changed the component immediately re-renders
// also forces all its children to re-render as well
// so searchbar had some function and it changed
// the render function would be re-run and those other components re-run too!
// we first have to INITIALIZE state! put into its constructor methods
// function components DO NOT HAVE STATE! only class based do!
// component has its own constructor (f) we can call 
// that parent method on parent class by calling super() === calling parent method
// setstate is like, hey! react, the state is changing now and okay,
// here is what the state should now be!
// controlled component - has value set by state -->  <input value={this.state.term}

// class based 
class SearchBar extends Component {
	constructor(props) {
		super(props)

		this.state = { term: '' }
	}

	render() {
		return (
			<div>
				<input
				value={this.state.term} // controlled component - has value set by state
				onChange={event => this.setState({ term: event.target.value })} /> 
		</div>
		)
	}
}


export default SearchBar
