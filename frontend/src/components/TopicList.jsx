import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";


const TopicList = (props) => {

  const mappedTopicList = props.topics.map((topic) => {
    return (
      <TopicListItem
        key={topic.id}
        id={topic.id}
        slug={topic.slug}
        title={topic.title}
         />
    );
  });
  return (
    <div>
      <div className="top-nav-bar__topic-list">
        {mappedTopicList}
      </div>
    </div>
  );
};

export default TopicList;

//