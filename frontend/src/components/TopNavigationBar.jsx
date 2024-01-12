import React from 'react';
import TopicList from 'components/TopicList';
import FavBadge from './FavBadge';

import '../styles/TopNavigationBar.scss';

const TopNavigation = () => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>

      <div className="top-nav-bar__container">
        <FavBadge />
        <TopicList />
      </div>
    </div>

  );
};

export default TopNavigation;