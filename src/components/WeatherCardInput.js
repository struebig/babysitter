import React from "react";
import styled from "styled-components";
import DropDown from "./Dropdown";
import Input from "./Input";
import InputLong from "./InputLong";
import Headline from "./Headline";

const StyledCard = styled.form`
    border: solid 2px black;
`;

function WeatherCardInput({ onCreate }) {
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
    }
    return (
        <StyledCard onSubmit={handleSubmit}>
            <Headline size="XS">Add clothing information</Headline>
            <DropDown /*onChange={handleChange}*/ name="category">
                <option value="">Weather</option>
                <option value="">---</option>
                <option value="sun">Sun</option>
                <option value="rain">Rain</option>
                <option value="wind">Wind</option>
                <option value="snow">Snow</option>
            </DropDown>
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

            <InputLong
                label="Description"
                //   value={household.}
                name="description"
                placeholder="Description"
                //   onChange={handleChange}
            />
            <button>ADD</button>
        </StyledCard>
    );
}

export default WeatherCardInput;
