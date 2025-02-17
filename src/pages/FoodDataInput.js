import React from "react";
import styled from "styled-components";
import Grid from "../components/Grid";
import FoodCardInput from "../components/FoodCardInput";
import ShowFoodCard from "../components/FoodCardOutput";
import AddSection from "../components/AddSectionForm";
import HeaderForm from "../components/HeaderForm";
import CardOutputFooter from "../components/CardOutputFooter";
import StyledCardOutput from "../components/StyledCardOutput";
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
    const [household, setHousehold] = React.useState(getHouseholdFromStorage());

    const [selectedId, setSelectedId] = React.useState(null);

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

    function handleDelete(id) {
        setHousehold({
            ...household,
            foodPreferences: household.foodPreferences.filter(
                card => card.id !== id
            )
        });
    }

    return (
        <Grid type="form">
            <HeaderForm
                submit="submit"
                handleSubmit={handleSubmit}
                button="button"
                handleCancel={handleCancel}
                title="Food"
            />
            <AddSection
                onClick={showAddFoodCard}
                titleHeadline="Add information"
            />
            <GridBody>
                <StyledForm>
                    {renderAddFoodCard && (
                        <FoodCardInput
                            defaultValues={
                                household.foodPreferences &&
                                household.foodPreferences.find(
                                    item => item.id === selectedId
                                )
                            }
                            household={household}
                            setHousehold={setHousehold}
                            onChange={handleChange}
                            onClose={hideAddFoodCard}
                        />
                    )}
                    {household.foodPreferences &&
                        household.foodPreferences.map(foodPreference => (
                            <StyledCardOutput key={foodPreference.id}>
                                <ShowFoodCard
                                    category={foodPreference.category}
                                    name={foodPreference.name}
                                    description={foodPreference.description}
                                    assigned={foodPreference.assigned}
                                    household={household}
                                />
                                <CardOutputFooter
                                    onEditClick={() => {
                                        setSelectedId(foodPreference.id);
                                        setRenderAddFoodCard(true);
                                    }}
                                    onDeleteClick={() =>
                                        handleDelete(foodPreference.id)
                                    }
                                />
                            </StyledCardOutput>
                        ))}
                </StyledForm>
            </GridBody>
        </Grid>
    );
}

export default AddFoodData;
