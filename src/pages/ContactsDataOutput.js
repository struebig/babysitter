import React from "react";
import styled from "styled-components";
import ShowPages from "../components/Footer";
import { getHouseholdFromStorage } from "../utils/storage";
import HeaderData from "../components/ShowDataHeader";
import Grid from "../components/Grid";
import ShowContactCard from "../components/ContactCardOutput";
import StyledCardOutput from "../components/StyledCardOutput";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    margin-top: 20px;
`;

function ShowContactsData({ history }) {
    const data = getHouseholdFromStorage() || {};

    return (
        <>
            <Grid type="showData">
                <HeaderData
                    title="Contacts"
                    button="button"
                    direction="babysitterMenu"
                    history={history}
                />

                <Container>
                    {data.contacts &&
                        data.contacts.map(contact => (
                            <StyledCardOutput>
                                <ShowContactCard
                                    category={contact.category}
                                    name={contact.name}
                                    phoneNo={contact.phoneNo}
                                    description={contact.description}
                                />
                            </StyledCardOutput>
                        ))}
                </Container>
                <ShowPages />
            </Grid>
        </>
    );
}

export default ShowContactsData;
