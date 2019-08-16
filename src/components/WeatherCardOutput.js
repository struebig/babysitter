import React from "react";
import styled from "styled-components";
import CardOutputFooter from "../components/CardOutputFooter";

const WeatherCardOutput = styled.div`
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

function ShowWeatherCard({ category, temperatur, degree, description }) {
    return (
        <WeatherCardOutput>
            <StyledCardHead>
                <StyledCategory>
                    <i className={`fas ${category}`} />
                </StyledCategory>
                <StyledTemperature>
                    {temperatur} {degree} °C
                </StyledTemperature>
            </StyledCardHead>

            <StyledCardBody>{description}</StyledCardBody>
            <CardOutputFooter />
        </WeatherCardOutput>
    );
}

export default ShowWeatherCard;
