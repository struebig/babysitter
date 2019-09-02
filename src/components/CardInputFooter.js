import React from "react";
import styled from "styled-components";

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
    background-color: lightgrey;
    font-weight: bold;
    color: ${props => getType(props.type)};
`;

const StyledFooter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 10px;
`;

function CardInputFooter({ onClick, onSubmit }) {
    return (
        <StyledFooter>
            <StyledButton type="submit">
                <i className="far fa-check-circle" onSubmit={onSubmit} />
            </StyledButton>
            <StyledButton type="button" onClick={onClick}>
                <i className="far fa-window-close" />
            </StyledButton>
        </StyledFooter>
    );
}

export default CardInputFooter;
