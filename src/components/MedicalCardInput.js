import React from "react";
import styled from "styled-components";
import DropDown from "./Dropdown";
import Input from "./Input";
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

function MedicalCardInput({ household, setHousehold, defaultValues, onClose }) {
    const [selectedChildren, setSelectedChildren] = React.useState([]);

    function handleSubmit(event) {
        event.preventDefault();
        const form = event.target;

        let oldState = [];
        if (household.medicalConditions) {
            if (defaultValues && defaultValues.id) {
                oldState = household.medicalConditions.filter(
                    s => s.id !== defaultValues.id
                );
            } else {
                oldState = household.medicalConditions;
            }
        }

        setHousehold({
            ...household,
            medicalConditions: [
                ...oldState,
                {
                    id:
                        defaultValues && defaultValues.id
                            ? defaultValues.id
                            : v1(),
                    category: form.category.value,
                    title: form.title.value,
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
            <Headline size="XS">Add medical information</Headline>
            <DropDown
                defaultValue={defaultValues && defaultValues.category}
                name="category"
            >
                <option value="Medical Condition">Type</option>
                <option value="Medical Condition">---</option>
                <option value="Medical Condition">Medical condition</option>
                <option value="Allergy Food">Food allergy</option>
                <option value="Allergy Other">Other allergy</option>
                <option value="Intolerance Food">Food intolerance</option>
                <option value="Intolerance Other">Other intolerance</option>
            </DropDown>
            <Input
                size="textShort"
                label="Title"
                defaultValue={defaultValues && defaultValues.title}
                name="title"
                placeholder="Title"
                required
            />
            <Input
                size="textShort"
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

export default MedicalCardInput;
