import StyledLogo from './Logo.styled';
import logo from '/images/logo.svg';

const Logo = () => {
  return (
    <StyledLogo to="/">
      <img src={logo} alt="Your SVG" />
      <p>LearnLingo</p>
    </StyledLogo>
  );
};

export default Logo;
