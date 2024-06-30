import React, { useEffect, useState } from 'react';

const DocumentTitleUpdater = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Clicked ${count} times`;

    return () => {
      // Cleanup function (equivalent to componentWillUnmount in class components)
      document.title = 'React App'; // Restore the original title on unmount
    };
  }, [count]); // Only re-run the effect if count changes

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <h2>Document Title Updater</h2>
      <p>Current Count: {count}</p>
      <button onClick={incrementCount}>Increment Count</button>
    </div>
  );
};

export default DocumentTitleUpdater;
