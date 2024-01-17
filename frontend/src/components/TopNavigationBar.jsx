import React from 'react';
import TopicList from 'components/TopicList';
import FavBadge from './FavBadge';

import '../styles/TopNavigationBar.scss';

const TopNavigation = (props) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>


      <TopicList getPhotosByTopic={props.getPhotosByTopic} topics={props.topics} topicsID={props.currentTopicId} />
      <FavBadge isFavPhotoExist={props.favourites} />

    </div>

  );
};

export default TopNavigation;