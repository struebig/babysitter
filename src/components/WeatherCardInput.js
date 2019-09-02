import React from "react";
import styled from "styled-components";
import DropDown from "./Dropdown";
import Headline from "./Headline";
import Input from "../components/Input";
import Textarea from "./Textarea";
import { v1 } from "uuid";
import AssignChildren from "../components/AssignedChildrenInput";
import StyledCardInput from "../components/StyledCardInput";
import CardInputFooter from "../components/CardInputFooter";

const StyledTemperature = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-end;
`;

function WeatherCardInput({ household, setHousehold, defaultValues, onClose }) {
    const [selectedChildren, setSelectedChildren] = React.useState([]);

    function handleSubmit(event) {
        event.preventDefault();
        const form = event.target;

        let oldState = [];
        if (household.clothing) {
            if (defaultValues && defaultValues.id) {
                oldState = household.clothing.filter(
                    s => s.id !== defaultValues.id
                );
            } else {
                oldState = household.clothing;
            }
        }
        setHousehold({
            ...household,
            clothing: [
                ...oldState,
                {
                    id:
                        defaultValues && defaultValues.id
                            ? defaultValues.id
                            : v1(),
                    category: form.category.value,
                    temperatur: form.temperatur.value,
                    degree: form.degree.value,
                    description: form.description.value,
                    assigned: selectedChildren
                }
            ]
        });
        form.reset();
        onClose();
    }

    function handleChildrenChange(id) {
        setSelectedChildren(
            selectedChildren.includes(id)
                ? selectedChildren.filter(item => item !== id)
                : [id, ...selectedChildren]
        );
    }

    return (
        <StyledCardInput onSubmit={handleSubmit}>
            <Headline size="S">Add clothing information</Headline>
            <DropDown
                name="category"
                defaultValue={defaultValues && defaultValues.category}
            >
                <option value="fa-question-circle">Weather</option>
                <option value="fa-question-circle">---</option>
                <option value="fa-sun">Sun</option>
                <option value="fa-cloud-rain">Rain</option>
                <option value="fa-wind">Wind</option>
                <option value="fa-snowflake">Snow</option>
            </DropDown>
            <StyledTemperature>
                <DropDown
                    name="temperatur"
                    defaultValue={defaultValues && defaultValues.temperatur}
                >
                    <option value=""> below / above </option>
                    <option value="">---</option>
                    <option value="below">below</option>
                    <option value="above">above</option>
                </DropDown>
                <Input
                    size="inputShort"
                    label="Degree c°"
                    defaultValue={defaultValues && defaultValues.degree}
                    name="degree"
                    placeholder="C°"
                />
            </StyledTemperature>
            <Textarea
                label="Description"
                defaultValue={defaultValues && defaultValues.description}
                name="description"
                placeholder="Description"
            />
            <AssignChildren
                selectedChildren={selectedChildren}
                children={household.children}
                onChange={handleChildrenChange}
            />
            <CardInputFooter onClick={onClose} onSubmit={handleSubmit} />
        </StyledCardInput>
    );
}

export default WeatherCardInput;
