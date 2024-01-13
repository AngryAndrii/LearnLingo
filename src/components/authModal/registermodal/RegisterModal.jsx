import Modal from "react-modal";
import RegisterModalStyled from "./RegisterModal.styled";
import { Formik, Form, Field, ErrorMessage } from "formik";

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

const RegisterModal = ({ isOpen, close, onRequestClose }) => {
  return (
    <Modal isOpen={isOpen} style={customStyles} onRequestClose={onRequestClose}>
      <RegisterModalStyled>
        <button onClick={close}></button>
        <Formik
          initialValues={{ email: "", password: "", name: "" }}
          onSubmit={(values) => {
            register(values);
          }}
        >
          {() => (
            <Form>
              <label htmlFor="name">Name</label>
              <Field type="text" name="name" />
              <label htmlFor="email">email</label>
              <Field type="email" name="email" />
              <label htmlFor="password">password</label>
              <Field type="password" name="password" />
              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      </RegisterModalStyled>
    </Modal>
  );
};

export default RegisterModal;
