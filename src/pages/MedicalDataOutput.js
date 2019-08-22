import React from "react";
import styled from "styled-components";
import ShowPages from "../components/Footer";
import { getHouseholdFromStorage } from "../utils/storage";
import HeaderData from "../components/ShowDataHeader";
import Grid from "../components/Grid";
import ShowMedicalCard from "../components/MedicalCardOutput";
import StyledCardOutput from "../components/StyledCardOutput";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    margin-top: 20px;
`;

function ShowMedicalData({ history }) {
    const household = getHouseholdFromStorage() || {};

    return (
        <>
            <Grid type="showData">
                <HeaderData
                    title="Medical Data"
                    button="button"
                    direction="babysitterMenu"
                    history={history}
                />
                <Container>
                    {household.medicalConditions &&
                        household.medicalConditions.map(medicalCondition => (
                            <StyledCardOutput>
                                <ShowMedicalCard
                                    category={medicalCondition.category}
                                    title={medicalCondition.title}
                                    description={medicalCondition.description}
                                    assigned={medicalCondition.assigned}
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

export default ShowMedicalData;
