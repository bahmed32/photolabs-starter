import React from "react";

import "../styles/PhotoListItem.scss";



const PhotoListItem = (props) => {
  const { id, location, imageSource, username, profile } = props.data;

  return (
    <div className="photo-list__item">
      <img className="photo-list__image" src={imageSource} alt={`Photo ${id}`} />



      {/* Additional details can be added based on your data structure */}
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
