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
        <StyledCardInput onSubmit={handleSubmit}>
            <Headline size="S">Add medical information</Headline>
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
                size="inputLong"
                label="Title"
                defaultValue={defaultValues && defaultValues.title}
                name="title"
                placeholder="Title"
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

export default MedicalCardInput;
