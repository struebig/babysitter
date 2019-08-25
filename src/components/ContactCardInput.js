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

function ContactCardInput({ household, setHousehold, defaultValues, onClose }) {
    const [selectedChildren, setSelectedChildren] = React.useState([]);

    function handleSubmit(event) {
        event.preventDefault();
        const form = event.target;

        let oldState = [];
        if (household.contacts) {
            if (defaultValues && defaultValues.id) {
                oldState = household.contacts.filter(
                    s => s.id !== defaultValues.id
                );
            } else {
                oldState = household.contacts;
            }
        }
        setHousehold({
            ...household,
            contacts: [
                ...oldState,
                {
                    id: v1(),
                    category: form.category.value,
                    name: form.name.value,
                    phoneNo: form.phoneNo.value,
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
            <Headline size="S">Add contact information</Headline>
            <DropDown
                defaultValue={defaultValues && defaultValues.category}
                name="category"
            >
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
                size="inputLong"
                label="Name"
                defaultValue={defaultValues && defaultValues.name}
                name="name"
                placeholder="Name"
                required
            />
            <Input
                size="inputLong"
                label="Phone No."
                defaultValue={defaultValues && defaultValues.phoneNo}
                name="phoneNo"
                placeholder="Phone No."
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

export default ContactCardInput;
