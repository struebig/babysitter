import React from "react";
import styled from "styled-components";
import Headline from "../components/Headline";

const GeneralCardOutput = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    height: auto;
    width: 320px;
    padding: 3px;
    background: lightgrey;
    margin-bottom: 20px;
    box-shadow: 5px 5px 8px grey;
`;
const StyledInfo = styled.div`
    display: flex;
    justify-content: space-between;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 5px;
`;

function ParentCard({ title, parentName, phone }) {
    return (
        <GeneralCardOutput>
            <Headline size="XS">{title}</Headline>
            <StyledInfo>
                <div>Name:</div>
                <div>{parentName}</div>
            </StyledInfo>
            <StyledInfo>
                <div>Phone No.:</div>
                <div>{phone}</div>
            </StyledInfo>
        </GeneralCardOutput>
    );
}

export default ParentCard;
