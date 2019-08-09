import React from "react";
import styled from "styled-components";
import Headline from "./Headline";
import HouseholdForm from "../pages/Household";

const Container = styled.form`
    margin-bottom: 10px;
`;

const InputField = styled.div`
    display: flex;
    flex-direction: row;
`;

const StyledInput = styled.input`
    border: 1px gray solid;
    border-radius: 3px;
    font-size: 20px;
    width: 80%;
    height: 40px;
    margin-left: 5px;
`;
const AddButton = styled.button`
    width: 40px;
    height: 40px;
    font-size: 40px;
    border: none;
    background-color: #6175b3;
    font-weight: bold;
    color: #00965f;
`;

function AddChild({
    household,
    setHousehold,
    onCreate,
    value,
    placeholder,
    onChange
}) {
    console.log(household);
    function handleSubmit(event) {
        // console.log(event);
        event.preventDefault();
        const form = event.target;

        // onCreate({
        //     firstName: form.name.value
        // });
        form.reset();

        setHousehold({
            ...household,
            children: [...household.children, event.target.name.value]
        });
    }

    return (
        <Container onSubmit={handleSubmit}>
            <Headline size="S">Add child</Headline>
            <InputField>
                <StyledInput
                    value={value}
                    name="name"
                    placeholder={placeholder}
                    onChange={onChange}
                />
                <AddButton type="submit">
                    <i class="far fa-plus-square" />
                </AddButton>
            </InputField>
        </Container>
    );
}

export default AddChild;
