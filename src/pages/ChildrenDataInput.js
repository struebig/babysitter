import React from "react";
import styled from "styled-components";
import Grid from "../components/Grid";
import ChildrenCardInput from "../components/ChildrenCardInput";
import ChildrenCardOutput from "../components/ChildrenCardOutput";
import {
    getHouseholdFromStorage,
    setHouseholdtoStorage
} from "../utils/storage";
import HeaderForm from "../components/HeaderForm";
import StyledCardOutput from "../components/StyledCardOutput";
import CardOutputFooter from "../components/CardOutputFooter";
import AddSection from "../components/AddSectionForm";

const StyledForm = styled.form``;

const GridBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: baseline;
    overflow: auto;
`;

function AddChildrenData({ history }) {
    const [household, setHousehold] = React.useState(getHouseholdFromStorage());

    console.log(household);

    const [selectedId, setSelectedId] = React.useState(null);

    const [renderAddChildCard, setRenderAddChildCard] = React.useState(null);

    function handleChange(event) {
        setHousehold({
            ...household.children,
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
    function showAddChildCard() {
        setRenderAddChildCard(true);
    }
    function hideAddChildCard() {
        setRenderAddChildCard(null);
    }

    function handleDelete(id) {
        const newChildren = household.children.filter(card => card.id !== id);

        setHousehold({
            ...household,
            ["children"]: newChildren
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
                onClick={showAddChildCard}
                titleSection="Children"
                titleHeadline="Add child"
            />
            <GridBody>
                <StyledForm>
                    {renderAddChildCard && (
                        <ChildrenCardInput
                            defaultValues={
                                household.children &&
                                household.children.find(
                                    item => item.id === selectedId
                                )
                            }
                            household={household}
                            setHousehold={setHousehold}
                            onChange={handleChange}
                            onClose={hideAddChildCard}
                        />
                    )}
                    {household.children &&
                        household.children.map(child => (
                            <StyledCardOutput>
                                <ChildrenCardOutput
                                    firstName={child.firstName}
                                    lastName={child.lastName}
                                    birthday={child.birthday}
                                    bloodtype={child.bloodtype}
                                    diet={child.diet}
                                />
                                <CardOutputFooter
                                    onEditClick={() => {
                                        setSelectedId(child.id);
                                        setRenderAddChildCard(true);
                                    }}
                                    onDeleteClick={() => handleDelete(child.id)}
                                />
                            </StyledCardOutput>
                        ))}
                </StyledForm>
            </GridBody>
        </Grid>
    );
}

export default AddChildrenData;
