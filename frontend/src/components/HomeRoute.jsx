
import React, { useState } from "react";
import TopNavigationBar, { FavBadge } from "./TopNavigationBar";
import PhotoList from "./PhotoList";
import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  const [favourites, setFavourites] = useState(0);


  // const toggleFavourite = (photoId) => {
  //   const isFavourite = favourites.includes(photoId);
  //   if (isFavourite) {
  //     setFavourites(favourites.filter((id) => id !== photoId));
  //   } else {
  //     setFavourites([...favourites, photoId]);
  //   }
  // };

  // const favoritedPhotos = (() => isActive ? favoritePhotos() : setIsActive);
  // favoritedPhotos();

  return (

    <div className="home-route">
      <div>
        <TopNavigationBar topics={props.topics} favourites={favourites} />
        <PhotoList photos={props.photos} setFavourites={setFavourites} favourites={favourites} />
      </div>
    </div>


  );

};


export default HomeRoute;