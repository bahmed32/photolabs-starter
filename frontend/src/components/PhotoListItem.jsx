import React from "react";

import "../styles/PhotoListItem.scss";



const PhotoListItem = (props) => {
  const { id, location, imageSource, username, profile } = props.data;

  return (
    <div className="photo-list__item">
      <img className="photo-list__image" src={imageSource} alt={`Photo ${id}`} />
      <div className="photo-list__user-profile"> </div>
      <div className="photo-list__user-details">
        <p>{`Location: ${location.city}, ${location.country}`}</p>


        {/* Additional details can be added based on your data structure */}
      </div>
      <p className="photo-list--user-info"> {username} </p>
      <p className="photo-list--user-location ">
        {location.city}, {location.country}
      </p>
    </div>
  );

};

export default PhotoListItem;
