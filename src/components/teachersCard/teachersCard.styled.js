import styled from "styled-components";

const StyledCard = styled.div`
  position: relative;
  margin-bottom: 32px;
  background-color: #ffffff;
  border-radius: 24px;
  padding: 24px;
  .heart-button {
    position: absolute;
    right: 24px;
    top: 24px;
    background-color: rgba(0, 0, 0, 0);
  }
  .description {
    position: absolute;
    top: 60px;
    right: 24px;
  }

  .exp {
    font-weight: 400;
  }
  .avatar-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    border: 3px solid #fbe9ba;
  }
  .avatar {
    border-radius: 50%;
  }
  .price-span {
    color: var(--price-color);
  }
  .grey-span {
    color: #8a8a89;
  }
  .loaded-block:nth-child() {
    margin-bottom: 23px;
  }
  .category-list {
    flex-wrap: wrap;
    column-gap: 8px;
    row-gap: 8px;
    margin-top: 32px;
    margin-bottom: 32px;
  }
  .category-list li {
    display: block;
    padding: 8px 12px;
    border-radius: 35px;
    border: 1px solid rgba(18, 20, 23, 0.2);
    font-size: 14px;
    font-weight: 500;
  }
  .category-list li:first-child {
    background-color: var(--secondary-color);
    border: none;
  }
  .bookBotton {
    padding: 16px 48px;
    background-color: var(--secondary-color);
    border-radius: 12px;
    &:is(:hover, :focus) {
      background-color: var(--secondary-hover-color);
    }
  }
  @media screen and (min-width: 800px) {
    .description {
      top: 30px;
      right: 90px;
      display: flex;
      flex-direction: row;
    }
    .description li:not(:last-child)::after {
      content: " |";
      color: rgba(18, 20, 23, 0.2);
    }
  }
`;

export default StyledCard;
