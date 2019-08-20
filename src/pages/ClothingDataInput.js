import React from "react";
import styled from "styled-components";
import Grid from "../components/Grid";
import WeatherCardInput from "../components/WeatherCardInput";
import ShowWeatherCard from "../components/WeatherCardOutput";
import AddSection from "../components/AddSectionForm";
import HeaderForm from "../components/HeaderForm";
import CardOutputFooter from "../components/CardOutputFooter";
import {
    getHouseholdFromStorage,
    setHouseholdtoStorage
} from "../utils/storage";
import StyledCardOutput from "../components/StyledCardOutput";

const StyledForm = styled.form``;

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

    const [selectedId, setSelectedId] = React.useState(null);

    const [renderAddWeatherCard, setRenderAddWeatherCard] = React.useState(
        null
    );

    function handleChange(event) {
        setHousehold({
            ...household.clothing,
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
                handleSubmit={handleSubmit}
                button="button"
                handleCancel={handleCancel}
            />
            <AddSection
                onClick={showAddWeatherCard}
                titleSection="Clothing"
                titleHeadline="Add information"
            />
            <GridBody>
                <StyledForm /* onSubmit={handleSubmit}*/>
                    {(renderAddWeatherCard || selectedId)(
                        <WeatherCardInput
                            defaultValues={household.clothing.find(
                                item => item.id === selectedId
                            )}
                            household={household}
                            setHousehold={setHousehold}
                            onChange={handleChange}
                            onClose={hideAddWeatherCard}
                        />
                    )}
                    {household.clothing &&
                        household.clothing.map(clothes => (
                            <StyledCardOutput>
                                <ShowWeatherCard
                                    key={clothes.id}
                                    category={clothes.category}
                                    temperatur={clothes.temperatur}
                                    degree={clothes.degree}
                                    description={clothes.description}
                                />
                                <CardOutputFooter
                                    onEditClick={() =>
                                        setSelectedId(clothes.id)
                                    }
                                />
                            </StyledCardOutput>
                        ))}
                </StyledForm>
            </GridBody>
        </Grid>
    );
}

export default AddClothingData;
