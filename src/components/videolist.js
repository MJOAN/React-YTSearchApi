import React from 'react'
import VideoListItem from './videolistitem'


// videolistitem needed a key so we used etag from YT serach array in console!
const VideoList = (props) => {	
	const videoItems = props.videos.map((video) => {
		return <VideoListItem key={video.etag} video={video} />
	})
// loop over array of videos and generate a list item{props.videos.length}
	return (
		<ul className="col-md-4 list-group">
			{videoItems}
		</ul>
	)
}

export default VideoList