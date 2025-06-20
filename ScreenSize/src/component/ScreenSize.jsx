import React, { useState, useEffect } from 'react';

function ScreenSize() {

    
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  // Define a simple function to update width and height
  function updateSize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  useEffect(() => {

    window.addEventListener('resize', updateSize);

    return () => {
      window.removeEventListener('resize', updateSize);
    };
  }, []);

  return (
    <div style={{ padding: '20px', fontSize: '20px' }}>
      <h2>Screen Size</h2>
      <p>Width: {width}px</p>
      <p>Height: {height}px</p>
    </div>
  );
}

export default ScreenSize;