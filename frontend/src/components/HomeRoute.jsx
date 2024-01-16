
import React, { useState } from "react";
import TopNavigationBar from "./TopNavigationBar";
import PhotoList from "./PhotoList";
import '../styles/HomeRoute.scss';
import photos from "mocks/photos";


const HomeRoute = (props) => {
  const [favourites, setFavourites] = useState([]);


  return (

    <div className="home-route">
      <div>
        <TopNavigationBar topics={props.topics} favourites={favourites} />
        <PhotoList photos={props.photos} setFavourites={setFavourites} favourites={favourites} onShowModalClick={props.onShowModalClick}/>
      </div>
    </div>
  );

};


export default HomeRoute;