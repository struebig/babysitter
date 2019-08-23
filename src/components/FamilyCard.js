import React from "react";
import styled from "styled-components";

const GeneralCardOutput = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    height: auto;
    width: ${props => getSize(props.size).width};
    height: auto;
    padding: 3px;
    background: lightgrey;
    margin-bottom: 20px;
    box-shadow: 5px 5px 8px grey;
`;

const StyledName = styled.div`
    font-size: ${props => getSize(props.size).fontSize};
    font-weight: bold;
    display: flex;
    justify-content: center;
`;

const StyledFamilyImg = styled.img`
    display: flex;
    margin: 2%;
    width: 96%;
    border-radius: 10px;
`;
const sizes = {
    big: {
        fontSize: "24px",
        width: "320px"
    },
    small: {
        fontSize: "18px",
        width: "140px"
    }
};
function getSize(size) {
    return sizes[size] || size.big;
}

function FamilyCard({ name, picture, onClick, size }) {
    return (
        <GeneralCardOutput size={size} onClick={onClick}>
            <StyledName size={size}>Family {name}</StyledName>
            <StyledFamilyImg src={picture} />
        </GeneralCardOutput>
    );
}

export default FamilyCard;
