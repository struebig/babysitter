import React from "react";
import styled from "styled-components";
import Headline from "../components/Headline";
import Grid from "../components/Grid";
import MedicalCardInput from "../components/MedicalCardInput";
import ShowMedicalCard from "../components/MedicalCardOutput";
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

function AddMedicalData({ history }) {
    const [medicalConditions, setMedicalConditions] = React.useState([]);
    const [renderAddMedicalCard, setRenderAddMedicalCard] = React.useState(
        null
    );
    // const [values, setValues] = React.useState([]);

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
    function handleAddMedicalCard(medicalCondition) {
        setMedicalConditions([...medicalConditions, medicalCondition]);
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
                // handleSubmit={handleSubmit}
                button="button"
                handleCancel={handleCancel}
            />
            <StyledSection>
                <Headline size="S">Medical</Headline>
                <AddSection
                    onClick={showAddMedicalCard}
                    titleHeadline="Add information"
                />
            </StyledSection>

            <GridBody>
                <StyledForm /* onSubmit={handleSubmit}*/>
                    {renderAddMedicalCard && (
                        <MedicalCardInput
                            onCreate={handleAddMedicalCard}
                            onClose={hideAddMedicalCard}
                        />
                    )}
                    {medicalConditions.map(medicalCondition => (
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
