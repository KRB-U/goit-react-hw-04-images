import { BtnLoadMore } from './ButtonLoadMore.styled';

const ButtonLoadMore = ({ onClick }) => {
  return (
    <BtnLoadMore onClick={onClick} type="button">
      Load More
    </BtnLoadMore>
  );
};

export { ButtonLoadMore };
