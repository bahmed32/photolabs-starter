import React, { useReducer, useState } from 'react';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import './App.scss';
import HomeRoute from 'components/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';

const App = () => {
  const initialState = {
    showModal: false,
    photos: photos,
    photo: {},
    favourites: {},
  };

  const toggleFavourite = (photoId) => {
    dispatch({ type: 'toggleFavourite', payload: { id: photoId } });
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'showModal':
        console.log("hello");
        return { ...state, showModal: true, photo: action.payload };
      case 'hideModal':
        return { ...state, showModal: false };
      case 'toggleFavourite':
        const photoId = action.payload.id;
        const favourites = { ...state.favourites };
        favourites[photoId] = !favourites[photoId];
        return { ...state, favourites };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);


  const onShowModalClick = (photo) => {
    console.log("phototest", photo);
    // console.log("showmodalclick button", onShowModalClick);
    dispatch({ type: 'showModal', payload: photo });
  };

  const onHideModalClick = () => {
    dispatch({ type: 'hideModal' });
  };


  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} onShowModalClick={onShowModalClick} />
      {state.showModal && (
        <PhotoDetailsModal onHideModalClick={onHideModalClick} photo={state.photo} />
      )}
    </div>
  );
};

export default App;