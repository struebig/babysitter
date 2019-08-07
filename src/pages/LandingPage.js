/*import PropTypes from "prop-types";*/
import React from "react";
/*import Headline from "../components/Headline";*/
import styled from "styled-components";
import logo from "../ressources/logo.png";
import Grid from "../components/Grid";
import Headline from "../components/Headline";

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
`;
const Credit = styled.div`
    font-size: 10px;
    display: flex;
    align-items: flex-end;
`;

const MenuButton = styled.button`
    height: 100px;
    width: 100px;
    border: solid 5px #a2ebef;
    border-radius: 10%;
    font-size: 80px;
    background-color: transparent;
    color: #a2ebef;
`;

function Menu({ history }) {
    function handleClick() {
        history.push("familyData");
    }
    function showData() {
        history.push("generalData");
    }
    function editChild() {
        history.push("childrenData");
    }

    return (
        <Grid type="main">
            <StyledLogo>
                <img src={logo} alt="Logo" width="110%" />
            </StyledLogo>
            <Headline size="M">Family</Headline>
            <Main>
                <MenuButton onClick={handleClick}>
                    <i class="fas fa-home" />
                </MenuButton>
            </Main>
            <Main>
                <MenuButton>
                    <i class="fas fa-child" />
                </MenuButton>
                <MenuButton onClick={editChild}>
                    <i class="fas fa-plus" />
                </MenuButton>
            </Main>
            <Headline size="M">Nanny</Headline>
            <Main>
                <MenuButton onClick={showData}>
                    <i class="fas fa-baby-carriage" />
                </MenuButton>
            </Main>
            <Credit>
                Logo erstellt mit{" "}
                <a href="/de/" title="Kostenloser Online-Logo-Editor">
                    DesignEvo
                </a>
            </Credit>
        </Grid>
    );
}

export default Menu;
