import { useReducer, useState } from 'react';
import photos from 'mocks/photos';

const useApplicationData = () => {
  const [favourites, setFavourites] = useState([]);
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
    let photoId, favourites;
    switch (action.type) {
      case 'showModal':
        return { ...state, showModal: true, photo: action.payload };
      case 'hideModal':
        return { ...state, showModal: false };
      case 'toggleFavourite':
        photoId = action.payload.id;
        favourites = { ...state.favourites };
        favourites[photoId] = !favourites[photoId];
        return { ...state, favourites };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const onShowModalClick = (photo) => {
    dispatch({ type: 'showModal', payload: photo });
  };

  const onHideModalClick = () => {
    dispatch({ type: 'hideModal' });
  };

  return {
    state,
    onShowModalClick,
    onHideModalClick,
    toggleFavourite,
  };
};

export default useApplicationData;