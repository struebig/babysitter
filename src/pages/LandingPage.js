/*import PropTypes from "prop-types";*/
import React from "react";
/*import styled from "styled-components";*/

function Menue({ history }) {
    function handleClick() {
        history.push("familyData");
    }

    return (
        <div>
            <h1>Test</h1>
            <button onClick={handleClick}>Family Data</button>
        </div>
    );
}

export default Menue;
