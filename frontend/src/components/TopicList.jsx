import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const sampleDataForTopicList = [
  {
    id: "1",
    slug: "topic-1",
    title: "Nature",
  },
  {
    id: "2",
    slug: "topic-2",
    title: "Travel",
  },
  {
    id: "3",
    slug: "topic-3",
    title: "People",
  },
];

const TopicList = () => {

  const mappedTopicList = sampleDataForTopicList.map((topic) => {
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