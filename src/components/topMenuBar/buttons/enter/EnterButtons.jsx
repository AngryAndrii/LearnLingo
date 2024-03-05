import loginIcon from '/images/login-icon.svg';
import StyledEnterButtons from './EnterButtons.styled';
import { useState } from 'react';
import RegisterModal from '../../../authModal/registermodal/RegisterModal';
import LoginModal from '../../../authModal/loginmodal/LoginModal';

const EnterButtons = () => {
  const [isRegModalOpen, setIsRegModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  function handleOpen(el) {
    if (el == 'reg') {
      return setIsRegModalOpen(true);
    }
    return setIsLoginModalOpen(true);
  }

  function handleClose() {
    setIsLoginModalOpen(false);
    setIsRegModalOpen(false);
  }

  return (
    <>
      <StyledEnterButtons>
        <button
          className="login-button"
          id="log"
          onClick={event => {
            handleOpen(event.target.id);
          }}
        >
          <img src={loginIcon} alt="" width={20} height={20} />
          Log in
        </button>
        <button
          className="register-button"
          id="reg"
          onClick={() => {
            handleOpen(event.target.id);
          }}
        >
          Registration
        </button>
      </StyledEnterButtons>
      <RegisterModal
        isOpen={isRegModalOpen}
        onRequestClose={handleClose}
        close={handleClose}
      />
      <LoginModal
        isOpen={isLoginModalOpen}
        onRequestClose={handleClose}
        close={handleClose}
      />
    </>
  );
};

export default EnterButtons;
