import React from "react";
import styled from "styled-components";
import Headline from "../components/Headline";

const AddButton = styled.button`
    width: 40px;
    height: 40px;
    font-size: 40px;
    border: none;
    background-color: #6175b3;
    font-weight: bold;
    color: #00965f;
    position: absolute;
    right: 10px;
    top: 15px;
`;

const Section = styled.div`
    display: flex;
    position: relative;
    justify-content: center;
`;

function AddSection({ titleHeadline, onClick }) {
    return (
        <Section>
            <Headline size="S">{titleHeadline}</Headline>
            <AddButton type="button" onClick={onClick}>
                <i class="far fa-plus-square" />
            </AddButton>
        </Section>
    );
}

export default AddSection;
