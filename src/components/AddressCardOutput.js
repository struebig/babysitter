import React from "react";
import styled from "styled-components";
import Headline from "./Headline";
import StyledCardOutput from "../components/StyledCardOutput";

const StyledInfo = styled.div`
    display: flex;
    justify-content: space-between;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 5px;
`;

function ShowAddressCard({ street, houseNo, zip, city }) {
    return (
        <StyledCardOutput>
            <Headline size="S">Adress</Headline>
            <StyledInfo>
                <div>{street}</div>
                <div>{houseNo}</div>
            </StyledInfo>
            <StyledInfo>
                <div>{zip}</div>
                <div>{city}</div>
            </StyledInfo>
        </StyledCardOutput>
    );
}

export default ShowAddressCard;
