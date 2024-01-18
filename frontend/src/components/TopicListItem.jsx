import React from "react";

import "../styles/TopicListItem.scss";


const TopicListItem = (props) => {

  // Calls the fetchPhotosByTopic function with the topic ID

  return (
    <div className="topic-list__item" onClick={() => props.fetchPhotosByTopic(props.id)} >
      {props.title}

    </div>
  );
};

export default TopicListItem;
