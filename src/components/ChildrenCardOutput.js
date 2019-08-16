import React from "react";
import styled from "styled-components";
import CardOutputFooter from "../components/CardOutputFooter";

const StyledChildrenCardOutput = styled.div`
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

const StyledName = styled.div`
    display: flex;
    justify-content: space-around;
    font-size: 26px;
    font-weight: bold;
    margin-bottom: 10px;
`;

const StyledInfo = styled.div`
    display: flex;
    justify-content: space-between;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 5px;
`;

function ChildrenCardOutput({
    firstName,
    lastName,
    birthday,
    bloodtype,
    diet
}) {
    return (
        <>
            <StyledChildrenCardOutput>
                <StyledName>
                    {firstName} {lastName}
                </StyledName>
                <StyledInfo>
                    <div>Birthday:</div>
                    <div>{birthday}</div>
                </StyledInfo>
                <StyledInfo>
                    <div>Bloodtype:</div>
                    <div>{bloodtype}</div>
                </StyledInfo>
                <StyledInfo>
                    <div>Diet:</div>
                    <div>{diet}</div>
                </StyledInfo>
                <CardOutputFooter />
            </StyledChildrenCardOutput>
        </>
    );
}

export default ChildrenCardOutput;
