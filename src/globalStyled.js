import { createGlobalStyle } from "styled-components";
import "modern-normalize";
import "./styles/root.css";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: var(--font);
    color: var(--primary-text-color);
    font-weight: 500;
    font-size: 16px;
    h1, h2, h3, h4, h5, h6 {
      margin: 0;
    }
    button {
      border: none
    }
    a {
      text-decoration: none;
    }
    button:hover {
      cursor: pointer;
    }
    .form-field {
      height: 54px;
      padding: 16px 18px;
      width: 100%;
      border: 1px solid var(--accent-color);
      border-radius: 12px;
    }
    .eye-icon {
      top: 17px;
      right: 18px;
      position: absolute;
      width: 20px;
      height: 20px;
      padding: 0;
      background-color: rgba(0, 0, 0, 0);
    }
    .eye-icon > .icon {
      width: 100%;
      height: 100%;
    }
    .submit-form-button {
      background-color: var(--secondary-color);
      border-radius: 12px;
      height: 60px;
      font-size: 18px;
      font-weight: 700;
      &:is(:hover, :focus) {
        background-color: var(--secondary-hover-color);
      }
    }
    ul {
      list-style-type: none;
      padding: 0;
    }
    .flex {
      display: flex;
    }
    .row {
    flex-direction: row;
    }
    .column {
     flex-direction: column;
    }
  }



`;
