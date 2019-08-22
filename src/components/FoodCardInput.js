import React from "react";
import styled from "styled-components";
import DropDown from "./Dropdown";
import Input from "./Input";
import Textarea from "./Textarea";
import Headline from "./Headline";
import { v1 } from "uuid";
import AssignChildren from "../components/AssignedChildrenInput";

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
        <StyledCard onSubmit={handleSubmit}>
            <Headline size="XS">Add preferences / dislikes</Headline>
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
                size="textShort"
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

export default FoodCardInput;
