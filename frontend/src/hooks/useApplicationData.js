import { useReducer, useEffect } from 'react';


const useApplicationData = () => {

  const ACTIONS = {
    SET_PHOTO_DATA: 'SET_PHOTO_DATA',
    SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  };


  const initialState = {
    showModal: false,
    // photos: photos,
    favourites: {},
    photoData: [],
    topicData: [],
    currentTopicId: null,
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
    case 'SET_PHOTO_DATA':
      return { ...state, photoData: action.payload };
    case 'SET_TOPIC_DATA':
      return { ...state, topicData: action.payload };
    case 'GET_PHOTOS_BY_TOPICS':
      return { ...state, currentTopicId: action.payload };
    default:
      return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);


  useEffect(() => {
    fetch("http://localhost:8001/api/photos")
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }));
  }, []);

  useEffect(() => {
    fetch("http://localhost:8001/api/topics")
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data }));
  }, []);

  useEffect(() => {
    fetch("http://localhost:8001/api/topics/photos/:topic_id")
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPICS, payload: data }));
  }, []);




  const toggleFavourite = (photoId) => {
    dispatch({ type: 'toggleFavourite', payload: { id: photoId } });
  };



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