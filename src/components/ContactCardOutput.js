import React from "react";
import styled from "styled-components";
import Headline from "./Headline";

const ContactCardOutput = styled.div`
    border: solid 2px black;
`;

function ShowContactCard({ category, name, phoneNo, description }) {
    return (
        <ContactCardOutput>
            <Headline size="XS">{category}</Headline>
            <div>{name}</div>
            <div>{phoneNo}</div>
            <div>{description}</div>
        </ContactCardOutput>
    );
}

export default ShowContactCard;
