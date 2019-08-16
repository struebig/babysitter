import React from "react";
import styled from "styled-components";
import ShowPages from "../components/Footer";
import { getHouseholdFromStorage } from "../utils/storage";
import HeaderData from "../components/ShowDataHeader";
import Grid from "../components/Grid";
import ShowWeatherCard from "../components/WeatherCardOutput";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    margin-top: 20px;
`;

function ShowClothingData({ history }) {
    const data = getHouseholdFromStorage() || {};

    function handleCancel() {
        history.replace("babysitterMenu");
    }

    return (
        <>
            <Grid type="showData">
                <HeaderData
                    title="Clothing"
                    button="button"
                    handleCancel={handleCancel}
                />
                <Container>
                    {data.clothing &&
                        data.clothing.map(clothes => (
                            <ShowWeatherCard
                                category={clothes.category}
                                temperatur={clothes.temperatur}
                                degree={clothes.degree}
                                description={clothes.description}
                            />
                        ))}
                </Container>
                <ShowPages />
            </Grid>
        </>
    );
}

export default ShowClothingData;
