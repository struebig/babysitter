import React from "react";
import styled from "styled-components";
import Headline from "./Headline";

const MedicalCardOutput = styled.div`
    border: solid 2px black;
`;

function ShowMedicalCard({ category, title, description }) {
    return (
        <MedicalCardOutput>
            <Headline size="XS">{category}</Headline>
            <div>{title}</div>
            <div>{description}</div>
        </MedicalCardOutput>
    );
}

export default ShowMedicalCard;
