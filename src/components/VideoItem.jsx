import React from 'react';

const VideoItem = ({video}) => {
  return(
    <div>
      { video.snippet.thumbnails.default }
    </div>
  )
}

export default VideoItem;