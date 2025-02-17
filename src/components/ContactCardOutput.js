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

const StyledContact = styled.div`
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

function ShowContactCard({
    category,
    name,
    phoneNo,
    description,
    assigned,
    household
}) {
    return (
        <>
            <StyledCardHead>
                <Headline size="S">{category}</Headline>
            </StyledCardHead>

            <StyledContact>
                <div>{name}</div>
                <div>{phoneNo}</div>
            </StyledContact>
            <StyledCardBody>{description}</StyledCardBody>
            <ShowAssignedChildren assigned={assigned} household={household} />
        </>
    );
}

export default ShowContactCard;
