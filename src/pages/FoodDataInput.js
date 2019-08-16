import React from "react";
import styled from "styled-components";
import Grid from "../components/Grid";
import FoodCardInput from "../components/FoodCardInput";
import ShowFoodCard from "../components/FoodCardOutput";
import AddSection from "../components/AddSectionForm";
import HeaderForm from "../components/HeaderForm";
import {
    getHouseholdFromStorage,
    setHouseholdtoStorage
} from "../utils/storage";

const StyledForm = styled.form``;

const GridBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: baseline;
    overflow: auto;
`;

function AddFoodData({ history }) {
    const [household, setHousehold] = React.useState(
        getHouseholdFromStorage() || {}
    );
    const [renderAddFoodCard, setRenderAddFoodCard] = React.useState(null);

    function handleChange(event) {
        setHousehold({
            ...household.foodPreferences,
            [event.target.name]: event.target.value
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        setHouseholdtoStorage(household);
        history.replace("/familyMenu");
    }
    function handleCancel() {
        history.push("/familyMenu");
    }

    function showAddFoodCard() {
        setRenderAddFoodCard(true);
    }
    function hideAddFoodCard() {
        setRenderAddFoodCard(null);
    }

    return (
        <Grid type="form">
            <HeaderForm
                submit="submit"
                handleSubmit={handleSubmit}
                button="button"
                handleCancel={handleCancel}
            />
            <AddSection
                onClick={showAddFoodCard}
                titleSection="Food"
                titleHeadline="Add information"
            />
            <GridBody>
                <StyledForm /* onSubmit={handleSubmit}*/>
                    {renderAddFoodCard && (
                        <FoodCardInput
                            household={household}
                            setHousehold={setHousehold}
                            onChange={handleChange}
                            onClose={hideAddFoodCard}
                        />
                    )}
                    {household.foodPreferences &&
                        household.foodPreferences.map(foodPreference => (
                            <ShowFoodCard
                                category={foodPreference.category}
                                name={foodPreference.name}
                                description={foodPreference.description}
                            />
                        ))}
                </StyledForm>
            </GridBody>
        </Grid>
    );
}

export default AddFoodData;
