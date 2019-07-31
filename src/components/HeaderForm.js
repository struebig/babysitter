/* import PropTypes from "prop-types"; */
import React from "react";
import styled from "styled-components";

const StyledHeaderForm = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    height: 60px;
    background-color: #2892d7;
`;

const StyledButton = styled.button`
    width: 100%;
    height: 100%;
    font-size: 100%;
    border: none;
    background-color: #2892d7;
    /*color: ${props => (props.active ? "goldenrod" : "white")};
    font-size: 20px;
    cursor: pointer;
    box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.5);*/
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
