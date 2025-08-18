/** @jsxImportSource @emotion/react */
import { css, Global } from "@emotion/react";

const globalStyle = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Arial', sans-serif;
  }
`;

export const GlobalStyle = () => <Global styles={globalStyle} />;