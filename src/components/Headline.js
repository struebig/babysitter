import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const sizes = {
    L: {
        fontSize: "32px",
        decoration: "",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "5px"
    },
    M: {
        fontSize: "28px",
        decoration: "underline",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "10px"
    },
    S: {
        fontSize: "24px",
        decoration: "",
        justifyContent: "",
        alignItems: "",
        marginBottom: "5px"
    }
};
function getSize(size) {
    return sizes[size] || sizes.S;
}
const StyledHeadline = styled.h1`
    margin-bottom: ${props => getSize(props.size).marginBottom};
    margin-left: 5px;
    font-size: ${props => getSize(props.size).fontSize};
    text-decoration: ${props => getSize(props.size).decoration};
    display: flex;
    justify-content: ${props => getSize(props.size).justifyContent};
    align-items: ${props => getSize(props.size).alignItems};
    color: ${props => getSize(props.size).color};
`;

function Headline({ size, ...props }) {
    return <StyledHeadline size={size} {...props} />;
}

Headline.propTypes = {
    size: PropTypes.oneOf(["L", "M", "S"])
};

Headline.defaultProps = {
    size: "S"
};

export default Headline;
