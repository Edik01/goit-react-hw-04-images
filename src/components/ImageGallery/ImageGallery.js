import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { GalleryList } from './ImageGalleryStyled';
export const ImageGallery = ({ hits }) => {
  return (
    <GalleryList className="gallery">
      {hits.map(item => {
        return (
          <ImageGalleryItem
            key={item.id}
            webformatURL={item.webformatURL}
            tags={item.tags}
            largeImageURL={item.largeImageURL}
          />
        );
      })}
    </GalleryList>
  );
};
