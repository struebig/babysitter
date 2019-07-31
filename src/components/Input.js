import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
`;

const StyledLabel = styled.label``;

const StyledInput = styled.input`
    border: 1px gray solid;
    border-radius: 3px;
    font-size: 20px;
`;

function Input({ className, value, name, placeholder, onChange, label }) {
    return (
        <Container className={className}>
            <StyledLabel>{label}</StyledLabel>
            <StyledInput
                value={value}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
            />
        </Container>
    );
}

export default Input;
