/*import PropTypes from "prop-types";*/
import React from "react";
import styled from "styled-components";

const buttonTypes = {
    submitButton: {
        padding: "",
        margin: "",
        width: "50px",
        height: "50px",
        fontSize: "50px",
        fontWeight: "bold",
        border: "none",
        borderRadius: "",
        backgroundColor: "#6175b3",
        color: "#00965F",
        boxShadow: ""
    },
    cancelButton: {
        padding: "",
        margin: "",
        width: "50px",
        height: "50px",
        fontSize: "50px",
        fontWeight: "bold",
        border: "none",
        borderRadius: "",
        backgroundColor: "#6175b3",
        color: "#960000",
        boxShadow: ""
    },
    pageSwitch: {
        padding: "",
        margin: "",
        width: "80",
        height: "50",
        fontSize: "100%",
        fontWeight: "",
        border: "solid #a2ebef",
        borderRadius: "10%",
        backgroundColor: "transparent",
        color: "#a2ebef",
        boxShadow: ""
    },
    menu: {
        padding: "",
        margin: "",
        width: "100",
        height: "100",
        fontSize: "80px",
        fontWeight: "",
        border: "solid 5px #a2ebef",
        borderRadius: "10%",
        backgroundColor: "transparent",
        color: "#a2ebef",
        boxShadow: ""
    }
};
function getType(buttonType) {
    return buttonTypes[buttonType] || buttonType.cancelButton;
}

const StyledButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: ${props => getType(props.size).padding};
    width: ${props => getType(props.size).width};
    height: ${props => getType(props.size).height};
    font-size: ${props => getType(props.size).fontSize};
    border: ${props => getType(props.size).border};
    border-radius: ${props => getType(props.size).borderRadius};
    background-color: ${props => getType(props.size).backgroundColor};
    color: ${props => getType(props.size).color};
    /*color: ${props => (props.active ? "goldenrod" : "white")};*/
    box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.5);
`;

function ActionButton({ type, buttonType, active, onClick, children }) {
    return (
        <StyledButton
            type={type}
            buttonType={buttonType}
            active={active}
            onClick={onClick}
            //{...other}
        >
            {children}
        </StyledButton>
    );
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
