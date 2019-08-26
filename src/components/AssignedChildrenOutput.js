import React from "react";
import styled from "styled-components";

const StyledName = styled.div`
    font-size: 26px;
    font-weight: bold;
    margin-bottom: 10px;
`;
const colors = {
    black: "#000000",
    blue: "#0000FF",
    red: "#FF0000",
    green: "#008000",
    yellow: "#FFFF00",
    orange: "#FFA500",
    pink: "#FF00FF",
    purple: "#800080"
};

function getColors(color) {
    return colors[color] || color.black;
}

const StyledPicture = styled.img`
    margin: 2%;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    margin-right: 40px;
    box-shadow: 0 0 20px ${props => getColors(props.color)};
`;

const StyledSection = styled.div`
    display: flex;
    padding-left: 20px;
    align-items: center;
`;

const StyledContainer = styled.div`
    margin-bottom: 10px;
`;

function ShowAssignedChildren({ household, assigned }) {
    const { children } = household;

    const assignedChildren = assigned.map(id =>
        children.find(child => child.id === id)
    );

    return (
        <StyledContainer>
            {assignedChildren.map(child => (
                <StyledSection>
                    <StyledPicture
                        src={child.childImg}
                        color={child.profileColor}
                    />
                    <StyledName>{child.firstName}</StyledName>
                </StyledSection>
            ))}
        </StyledContainer>
    );
}

export default ShowAssignedChildren;
