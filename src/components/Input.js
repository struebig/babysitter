import React from "react";
import styled from "styled-components";

const Container = styled.div`
    margin-bottom: 10px;
`;

const StyledLabel = styled.label`
    display: block;
    margin-left: 5px;
`;

const StyledInput = styled.input`
    border: 1px gray solid;
    border-radius: 3px;
    font-size: 20px;
    width: 95%;
    height: 40px;
    margin-left: 5px;
`;

function Input({ className, value, name, placeholder, onChange, label }) {
    return (
        <Container className={className}>
            <StyledLabel>
                {label}
                <StyledInput
                    value={value}
                    name={name}
                    placeholder={placeholder}
                    onChange={onChange}
                />
            </StyledLabel>
        </Container>
    );
}

export default Input;
