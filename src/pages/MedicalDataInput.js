import React from "react";
import styled from "styled-components";
import Grid from "../components/Grid";
import MedicalCardInput from "../components/MedicalCardInput";
import ShowMedicalCard from "../components/MedicalCardOutput";
import AddSection from "../components/AddSectionForm";
import HeaderForm from "../components/HeaderForm";
import CardOutputFooter from "../components/CardOutputFooter";
import ShowAssignedChildren from "../components/AssignedChildrenOutput";
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

function AddMedicalData({ history }) {
    const [household, setHousehold] = React.useState(getHouseholdFromStorage());

    const [selectedId, setSelectedId] = React.useState(null);

    const [renderAddMedicalCard, setRenderAddMedicalCard] = React.useState(
        false
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
        setRenderAddMedicalCard(false);
    }
    function handleDelete(id) {
        const newConditions = household.medicalConditions.filter(
            card => card.id !== id
        );

        setHousehold({
            ...household,
            ["medicalConditions"]: newConditions
        });
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
                            defaultValues={
                                household.medicalConditions &&
                                household.medicalConditions.find(
                                    item => item.id === selectedId
                                )
                            }
                            household={household}
                            setHousehold={setHousehold}
                            onChange={handleChange}
                            onClose={hideAddMedicalCard}
                        />
                    )}
                    {household.medicalConditions &&
                        household.medicalConditions.map(medicalCondition => (
                            <StyledCardOutput>
                                <ShowMedicalCard
                                    key={medicalCondition.id}
                                    category={medicalCondition.category}
                                    title={medicalCondition.title}
                                    description={medicalCondition.description}
                                />
                                <CardOutputFooter
                                    onEditClick={() => {
                                        setSelectedId(medicalCondition.id);
                                        setRenderAddMedicalCard(true);
                                    }}
                                    onDeleteClick={() =>
                                        handleDelete(medicalCondition.id)
                                    }
                                />
                            </StyledCardOutput>
                        ))}
                </StyledForm>
            </GridBody>
        </Grid>
    );
}

export default AddMedicalData;
