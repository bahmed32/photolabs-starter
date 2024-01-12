import React, { useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = () => {
  
  const [isActive, setIsActive] = useState(false);
  const switchActive = () => setIsActive(!isActive);


  const handleClick = () => {
    switchActive();
  };

  return (
    <div>
      <div className="photo-list__fav-icon">
        <div className="photo-list__fav-icon-svg"  onClick={handleClick} >
          <FavIcon
            selected={isActive}
          />
          {/* Insert React */}
        </div>
      </div>
    </div>
  );
};

export default PhotoFavButton;

// function LightSwitchButton(props) {
//   const {light, setLight} = props;
//   const switchLight = () => setLight((light === "on") ? "off" : "on");
  
//   const handleClick = () => {
//     switchLight();
//     props.increaseAnger(0.1);
//   };
  
//     return (
//       <button className="LightSwitchButton" onClick={handleClick}>
//       {props.light === "on" && <span><i>💡</i> I'm on!</span> }
//       {props.light === "off" &&<span className="off"><i>💡</i> I'm off !</span> }
//     </button>
  
//     )
//   }
  
//   export default LightSwitchButton;