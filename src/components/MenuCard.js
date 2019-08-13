import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 110px;
    height: 120px;
    background-color: lightgrey;
    border-radius: 10px;
    margin: 5px;
    box-shadow: 5px 5px 8px grey;
`;
const StyledIcon = styled.div`
    background-color: transparent;
    font-size: 60px;
    color: black;
`;
const StyledTitle = styled.div`
    font-size: 24px;
    color: black;
`;

function MenuCard({ title, className, icon, onClick }) {
    return (
        <StyledCard onClick={onClick}>
            <StyledIcon className={className} icon={icon} title={title}>
                <i className={`fas ${icon}`} />
            </StyledIcon>
            <StyledTitle>{title}</StyledTitle>
        </StyledCard>
    );
}

export default MenuCard;
