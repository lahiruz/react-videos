import React from 'react';

import youtube from '../apis/youtube';
import SearchBar from './SearchBar';
import VideoList from './VideoList';

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  onSearchTermSubmit = async term => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });

    this.setState({ videos: response.data.items });
  };

  onVideoClick = video => {
    console.log(video);
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSearchTermSubmit={this.onSearchTermSubmit} />
        <VideoList
          videos={this.state.videos}
          onVideoClick={this.onVideoClick}
        />
      </div>
    );
  }
}

export default App;
