
import React from "react";
import TopNavigationBar from "./TopNavigationBar";
import PhotoList from "./PhotoList";
import '../styles/HomeRoute.scss';

const HomeRoute = () => {

  return (

    <div className="home-route">
      <div>
        <TopNavigationBar />
        <PhotoList />
      </div>
    </div>


  );

};


export default HomeRoute;