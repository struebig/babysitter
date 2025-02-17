import React from "react";
import styled from "styled-components";
import logoSmall from "../ressources/logoSmall.png";
import Headline from "../components/Headline";

const StyledHeaderData = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: auto;
    background-color: #004242;
    color: #a2ebef;
    box-shadow: 0px 5px 8px grey;
`;

const StyledIcon = styled.img`
    margin-left: 15px;
`;

const StyledButton = styled.button`
    width: 50px;
    height: 100%;
    font-size: 50px;
    border: none;
    background-color: #004242;
    color: #960000;
    margin-right: 15px;
`;

function HeaderData({ button, title, direction, history }) {
    function handleCancel() {
        history.push(direction);
    }
    return (
        <StyledHeaderData>
            <StyledIcon src={logoSmall} alt="Logo" />
            <Headline size="L">{title}</Headline>
            <StyledButton type={button} onClick={handleCancel}>
                <i className="far fa-window-close" />
            </StyledButton>
        </StyledHeaderData>
    );
}

export default HeaderData;
