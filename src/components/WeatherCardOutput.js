import React from "react";
import styled from "styled-components";

const WeatherCardOutput = styled.div`
    border: solid 2px black;
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
            <div>{category}</div>
            <div>{temperatur}</div>
            <div>{degree}</div>
            <div>{description}</div>
        </WeatherCardOutput>
    );
}

export default ShowWeatherCard;
