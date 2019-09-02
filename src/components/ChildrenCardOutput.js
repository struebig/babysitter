import React from "react";
import styled from "styled-components";

const StyledName = styled.div`
    display: flex;
    justify-content: space-around;
    font-size: 26px;
    font-weight: bold;
    margin-top: 10px;
`;

const StyledInfo = styled.div`
    display: flex;
    justify-content: space-between;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 5px;
`;

const StyledChildImg = styled.img`
    display: flex;
    margin: 2%;
    width: 96%;
    border-radius: 10px;
`;

function ChildrenCardOutput({
    firstName,
    lastName,
    birthday,
    bloodtype,
    diet,
    picture,
    color
}) {
    return (
        <>
            <StyledName>
                {firstName} {lastName}
            </StyledName>
            <StyledChildImg color={color} src={picture} />
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
