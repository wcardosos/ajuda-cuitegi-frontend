import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.textPrimary};
    font: 400 16px Cairo, sans-serif;

    @media (min-width: 320px) and (max-width: 420px) {
      font-size: 12px;
    }
  }
`;
