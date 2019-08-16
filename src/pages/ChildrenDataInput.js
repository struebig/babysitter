import React from "react";
import styled from "styled-components";
import Headline from "../components/Headline";
import Grid from "../components/Grid";
import ChildrenCardInput from "../components/ChildrenCardInput";
import ChildrenCardOutput from "../components/ChildrenCardOutput";
import {
    getHouseholdFromStorage,
    setHouseholdtoStorage
} from "../utils/storage";
import HeaderForm from "../components/HeaderForm";

import AddSection from "../components/AddSectionForm";

const StyledForm = styled.form``;

const StyledSection = styled.form``;

const GridBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: baseline;
    overflow: auto;
`;

function AddChildrenData({ history }) {
    const [household, setHousehold] = React.useState(
        getHouseholdFromStorage() || {
            familyName: "",
            nameParentOne: "",
            roleParentOne: "",
            phoneParentOne: "",
            nameParentTwo: "",
            roleParentTwo: "",
            phoneParentTwo: "",
            street: "",
            houseNo: "",
            zip: "",
            city: "",
            children: [
                {
                    firstName: "",
                    lastName: "",
                    birthday: "",
                    bloodtype: "",
                    diet: ""
                }
            ]
        }
    );
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

    return (
        <Grid type="form">
            <HeaderForm
                submit="submit"
                handleSubmit={handleSubmit}
                button="button"
                handleCancel={handleCancel}
            />
            <StyledSection>
                <Headline size="S">Children</Headline>
                <AddSection
                    onClick={showAddChildCard}
                    titleHeadline="Add child"
                />
            </StyledSection>
            <GridBody>
                <StyledForm /* onSubmit={handleSubmit}*/>
                    {renderAddChildCard && (
                        <ChildrenCardInput
                            household={household}
                            setHousehold={setHousehold}
                            onChange={handleChange}
                            onClose={hideAddChildCard}
                        />
                    )}
                    {household.children &&
                        household.children.map(child => (
                            <ChildrenCardOutput
                                firstName={child.firstName}
                                lastName={child.lastName}
                                birthday={child.birthday}
                                bloodtype={child.bloodtype}
                                diet={child.diet}
                            />
                        ))}
                </StyledForm>
            </GridBody>
        </Grid>
    );
}

export default AddChildrenData;
