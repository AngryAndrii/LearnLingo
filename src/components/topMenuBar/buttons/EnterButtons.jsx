import loginIcon from '/images/login-icon.svg';

import StyledEnterButtons from './EnterButtons.styled';

const EnterButtons = () => {
  return (
    <StyledEnterButtons>
      <button className="login-button">
        <img src={loginIcon} alt="" width={20} height={20} />
        Log in
      </button>
      <button className="register-button">Registration</button>
    </StyledEnterButtons>
  );
};

export default EnterButtons;
