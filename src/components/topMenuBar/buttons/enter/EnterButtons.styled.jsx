import styled from "styled-components";

const StyledEnterButtons = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  margin-top: 10px;
  .login-button,
  .register-button {
    width: 150px;
    height: 48px;
    padding-top: 14px;
    padding-bottom: 14px;
    font-size: 16px;
    font-weight: 700;
  }

  .login-button {
    display: inherit;
    align-items: center;
    justify-content: center;
    column-gap: 8px;
    background-color: rgba(28, 28, 28, 0);
    border: none;
  }
  .register-button {
    background-color: var(--primary-text-color);
    color: #fff;
    border-radius: 12px;
    border: none;
  }
`;

export default StyledEnterButtons;
