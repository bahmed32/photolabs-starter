import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from "components/PhotoList";
import PhotoFavButton from 'components/PhotoFavButton';


const PhotoDetailsModal = (props) => {
  //checks similar photos exists
  const similarPhotos = props.photo.similar_photos ? Object.values(props.photo.similar_photos) : [];

  


  return (

    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={() => props.onHideModalClick()}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__images">
        <PhotoFavButton setFavourites={props.setFavourites} favourites={props.favourites} photoId={props.photo.id} toggleFavourite={props.toggleFavourite} />
        <img
          className="photo-details-modal__image"
          src={props.photo.urls.full}
        />
        <section className="photo-details-modal__photographer-details">
          <img
            src={props.photo.user.profile}
            className="photo-details-modal__photographer-profile"
          />
          <section className="photo-details-modal__photographer-info">
            <div className="">{props.photo.user.name}</div>
            <div className="photo-details-modal__photographer-location">
              {props.photo.location.city}, {props.photo.location.country}
            </div>
          </section>
        </section>
        <p className="photo-details-modal__header">Similar Images</p>
        <PhotoList photos={similarPhotos}favourites={props.favourites} toggleFavourite={props.toggleFavourite}/>

      </div>
    </div >
  );
};

export default PhotoDetailsModal;
