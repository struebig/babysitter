import React from "react";
import styled from "styled-components";
import DropDown from "./Dropdown";
import Headline from "./Headline";
import Input from "../components/Input";
import { v1 } from "uuid";
import AssignChildren from "../components/AssignChildren";

const StyledCard = styled.form`
    border-radius: 5px;
    width: 96%;
    min-height: 300px;
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

const StyledFooter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 10px;
`;

const StyledTemperature = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-end;
`;

function WeatherCardInput({ household, setHousehold, onClose }) {
    const [selectedChildren, setSelectedChildren] = React.useState([]);

    function handleSubmit(event) {
        event.preventDefault();
        const form = event.target;

        setHousehold({
            ...household,
            clothing: [
                ...(household.clothing || []),
                {
                    id: v1(),
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

    console.log(selectedChildren);

    return (
        <StyledCard onSubmit={handleSubmit}>
            <Headline size="XS">Add clothing information</Headline>
            <DropDown
                name="category"
                defaultValue={household.clothing.category}
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
                    defaultValue={household.clothing.temperatur}
                >
                    <option value=""> below or above </option>
                    <option value="">---</option>
                    <option value="below">below</option>
                    <option value="above">above</option>
                </DropDown>
                <Input
                    size="numberShort"
                    label="Degree c°"
                    defaultValue={household.clothing.degree}
                    name="degree"
                    placeholder="Degree c°"
                    //   onChange={handleChange}
                />
            </StyledTemperature>

            <Input
                size="textLong"
                label="Description"
                defaultValue={household.clothing.description}
                name="description"
                placeholder="Description"
                //   onChange={handleChange}
            />
            <AssignChildren
                selectedChildren={selectedChildren}
                children={household.children}
                onChange={handleChildrenChange}
            />
            <StyledFooter>
                <StyledButton type="submit">
                    <i className="far fa-check-circle" />
                </StyledButton>
                <StyledButton type="button" onClick={onClose}>
                    <i className="far fa-window-close" />
                </StyledButton>
            </StyledFooter>
        </StyledCard>
    );
}

export default WeatherCardInput;
