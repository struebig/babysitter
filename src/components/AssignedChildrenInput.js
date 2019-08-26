import React from "react";
import styled from "styled-components";

const StyledSection = styled.div`
    display: flex;
    margin-left: 5px;
    align-items: space-around;
`;

function AssignChildren({ children, selectedChildren, onChange }) {
    function handleChange(id) {
        onChange(id);
    }

    return (
        <StyledSection>
            {children &&
                children.map(child => (
                    <label key={child.id}>
                        {child.firstName}
                        <input
                            type="checkbox"
                            name={child.id}
                            checked={selectedChildren.includes(child.id)}
                            onChange={() => handleChange(child.id)}
                        />
                    </label>
                ))}
        </StyledSection>
    );
}

export default AssignChildren;
