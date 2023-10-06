import { Image } from './Modal.styled';
import Modal from 'react-modal';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '600px',
    height: '400px',
  },
};
Modal.setAppElement('#root');
export const ImageModal = ({ onClose, largeImageURL, tags, modalIsOpen }) => {
  const closeModal = () => {
    onClose();
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="image modal"
    >
      <Image src={largeImageURL} alt={tags} />
    </Modal>
  );
};
