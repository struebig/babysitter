import React from "react";
import styled from "styled-components";

const Container = styled.div`
    margin-bottom: 10px;
`;

const StyledLabel = styled.label`
    display: block;
    margin-left: 5px;
`;

const StyledInput = styled.textarea`
    border: 1px gray solid;
    border-radius: 3px;
    font-size: 20px;
    width: 95%;
    height: auto;
    margin-left: 5px;
`;

function InputLong({ className, value, name, placeholder, onChange, label }) {
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

export default InputLong;
