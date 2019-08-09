import React from "react";
import styled from "styled-components";
import Headline from "./Headline";

const StyledContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const StyledButton = styled.button`
    height: 100px;
    width: 100px;
    font-size: 90px;
    border: solid 5px blue;
    border-radius: 50%;
    box-shadow: 1px 1px 10px #fff, 1px 1px 10px #ccc;
`;

function childProfile({ name }) {
    return (
        <>
            <StyledButton>
                <i class="fas fa-child" />
            </StyledButton>
            <Headline size="M">{name}</Headline>
        </>
    );
}

export default childProfile;
