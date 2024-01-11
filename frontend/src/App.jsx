import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const sampleDataForPhotoListItem = {
    id: "1",
    location: {
      city: "Montreal",
      country: "Canada",
    },
    imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
    username: "Joe Example",
    profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
  };

  const photos = new Array(3).fill(null);
  //this crates an array and fills it will 3 nulls thwn the map down below replaces the null with the data we need

  return (
    <div className="App">
      {photos.map((_, index) => (
        <PhotoListItem key={index} data={sampleDataForPhotoListItem} />
      ))}
    </div>
  );
};

export default App;
