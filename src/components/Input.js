import React from "react";
import styled from "styled-components";

const Container = styled.div`
    margin-bottom: 10px;
`;

const StyledLabel = styled.label`
    display: block;
    margin-left: 10px;
`;
const sizes = {
    inputLong: {
        width: "95%",
        height: "40px",
        minHeight: "40px"
    },
    inputShort: {
        width: "35%",
        height: "40px",
        minHeight: "40px"
    }
};
const StyledInput = styled.input`
    padding: 5px;
    border: 1px gray solid;
    border-radius: 3px;
    font-size: 20px;
    width: ${props => getSize(props.size).width};
    height: ${props => getSize(props.size).height};
    min-height: ${props => getSize(props.size).minHeight};
`;
function getSize(size) {
    return sizes[size] || size.inputLong;
}

function Input({
    size,
    className,
    value,
    name,
    placeholder,
    onChange,
    label,
    defaultValue,
    required
}) {
    return (
        <Container className={className}>
            <StyledLabel>
                {label}
                <StyledInput
                    size={size}
                    value={value}
                    name={name}
                    defaultValue={defaultValue}
                    placeholder={placeholder}
                    onChange={onChange}
                    required={required}
                />
            </StyledLabel>
        </Container>
    );
}

export default Input;
