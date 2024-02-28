import styled from 'styled-components';

const StyledCard = styled.div`
  position: relative;
  .heart-button {
    position: absolute;
    right: 10px;
    top: 10px;
    background-color: rgba(0, 0, 0, 0);
  }
  .description {
    position: absolute;
    top: 60px;
    right: 0px;
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

  @media screen and (min-width: 800px) {
    .description {
      top: 16px;
      right: 90px;
      display: flex;
      flex-direction: row;
    }
    .description li:not(:last-child)::after {
      content: ' |';
      color: rgba(18, 20, 23, 0.2);
    }
  }
`;

export default StyledCard;
