import React from 'react';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';
import './App.scss';
import HomeRoute from 'components/HomeRoute';





const App = () => {
  const {
    state,
    onShowModalClick,
    onHideModalClick,
    toggleFavourite,
    fetchPhotosByTopic,

  } = useApplicationData();


  return (
    <div className="App">
      <HomeRoute photos={state.photoData} topics={state.topicData} onShowModalClick={onShowModalClick} favourites={state.favourites}
        toggleFavourite={toggleFavourite} fetchPhotosByTopic={fetchPhotosByTopic}/>
      {state.showModal && (
        <PhotoDetailsModal onHideModalClick={onHideModalClick} photo={state.photo} favourites={state.favourites}
          toggleFavourite={toggleFavourite} />
      )}
    </div>
  );
};

export default App;