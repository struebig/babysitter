import React from "react";
import styled from "styled-components";

const Container = styled.div`
    margin-bottom: 10px;
`;

const StyledLabel = styled.label`
    display: block;
    margin-left: 5px;
`;

const StyledTextarea = styled.textarea`
    border: 1px gray solid;
    border-radius: 3px;
    font-size: 20px;
    width: 95%;
    height: auto;
    min-height: 120px;
`;

function Textarea({
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
                <StyledTextarea
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

export default Textarea;
