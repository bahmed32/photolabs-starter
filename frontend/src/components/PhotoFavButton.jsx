import React from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = ({ favourites, photoId, toggleFavourite }) => {



  const handleClick = () => {
    if (typeof toggleFavourite === 'function') {
      toggleFavourite(photoId);
    }
  };
 



  return (
    <div>
      <div className="photo-list__fav-icon" onClick={handleClick}>
        <div className="photo-list__fav-icon-svg">
          <FavIcon
            selected={!!favourites[photoId]}
            onClick={() => toggleFavourite(photoId)} />
        </div>
      </div>
    </div>
  );
};

export default PhotoFavButton;