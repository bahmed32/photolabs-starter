import React, { useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = () => {
  const { isActive, setIsActive } = useState(false);

  const handleClick = () => {
    console.log('Before:', isActive);
    setIsActive(!isActive);
    console.log('After:', isActive);
  };

  return (
    <div>
      <FavIcon isActive={isActive} onClick={() => setsActive(!isActive)}
        className={`icon ${isActive ? 'active' : ''}`} />
      <div className="photo-list__fav-icon">
        <div className="photo-list__fav-icon-svg">
          {/* Insert React */}
        </div>
      </div>
    </div>
  );
};

export default PhotoFavButton;