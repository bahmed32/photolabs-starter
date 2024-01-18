import { useReducer, useEffect } from 'react';

//helper function that maintains state of app
const useApplicationData = () => {

  const ACTIONS = {
    SET_PHOTO_DATA: 'SET_PHOTO_DATA',
    SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  };


  const initialState = {
    showModal: false,
    favourites: {},
    photoData: [],
    topicData: [],
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
    default:
      return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  // fetches photos from seed data

  useEffect(() => {
    fetch("http://localhost:8001/api/photos")
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }));
  }, []);

  // fetches topics from seed data

  useEffect(() => {
    fetch("http://localhost:8001/api/topics")
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data }));
  }, []);




  const toggleFavourite = (photoId) => {
    dispatch({ type: 'toggleFavourite', payload: { id: photoId } });
  };


  //shows modal when photo is clicked
  const onShowModalClick = (photo) => {
    dispatch({ type: 'showModal', payload: photo });
  };

  //hides modal when photo is clicked
  const onHideModalClick = () => {
    dispatch({ type: 'hideModal' });
  };
  //creates seperate photo group based on topics
  const fetchPhotosByTopic = (topicId) => {
    fetch(`http://localhost:8001/api/topics/photos/${topicId}`)
      .then((response) => response.json())
      .then((data) => dispatch({ type: 'SET_PHOTO_DATA', payload: data }))
      .catch((error) => console.error('Error fetching photos by topic:', error));
  };
  return {
    state,
    onShowModalClick,
    onHideModalClick,
    toggleFavourite,
    fetchPhotosByTopic,


  };
};

export default useApplicationData;