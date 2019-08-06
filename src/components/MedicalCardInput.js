import React from "react";
import styled from "styled-components";
import DropDown from "./Dropdown";
import Input from "./Input";
import InputLong from "./InputLong";
import Headline from "./Headline";

const StyledCard = styled.form`
    border: solid 2px black;
`;

function MedicalCard({ onCreate }) {
    function handleSubmit(event) {
        event.preventDefault();
        const form = event.target;

        onCreate({
            category: form.category.value,
            title: form.name.value,
            description: form.description.value
        });

        form.reset();
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
                label="Name"
                //   value={household.}
                name="name"
                placeholder="Name"
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

export default MedicalCard;
