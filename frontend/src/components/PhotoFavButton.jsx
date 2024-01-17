import React, { useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = ({ setFavourites, favourites, photoId, toggleFavourite }) => {

  // const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    if (typeof toggleFavourite === 'function') {
      toggleFavourite(photoId);
    }
  };
  //   isActive ? setFavourites(favourites - 1) : setFavourites(favourites + 1);
  //   setIsActive(!isActive);
  // };




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