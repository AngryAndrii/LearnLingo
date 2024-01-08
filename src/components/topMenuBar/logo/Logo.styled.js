import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLogo = styled(Link)`
  display: flex;
  flex-direction: row;
  text-decoration: none;
  color: inherit;
  gap: 8px;
  p {
    font-size: 20px;
  }
`;

export default StyledLogo;
