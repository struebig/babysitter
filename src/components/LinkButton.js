import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const PageSwitchButton = styled.button`
    width: 80px;
    height: 50px;
    font-size: 100%;
    border: solid #a2ebef;
    border-radius: 10%;
    /*color: ${props => (props.active ? "#1B4353" : "2892D7")};
    background: #6175b3;*/
    background-color: transparent;
    color: #a2ebef;
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
