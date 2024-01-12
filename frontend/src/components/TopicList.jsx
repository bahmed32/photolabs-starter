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
        title={topic.title} />
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

// const mappedPhotoItem = sampleDataForPhotoList.map((photo) => {
//   return (
//     <PhotoListItem
//       key={photo.id}
//       id={photo.id}
//       imageSource={photo.urls.regular}
//       location={photo.location}
//       username={photo.user.username}
//       profile={photo.user.profile} />
//   );
// });

// return (
//   <div>
//     <div className="photo-list">
//       {mappedPhotoItem}
//     </div>
//   </div>
// );
// };