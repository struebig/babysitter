import React from "react";
import styled from "styled-components";
import Grid from "../components/Grid";
import moment from "moment";
import ChildrenCardInput from "../components/ChildrenCardInput";
import ChildrenCardOutput from "../components/ChildrenCardOutput";
/*
Local Storage:
import { getHouseholdFromStorage, setHouseholdtoStorage} from "../utils/storage";
Backend:*/
import { getCards, putCard, postCard } from "../utils/services";
//-------

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
    /*
    Local Storage:

    const [household, setHousehold] = React.useState(getHouseholdFromStorage());
    */

    // Backend
    const [household, setHousehold] = React.useState({});
    React.useEffect(() => {
        async function loadData() {
            const result = await getCards();
            setHousehold(result[0] || {});
        }
        loadData();
    }, []);
    // --------

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
    function showAddChildCard() {
        setRenderAddChildCard(true);
    }
    function hideAddChildCard() {
        setRenderAddChildCard(null);
    }

    function handleDelete(id) {
        setHousehold({
            ...household,
            children: household.children.filter(card => card.id !== id)
        });
    }

    return (
        <Grid type="form">
            <HeaderForm
                submit="submit"
                handleSubmit={handleSubmit}
                button="button"
                handleCancel={handleCancel}
                title="Children"
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
                            <StyledCardOutput key={child.id}>
                                <ChildrenCardOutput
                                    firstName={child.firstName}
                                    lastName={child.lastName}
                                    birthday={moment(child.birthday).format(
                                        "DD.MM.YYYY"
                                    )}
                                    bloodtype={child.bloodtype}
                                    diet={child.diet}
                                    picture={child.childImg}
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
