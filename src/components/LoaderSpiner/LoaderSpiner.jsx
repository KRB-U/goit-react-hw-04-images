import { RotatingLines } from 'react-loader-spinner';
import { LodeWrapper } from './LoaderSpiner.styled';

const LoaderSpiner = () => {
  return (
    <LodeWrapper>
      <RotatingLines
        strokeColor="#FFA500"
        strokeWidth="3"
        animationDuration="1"
        width="70"
        visible={true}
      />
    </LodeWrapper>
  );
};

export { LoaderSpiner };
