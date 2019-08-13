import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
    box-sizing: border-box;
}
body {
    
    margin: 0;
    font-size: 24px;
    font-family: sans-serif;
    flex-wrap: wrap;
    word-wrap: break-word;
}
button {
    display: flex;
    align-items: center;
    justify-content: center;
}
`;
