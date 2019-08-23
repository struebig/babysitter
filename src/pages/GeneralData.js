import React from "react";
import styled from "styled-components";
import Headline from "../components/Headline";
import ShowPages from "../components/Footer";
/*
Local Storage:
import { getHouseholdFromStorage} from "../utils/storage";
Backend:*/
import { getCards } from "../utils/services";
//-------
import HeaderData from "../components/ShowDataHeader";
import Grid from "../components/Grid";
import ChildrenCardOutput from "../components/ChildrenCardOutput";
import ParentCard from "../components/ParentCard";
import FamilyCard from "../components/FamilyCard";
import ShowAddressCard from "../components/AddressCardOutput";
import StyledCardOutput from "../components/StyledCardOutput";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    margin-top: 20px;
`;

function ShowGeneralData({ history }) {
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
                    title="Family Data"
                    button="button"
                    direction="babysitterMenu"
                    history={history}
                />
                <Container>
                    <FamilyCard
                        size="big"
                        name={household.familyName}
                        picture={household.familyImg}
                    />

                    <ParentCard
                        parentName={household.nameParentOne}
                        phone={household.phoneParentOne}
                        title={household.roleParentOne}
                    />
                    <ParentCard
                        parentName={household.nameParentTwo}
                        phone={household.phoneParentTwo}
                        title={household.roleParentTwo}
                    />
                    <ShowAddressCard
                        street={household.street}
                        houseNo={household.houseNo}
                        zip={household.zip}
                        city={household.city}
                    />
                    <Headline size="XS">Children</Headline>
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
                            </StyledCardOutput>
                        ))}
                </Container>
                <ShowPages />
            </Grid>
        </>
    );
}

export default ShowGeneralData;
