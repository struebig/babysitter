import React from "react";
import styled from "styled-components";
import Grid from "../components/Grid";
import ContactCardInput from "../components/ContactCardInput";
import ShowContactCard from "../components/ContactCardOutput";
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

function AddContactsData({ history }) {
    const [renderAddContactCard, setRenderAddContactCard] = React.useState(
        null
    );
    const [household, setHousehold] = React.useState(
        getHouseholdFromStorage() || {}
    );

    function handleChange(event) {
        setHousehold({
            ...household.contacts,
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

    function showAddContactCard() {
        setRenderAddContactCard(true);
    }
    function hideAddContactCard() {
        setRenderAddContactCard(null);
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
                onClick={showAddContactCard}
                titleSection="Contacts"
                titleHeadline="Add contact"
            />
            <GridBody>
                <StyledForm>
                    {renderAddContactCard && (
                        <ContactCardInput
                            household={household}
                            setHousehold={setHousehold}
                            onChange={handleChange}
                            onClose={hideAddContactCard}
                        />
                    )}
                    {household.contacts &&
                        household.contacts.map(contact => (
                            <ShowContactCard
                                category={contact.category}
                                name={contact.name}
                                phoneNo={contact.phoneNo}
                                description={contact.description}
                            />
                        ))}
                </StyledForm>
            </GridBody>
        </Grid>
    );
}

export default AddContactsData;
