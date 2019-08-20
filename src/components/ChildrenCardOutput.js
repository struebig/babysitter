import React from "react";
import styled from "styled-components";

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
        </>
    );
}

export default ChildrenCardOutput;
