import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
}
html, body {
    width: 100vw;
    height: 100vh;
}
button:hover{
    cursor: pointer;
}
`;
