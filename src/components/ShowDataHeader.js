import React from "react";
import styled from "styled-components";
import logoIcon from "../ressources/logoIcon.png";
import Headline from "../components/Headline";

const StyledHeaderData = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 60px;
    background-color: #6175b3;
    border-bottom: solid #a2ebef;
`;

const StyledIcon = styled.img`
    margin-left: 5px;
`;

const StyledButton = styled.button`
    width: 20%;
    height: 100%;
    font-size: 50px
    border: none;
    background-color: #6175b3;
    color: #960000;
`;

function HeaderData({ button, handleCancel, title }) {
    return (
        <StyledHeaderData>
            <StyledIcon src={logoIcon} alt="Logo" />
            <Headline size="M">{title}</Headline>
            <StyledButton type={button} onClick={handleCancel}>
                <i class="far fa-window-close" />
            </StyledButton>
        </StyledHeaderData>
    );
}

export default HeaderData;
