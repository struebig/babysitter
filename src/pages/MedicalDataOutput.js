import React from "react";
import styled from "styled-components";
import ShowPages from "../components/Footer";
import { getHouseholdFromStorage } from "../utils/storage";
import HeaderData from "../components/ShowDataHeader";
import Grid from "../components/Grid";
import ShowMedicalCard from "../components/MedicalCardOutput";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    margin-top: 20px;
`;

function ShowMedicalData({ history }) {
    const data = getHouseholdFromStorage() || {};

    function handleCancel() {
        history.replace("babysitterMenu");
    }

    return (
        <>
            <Grid type="showData">
                <HeaderData
                    title="Medical Data"
                    button="button"
                    handleCancel={handleCancel}
                />
                <Container>
                    {data.medicalConditions &&
                        data.medicalConditions.map(medicalCondition => (
                            <ShowMedicalCard
                                category={medicalCondition.category}
                                title={medicalCondition.title}
                                description={medicalCondition.description}
                            />
                        ))}
                </Container>
                <ShowPages />
            </Grid>
        </>
    );
}

export default ShowMedicalData;
