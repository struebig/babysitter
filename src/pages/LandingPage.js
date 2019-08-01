/*import PropTypes from "prop-types";*/
import React from "react";
/*import Headline from "../components/Headline";*/
import styled from "styled-components";
import logo from "../ressources/logo.png";

const Inner = styled.span`
    position: relative;
    top: -5px;
`;

const Grid = styled.div`
    display: grid;
    height: 100vh;
    grid-template-rows: 20% auto 10%;
`;

const StyledLogo = styled.div`
    display: flex;
    justify-content: center;
    height: 150px;
`;
const Main = styled.div`
    display: flex;
    justify-content: center;
    overflow: auto;
`;
const Credit = styled.div`
    font-size: 5px;
`;

function Menu({ history }) {
    function handleClick() {
        history.push("familyData");
    }
    function showData() {
        history.push("generalData");
    }

    return (
        <Grid>
            <StyledLogo>
                <img src={logo} alt="Logo" width="110%" />
            </StyledLogo>
            <Main>
                <button onClick={handleClick}>Family Data</button>

                <button onClick={showData}>Babysitter</button>
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
