// import { useState } from 'react';

import React from 'react';
import './App.css';
import DocumentTitleUpdater from '../component/DocumentTitleUpdater';
import FetchDataComponent from '../component/FetchDataComponent';
import MouseTrackerComponent from '../component/Mousetrackercomponent';



function App() {
  return (
    <div className="App">
      <h1>React useEffect Examples</h1>
      <FetchDataComponent/>
      <DocumentTitleUpdater/>
      <MouseTrackerComponent/>
      
    </div>
  );
}

export default App;

