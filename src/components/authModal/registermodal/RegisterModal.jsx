import Modal from 'react-modal';
import RegisterModalStyled from './RegisterModal.styled';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { style } from '../styles';
import { RxCross2 } from 'react-icons/rx';
import { FaEye } from 'react-icons/fa';
import { FaEyeSlash } from 'react-icons/fa';
import { useState } from 'react';

Modal.setAppElement(document.getElementById('root'));

const RegisterModal = ({ isOpen, close, onRequestClose }) => {
  const [showPass, setShowPass] = useState(false);
  const handleEyeClick = () => {
    if (showPass === false) {
      return setShowPass(true);
    }
    return setShowPass(false);
  };

  return (
    <Modal isOpen={isOpen} style={style} onRequestClose={onRequestClose}>
      <RegisterModalStyled>
        <button onClick={close} className="close-button">
          <RxCross2 style={{ width: '100%', height: '100%' }} />
        </button>
        <h3>Registration</h3>
        <p>
          Thank you for your interest in our platform! In order to register, we
          need some information. Please provide us with the following
          information
        </p>
        <Formik
          initialValues={{ email: '', password: '', name: '' }}
          onSubmit={values => {
            register(values);
          }}
        >
          {() => (
            <Form>
              <label htmlFor="name">
                <Field
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="form-field"
                />
              </label>
              <label htmlFor="email">
                <Field
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="form-field"
                />
              </label>

              <label htmlFor="password" style={{ position: 'relative' }}>
                <Field
                  type={showPass ? 'text' : 'password'}
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
                Sign up
              </button>
            </Form>
          )}
        </Formik>
      </RegisterModalStyled>
    </Modal>
  );
};

export default RegisterModal;
