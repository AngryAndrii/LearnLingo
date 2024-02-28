import { StyledButton } from './Button.styled';

const Button = ({ children, lol }) => {
  return <StyledButton type="button">{children}</StyledButton>;
};

export default Button;
