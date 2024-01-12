
import React from "react";
import TopNavigationBar from "./TopNavigationBar";
import PhotoList from "./PhotoList";
import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {

  return (

    <div className="home-route">
      <div>
        <TopNavigationBar topics={props.topics} />
        <PhotoList photos={props.photos} />
      </div>
    </div>


  );

};


export default HomeRoute;