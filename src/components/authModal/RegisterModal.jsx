import Modal from 'react-modal';
import RegisterModalStyled from './RegisterModal.styled';

Modal.setAppElement(document.getElementById('root'));

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: 'fit-content',
    height: 'fit-content',
    padding: 0,
  },
};

const RegisterModal = ({ isOpen, close, onRequestClose }) => {
  return (
    <Modal isOpen={isOpen} style={customStyles} onRequestClose={onRequestClose}>
      <RegisterModalStyled>
        <button onClick={close}></button>
        <h1>Hello</h1>
      </RegisterModalStyled>
    </Modal>
  );
};

export default RegisterModal;
