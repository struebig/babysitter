import React from "react";
import styled from "styled-components";
import Headline from "../components/Headline";
import Grid from "../components/Grid";
import BrandName from "../components/Brand";

const Main = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: #004242;
    border: solid;
    border-color: #004242;
`;

const MenuButton = styled.button`
    height: 100px;
    width: 300px;
    border: solid 5px #a2ebef;
    border-radius: 40px;
    font-size: 50px;
    background-color: transparent;
    color: #a2ebef;
`;

function LogIn({ history }) {
    function handleClick() {
        history.push("familyMenu");
    }
    function showData() {
        history.push("babysitterMenu");
    }
    return (
        <Grid type="logIn">
            <BrandName />
            <Main>
                <Headline size="L">LOGIN</Headline>
            </Main>
            <Main>
                <MenuButton onClick={handleClick}>Family</MenuButton>
            </Main>
            <Main>
                <MenuButton onClick={showData}>Babysitter</MenuButton>
            </Main>
        </Grid>
    );
}

export default LogIn;
