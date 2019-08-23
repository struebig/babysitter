import React from "react";
import styled from "styled-components";
import Grid from "../components/Grid";
import Headline from "../components/Headline";
import HeaderData from "../components/ShowDataHeader";
import FamilyCard from "../components/FamilyCard";
import { getHouseholdFromStorage } from "../utils/storage";

const Main = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

function BabysitterMenu({ history }) {
    const household = getHouseholdFromStorage() || {};

    function handleClick() {
        history.push("generalData");
    }

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
                <FamilyCard
                    size="small"
                    name={household.familyName}
                    picture={household.familyImg}
                    onClick={handleClick}
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
