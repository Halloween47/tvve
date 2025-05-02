// components/VideoPlayer.js
import React, { useRef, useState } from 'react';

const VideoPlayer = ({ src, children }) => {
  const videoRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);

  const handleTimeUpdate = () => {
    setCurrentTime(videoRef.current.currentTime);
  };

  return (
    <div>
      <video ref={videoRef} onTimeUpdate={handleTimeUpdate} controls>
        <source src={src} type="video/mp4" />
      </video>
      {React.cloneElement(children, { currentTime })}
    </div>
  );
};

export default VideoPlayer;
