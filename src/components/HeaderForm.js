/* import PropTypes from "prop-types"; */
import React from "react";
import styled from "styled-components";

const StyledHeaderForm = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    height: 60px;
    background-color: #6175b3;
    box-shadow: 0px 5px 8px grey;
`;
const types = {
    button: "#960000",
    submit: "#00965F"
};
function getType(type) {
    return types[type] || type.button;
}

const StyledButton = styled.button`
    width: 50px;
    height: 50px;
    font-size: 50px;
    border: none;
    background-color: #6175b3;
    font-weight: bold;
    color: ${props => getType(props.type)};
`;

function HeaderForm({ submit, handleSubmit, button, handleCancel }) {
    return (
        <StyledHeaderForm>
            <StyledButton type={submit} onClick={handleSubmit}>
                <i class="far fa-check-circle" />
            </StyledButton>
            <StyledButton type={button} onClick={handleCancel}>
                <i class="far fa-window-close" />
            </StyledButton>
        </StyledHeaderForm>
    );
}

export default HeaderForm;
