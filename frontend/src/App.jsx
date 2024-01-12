import React from 'react';



import './App.scss';
import PhotoList from 'components/PhotoList';

import TopNavigationBar from './components/TopNavigationBar';

// Note: Rendering a single component to build components in isolation
const App = () => {
  


  // const photos = new Array(3).fill(null);
  //this crates an array and fills it will 3 nulls thwn the map down below replaces the null with the data we need

  return (
    <div className="App">

      <TopNavigationBar />
      <PhotoList />
    </div>
  );
};

export default App;
