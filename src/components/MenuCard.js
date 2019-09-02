import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 140px;
    width: auto;
    max-width: 420px;
    min-height: 150px;
    height: auto;
    max-height: 450px;
    background-color: lightgrey;
    border-radius: 10px;
    margin: 5px;
    margin-bottom: 10px;
    box-shadow: 5px 5px 8px grey;
`;
const StyledIcon = styled.div`
    background-color: transparent;
    font-size: 70px;
    color: #004242;
`;
const StyledTitle = styled.div`
    font-size: 24px;
    color: black;
`;

function MenuCard({ title, className, icon, history, direction }) {
    function handleClick() {
        history.push(direction);
    }
    return (
        <StyledCard onClick={handleClick}>
            <StyledIcon className={className} icon={icon} title={title}>
                <i className={`fas ${icon}`} />
            </StyledIcon>
            <StyledTitle>{title}</StyledTitle>
        </StyledCard>
    );
}

export default MenuCard;
