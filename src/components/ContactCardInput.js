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

function ContactCardInput({ household, setHousehold, onClose }) {
    function handleSubmit(event) {
        event.preventDefault();
        const form = event.target;

        setHousehold({
            ...household,
            contacts: [
                ...(household.contacts || []),
                {
                    id: v1(),
                    category: form.category.value,
                    name: form.name.value,
                    phoneNo: form.phoneNo.value,
                    description: form.description.value
                }
            ]
        });

        form.reset();
        onClose();
    }
    return (
        <StyledCard onSubmit={handleSubmit}>
            <Headline size="XS">Add contact information</Headline>
            <DropDown /*onChange={handleChange}*/ name="category">
                <option value="Other">Type</option>
                <option value="Other">---</option>
                <option value="In case of emergency">
                    In case of emergency
                </option>
                <option value="Family">Family</option>
                <option value="Doctor">Doctor</option>
                <option value="Friend">Friend</option>
                <option value="Other">Other</option>
            </DropDown>
            <Input
                size="textShort"
                label="Name"
                //   value={household.}
                name="name"
                placeholder="Name"
                //   onChange={handleChange}
            />
            <Input
                size="numberLong"
                label="Phone No."
                //   value={household.}
                name="phoneNo"
                placeholder="Phone No."
                //   onChange={handleChange}
            />
            <Input
                size="textLong"
                label="Description"
                //   value={household.}
                name="description"
                placeholder="Description"
                //   onChange={handleChange}
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

export default ContactCardInput;
