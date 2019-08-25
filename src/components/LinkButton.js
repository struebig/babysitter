import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
`;

const PageSwitchButton = styled.button`
    width: 50px;
    height: 50px;
    font-size: 100%;
    /* color: ${props => (props.active ? "white" : "red")}; */
    background-color: #004242;
    border: #004242;
    color: white;
    text-decoration: none;
`;

function ButtonLink({ active, onClick, children, to, ...other }) {
    return (
        <StyledLink to={to}>
            <PageSwitchButton active={active} onClick={onClick} {...other}>
                {children}
            </PageSwitchButton>
        </StyledLink>
    );
}

export default ButtonLink;
