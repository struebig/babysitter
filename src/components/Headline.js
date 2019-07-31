import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const sizes = {
    L: "36px",
    M: "24px",
    S: "20px",
    XS: "18px"
};
function getSize(size) {
    return sizes[size] || sizes.S;
}
const StyledHeadline = styled.h1`
    margin: 0;
    font-size: ${props => getSize(props.size)};
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
