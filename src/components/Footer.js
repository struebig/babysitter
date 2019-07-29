import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const StyledFooter = styled.div``;

const PageSwitchButton = styled.button`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: none;
    /*color: ${props => (props.active ? "goldenrod" : "white")};*/
    background: mediumseagreen;
    font-size: 20px;
    cursor: pointer;
    box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.5);
`;

function ActionButton(/*{ icon, active, onClick, className }*/) {
    return (
        <StyledFooter>
            <PageSwitchButton
            /* className={className}
                active={active}
                onClick={onClick}
            >
                <i className={`fas ${icon}`} /*/
            />
        </StyledFooter>
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
};*/

export default ActionButton;
