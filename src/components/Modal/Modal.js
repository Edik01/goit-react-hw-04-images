import { Component } from 'react';
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
export class ImageModal extends Component {
  closeModal = () => {
    this.props.onClose();
  };

  render() {
    return (
      <Modal
        isOpen={this.props.modalIsOpen}
        onRequestClose={this.closeModal}
        style={customStyles}
        contentLabel="image modal"
      >
        {' '}
        <img src={this.props.largeImageURL} alt={this.props.tags} />
      </Modal>
    );
  }
}
