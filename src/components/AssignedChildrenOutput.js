import React from "react";
import styled from "styled-components";

const StyledName = styled.div`
    display: flex;
    justify-content: space-around;
    font-size: 26px;
    font-weight: bold;
    margin-bottom: 10px;
`;

function ShowAssignedChildren({ household, assigned }) {
    console.log(assigned);
    console.log(
        household.children &&
            household.children.find(item => item.id === assigned)
    );
    return <></>;
    /*



    return (
        <>
            {household.children &&
                household.children.find(item => item.id === assigned)}
            }
        </>
    );*/
}

export default ShowAssignedChildren;
