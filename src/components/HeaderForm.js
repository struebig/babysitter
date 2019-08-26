import React from "react";
import styled from "styled-components";
import Headline from "./Headline";

const StyledHeaderForm = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    height: 60px;
    background-color: #004242;
    box-shadow: 0px 5px 8px grey;
    color: #a2ebef;
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
    background-color: #004242;
    font-weight: bold;
    color: ${props => getType(props.type)};
`;

function HeaderForm({ submit, handleSubmit, button, handleCancel, title }) {
    return (
        <StyledHeaderForm>
            <StyledButton type={submit} onClick={handleSubmit}>
                <i className="far fa-check-circle" />
            </StyledButton>
            <Headline size="L">{title}</Headline>
            <StyledButton type={button} onClick={handleCancel}>
                <i className="far fa-window-close" />
            </StyledButton>
        </StyledHeaderForm>
    );
}

export default HeaderForm;
