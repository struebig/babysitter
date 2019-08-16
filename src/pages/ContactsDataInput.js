import React from "react";
import styled from "styled-components";
import Headline from "../components/Headline";
import Grid from "../components/Grid";
import ContactCardInput from "../components/ContactCardInput";
import ShowContactCard from "../components/ContactCardOutput";
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

function AddContactsData({ history, child }) {
    const [contacts, setContacts] = React.useState([]);
    const [renderAddContactCard, setRenderAddContactCard] = React.useState(
        null
    );
    const [values, setValues] = React.useState([]);

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
    function handleAddContact(contact) {
        setContacts([...contacts, contact]);
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
                // handleSubmit={handleSubmit}
                button="button"
                handleCancel={handleCancel}
            />
            <StyledSection>
                <Headline size="S">Contacts</Headline>
                <AddSection
                    onClick={showAddContactCard}
                    titleHeadline="Add contact"
                />
            </StyledSection>

            <GridBody>
                <StyledForm /* onSubmit={handleSubmit}*/>
                    {renderAddContactCard && (
                        <ContactCardInput
                            onCreate={handleAddContact}
                            onClose={hideAddContactCard}
                        />
                    )}
                    {contacts.map(contact => (
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
