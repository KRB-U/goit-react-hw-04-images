import { ImageGalleryItemImage } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ item, onClickImage }) => {
  const { webformatURL, largeImageURL, tags } = item;

  const sendImage = () => {
    onClickImage(largeImageURL, tags);
  };

  return (
    <>
      <ImageGalleryItemImage
        src={webformatURL}
        alt={tags}
        onClick={sendImage}
      />
    </>
  );
};

export { ImageGalleryItem };
