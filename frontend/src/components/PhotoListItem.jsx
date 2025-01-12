import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";




const PhotoListItem = (props) => {
  const { id, location, imageSource, username, profile } = props;

  return (
    <div className="photo-list__item">
      <PhotoFavButton setFavourites={props.setFavourites} favourites={props.favourites} photoId={id}
        toggleFavourite={props.toggleFavourite}
      />
      <img className="photo-list__image" src={imageSource} alt={`Photo ${id}`} onClick={() => props.onShowModalClick(props.photos)} />




      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={profile} alt={`Profile ${id}`} />
        <div>
          <p className="photo-list__user-info">{username}</p>
          <p className="photo-list__user-location">
            {location.city}, {location.country}
          </p>
        </div>
      </div>
    </div>
  );

};

export default PhotoListItem;
