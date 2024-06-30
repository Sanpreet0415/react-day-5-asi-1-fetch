import React, { useEffect, useState } from 'react';

const MouseTrackerComponent = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div>
      <h2>Mouse Tracker</h2>
      <p>Mouse X: {position.x}, Mouse Y: {position.y}</p>
    </div>
  );
};

export default MouseTrackerComponent;
