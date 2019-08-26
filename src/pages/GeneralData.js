import React from "react";
import styled from "styled-components";
import Headline from "../components/Headline";
import ShowPages from "../components/Footer";
import { getHouseholdFromStorage } from "../utils/storage";
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
    padding-top: 20px;
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
                    <FamilyCard
                        size="big"
                        name={data.familyName}
                        picture={data.familyImg}
                    />

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
                    <Headline size="S">Children</Headline>
                    {data.children &&
                        data.children.map(child => (
                            <StyledCardOutput key={child.id}>
                                <ChildrenCardOutput
                                    firstName={child.firstName}
                                    lastName={child.lastName}
                                    birthday={child.birthday}
                                    bloodtype={child.bloodtype}
                                    diet={child.diet}
                                    picture={child.childImg}
                                    household={data}
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
