import Modal from 'react-modal';
import RegisterModalStyled from './RegisterModal.styled';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { style } from '../styles';
import { RxCross2 } from 'react-icons/rx';
import { FaEye } from 'react-icons/fa';
import { FaEyeSlash } from 'react-icons/fa';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../../Loader';
import { registerUser } from '../../../redux/auth/authOperations';

Modal.setAppElement(document.getElementById('root'));

const RegisterModal = ({ isOpen, close, onRequestClose }) => {
  const loading = useSelector(state => state.loading);

  const [showPass, setShowPass] = useState(false);
  const handleEyeClick = () => {
    showPass ? setShowPass(false) : setShowPass(true);
  };

  const dispatch = useDispatch();

  if (loading) {
    return <Loader />;
  }

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
            dispatch(registerUser(values)).then(() => {});
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
