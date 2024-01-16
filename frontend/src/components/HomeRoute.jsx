
import React, { useState } from "react";
import TopNavigationBar from "./TopNavigationBar";
import PhotoList from "./PhotoList";
import '../styles/HomeRoute.scss';
import photos from "mocks/photos";


const HomeRoute = (props) => {
  const [favourites, setFavourites] = useState();


  return (

    <div className="home-route">
      <div>
        <TopNavigationBar topics={props.topics} favourites={favourites} setFavourites={setFavourites} />
        <PhotoList photos={props.photos} setFavourites={setFavourites} favourites={favourites} />
      </div>
    </div>
  );

};


export default HomeRoute;