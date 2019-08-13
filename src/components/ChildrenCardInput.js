import React from "react";
import styled from "styled-components";
import DropDown from "./Dropdown";
import Input from "./Input";
import Headline from "./Headline";

const StyledCard = styled.form`
    border-radius: 10%;
    width: 96%;
    height: 550px;
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

function ChildrenCardInput({ household, setHousehold, onCreate, onClose }) {
    function handleSubmit(event) {
        event.preventDefault();
        const form = event.target;

        /*onCreate({
            firstName: form.firstName.value,
            lastName: form.lastName.value,
            birthday: form.birthday.value,
            bloodtype: form.bloodtype.value,
            diet: form.diet.value
        }); */
        setHousehold({
            ...household,
            children: [
                ...household.children,
                {
                    firstName: event.target.name.value,
                    lastName: event.target.lastName.value,
                    birthday: event.target.birthday.value,
                    bloodtype: event.target.bloodtype.value,
                    diet: event.target.diet.value
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
                label="First Name"
                //   value={household.}
                name="firstName"
                placeholder="First Name"
                //   onChange={handleChange}
            />
            <Input
                label="Last Name"
                //   value={household.}
                name="lastName"
                placeholder="Last Name"
                //   onChange={handleChange}
            />
            <Input
                label="Birthday"
                //   value={household.}
                name="birthday"
                placeholder="Birthday"
                //   onChange={handleChange}
            />
            <DropDown /*onChange={handleChange}*/ name="bloodtype">
                <option value="">Select bloodtype</option>
                <option value="">---</option>
                <option value="ap">A positiv</option>
                <option value="bp">B positiv</option>
                <option value="abp">AB positiv</option>
                <option value="0p">0 positiv</option>
                <option value="an">A negativ</option>
                <option value="bn">B negativ</option>
                <option value="abn">AB negativ</option>
                <option value="0n">0 negativ</option>
            </DropDown>
            <DropDown /*onChange={handleChange}*/ name="diet">
                <option value="">Select diet</option>
                <option value="">---</option>
                <option value="vegetarian">Vegetarian</option>
                <option value="vegan">Vegan</option>
            </DropDown>
            <StyledButton type="submit">
                <i class="far fa-check-circle" />
            </StyledButton>
            <StyledButton type="button" onClick={onClose}>
                <i class="far fa-window-close" />
            </StyledButton>
        </StyledCard>
    );
}

export default ChildrenCardInput;
