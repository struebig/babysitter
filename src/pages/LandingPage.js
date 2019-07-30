/*import PropTypes from "prop-types";*/
import React from "react";
import Headline from "../components/Headline";
/* import styled from "styled-components"; */

function Menu({ history }) {
    function handleClick() {
        history.push("familyData");
    }

    return (
        <div>
            <Headline size="L">Test</Headline>
            <button onClick={handleClick}>Family Data</button>
        </div>
    );
}

export default Menu;
