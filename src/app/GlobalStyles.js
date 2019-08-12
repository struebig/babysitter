import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
    box-sizing: border-box;
}
body {
    background-color: #6175b3;
    margin: 0;
    font-size: 24px;
    color: #A2EBEF;
    font-family: sans-serif;
}
button {
    display: flex;
    align-items: center;
    justify-content: center;
}
`;
