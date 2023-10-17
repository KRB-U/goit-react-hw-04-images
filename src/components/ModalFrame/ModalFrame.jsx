import { Component } from 'react';
import { Overlay, ImageContainer } from './Modal.styled';

class ModalFrame extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = evt => {
    if (evt.code === 'Escape') {
      this.props.onClose();
    }
  };

  render() {
    const { largeImageURL, tags, onClose } = this.props;

    return (
      <>
        <Overlay onClick={onClose}>
          <ImageContainer>
            <img src={largeImageURL} alt={tags} />
          </ImageContainer>
        </Overlay>
      </>
    );
  }
}

export { ModalFrame };
