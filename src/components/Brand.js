import React from "react";
import styled from "styled-components";
import logoSmall from "../ressources/logoSmall.png";

const StyledBrand = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: auto;
    background-color: #004242;
    border-color: #004242;
    color: #a2ebef;
    box-shadow: 0px 5px 8px grey;
`;

const StyledIcon = styled.img`
    margin-left: 5px;
    height: 100px;
`;

const StyledHeadlines = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const StyledTitle = styled.div`
    font-size: 20px;
`;

function BrandName() {
    return (
        <StyledBrand>
            <StyledIcon src={logoSmall} alt="Logo" />
            <StyledHeadlines>
                <StyledTitle>----------------------</StyledTitle>
                <StyledTitle>NANNYS LITTLE HELPER</StyledTitle>
                <StyledTitle>IT'S MY TURN NOW</StyledTitle>
                <StyledTitle>----------------------</StyledTitle>
            </StyledHeadlines>
        </StyledBrand>
    );
}

export default BrandName;
