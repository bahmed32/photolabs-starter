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

export default reducer;