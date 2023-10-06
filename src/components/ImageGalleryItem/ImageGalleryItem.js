import { ImageModal } from 'components/Modal/Modal';
import { useState } from 'react';
import { GalleryItem, GalleryImage } from './ImageGalleryItemStyled';
export const ImageGalleryItem = ({ tags, webformatURL, largeImageURL }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const handleOpen = () => {
    setModalIsOpen(true);
  };
  const handleClose = () => {
    setModalIsOpen(false);
  };

  return (
    <GalleryItem className="gallery-item">
      <GalleryImage onClick={handleOpen} src={webformatURL} alt={tags} />
      {modalIsOpen && (
        <ImageModal
          modalIsOpen={modalIsOpen}
          largeImageURL={largeImageURL}
          tags={tags}
          onClose={handleClose}
        />
      )}
    </GalleryItem>
  );
};
