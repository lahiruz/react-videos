import React from 'react';

import VideoItem from './VideoItem';

const VideoList = ({ videos }) => {
  const videoList = videos.map(video => {
    return <VideoItem video={video} />;
  });

  return <div className="ui celled list">{videoList}</div>;
};

export default VideoList;
