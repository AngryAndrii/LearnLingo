import loginIcon from '/images/login-icon.svg';
import StyledEnterButtons from './EnterButtons.styled';
import { useState } from 'react';
import RegisterModal from '../../authModal/RegisterModal';

const EnterButtons = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen(true);
  }

  function handleClose() {
    setIsOpen(false);
  }

  return (
    <>
      <StyledEnterButtons>
        <button className="login-button">
          <img src={loginIcon} alt="" width={20} height={20} />
          Log in
        </button>
        <button className="register-button" onClick={handleOpen}>
          Registration
        </button>
      </StyledEnterButtons>
      {/* {isOpen && <RegisterModal isOpen={isOpen} close={handleClose} />} */}
      <RegisterModal
        isOpen={isOpen}
        onRequestClose={handleClose}
        close={handleClose}
      />
    </>
  );
};

export default EnterButtons;
