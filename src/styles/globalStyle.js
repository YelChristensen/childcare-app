import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

body {
    margin: 0;
    color: ${(props) => props.theme.colors.text};
    font-family: 'Patrick Hand SC', cursive;
}
`;

export default GlobalStyle;
