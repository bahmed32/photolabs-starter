import { useReducer, useEffect } from 'react';
import reducer from './reducer';


//helper function that maintains state of app
const useApplicationData = () => {

  const ACTIONS = {
    SET_PHOTO_DATA: 'SET_PHOTO_DATA',
    SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  };


  const photosWebLink = 'http://localhost:8001/api/photos';
  const topicsWebLink = "http://localhost:8001/api/topics";

  const initialState = {
    showModal: false,
    favourites: {},
    photoData: [],
    topicData: [],
  };

  
  const [state, dispatch] = useReducer(reducer, initialState);

  // fetches photos from seed data

  useEffect(() => {
    fetch(photosWebLink)
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }));
  }, []);

  // fetches topics from seed data

  useEffect(() => {
    fetch(topicsWebLink)
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