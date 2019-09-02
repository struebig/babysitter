import React from "react";
import styled from "styled-components";
import ShowPages from "../components/Footer";
/*
Local Storage:
import { getHouseholdFromStorage} from "../utils/storage";
Backend:*/
import { getCards } from "../utils/services";
//-------
import HeaderData from "../components/ShowDataHeader";
import Grid from "../components/Grid";
import ShowContactCard from "../components/ContactCardOutput";
import StyledCardOutput from "../components/StyledCardOutput";

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    padding-top: 20px;
`;

function ShowContactsData({ history }) {
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

    return (
        <>
            <Grid type="showData">
                <HeaderData
                    title="Contacts"
                    button="button"
                    direction="babysitterMenu"
                    history={history}
                />

                <StyledContainer>
                    {household.contacts &&
                        household.contacts.map(contact => (
                            <StyledCardOutput key={contact.id}>
                                <ShowContactCard
                                    category={contact.category}
                                    name={contact.name}
                                    phoneNo={contact.phoneNo}
                                    description={contact.description}
                                    assigned={contact.assigned}
                                    household={household}
                                />
                            </StyledCardOutput>
                        ))}
                </StyledContainer>
                <ShowPages />
            </Grid>
        </>
    );
}

export default ShowContactsData;
