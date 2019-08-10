import React from "react";
import styled from "styled-components";
import Headline from "./Headline";

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const StyledButton = styled.button`
    height: 100px;
    width: 100px;
    font-size: 90px;
    border: solid 5px blue;
    border-radius: 50%;
    box-shadow: 1px 1px 10px #fff, 1px 1px 10px #ccc;
`;

function childProfile({ history, child }) {
    function handleClick() {
        // history.push(`/childrenData${child.id}`);
        history.push("childrenData");
    }
    // useEffect ()*/
    return (
        <StyledContainer onClick={handleClick}>
            <StyledButton type="button">
                <i class="fas fa-child" />
            </StyledButton>
            <Headline size="M">{child}</Headline>
        </StyledContainer>
    );
}

export default childProfile;
