import { useEffect, useState } from 'react';
// COMPONENT
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ModalFrame } from './ModalFrame/ModalFrame';
import { ButtonLoadMore } from './ButtonLoadMore/ButtonLoadMore';

// SPINER
import { LoaderSpiner } from './LoaderSpiner/LoaderSpiner';

// HELPERS
import { searchItem } from '../helpers/API';

//NOTIFY
import toast, { Toaster } from 'react-hot-toast';

// STYLED
import { ContainerApp } from './Layer/Layer';

const App = () => {
  const [fetchedImages, setFetchedImages] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState(null);
  const [tags, setTags] = useState(null);

  const [queryValue, setQueryValue] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const [showLoadingMore, setShowLoadingMore] = useState(false);
  const [loadMore, setLoadMore] = useState(false);

  const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);

  useEffect(() => {
    if (!queryValue) {
      return;
    }
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        setLoading(true);
        // setError(false);

        const images = await searchItem(
          currentPage,
          queryValue,
          controller.signal
        );

        setFetchedImages(prevFetchedImages => [
          ...prevFetchedImages,
          ...images.hits,
        ]);

        setLoadMore(currentPage < Math.ceil(images.totalHits / 12));

        const amountImg = images.totalHits;

        if (amountImg === 0) {
          toast.error('нічого не знайдено!');
        }

        if (amountImg > 1 && currentPage === 1) {
          toast.success(`знайдено ${amountImg} результатів`);
        }
      } catch (err) {
        if (err.code !== 'ERR_CANCELED') {
          toast.error('Щось пішло не так');
        }
      } finally {
        setLoading(false);
        setShowLoadingMore(false);
      }
    };

    fetchData();

    return () => controller.abort();
  }, [queryValue, currentPage]);

  const handleFormSubmit = queryValue => {
    setQueryValue(queryValue);
    setFetchedImages([]);
    setCurrentPage(1);
  };

  const toggleModal = () => {
    setShowModal(prevShowModal => !prevShowModal);
  };

  const handleImageClick = (largeImageURL, tags) => {
    setLargeImageURL(largeImageURL);
    setTags(tags);
    setShowModal(true);
  };

  const handleLoadMore = () => {
    setCurrentPage(prevCurrentPage => prevCurrentPage + 1);
    setShowLoadingMore(true);
  };

  return (
    <ContainerApp>
      <Searchbar onSubmit={handleFormSubmit} />
      {loading && <LoaderSpiner />}

      <ImageGallery items={fetchedImages} onClickImage={handleImageClick} />
      {(showLoadingMore && <LoaderSpiner />) ||
        (loadMore && <ButtonLoadMore onClick={handleLoadMore} />)}

      {showModal && (
        <ModalFrame
          largeImageURL={largeImageURL}
          tags={tags}
          onClose={toggleModal}
        />
      )}
      <Toaster
        toastOptions={{
          className: '',
          duration: 750,
          style: {
            background: '#363636',
            color: '#fff',
          },
        }}
      />
    </ContainerApp>
  );
};

export { App };
