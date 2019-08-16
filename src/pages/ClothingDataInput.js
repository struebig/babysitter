import React from "react";
import styled from "styled-components";
import Headline from "../components/Headline";
import Grid from "../components/Grid";
import WeatherCardInput from "../components/WeatherCardInput";
import ShowWeatherCard from "../components/WeatherCardOutput";
import AddSection from "../components/AddSectionForm";
import HeaderForm from "../components/HeaderForm";
import {
    getHouseholdFromStorage,
    setHouseholdtoStorage
} from "../utils/storage";

const StyledForm = styled.form``;

const StyledSection = styled.form``;

const GridBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: baseline;
    overflow: auto;
`;

function AddClothingData({ history }) {
    const [household, setHousehold] = React.useState(
        getHouseholdFromStorage() || {}
    );
    const [weatherConditions, setWeatherConditions] = React.useState([]);
    const [renderAddWeatherCard, setRenderAddWeatherCard] = React.useState(
        null
    );
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
    function handleAddWeatherCard(weatherCondition) {
        setWeatherConditions([...weatherConditions, weatherCondition]);
    }
    function showAddWeatherCard() {
        setRenderAddWeatherCard(true);
    }
    function hideAddWeatherCard() {
        setRenderAddWeatherCard(null);
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
                <Headline size="S">Clothing</Headline>
                <AddSection
                    onClick={showAddWeatherCard}
                    titleHeadline="Add information"
                />
            </StyledSection>

            <GridBody>
                <StyledForm /* onSubmit={handleSubmit}*/>
                    {renderAddWeatherCard && (
                        <WeatherCardInput
                            onCreate={handleAddWeatherCard}
                            onClose={hideAddWeatherCard}
                        />
                    )}
                    {weatherConditions.map(weatherCondition => (
                        <ShowWeatherCard
                            category={weatherCondition.category}
                            temperatur={weatherCondition.temperatur}
                            degree={weatherCondition.degree}
                            description={weatherCondition.description}
                        />
                    ))}
                </StyledForm>
            </GridBody>
        </Grid>
    );
}

export default AddClothingData;
