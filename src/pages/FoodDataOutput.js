import React from "react";
import styled from "styled-components";
import ShowPages from "../components/Footer";
import { getHouseholdFromStorage } from "../utils/storage";
import HeaderData from "../components/ShowDataHeader";
import Grid from "../components/Grid";
import ShowFoodCard from "../components/FoodCardOutput";
import StyledCardOutput from "../components/StyledCardOutput";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    padding-top: 20px;
`;

function ShowFoodData({ history }) {
    const household = getHouseholdFromStorage() || {};

    return (
        <>
            <Grid type="showData">
                <HeaderData
                    title="Nutrition Data"
                    button="button"
                    direction="babysitterMenu"
                    history={history}
                />
                <Container>
                    {household.foodPreferences &&
                        household.foodPreferences.map(foodPreference => (
                            <StyledCardOutput>
                                <ShowFoodCard
                                    category={foodPreference.category}
                                    name={foodPreference.name}
                                    description={foodPreference.description}
                                    assigned={foodPreference.assigned}
                                    household={household}
                                />
                            </StyledCardOutput>
                        ))}
                </Container>
                <ShowPages />
            </Grid>
        </>
    );
}

export default ShowFoodData;
