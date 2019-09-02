import React from "react";
import styled from "styled-components";
import Grid from "../components/Grid";
import MedicalCardInput from "../components/MedicalCardInput";
import ShowMedicalCard from "../components/MedicalCardOutput";
import AddSection from "../components/AddSectionForm";
import HeaderForm from "../components/HeaderForm";
import CardOutputFooter from "../components/CardOutputFooter";
import StyledCardOutput from "../components/StyledCardOutput";
/*
Local Storage:
import { getHouseholdFromStorage, setHouseholdtoStorage} from "../utils/storage";
Backend:*/
import { getCards, putCard, postCard } from "../utils/services";
//-------

const StyledForm = styled.form``;

const GridBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: baseline;
    overflow: auto;
`;

function AddMedicalData({ history }) {
    /*
    Local Storage:
    const [household, setHousehold] = React.useState(getHouseholdFromStorage());
    Backend:*/
    const [household, setHousehold] = React.useState({});
    React.useEffect(() => {
        async function loadData() {
            const result = await getCards();
            setHousehold(result[0] || {});
        }
        loadData();
    }, []);
    // --------
    const { medicalConditions } = household;

    const [selectedId, setSelectedId] = React.useState(null);

    const [renderAddMedicalCard, setRenderAddMedicalCard] = React.useState(
        false
    );

    function handleChange(event) {
        setHousehold({
            ...medicalConditions,
            [event.target.name]: event.target.value
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        /*
        Local Storage:
       setHouseholdtoStorage(household);
       */

        // Backend
        if (household._id) {
            putCard(household, household._id);
        } else {
            postCard(household);
        }
        // --------
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
        setHousehold({
            ...household,
            medicalConditions: medicalConditions.filter(card => card.id !== id)
        });
    }
    return (
        <Grid type="form">
            <HeaderForm
                submit="submit"
                handleSubmit={handleSubmit}
                button="button"
                handleCancel={handleCancel}
                title="Medical Data"
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
                                medicalConditions &&
                                medicalConditions.find(
                                    item => item.id === selectedId
                                )
                            }
                            household={household}
                            setHousehold={setHousehold}
                            onChange={handleChange}
                            onClose={hideAddMedicalCard}
                        />
                    )}
                    {medicalConditions &&
                        medicalConditions.map(medicalCondition => (
                            <StyledCardOutput key={medicalCondition.id}>
                                <ShowMedicalCard
                                    category={medicalCondition.category}
                                    title={medicalCondition.title}
                                    description={medicalCondition.description}
                                    assigned={medicalCondition.assigned}
                                    household={household}
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
