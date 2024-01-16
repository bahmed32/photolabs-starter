import React, { useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = (props) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  //   props.setFavourites((list) => {
  //     let newList = [...list];

  //     if (isActive) {
  //       newList = newList.filter((item) => item !== props.photo_id);
  //     } else {
  //       newList.push(props.photo_id);
  //     }

  //     return newList;
  //   });
  // };

  return (
    <div>
      <div className="photo-list__fav-icon" onClick={handleClick}>
        <div className="photo-list__fav-icon-svg">
          <FavIcon selected={isActive} />
        </div>
      </div>
    </div>
  );
};

export default PhotoFavButton;