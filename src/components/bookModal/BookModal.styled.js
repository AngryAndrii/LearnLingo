import styled from "styled-components";

const StyledForm = styled.div`
  outline: 1px solid tomato;
  padding: 20px;
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
`;

export default StyledForm;
