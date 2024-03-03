import { NavLink as BaseNavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledAppBar = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 10px;

  @media screen and (min-width: 800px) {
    flex-direction: row;
    justify-content: space-evenly;
    padding-bottom: 0;
  }
`;
