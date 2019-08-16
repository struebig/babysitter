import React from "react";
import styled from "styled-components";
import Headline from "../components/Headline";
import Grid from "../components/Grid";
import DropDown from "../components/Dropdown";
import FoodCardInput from "../components/FoodCardInput";
import ShowFoodCard from "../components/FoodCardOutput";
import AddSection from "../components/AddSectionForm";
import HeaderForm from "../components/HeaderForm";

const StyledForm = styled.form``;

const StyledSection = styled.form``;

const GridBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: baseline;
    overflow: auto;
`;

function AddFoodData({ history, child }) {
    const [preferences, setPreferences] = React.useState([]);
    const [renderAddFoodCard, setRenderAddFoodCard] = React.useState(null);
    const [values, setValues] = React.useState([]);

    /*function handleChange(event) {
        setValues({ ...value, [event.target.name]: event.target.value });
        console.log(event.target.name);
        console.log(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        setChildrentoStorage(children);
        history.replace("/");
    }*/
    function handleCancel() {
        history.push("/familyMenu");
    }
    function handleAddPreference(preference) {
        setPreferences([...preferences, preference]);
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
                // handleSubmit={handleSubmit}
                button="button"
                handleCancel={handleCancel}
            />
            <StyledSection>
                <Headline size="S">Food</Headline>
                <AddSection
                    onClick={showAddFoodCard}
                    titleHeadline="Add information"
                />
            </StyledSection>

            <GridBody>
                <StyledForm /* onSubmit={handleSubmit}*/>
                    {renderAddFoodCard && (
                        <FoodCardInput
                            onCreate={handleAddPreference}
                            onClose={hideAddFoodCard}
                        />
                    )}
                    {preferences.map(preference => (
                        <ShowFoodCard
                            category={preference.category}
                            name={preference.name}
                            description={preference.description}
                        />
                    ))}
                </StyledForm>
            </GridBody>
        </Grid>
    );
}

export default AddFoodData;
