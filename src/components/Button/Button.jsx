import { ButtonLoadMore } from './ButtonStyled';

export const Button = ({ children, handleClick }) => {
  return <ButtonLoadMore onClick={handleClick}>{children}</ButtonLoadMore>;
};
