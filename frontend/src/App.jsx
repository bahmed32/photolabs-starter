import React from 'react';



import './App.scss';
import HomeRoute from 'components/HomeRoute';
import photos from 'mocks/photos';
import {topics} from "mocks/topics";

// Note: Rendering a single component to build components in isolation
const App = () => {
  


  // const photos = new Array(3).fill(null);
  //this crates an array and fills it will 3 nulls thwn the map down below replaces the null with the data we need

  return (
    <div className="App">

      <HomeRoute />
    </div>
  );
};

export default App;
