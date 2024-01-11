import React from "react";

import "../styles/PhotoListItem.scss";



const PhotoListItem = (props) => {
  const { id, location, imageSource, username, profile } = props.data;

  return (
    <div className="photo-list-item">
      <img src={imageSource} alt={`Photo ${id}`} />
      <div className="photo-details">
        <p>{`Location: ${location.city}, ${location.country}`}</p>
        <p>{`Username: ${username}`}</p>
        {/* Additional details can be added based on your data structure */}
      </div>
      <img src={profile} alt={`Profile ${id}`} className="profile-image" />
    </div>
  );
};

export default PhotoListItem;
