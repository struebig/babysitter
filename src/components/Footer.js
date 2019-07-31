import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    height: 60px;
    background: #2892d7;
`;

const PageSwitchButton = styled.button`
    width: 100%;
    height: 100%;
    font-size: 100%;
    border: none;
    /*color: ${props => (props.active ? "#1B4353" : "2892D7")};*/
    background: #2892D7;
`;

function ShowPages({ active, onClick }) {
    return (
        <StyledFooter>
            <PageSwitchButton active={active} onClick={onClick}>
                <i class="far fa-address-card" />
            </PageSwitchButton>
            <PageSwitchButton active={active} onClick={onClick}>
                <i class="fas fa-utensils" />
            </PageSwitchButton>
            <PageSwitchButton active={active} onClick={onClick}>
                <i class="fas fa-tshirt" />
            </PageSwitchButton>
            <PageSwitchButton active={active} onClick={onClick}>
                <i class="far fa-address-book" />
            </PageSwitchButton>
        </StyledFooter>
    );
}

PageSwitchButton.propTypes = {
    active: PropTypes.bool,
    onClick: PropTypes.func
};

PageSwitchButton.defaultProps = {
    active: false
};

export default ShowPages;
