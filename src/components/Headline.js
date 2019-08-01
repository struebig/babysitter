import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const sizes = {
    L: {
        fontSize: "40px",
        decoration: "",
        justifyContent: "center",
        alignItems: "center"
    },
    M: {
        fontSize: "32px",
        decoration: "",
        justifyContent: "center",
        alignItems: "center"
    },
    S: {
        fontSize: "28px",
        decoration: "underline",
        justifyContent: "center",
        alignItems: "center"
    },
    XS: { fontSize: "24px", decoration: "", justifyContent: "", alignItems: "" }
};
function getSize(size) {
    return sizes[size] || sizes.S;
}
const StyledHeadline = styled.h1`
    margin-bottom: 5px;
    margin-left: 5px;
    font-size: ${props => getSize(props.size).fontSize};
    text-decoration: ${props => getSize(props.size).decoration};
    display: flex;
    justify-content: ${props => getSize(props.size).justifyContent};
    align-items: ${props => getSize(props.size).alignItems};
`;

function Headline({ size, ...props }) {
    return <StyledHeadline size={size} {...props} />;
}

Headline.propTypes = {
    size: PropTypes.oneOf(["L", "M", "S", "XS"])
};

Headline.defaultProps = {
    size: "S"
};

export default Headline;
