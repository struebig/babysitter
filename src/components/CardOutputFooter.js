import React from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 10px;
    margin-top: 10px;
`;
const types = {
    delete: "#960000",
    edit: "#00965F"
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

function CardOutputFooter({ onClick }) {
    return (
        <StyledFooter>
            <StyledButton type="edit" onClick={onClick}>
                <i className="far fa-edit" />
            </StyledButton>
            <StyledButton type="delete" onClick={onClick}>
                <i className="fas fa-trash-alt" />
            </StyledButton>
        </StyledFooter>
    );
}

export default CardOutputFooter;
