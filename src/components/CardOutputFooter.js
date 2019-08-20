import React from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 10px;
    margin-top: 10px;
`;
const buttonIcons = {
    delete: "#960000",
    edit: "#00965F"
};
function getType(buttonIcon) {
    return buttonIcons[buttonIcon] || buttonIcon.button;
}

const StyledButton = styled.button`
    width: 50px;
    height: 50px;
    font-size: 50px;
    border: none;
    background-color: lightgrey;
    font-weight: bold;
    color: ${props => getType(props.buttonIcon)};
`;

function CardOutputFooter({ onEditClick, onDeleteClick }) {
    return (
        <StyledFooter>
            <StyledButton type="button" buttonIcon="edit" onClick={onEditClick}>
                <i className="far fa-edit" />
            </StyledButton>
            <StyledButton
                type="button"
                buttonIcon="delete"
                onClick={onDeleteClick}
            >
                <i className="fas fa-trash-alt" />
            </StyledButton>
        </StyledFooter>
    );
}

export default CardOutputFooter;
