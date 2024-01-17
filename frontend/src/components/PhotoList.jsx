import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
// process.env.PUBLIC_URL = "http://localhost:3000";



const PhotoList = (props) => {

  const mappedPhotoItem = Array.isArray(props.photos)
    ? props.photos.map((photo) => (
        <PhotoListItem
          key={photo.id}
          id={photo.id}
          imageSource={photo.urls.regular}
          location={photo.location}
          username={photo.user.username}
          profile={photo.user.profile}
          setFavourites={props.setFavourites}
          favourites={props.favourites}
          setShowModal={props.setShowModal}
          onShowModalClick={() => props.onShowModalClick(photo)}
          toggleFavourite={props.toggleFavourite}
        />
      ))
    : null;

  return (
    <div>
      <div className="photo-list">
        {mappedPhotoItem}
      </div>
      <div className="home-route">
      </div>
    </div>
  );
};

export default PhotoList;
