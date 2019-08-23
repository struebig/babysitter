import React from "react";
import styled from "styled-components";

const StyledName = styled.div`
    display: flex;
    justify-content: space-around;
    font-size: 26px;
    font-weight: bold;
    margin-bottom: 10px;
`;

function ShowAssignedChildren({ household, assigned }) {
    const { children } = household;

    const assignedChildren = assigned.map(id =>
        children.find(child => child.id === id)
    );

    return (
        <>
            {assignedChildren.map(child => (
                <StyledName>{child.firstName}</StyledName>
            ))}
        </>
    );
}

export default ShowAssignedChildren;
