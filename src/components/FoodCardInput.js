import React from "react";
import styled from "styled-components";
import DropDown from "./Dropdown";
import Input from "./Input";
import Textarea from "./Textarea";
import Headline from "./Headline";
import { v1 } from "uuid";
import AssignChildren from "../components/AssignedChildrenInput";
import StyledCardInput from "../components/StyledCardInput";
import CardInputFooter from "../components/CardInputFooter";

function FoodCardInput({ household, setHousehold, defaultValues, onClose }) {
    const [selectedChildren, setSelectedChildren] = React.useState([]);

    function handleSubmit(event) {
        event.preventDefault();
        const form = event.target;

        let oldState = [];
        if (household.foodPreferences) {
            if (defaultValues && defaultValues.id) {
                oldState = household.foodPreferences.filter(
                    s => s.id !== defaultValues.id
                );
            } else {
                oldState = household.foodPreferences;
            }
        }
        setHousehold({
            ...household,
            foodPreferences: [
                ...oldState,
                {
                    id:
                        defaultValues && defaultValues.id
                            ? defaultValues.id
                            : v1(),
                    category: form.category.value,
                    name: form.name.value,
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
            <Headline size="S">Add preferences / dislikes</Headline>
            <DropDown
                defaultValue={defaultValues && defaultValues.category}
                name="category"
            >
                <option value="Other">Type</option>
                <option value="Other">---</option>
                <option value="Preference">Preference</option>
                <option value="Dislike">Dislike</option>
            </DropDown>

            <Input
                size="inputLong"
                label="Name"
                defaultValue={defaultValues && defaultValues.name}
                name="name"
                placeholder="Name"
                required
            />
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

export default FoodCardInput;
