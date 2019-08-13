import React from "react";
import styled from "styled-components";
import logo from "../ressources/logo.png";
import Headline from "../components/Headline";
import Grid from "../components/Grid";

const StyledLogo = styled.div`
    display: flex;
    justify-content: center;
    height: 150px;
`;
const Main = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: #6175b3;
    border: solid;
    border-color: #6175b3;
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
            <StyledLogo>
                <img src={logo} alt="Logo" width="110%" />
            </StyledLogo>
            <Main>
                <Headline size="M">LOGIN</Headline>
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
