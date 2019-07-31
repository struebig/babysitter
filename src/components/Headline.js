import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const sizes = {
    L: "36px",
    M: "30px",
    S: "26px",
    XS: "22px"
};
function getSize(size) {
    return sizes[size] || sizes.S;
}
const StyledHeadline = styled.h1`
    margin-bottom: 5px;
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
