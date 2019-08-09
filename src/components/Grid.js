import React from "react";
import styled from "styled-components";

const types = {
    main: "20% 5% 20% 30% 5% 20%",
    showData: "auto auto 10%",
    form: "auto auto"
};
function getType(type) {
    return types[type] || type.showData;
}

const StyledGrid = styled.div`
    display: grid;
    height: 100vh;
    grid-template-rows: ${props => getType(props.type)};
`;

function Grid({ type, ...props }) {
    return <StyledGrid type={type} {...props} />;
}
export default Grid;
