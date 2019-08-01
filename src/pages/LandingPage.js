/*import PropTypes from "prop-types";*/
import React from "react";
/*import Headline from "../components/Headline";*/
import styled from "styled-components";
import logo from "../ressources/logo.png";

const Grid = styled.div`
    /*display: grid;
    grid-template-columns: 40%, auto, 20%;*/
`;

const StyledLogo = styled.div`
    display: flex;
    justify-content: center;
    height: 150px;
`;
const Main = styled.div`
    display: flex;
    justify-content: center;
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
