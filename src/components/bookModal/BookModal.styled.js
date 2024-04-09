import styled from 'styled-components';

const StyledForm = styled.div`
  padding: 20px;
  position: relative;
  padding: 20px;
  /* overflow: scroll; */
  .close-button {
    position: absolute;
    top: 0px;
    right: 0px;
  }
  h3 {
    font-size: 40px;
  }
  .descr {
    font-weight: 400;
  }
  .teacher {
    column-gap: 14px;
    align-items: center;
    p {
      margin: 0;
    }
  }
  .teacher-descr {
    font-size: 12px;
    font-weight: 400;
    margin-bottom: 4px;
    color: #8a8a89;
  }
  .teacher-name {
    font-size: 16px;
    font-weight: 500;
  }
  #my-radio-group {
    font-size: 24px;
    margin-top: 40px;
    margin-bottom: 20px;
  }
  .group {
    margin-bottom: 40px;
    row-gap: 16px;
  }
  .text-inputs {
    row-gap: 8px;
    margin-bottom: 40px;
  }
  .input-field {
    position: relative;
  }
  .input-field label {
    position: absolute;
    font-weight: 400;
    font-size: 16px;
    top: 16px;
    left: 18px;
  }
  .input-field input {
    width: 100%;
    height: 54px;
    padding: 16px 18px;
    border-radius: 15px;
    border: 1px solid rgba(18, 20, 23, 0.1);
  }
  .input-field input:focus + label {
    display: none !important;
  }
  .submit-button {
    padding: 16px 48px;
    background-color: var(--secondary-color);
    border-radius: 12px;
    &:is(:hover, :focus) {
      background-color: var(--secondary-hover-color);
    }
  }
  .radio-input {
    /* position: absolute; */
    padding-left: 1.9em;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    font-weight: 400;
    font-size: 16px;
  }
  .radio-span {
    width: 20px;
    height: 20px;
    position: absolute;
    margin-left: -1.9em;
    background-image: url('images/void-check.svg');
  }
  .radio-input:checked + .radio-span {
    background-image: url('images/fill-check.svg');
  }
`;

export default StyledForm;
