import React from "react";
import styled from "styled-components";

const Container = styled.div`
    margin-bottom: 10px;
`;

const StyledLabel = styled.label`
    display: block;
    margin-left: 5px;
`;
const sizes = {
    textShort: {
        width: "95%",
        height: "40px",
        minHeight: "40px"
    },
    textMedium: {
        width: "60%",
        height: "40",
        minHeight: "40px"
    },
    textLong: {
        width: "95%",
        height: "auto",
        minHeight: "120px"
    },

    numberShort: {
        width: "30%",
        height: "40px",
        minHeight: "40px"
    },
    numberMedium: {
        width: "120px",
        height: "40px",
        minHeight: "40px"
    },
    numberLong: {
        width: "95%",
        height: "40px",
        minHeight: "40px"
    }
};
const StyledInput = styled.input`
    border: 1px gray solid;
    border-radius: 3px;
    font-size: 20px;
    width: ${props => getSize(props.size).width};
    height: ${props => getSize(props.size).height};
    min-height: ${props => getSize(props.size).minHeight};
`;
function getSize(size) {
    return sizes[size] || size.textShort;
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
