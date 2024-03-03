import styled from "styled-components";

const HomePage = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  padding: 20px;
  background-color: #fff;
  img {
    max-width: 100%;
  }
  .advantages {
    border: 1.5px dashed var(--secondary-color);
    border-radius: 30px;
    padding: 20px 20px;
  }
  .adv-content {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    p {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      font-size: 14px;
      font-weight: 400;
    }
    span {
      font-size: 28px;
      font-weight: 500;
      white-space: nowrap;
    }
  }
`;

export default HomePage;
