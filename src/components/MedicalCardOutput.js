import React from "react";
import styled from "styled-components";
import Headline from "./Headline";
import ShowAssignedChildren from "../components/AssignedChildrenOutput";

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

function ShowMedicalCard({
    category,
    title,
    description,
    household,
    assigned
}) {
    return (
        <>
            <StyledCardHead>
                <Headline size="XS">{category}</Headline>
            </StyledCardHead>

            <StyledTitle>{title}</StyledTitle>
            <StyledCardBody>{description}</StyledCardBody>
            <ShowAssignedChildren assigned={assigned} household={household} />
        </>
    );
}

export default ShowMedicalCard;
