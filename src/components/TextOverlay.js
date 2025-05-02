// components/TextOverlay.js
import React from 'react';

const TextOverlay = ({ currentTime, texts }) => {
  return (
    <div style={{ position: 'relative' }}>
      {texts.map((text, index) => (
        currentTime >= text.start && currentTime <= text.end && (
          <div
            key={index}
            style={{
              position: 'absolute',
              top: text.top,
              left: text.left,
              color: text.color,
              fontSize: text.fontSize,
            }}
          >
            {text.content}
          </div>
        )
      ))}
    </div>
  );
};

export default TextOverlay;
