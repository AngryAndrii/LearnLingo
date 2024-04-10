import Modal from 'react-modal';
import LoginModalStyled from './LoginModal.styled';
import { style } from '../styles';
import { RxCross2 } from 'react-icons/rx';
import { FaEye } from 'react-icons/fa';
import { FaEyeSlash } from 'react-icons/fa';
import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../../Loader';
import { loginUser } from '../../../redux/auth/authOperations';
import * as Yup from 'yup';

Modal.setAppElement(document.getElementById('root'));

const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .required('Required')
    .min(5, 'Too Short!')
    .max(10, 'Too Long'),
});

const LoginModal = ({ isOpen, close, onRequestClose }) => {
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
      <LoginModalStyled>
        <button onClick={close} className="close-button">
          <RxCross2 style={{ width: '100%', height: '100%' }} />
        </button>
        <h3>Login</h3>
        <p>
          Welcome back! Please enter your credentials to access your account and
          continue your search for an teacher.
        </p>
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={values => {
            dispatch(loginUser(values)).then(() => {});
          }}
          validationSchema={loginSchema}
        >
          {({ errors, touched }) => (
            <Form>
              <label htmlFor="email">
                <Field
                  className={`form-field ${errors.email ? 'error' : ''}`}
                  type="email"
                  name="email"
                  placeholder="Email"
                />
                {errors.email && touched.email ? (
                  <span>{errors.email}</span>
                ) : null}
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
                {errors.password && touched.password ? (
                  <span>{errors.password}</span>
                ) : null}
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
