import React from 'react';
import { useFormik } from 'formik';
import { style } from '../authModal/styles';
import Modal from 'react-modal';
import StyledForm from './BookModal.styled';
import { RxCross2 } from 'react-icons/rx';

const BookForm = ({ close, isOpen, name, surname, img }) => {
  const formik = useFormik({
    initialValues: {
      kindOfLesson: '',
      name: '',
      email: '',
      phone: '',
    },
    onSubmit: values => {
      console.log(values);
    },
  });
  return (
    <Modal style={style} onRequestClose={close} isOpen={isOpen}>
      <StyledForm>
        <button onClick={close} className="close-button">
          <RxCross2 style={{ width: '100%', height: '100%' }} />
        </button>
        <h3>Book trial lesson</h3>
        <p className="descr">
          Our experienced tutor will assess your current language level, discuss
          your learning goals, and tailor the lesson to your specific needs.
        </p>
        <div className="teacher flex row">
          <img
            src={img}
            alt="teacher"
            style={{ width: '44px', height: '44px', borderRadius: '100px' }}
          />
          <div>
            <p className="teacher-descr">Your teacher</p>
            <p className="teacher-name">
              {name} {surname}
            </p>
          </div>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div id="my-radio-group">
            What is your main reason for learning English?
          </div>
          <div
            className="group flex column"
            role="group"
            aria-labelledby="my-radio-group"
            onChange={formik.handleChange}
            value={formik.values.name}
          >
            <label>
              <input
                className="radio-input"
                type="radio"
                name="kindOfLesson"
                value="Career and business"
              />
              <span className="radio-span"></span>
              Career and business
            </label>
            <label>
              <input
                className="radio-input"
                type="radio"
                name="kindOfLesson"
                value="Lesson for kids"
              />
              <span className="radio-span"></span>
              Lesson for kids
            </label>
            <label>
              <input
                className="radio-input"
                type="radio"
                name="kindOfLesson"
                value="Living abroad"
              />
              <span className="radio-span"></span>
              Living abroad
            </label>
            <label>
              <input
                className="radio-input"
                type="radio"
                name="kindOfLesson"
                value=" Exams and coursework"
              />
              <span className="radio-span"></span>
              Exams and coursework
            </label>
            <label>
              <input
                className="radio-input"
                type="radio"
                name="kindOfLesson"
                value="ulture, travel or hobby"
              />
              <span className="radio-span"></span>
              Culture, travel or hobby
            </label>
          </div>

          <div className="text-inputs flex column">
            <div className="input-field">
              <input
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
              {!formik.values.name && <label htmlFor="name">First Name</label>}
            </div>

            <div className="input-field">
              <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              {!formik.values.email && (
                <label htmlFor="email">Email Address</label>
              )}
            </div>

            <div className="input-field">
              <input
                id="phone"
                name="phone"
                type="phone"
                onChange={formik.handleChange}
                value={formik.values.phone}
              />
              {!formik.values.phone && <label htmlFor="phone">phone</label>}
            </div>
          </div>

          <button className="submit-button" type="submit">
            Submit
          </button>
        </form>
      </StyledForm>
    </Modal>
  );
};

export default BookForm;
