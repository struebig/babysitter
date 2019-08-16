import React from "react";
import styled from "styled-components";
import ShowPages from "../components/Footer";
import { getHouseholdFromStorage } from "../utils/storage";
import HeaderData from "../components/ShowDataHeader";
import Grid from "../components/Grid";
import ShowFoodCard from "../components/FoodCardOutput";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    margin-top: 20px;
`;

function ShowFoodData({ history }) {
    const data = getHouseholdFromStorage() || {};

    function handleCancel() {
        history.replace("babysitterMenu");
    }

    return (
        <>
            <Grid type="showData">
                <HeaderData
                    title="Nutrition Data"
                    button="button"
                    handleCancel={handleCancel}
                />
                <Container>
                    {data.foodPreferences &&
                        data.foodPreferences.map(foodPreference => (
                            <ShowFoodCard
                                category={foodPreference.category}
                                name={foodPreference.name}
                                description={foodPreference.description}
                            />
                        ))}
                </Container>
                <ShowPages />
            </Grid>
        </>
    );
}

export default ShowFoodData;
