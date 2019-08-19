/*import React from "react";
import styled from "styled-components";

const StyledSection = styled.div`
    display: flex;
`;



function handleChange(id) {
    setHousehold({
        ...household,
        clothing: [
            ...(household.clothing || []),
            {
                category: form.category.value,
                temperatur: form.temperatur.value,
                degree: form.degree.value,
                description: form.description.value,
                assigned: childrenIds
            }
        ]
    });
}

function AssignChildren({ household, setHousehold }) {
    const [childrenIds, setCildrenIds] = React.useState()

    handleChange(id) {
        childrenIds.includes(id) {

        }
    }


    return (
        <StyledSection>
            {household.children &&
                household.children.map(child => (
                    <input
                        type="checkbox"
                        name={child.firstName}
                        onChange={() => handleChange(child.id)}
                    />
                ))}
        </StyledSection>
    );
}

export default AssignChildren;*/
