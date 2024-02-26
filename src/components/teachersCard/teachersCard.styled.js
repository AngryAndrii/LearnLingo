import styled from "styled-components";

const StyledCard = styled.div`
  position: relative;
  .heart-button {
    position: absolute;
    right: 10px;
    top: 10px;
    background-color: rgba(0, 0, 0, 0);
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
`;

export default StyledCard;
