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
    background-color: white;
    box-shadow: 0px -5px 8px grey;
`;

function ShowPages({ active, onClick }) {
    return (
        <StyledFooter>
            <ButtonLink to="/generalData" active={active} onClick={onClick}>
                <i class="far fa-address-card" />
            </ButtonLink>
            <ButtonLink to="/foodDataOutput" active={active} onClick={onClick}>
                <i class="fas fa-utensils" />
            </ButtonLink>
            <ButtonLink
                to="/clothingDataOutput"
                active={active}
                onClick={onClick}
            >
                <i class="fas fa-tshirt" />
            </ButtonLink>
            <ButtonLink
                to="/contactsDataOutput"
                active={active}
                onClick={onClick}
            >
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
