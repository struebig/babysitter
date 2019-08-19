import React from "react";
import styled from "styled-components";
import Headline from "../components/Headline";
import ShowPages from "../components/Footer";
import { getHouseholdFromStorage } from "../utils/storage";
import HeaderData from "../components/ShowDataHeader";
import Grid from "../components/Grid";
import ChildrenCardOutput from "../components/ChildrenCardOutput";
import ParentCard from "../components/ParentCard";
import ShowAddressCard from "../components/AddressCardOutput";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
`;

function ShowGeneralData({ history }) {
    const data = getHouseholdFromStorage() || {};

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
                    <Headline size="XS">Family {data.familyName}</Headline>
                    <ParentCard
                        parentName={data.nameParentOne}
                        phone={data.phoneParentOne}
                        title={data.roleParentOne}
                    />
                    <ParentCard
                        parentName={data.nameParentTwo}
                        phone={data.phoneParentTwo}
                        title={data.roleParentTwo}
                    />
                    <ShowAddressCard
                        street={data.street}
                        houseNo={data.houseNo}
                        zip={data.zip}
                        city={data.city}
                    />
                    <Headline size="XS">Children</Headline>
                    {data.children &&
                        data.children.map(child => (
                            <ChildrenCardOutput
                                firstName={child.firstName}
                                lastName={child.lastName}
                                birthday={child.birthday}
                                bloodtype={child.bloodtype}
                                diet={child.diet}
                            />
                        ))}
                </Container>
                <ShowPages />
            </Grid>
        </>
    );
}

export default ShowGeneralData;
