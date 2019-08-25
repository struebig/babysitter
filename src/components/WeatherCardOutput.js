import React from "react";
import styled from "styled-components";
import ShowAssignedChildren from "../components/AssignedChildrenOutput";

const StyledCardHead = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
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

const StyledTemperature = styled.div`
    font-size: 30px;
`;

const StyledCategory = styled.div`
    width: 100px;
    height: 100px;
    font-size: 100px;
`;

function ShowWeatherCard({
    category,
    temperatur,
    degree,
    description,
    household,
    assigned
}) {
    return (
        <>
            <StyledCardHead>
                <StyledCategory>
                    <i className={`fas ${category}`} />
                </StyledCategory>
                <StyledTemperature>
                    {temperatur} {degree} °C
                </StyledTemperature>
            </StyledCardHead>
            <StyledCardBody>{description}</StyledCardBody>
            {/* <ShowAssignedChildren assigned={assigned} household={household} /> */}
        </>
    );
}

export default ShowWeatherCard;
