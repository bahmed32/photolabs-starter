import React, { useReducer, useState } from 'react';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import './App.scss';
import HomeRoute from 'components/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';

const App = () => {
  const initialState = {
    showModal: false,
    photos: null,
  };

  const actionTypes = {
    showModal: (state, action) => ({ ...state, showModal: true, photos: action.photos }),
    hideModal: (state) => ({ ...state, showModal: false, photos: null }),
    default: (state) => ({ ...state, showModal: false }),
  };

  // const reducer = (state, action) => {
  //   console.log("state", state, "action", action);
  //   const actionType = actionTypes[action.command] || actionTypes.default;
  //   console.log("actiotype", actionType);
  //   return actionType(state, action);
  // };
  const reducer = (state, action) => {
    switch (action.type) {
    case 'showModal':
      console.log("hello");
      return { ...state, showModal: true };
    case 'hideModal':
      return { ...state, showModal: false };
    default:
      return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);


  const onShowModalClick = () => {
    // console.log("showmodalclick button", onShowModalClick);
    dispatch({ type: 'showModal' });
  };

  const onHideModalClick = () => {
    dispatch({ type: 'hideModal' });
  };

  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} onShowModalClick={onShowModalClick} />
      {state.showModal && (
        <PhotoDetailsModal onHideModalClick={onHideModalClick} photos={state.photos} />
      )}
    </div>
  );
};

export default App;