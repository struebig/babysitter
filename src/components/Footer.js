/*import PropTypes from "prop-types";*/
import React from "react";
import styled from "styled-components";
import ButtonLink from "../components/LinkButton";

const StyledFooter = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 60px;
    background-color: #6175b3;
    border-top: solid #a2ebef 5px;
`;

function ShowPages({ active, onClick }) {
    return (
        <StyledFooter>
            <ButtonLink to="/generalData" active={active} onClick={onClick}>
                <i class="far fa-address-card" />
            </ButtonLink>
            <ButtonLink to="/foodData" active={active} onClick={onClick}>
                <i class="fas fa-utensils" />
            </ButtonLink>
            <ButtonLink to="/clothingData" active={active} onClick={onClick}>
                <i class="fas fa-tshirt" />
            </ButtonLink>
            <ButtonLink to="/contactsData" active={active} onClick={onClick}>
                <i class="far fa-address-book" />
            </ButtonLink>
        </StyledFooter>
    );
}

/*
PageSwitchButton.propTypes = {
    active: PropTypes.bool,
    onClick: PropTypes.func
};

PageSwitchButton.defaultProps = {
    active: false
};*/

export default ShowPages;
