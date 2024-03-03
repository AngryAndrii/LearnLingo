import styled from "styled-components";

const StyledTeachers = styled.div`
  padding-bottom: 20px;
  background-color: #eeeeee;
  outline: 1px solid red;
  .loadMoreButton {
    padding: 16px 48px;
    background-color: var(--secondary-color);
    border-radius: 12px;
    margin: 0 auto;
    display: block;
    width: fit-content;
    &:is(:hover, :focus) {
      background-color: var(--secondary-hover-color);
    }
  }
`;

export default StyledTeachers;
