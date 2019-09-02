import React from "react";
import styled from "styled-components";
import Grid from "../components/Grid";
import Headline from "../components/Headline";
import MenuCard from "../components/MenuCard";
import HeaderData from "../components/ShowDataHeader";

const Main = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    max-width: 500px;
`;

const StyledBody = styled.div`
    display: flex;
    flex-direction: column;
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
            <Headline size="L">Information</Headline>
            <StyledBody>
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
            </StyledBody>
        </Grid>
    );
}

export default Menu;

/*
<Headline size="L">Other functions</Headline>
            <Main>
                <MenuCard
                    icon="fa-baby-carriage"
                    title="Babysitter"
                    direction="generalData"
                    history={history}
                />
            </Main>
            */
