import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    width: 50 vw;
    height: 48px;
    border-radius: 5%;
    border: none;
    color: ${props => (props.active ? "goldenrod" : "white")};
    background: mediumseagreen;
    font-size: 20px;
    cursor: pointer;
    box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.5);
`;

function HeaderForm({ submit, handleSubmit, button, handleCancel }) {
    return (
        <>
            <StyledButton type={submit} onClick={handleSubmit}>
                <i class="far fa-check-circle" />
            </StyledButton>
            <StyledButton type={button} onClick={handleCancel}>
                <i class="far fa-window-close" />
            </StyledButton>
        </>
    );
}

export default HeaderForm;
