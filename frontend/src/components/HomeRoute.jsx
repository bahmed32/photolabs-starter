
import React, { useState } from "react";
import TopNavigationBar from "./TopNavigationBar";
import PhotoList from "./PhotoList";
import '../styles/HomeRoute.scss';
import photos from "mocks/photos";


const HomeRoute = (props) => {
  // const [favourites, setFavourites] = useState();


  return (

    <div className="home-route">
      <div>
        <TopNavigationBar topics={props.topics} favourites={props.favourites} setFavourites={props.setFavourites} />
        <PhotoList photos={props.photos} setFavourites={props.setFavourites} favourites={props.favourites} toggleFavourite={props.toggleFavourite}
          onShowModalClick={props.onShowModalClick}
        />
      </div>
    </div>
  );

};


export default HomeRoute;