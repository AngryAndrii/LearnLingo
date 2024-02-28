import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 16px 48px;
  background-color: var(--secondary-color);
  border-radius: 12px;
  &:is(:hover, :focus) {
    background-color: var(--secondary-hover-color);
  }
`;
