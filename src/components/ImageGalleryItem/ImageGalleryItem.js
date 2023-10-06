import { ImageModal } from 'components/Modal/Modal';
import { Component } from 'react';
import { GalleryItem, GalleryImage } from './ImageGalleryItemStyled';
export class ImageGalleryItem extends Component {
  state = { modalIsOpen: false };
  handleOpen = () => {
    this.setState({ modalIsOpen: true });
  };
  handleClose = () => {
    this.setState({ modalIsOpen: false });
  };
  render() {
    return (
      <GalleryItem className="gallery-item">
        <GalleryImage
          onClick={this.handleOpen}
          src={this.props.webformatURL}
          alt={this.props.tags}
        />
        {this.state.modalIsOpen && (
          <ImageModal
            modalIsOpen={this.state.modalIsOpen}
            largeImageURL={this.props.largeImageURL}
            tags={this.props.tags}
            onClose={this.handleClose}
          />
        )}
      </GalleryItem>
    );
  }
}
