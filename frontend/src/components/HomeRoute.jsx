
import React, { useState } from "react";
import TopNavigationBar from "./TopNavigationBar";
import PhotoList from "./PhotoList";
import '../styles/HomeRoute.scss';
import FavBadge from "./FavBadge";



const HomeRoute = (props) => {
  // const [favourites, setFavourites] = useState();


  return (

    <div className="home-route">
      <div>
        <TopNavigationBar topics={props.topics}
          favourites={props.favourites}
          toggleFavourite={props.toggleFavourite}
          topicsID={props.currentTopicId} />
        <PhotoList
          photos={props.photos}
          favourites={props.favourites}
          toggleFavourite={props.toggleFavourite}
          onShowModalClick={props.onShowModalClick}
        />
      </div>
      <FavBadge isFavPhotoExist={props.isFavPhotoExist} />
    </div>
  );

};


export default HomeRoute;