import { useEffect } from 'react';
import { Overlay, ImageContainer } from './Modal.styled';

const ModalFrame = ({ largeImageURL, tags, onClose }) => {
  useEffect(() => {
    const handleKeyDown = evt => {
      if (evt.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <>
      <Overlay onClick={onClose}>
        <ImageContainer>
          <img src={largeImageURL} alt={tags} />
        </ImageContainer>
      </Overlay>
    </>
  );
};

export { ModalFrame };
