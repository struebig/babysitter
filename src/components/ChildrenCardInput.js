import React from "react";
import styled from "styled-components";
import DropDown from "./Dropdown";
import Input from "./Input";
import Headline from "./Headline";
import { v1 } from "uuid";

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

function ChildrenCardInput({ household, setHousehold, onClose }) {
    function handleSubmit(event) {
        event.preventDefault();
        const form = event.target;

        setHousehold({
            ...household,
            children: [
                ...(household.children || []),
                {
                    id: v1(),
                    firstName: form.firstName.value,
                    lastName: form.lastName.value,
                    birthday: form.birthday.value,
                    bloodtype: form.bloodtype.value,
                    diet: form.diet.value
                }
            ]
        });

        form.reset();
        onClose();
    }
    return (
        <StyledCard onSubmit={handleSubmit}>
            <Headline size="XS">Add child information</Headline>
            <Input
                size="textShort"
                label="First Name"
                //value={household.children.firstName}
                name="firstName"
                placeholder="First Name"
                //   onChange={handleChange}
            />
            <Input
                size="textShort"
                label="Last Name"
                //value={household.children.lastName}
                name="lastName"
                placeholder="Last Name"
                //   onChange={handleChange}
            />
            <Input
                size="numberMedium"
                label="Birthday"
                //value={household.children.birthday}
                name="birthday"
                placeholder="Birthday"
                //   onChange={handleChange}
            />
            <DropDown /*onChange={handleChange}*/ name="bloodtype">
                <option value="">Select bloodtype</option>
                <option value="">---</option>
                <option value="A positiv">A positiv</option>
                <option value="B positiv">B positiv</option>
                <option value="AB positiv">AB positiv</option>
                <option value="0 positiv">0 positiv</option>
                <option value="A negativ">A negativ</option>
                <option value="B negativ">B negativ</option>
                <option value="AB negativ">AB negativ</option>
                <option value="0 negativ">0 negativ</option>
            </DropDown>
            <DropDown /*onChange={handleChange}*/ name="diet">
                <option value="">Select diet</option>
                <option value="">---</option>
                <option value="vegetarian">Vegetarian</option>
                <option value="vegan">Vegan</option>
            </DropDown>
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

export default ChildrenCardInput;
