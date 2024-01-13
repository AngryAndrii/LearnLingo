import Modal from "react-modal";
import RegisterModalStyled from "./RegisterModal.styled";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { style } from "../styles";
import { RxCross2 } from "react-icons/rx";

Modal.setAppElement(document.getElementById("root"));

const RegisterModal = ({ isOpen, close, onRequestClose }) => {
  return (
    <Modal isOpen={isOpen} style={style} onRequestClose={onRequestClose}>
      <RegisterModalStyled>
        <button onClick={close} className="close-button">
          <RxCross2 style={{ width: "100%", height: "100%" }} />
        </button>
        <h3>Registration</h3>
        <p>
          Thank you for your interest in our platform! In order to register, we
          need some information. Please provide us with the following
          information
        </p>
        <Formik
          initialValues={{ email: "", password: "", name: "" }}
          onSubmit={(values) => {
            register(values);
          }}
        >
          {() => (
            <Form>
              <label htmlFor="name">
                Name
                <Field type="text" name="name" />
              </label>
              <label htmlFor="email">
                email
                <Field type="email" name="email" />
              </label>

              <label htmlFor="password">
                password
                <Field type="password" name="password" />
              </label>

              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      </RegisterModalStyled>
    </Modal>
  );
};

export default RegisterModal;
