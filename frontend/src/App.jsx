import React, { useReducer } from 'react';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import './App.scss';
import HomeRoute from 'components/HomeRoute';
import photos from 'mocks/photos';
import topics from "mocks/topics";

// Note: Rendering a single component to build components in isolation
const App = () => {


  const initialState = {

    showModal: false,
    photos: null,
  };

  const actionTypes = {
    showModal: (state, action) => ({ ...state, showModal: true, photos: action.photos }),
    hideModal: (state) => ({ ...state, showModal: false, photo: null }),
    default: (state) => ({ ...state, showModal: false }),
  };

  const reducer = (state, action) => {
    const actionType = actionTypes[action.command] || actionTypes.default;
    return actionType(state, action);
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const onShowModalClick = (photo) => {
    dispatch({ command: 'showModal', photos });
  };

  const onHideModalClick = () => {
    dispatch({ command: 'hideModal' });
  };

  // const photos = new Array(3).fill(null);
  //this crates an array and fills it will 3 nulls thwn the map down below replaces the null with the data we need

  return (

    <div className="App">
      <HomeRoute photos={photos} topics= {topics} onShowModalClick={onShowModalClick} />
      {state.showModal && (
        <PhotoDetailsModal
          onHideModalClick={onHideModalClick}
          photos={state.photos}
        />
      )}
    </div>

  );
};
export default App;
