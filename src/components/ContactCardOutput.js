import React from "react";
import styled from "styled-components";
import Headline from "./Headline";
import CardOutputFooter from "../components/CardOutputFooter";

const ContactCardOutput = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    height: auto;
    width: 320px;
    padding: 3px;
    background: lightgrey;
    margin-bottom: 10px;
    box-shadow: 5px 5px 8px grey;
`;

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

function ShowContactCard({ category, name, phoneNo, description }) {
    return (
        <ContactCardOutput>
            <StyledCardHead>
                <Headline size="XS">{category}</Headline>
            </StyledCardHead>

            <StyledContact>
                <div>{name}</div>
                <div>{phoneNo}</div>
            </StyledContact>
            <StyledCardBody>{description}</StyledCardBody>
            <CardOutputFooter />
        </ContactCardOutput>
    );
}

export default ShowContactCard;
