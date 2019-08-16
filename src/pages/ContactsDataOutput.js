import React from "react";
import styled from "styled-components";
import ShowPages from "../components/Footer";
import { getHouseholdFromStorage } from "../utils/storage";
import HeaderData from "../components/ShowDataHeader";
import Grid from "../components/Grid";
import ShowContactCard from "../components/ContactCardOutput";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    margin-top: 20px;
`;

function ShowContactsData({ history }) {
    const data = getHouseholdFromStorage() || {};

    function handleCancel() {
        history.replace("babysitterMenu");
    }

    return (
        <>
            <Grid type="showData">
                <HeaderData
                    title="Contacts"
                    button="button"
                    handleCancel={handleCancel}
                />

                <Container>
                    {data.contacts &&
                        data.contacts.map(contact => (
                            <ShowContactCard
                                category={contact.category}
                                name={contact.name}
                                phoneNo={contact.phoneNo}
                                description={contact.description}
                            />
                        ))}
                </Container>
                <ShowPages />
            </Grid>
        </>
    );
}

export default ShowContactsData;
