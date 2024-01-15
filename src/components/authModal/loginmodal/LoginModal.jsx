import Modal from "react-modal";
import LoginModalStyled from "./LoginModal.styled";
import { style } from "../styles";
import { RxCross2 } from "react-icons/rx";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

Modal.setAppElement(document.getElementById("root"));

const LoginModal = ({ isOpen, close, onRequestClose }) => {
  const [showPass, setShowPass] = useState(false);
  const handleEyeClick = () => {
    showPass ? setShowPass(false) : setShowPass(true);
  };

  return (
    <Modal isOpen={isOpen} style={style} onRequestClose={onRequestClose}>
      <LoginModalStyled>
        <button onClick={close} className="close-button">
          <RxCross2 style={{ width: "100%", height: "100%" }} />
        </button>
        <h3>Login</h3>
        <p>
          Welcome back! Please enter your credentials to access your account and
          continue your search for an teacher.
        </p>
        <Formik
          initialValues={{ email: "", password: "" }}
          // onSubmit={(values) => {
          //   register(values);
          // }}
        >
          {() => (
            <Form>
              <label htmlFor="email">
                <Field
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="form-field"
                />
              </label>

              <label htmlFor="password" style={{ position: "relative" }}>
                <Field
                  type={showPass ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  className="form-field"
                />
                <button
                  type="button"
                  className="eye-icon"
                  onClick={handleEyeClick}
                >
                  {showPass ? (
                    <FaEye className="icon" />
                  ) : (
                    <FaEyeSlash className="icon" />
                  )}
                </button>
              </label>
              <button type="submit" className="submit-form-button">
                Log in
              </button>
            </Form>
          )}
        </Formik>
      </LoginModalStyled>
    </Modal>
  );
};

export default LoginModal;
