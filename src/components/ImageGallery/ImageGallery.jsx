import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

// STYLED
import { ImageGalleryItemLi, ImageGalleryUl } from './ImageGallery.styled';

const ImageGallery = ({ items, onClickImage }) => {
  return (
    <ImageGalleryUl>
      {items &&
        items.map(item => {
          return (
            <ImageGalleryItemLi key={item.id}>
              <ImageGalleryItem item={item} onClickImage={onClickImage} />
            </ImageGalleryItemLi>
          );
        })}
    </ImageGalleryUl>
  );
};

export { ImageGallery };
