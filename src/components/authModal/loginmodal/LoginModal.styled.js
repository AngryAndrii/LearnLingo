import styled from "styled-components";

const LoginModalStyled = styled.div`
  .close-button {
    position: absolute;
    padding: 0;
    width: 32px;
    height: 32px;
    top: 20px;
    right: 20px;
    background-color: rgba(0, 0, 0, 0);
    border: none;
  }
  h3 {
    font-size: 40px;
    font-weight: 500;
    margin-bottom: 20px;
  }
  p {
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 20px;
  }
  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    row-gap: 18px;
  }
`;

export default LoginModalStyled;
