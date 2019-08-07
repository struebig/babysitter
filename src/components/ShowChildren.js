import React from "react";
import styled from "styled-components";

const StyledOutput = styled.div`
    display: flex;
    align-items: center;
    padding-left: 10px;
    border: 1px gray solid;
    border-radius: 3px;
    width: 95%;
    height: 40px;
    margin-left: 5px;
    color: white;
`;

function ShowChildren({ name }) {
    return <StyledOutput>{name}</StyledOutput>;
}

export default ShowChildren;
