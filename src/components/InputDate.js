import React from "react";
import styled from "styled-components";

const Container = styled.div`
    margin-bottom: 10px;
`;

const StyledLabel = styled.label`
    display: flex;
    align-items: flex-end;
    display: block;
    margin-left: 5px;
`;

const StyledInput = styled.input`
    border: 1px gray solid;
    border-radius: 3px;
    font-size: 20px;
    height: 40px;
    margin-left: 5px;
`;

function InputDate({
    className,
    value,
    name,
    placeholder,
    onChange,
    label,
    defaultValue
}) {
    return (
        <Container className={className}>
            <StyledLabel>
                {label}
                <StyledInput
                    type="date"
                    value={value}
                    name={name}
                    defaultValue={defaultValue}
                    placeholder={placeholder}
                    onChange={onChange}
                />
            </StyledLabel>
        </Container>
    );
}

export default InputDate;
