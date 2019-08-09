import React from "react";
import styled from "styled-components";
import Headline from "./Headline";

const FoodCardOutput = styled.div`
    border: solid 2px black;
`;

function ShowFoodCard({ category, name, description }) {
    return (
        <FoodCardOutput>
            <Headline size="XS">{category}</Headline>
            <div>{name}</div>
            <div>{description}</div>
        </FoodCardOutput>
    );
}

export default ShowFoodCard;
