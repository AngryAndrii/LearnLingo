import Modal from "react-modal";
import LoginModalStyled from "./LoginModal.styled";
import { style } from "../styles";

Modal.setAppElement(document.getElementById("root"));

const LoginModal = ({ isOpen, close, onRequestClose }) => {
  return (
    <Modal isOpen={isOpen} style={style} onRequestClose={onRequestClose}>
      <LoginModalStyled>
        <button onClick={close}></button>
        <h1>Login</h1>
      </LoginModalStyled>
    </Modal>
  );
};

export default LoginModal;
