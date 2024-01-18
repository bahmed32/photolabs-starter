import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist }) => {

  const checkFavPhotos = Object.values(isFavPhotoExist).filter((element) => {
    return element === true;
  });

  const isFavPhotos = checkFavPhotos.length > 0;

  return (
    <div className="fav-badge">
      <FavIcon displayAlert={isFavPhotos} selected={true} />
    </div>
  );
};

export default FavBadge;