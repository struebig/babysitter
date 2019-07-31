import React from "react";
import styled from "styled-components";

const Container = styled.div`
    margin-bottom: 10px;
`;

const StyledLabel = styled.div`
    display: block;
    margin-left: 5px;
`;

const StyledOutput = styled.div`
    display: flex;
    align-items: center;
    padding-left: 10px;
    border: 1px gray solid;
    border-radius: 3px;
    width: 95%;
    height: 40px;
    margin-left: 5px;
    background-color: #a0d2ff;
`;

function Output({ className, name, label }) {
    return (
        <Container className={className}>
            <StyledLabel>{label}</StyledLabel>
            <StyledOutput>{name}</StyledOutput>
        </Container>
    );
}

export default Output;
