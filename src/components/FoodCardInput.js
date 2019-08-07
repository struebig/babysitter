import React from "react";
import styled from "styled-components";
import DropDown from "./Dropdown";
import Input from "./Input";
import Headline from "./Headline";

const StyledCard = styled.form`
    border: solid 2px black;
`;

function FoodCardInput({ onCreate, onClose }) {
    function handleSubmit(event) {
        event.preventDefault();
        const form = event.target;

        onCreate({
            category: form.category.value,
            name: form.name.value,
            description: form.description.value
        });

        form.reset();
        onClose();
    }
    return (
        <StyledCard onSubmit={handleSubmit}>
            <Headline size="XS">Add preferences / dislikes</Headline>
            <DropDown /*onChange={handleChange}*/ name="category">
                <option value="other">Type</option>
                <option value="other">---</option>
                <option value="preference">Preference</option>
                <option value="dislike">Dislike</option>
            </DropDown>
            <Input
                label="Name"
                //   value={household.}
                name="name"
                placeholder="Name"
                //   onChange={handleChange}
            />
            <Input
                label="Description"
                //   value={household.}
                name="description"
                placeholder="Description"
                //   onChange={handleChange}
            />
            <button>ADD</button>
            <button onClick={onClose}>Cancel</button>
        </StyledCard>
    );
}

export default FoodCardInput;
