import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideosList from './VideosList';

class App extends React.Component {
  state = { videos : [] }

  onTermSubmitted = async term => {
    const response = await youtube.get('/search', {
      q: term
    });
    this.setState({ videos: response.data.items });
  }

  render() {
    return(
       <div className="ui container" >
        <SearchBar onTermSubmitted={this.onTermSubmitted} />
        <VideosList videos={this.state.videos}  />
      </div>
    );
  };
}

export default App;