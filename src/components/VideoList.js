import React from 'react';

import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoClick }) => {
  const videoList = videos.map(video => {
    return (
      <VideoItem
        key={video.id.videoId}
        video={video}
        onItemClick={onVideoClick}
      />
    );
  });

  return <div className="ui celled list">{videoList}</div>;
};

export default VideoList;
