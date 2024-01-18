
import React from "react";
import TopNavigationBar from "./TopNavigationBar";
import PhotoList from "./PhotoList";
import '../styles/HomeRoute.scss';




const HomeRoute = (props) => {



  return (


    <div className="home-route">
      <div>
        <TopNavigationBar topics={props.topics}
          favourites={props.favourites}
          toggleFavourite={props.toggleFavourite}
          fetchPhotosByTopic={props.fetchPhotosByTopic} />
        <PhotoList
          photos={props.photos}
          favourites={props.favourites}
          toggleFavourite={props.toggleFavourite}
          onShowModalClick={props.onShowModalClick}
        />
      </div>
    </div>
  );

};


export default HomeRoute;