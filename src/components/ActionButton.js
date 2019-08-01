/*import PropTypes from "prop-types";*/
import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    text-align: center;
    padding: 0px;
    width: 50px;
    height: 50px;
    font-size: 40px;
    border: none;
    border-radius: 50%;
    background-color: #960000;
    color: #6175B3;
    /*color: ${props => (props.active ? "goldenrod" : "white")};*/
    box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.5);
`;
const StyledButtonTwo = styled.button`
  text-align: center;
  padding: 0px;
    width: 50px;
    height: 50px;
    font-size: 40px;
    border: solid 5px #960000;
    border-radius: 10%;
    background-color: #6175B3;
    color: #960000;
    font-style: bold;
    /*color: ${props => (props.active ? "goldenrod" : "white")};*/
    box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.5);
`;

function ActionButton({ children }) {
    return <StyledButtonTwo>{children}</StyledButtonTwo>;
}

/*ActionButton.propTypes = {
    icon: PropTypes.string.isRequired,
    active: PropTypes.bool,
    className: PropTypes.string,
    onClick: PropTypes.func
};

ActionButton.defaultProps = {
    active: false
};
*/
export default ActionButton;
