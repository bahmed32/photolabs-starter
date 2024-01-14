import React, { useState } from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleClick = () => {
    setIsModalOpen(false);

  };

  return (
    <div className={`photo-details-modal ${isModalOpen ? 'open' : 'closed'}`}>
      <button className="photo-details-modal__close-button" onClick={handleClick}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      {/* Other content of the modal */}
    </div>
  );
};

export default PhotoDetailsModal;
