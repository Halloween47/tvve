// pages/index.js
import VideoPlayer from '../components/VideoPlayer';
import TextOverlay from '../components/TextOverlay';

const TestForm = () => {
  const videoSrc = '/videos/test.mp4';
  const texts = [
    { content: 'Hello World!', start: 2, end: 5, top: '10px', left: '10px', color: 'white', fontSize: '24px' },
    { content: 'Next.js is awesome!', start: 6, end: 9, top: '50px', left: '50px', color: 'red', fontSize: '20px' },
  ];

  return (
    <div>
      <h1>Video Text Overlay</h1>
      <VideoPlayer src={videoSrc}>
        <TextOverlay texts={texts} />
      </VideoPlayer>
    </div>
  );
};

export default TestForm;
