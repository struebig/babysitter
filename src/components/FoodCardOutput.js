import React from "react";
import styled from "styled-components";
import Headline from "./Headline";

const StyledCardHead = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;
const StyledTitle = styled.div`
    display: flex;
    justify-content: space-around;
`;

const StyledCardBody = styled.div`
    width: 290px;
    height: auto;
    display: flex;
    align-items: center;
    margin: 10px;
    padding: 5px;
    background-color: #f8f8ff;
    border-radius: 10px;
`;

function ShowFoodCard({ category, name, description }) {
    return (
        <>
            <StyledCardHead>
                <Headline size="XS">{category}</Headline>
            </StyledCardHead>

            <StyledTitle>{name}</StyledTitle>
            <StyledCardBody>{description}</StyledCardBody>
        </>
    );
}

export default ShowFoodCard;
