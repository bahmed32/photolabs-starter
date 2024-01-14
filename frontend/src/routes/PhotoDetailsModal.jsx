import React, { useState } from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = (props) => {


  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={() => props.setShowModal(false)}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      {/* Other content of the modal */}
    </div>
  );
};

export default PhotoDetailsModal;
