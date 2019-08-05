import React from "react";
import styled from "styled-components";
import DropDown from "../components/Dropdown";
import Input from "../components/Input";
import InputLong from "../components/InputLong";
import Headline from "../components/Headline";

const StyledCard = styled.div`
    border: solid 2px black;
`;

function MedicalCard() {
    return (
        <StyledCard>
            <Headline size="XS">Add medical information</Headline>
            <DropDown
                /*onChange={handleChange}*/ name="categoryMedicalCondition"
            >
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
