import React from "react";
import styled from "styled-components";

const StyledDropdown = styled.select`
    margin: 0px 10px 10px 10px;
    height: 40px;
    border: none;
    border-radius: 10px;
    font-size: 20px;
`;
function DropDown({ onChange, value, name, children }) {
    return (
        <StyledDropdown onChange={onChange} value={value} name={name}>
            {children}
        </StyledDropdown>
    );
}

export default DropDown;
