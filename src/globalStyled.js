import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';
import './styles/root.css';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: var(--font);
    color: var(--primary-text-color);
    font-weight: 500;
    a {
      text-decoration: none;
    }
  }



`;
