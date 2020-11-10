import React from 'react';

const VideoDetail = ({ video }) => {
  if(!video) {
    return <div>No Video loaded...</div>
  }
  
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

  return (
    <div>
      <div className="ui embed"  >
        <iframe 
          title="video player" 
          src={videoSrc} 
          frameBorder='0' 
          allow="autoplay; picture-in-picture" 
          allowFullScreen 
        />
      </div>
      <div className="ui segment" >
        <h4 className="ui header" > { video.snippet.title } </h4>
        <h5> Uploaded by: { video.snippet.channelTitle } </h5>
        <p>Uploaded on: { new Date(video.snippet.publishTime).toLocaleDateString('en-US', options) } </p>
        <hr/>
        <p> { video.snippet.description } </p>
      </div>
    </div>
  );
}

export default VideoDetail;