import React from "react";
import styled from "styled-components";
import Headline from "./Headline";

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

function AddChild({ onCreate, value, placeholder, onChange, onClick }) {
    function handleSubmit(event) {
        event.preventDefault();
        const form = event.target;

        onCreate({
            firstName: form.name.value
        });

        form.reset();
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
                <AddButton type="button" onClick={onClick}>
                    <i class="far fa-plus-square" />
                </AddButton>
            </InputField>
        </Container>
    );
}

export default AddChild;
