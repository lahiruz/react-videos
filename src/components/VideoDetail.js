import React from 'react';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <h4 className="ui label">Loading...</h4>;
  }

  const youtubeSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className="ui embed">
        <iframe title={video.snippet.title} src={youtubeSrc} />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
