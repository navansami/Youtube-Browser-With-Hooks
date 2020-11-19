import React, { useState, useEffect, Fragment } from 'react';
import Navbar from './Navbar';
import SearchBar from './SearchBar';
import VideosList from './VideosList';
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideos';

export default () => {
  const [ selectedVideo, setSelectedVideo ] = useState(null);
  const [ videos, search ] = useVideos('become a software architect');

  useEffect(() => {
    setSelectedVideo(videos[0]);    
  },[videos]);

  const onVideoSelect = (video) => {
    setSelectedVideo(video);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }


  return(
    <Fragment>
      <Navbar />
      <div className="ui container" >
      <SearchBar onTermSubmitted={search} vidLenght={videos.length} />
        <div className="ui stackable grid" >
          <div className="ui row" >
            <div className="nine wide column" >
              <VideoDetail 
                video={selectedVideo} 
              />
            </div>
            <div className="seven wide column" >
              <VideosList 
                onVideoSelect={onVideoSelect}
                videos={videos}
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}