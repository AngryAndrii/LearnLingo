import styled from 'styled-components';

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
`;

export default StyledForm;
