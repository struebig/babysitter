import React from "react";
import styled from "styled-components";

const WeatherCardOutput = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    height: auto;
    width: 320px;
    padding: 3px;
    background: lightgrey;
    margin-bottom: 10px;
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

const StyledCategory = styled.div`
    width: 100px;
    height: 100px;
    font-size: 100px;
`;

/*const category = {
    sun: "fa-sun",
    rain:"",
    wind:"",
    snow:""
};
function getCategory(category) {
    return categorys[category] || category.sun;*/

function ShowWeatherCard({ category, temperatur, degree, description }) {
    return (
        <WeatherCardOutput>
            <StyledCardHead>
                <StyledCategory>
                    <i className={`fas ${category}`} />
                </StyledCategory>
                <div>
                    {temperatur} {degree} °C
                </div>
            </StyledCardHead>

            <StyledCardBody>{description}</StyledCardBody>
        </WeatherCardOutput>
    );
}

export default ShowWeatherCard;
