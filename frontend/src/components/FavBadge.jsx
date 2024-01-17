import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist }) => {
  let photokey = false;
  if (isFavPhotoExist && Object.keys(isFavPhotoExist).length > 0) {
    photokey = true;
  }
  return (
    <div className='fav-badge'>
      {/* <FavIcon displayAlert={!!isFavPhotoExist} selected={!!isFavPhotoExist} /> */}
      <FavIcon displayAlert={photokey} selected={photokey} />
    </div>
  );
};

export default FavBadge;