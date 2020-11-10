import './VideoList.css';

import React from 'react';
import VideoItem from './VideoItem';

const VideosList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map(video => {
    return <VideoItem key={video.id.vidoId} onVideoSelect={onVideoSelect} video={video} />
  });

  return <div className="ui relaxed divided list renderedlist" >{renderedList}</div>
}

export default VideosList;