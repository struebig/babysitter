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
`;

function ChildrenCardOutput({
    firstName,
    lastName,
    birthday,
    bloodtype,
    diet
}) {
    return (
        <>
            <StyledOutput>{firstName}</StyledOutput>
            <StyledOutput>{lastName}</StyledOutput>
            <StyledOutput>{birthday}</StyledOutput>
            <StyledOutput>{bloodtype}</StyledOutput>
            <StyledOutput>{diet}</StyledOutput>
        </>
    );
}

export default ChildrenCardOutput;
