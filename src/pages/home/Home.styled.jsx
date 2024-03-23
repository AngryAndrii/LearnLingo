import styled from "styled-components";

const HomePage = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1400px;
  height: 100%;
  padding: 20px;
  font-weight: 400;
  background-color: #fff;
  text-align: center;
  .header {
    background-color: #f8f8f8;
    border-radius: 30px;
    margin-bottom: 20px;
    padding: 20px 15px;
  }
  .header span {
    font-style: italic;
    background-color: #fbe9ba;
  }
  .header h1 {
    max-width: 548px;
    margin: 0 auto;
  }
  .header p {
    font-size: 15px;
  }
  img {
    max-width: 100%;
  }
  .advantages {
    border: 1.5px dashed var(--secondary-color);
    border-radius: 30px;
    padding: 20px 20px;
  }
  .start-button {
    display: block;
    margin: 0 auto;
    padding: 16px 40px;
    border-radius: 12px;
    background-color: var(--secondary-color);
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 20px;
    &:hover {
      background-color: var(--secondary-hover-color);
    }
  }
  .adv-content {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    align-items: center;
    p {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: center;
      column-gap: 5px;
      font-size: 14px;
      font-weight: 400;
    }
    .num {
      font-size: 28px;
      font-weight: 500;
      white-space: nowrap;
    }
  }
  .hero-wrapper {
    margin-bottom: 20px;
  }

  @media screen and (min-width: 768px) {
    .header {
      padding: 40px 30px;
      h1 {
        font-size: 36px;
      }
    }
    .header p {
      font-size: 16px;
      max-width: 590px;
      margin: 30px auto;
    }
    .advantages {
      .adv-content {
        flex-direction: row;
        justify-content: space-around;
      }
      .adv-descr {
        max-width: 95px;
      }
    }
    .start-button {
      padding: 16px 55px;
    }
  }
  @media screen and (min-width: 1200px) {
    .hero-wrapper {
      display: flex;
      flex-direction: row;
      column-gap: 30px;
      justify-content: center;
    }
    .header {
      padding: 80px 50px;
      margin-bottom: 0;
      h1 {
        font-size: 48px;
        text-align: left;
      }
      p {
        font-size: 18px;
        text-align: left;
      }
    }
    .header-img img {
      height: 100%;
    }
  }
  @media screen and (min-width: 1440px) {
    .hero-wrapper {
      display: flex;
      flex-direction: row;
    }
    .header-img {
      width: 568px;
    }
    .advantages {
      .adv-content {
        flex-direction: row;
      }
    }
  }
`;

export default HomePage;
