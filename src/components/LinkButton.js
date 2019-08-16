import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const PageSwitchButton = styled.button`
    width: 50px;
    height: 50px;
    font-size: 100%;
    /*color: ${props => (props.active ? "#1B4353" : "2892D7")};
    background: #6175b3;*/
    background-color: #004242;
    border: #004242;
    color: white;
`;

function ButtonLink({ active, onClick, children, to, ...other }) {
    return (
        <Link to={to}>
            <PageSwitchButton active={active} onClick={onClick} {...other}>
                {children}
            </PageSwitchButton>
        </Link>
    );
}

export default ButtonLink;
