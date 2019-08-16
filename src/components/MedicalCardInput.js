import React from "react";
import styled from "styled-components";
import DropDown from "./Dropdown";
import Input from "./Input";
import Headline from "./Headline";

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

function MedicalCardInput({ onCreate, onClose }) {
    function handleSubmit(event) {
        event.preventDefault();
        const form = event.target;

        onCreate({
            category: form.category.value,
            title: form.name.value,
            description: form.description.value
        });

        form.reset();
        onClose();
    }
    return (
        <StyledCard onSubmit={handleSubmit}>
            <Headline size="XS">Add medical information</Headline>
            <DropDown /*onChange={handleChange}*/ name="category">
                <option value="medicalCondition">Type</option>
                <option value="medicalCondition">---</option>
                <option value="medicalCondition">Medical condition</option>
                <option value="allergyFood">Food allergy</option>
                <option value="allergyOther">Other allergy</option>
                <option value="intoleranceFood">Food intolerance</option>
                <option value="intoleranceOther">Other intolerance</option>
            </DropDown>
            <Input
                size="textShort"
                label="Name"
                //   value={household.}
                name="firstName"
                placeholder="Name"
                //   onChange={handleChange}
            />
            <Input
                size="textShort"
                label="Description"
                //   value={household.}
                name="description"
                placeholder="Description"
                //   onChange={handleChange}
            />
            <StyledFooter>
                <StyledButton type="submit">
                    <i class="far fa-check-circle" />
                </StyledButton>
                <StyledButton type="button" onClick={onClose}>
                    <i class="far fa-window-close" />
                </StyledButton>
            </StyledFooter>
        </StyledCard>
    );
}

export default MedicalCardInput;
