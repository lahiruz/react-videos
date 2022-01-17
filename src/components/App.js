import React, {useState, useEffect} from 'react';

import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideos';

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos('cars');

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className="ui container" style={{ marginTop: '10px' }}>
      <SearchBar onSearchTermSubmit={search} />
      <div className="ui grid">
        <div className="eleven wide column">
          <VideoDetail video={selectedVideo} />
        </div>
        <div className="five wide column">
          <VideoList
            videos={videos}
            onVideoClick={e => setSelectedVideo(e)}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
