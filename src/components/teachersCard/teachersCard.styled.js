import styled from "styled-components";

const StyledCard = styled.div`
  .heart-button {
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
`;

export default StyledCard;
