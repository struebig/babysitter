import React from "react";
import styled from "styled-components";
import Grid from "../components/Grid";
import Headline from "../components/Headline";
import HeaderData from "../components/ShowDataHeader";

import MenuCard from "../components/MenuCard";
/*import {
    getHouseholdFromStorage,
    setHouseholdtoStorage
} from "../utils/storage";*/

const Main = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

function BabysitterMenu({ history }) {
    return (
        <Grid type="sitter">
            <HeaderData
                title="Menu"
                button="button"
                direction="/"
                history={history}
            />

            <Main>
                <Headline size="M">Upcoming</Headline>
                <MenuCard
                    icon="fa-baby-carriage"
                    title="Babysitter"
                    direction="generalData"
                    history={history}
                />
            </Main>
            <Main>
                <Headline size="M">Requests</Headline>
            </Main>
            <Main>
                <Headline size="M">History</Headline>
            </Main>
        </Grid>
    );
}

export default BabysitterMenu;
