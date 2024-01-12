import React from 'react';



import './App.scss';
import PhotoList from 'components/PhotoList';
import TopicList from 'components/TopicList';

// Note: Rendering a single component to build components in isolation
const App = () => {


  // const photos = new Array(3).fill(null);
  //this crates an array and fills it will 3 nulls thwn the map down below replaces the null with the data we need

  return (
    <div className="App">
      {/* {photos.map((_, index) => (
        <PhotoListItem key={index} data={sampleDataForPhotoListItem} /> */}
      {/* ))} */}
      <TopicList />
      <PhotoList />
    </div>
  );
};

export default App;
