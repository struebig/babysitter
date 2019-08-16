import React from "react";
import styled from "styled-components";
import Grid from "../components/Grid";
import Headline from "../components/Headline";
import MenuCard from "../components/MenuCard";
import HeaderData from "../components/ShowDataHeader";

const Main = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;

function Menu({ history }) {
    return (
        <Grid type="main">
            <HeaderData
                title="Menu"
                button="button"
                direction="/"
                history={history}
            />
            <Headline size="M">Information</Headline>
            <Main>
                <MenuCard
                    icon="fa-home"
                    title="Family"
                    direction="familyData"
                    history={history}
                />
                <MenuCard
                    icon="fa-child"
                    title="Children"
                    direction="childrenDataInput"
                    history={history}
                />
                <MenuCard
                    icon="fa-first-aid"
                    title="Medical"
                    direction="medicalDataInput"
                    history={history}
                />
            </Main>
            <Main>
                <MenuCard
                    icon="fa-utensils"
                    title="Food"
                    direction="foodDataInput"
                    history={history}
                />
                <MenuCard
                    icon="fa-tshirt"
                    title="Clothing"
                    direction="clothingDataInput"
                    history={history}
                />
                <MenuCard
                    icon="fa-address-book"
                    title="Contacts"
                    direction="contactsDataInput"
                    history={history}
                />
            </Main>
            <Headline size="M">Other functions</Headline>
            <Main>
                <MenuCard
                    icon="fa-baby-carriage"
                    title="Babysitter"
                    direction="generalData"
                    history={history}
                />
            </Main>
        </Grid>
    );
}

export default Menu;
