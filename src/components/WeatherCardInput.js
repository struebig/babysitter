import React from "react";
import styled from "styled-components";
import DropDown from "./Dropdown";
import Input from "./Input";
import InputLong from "./InputLong";
import Headline from "./Headline";

const StyledCard = styled.form`
    border-radius: 5%;
    width: 96%;
    height: 500px;
    position: absolute;
    top: 70px;
    left: 2%;
    right: 2%;
    background: lightgrey;
`;
const types = {
    button: "#960000",
    submit: "#00965F"
};
function getType(type) {
    return types[type] || type.button;
}

const StyledButton = styled.button`
    width: 50px;
    height: 50px;
    font-size: 50px;
    border: none;
    background-color: lightgrey;
    font-weight: bold;
    color: ${props => getType(props.type)};
`;

function WeatherCardInput({ onCreate, onClose }) {
    function handleSubmit(event) {
        event.preventDefault();
        const form = event.target;

        onCreate({
            category: form.category.value,
            temperatur: form.temperatur.value,
            degree: form.degree.value,
            description: form.description.value
        });

        form.reset();
        onClose();
    }
    return (
        <StyledCard onSubmit={handleSubmit}>
            <Headline size="XS">Add clothing information</Headline>
            <DropDown /*onChange={handleChange}*/ name="category">
                <option value="fa-question-circle">Weather</option>
                <option value="fa-question-circle">---</option>
                <option value="fa-sun">Sun</option>
                <option value="fa-cloud-rain">Rain</option>
                <option value="fa-wind">Wind</option>
                <option value="fa-snowflake">Snow</option>
            </DropDown>
            <div>
                <DropDown /*onChange={handleChange}*/ name="temperatur">
                    <option value="">Degrees</option>
                    <option value="">---</option>
                    <option value="below">below</option>
                    <option value="above">above</option>
                </DropDown>
                <Input
                    label="Degree c°"
                    //   value={household.}
                    name="degree"
                    placeholder="Degree c°"
                    //   onChange={handleChange}
                />
            </div>

            <InputLong
                label="Description"
                //   value={household.}
                name="description"
                placeholder="Description"
                //   onChange={handleChange}
            />
            <StyledButton type="submit">
                <i class="far fa-check-circle" />
            </StyledButton>
            <StyledButton type="button" onClick={onClose}>
                <i class="far fa-window-close" />
            </StyledButton>
        </StyledCard>
    );
}

export default WeatherCardInput;
