import React from "react";
import styled from "styled-components";
import Grid from "../components/Grid";
import MedicalCardInput from "../components/MedicalCardInput";
import ShowMedicalCard from "../components/MedicalCardOutput";
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

function AddMedicalData({ history }) {
    const [household, setHousehold] = React.useState(
        getHouseholdFromStorage() || {}
    );

    const [renderAddMedicalCard, setRenderAddMedicalCard] = React.useState(
        null
    );

    function handleChange(event) {
        setHousehold({
            ...household.medicalConditions,
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

    function showAddMedicalCard() {
        setRenderAddMedicalCard(true);
    }

    function hideAddMedicalCard() {
        setRenderAddMedicalCard(null);
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
                onClick={showAddMedicalCard}
                titleSection="Medical"
                titleHeadline="Add information"
            />
            <GridBody>
                <StyledForm>
                    {renderAddMedicalCard && (
                        <MedicalCardInput
                            household={household}
                            setHousehold={setHousehold}
                            onChange={handleChange}
                            onClose={hideAddMedicalCard}
                        />
                    )}
                    {household.medicalConditions &&
                        household.medicalConditions.map(medicalCondition => (
                            <ShowMedicalCard
                                category={medicalCondition.category}
                                title={medicalCondition.title}
                                description={medicalCondition.description}
                            />
                        ))}
                </StyledForm>
            </GridBody>
        </Grid>
    );
}

export default AddMedicalData;
