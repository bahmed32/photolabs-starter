import React from 'react';
import TopicList from 'components/TopicList';
import PhotoFavButton from './PhotoFavButton';

import '../styles/TopNavigationBar.scss';

const TopNavigation = () => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <div>
        <TopicList />
        <PhotoFavButton/>
      </div>
    </div>
  );
};

export default TopNavigation;