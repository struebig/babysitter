/*import PropTypes from "prop-types";*/
import React from "react";
import Headline from "../components/Headline";
/* import styled from "styled-components"; */

function Menu({ history }) {
    function handleClick() {
        history.push("familyData");
    }
    function showData() {
        history.push("generalData");
    }

    return (
        <div>
            <Headline size="L">Menu</Headline>
            <button onClick={handleClick}>Family Data</button>
            <button onClick={showData}>Babysitter</button>
        </div>
    );
}

export default Menu;
