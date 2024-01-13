import Modal from "react-modal";
import LoginModalStyled from "./LoginModal.styled";

Modal.setAppElement(document.getElementById("root"));

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "fit-content",
    height: "fit-content",
    padding: 0,
  },
};

const LoginModal = ({ isOpen, close, onRequestClose }) => {
  return (
    <Modal isOpen={isOpen} style={customStyles} onRequestClose={onRequestClose}>
      <LoginModalStyled>
        <button onClick={close}></button>
        <h1>Login</h1>
      </LoginModalStyled>
    </Modal>
  );
};

export default LoginModal;
