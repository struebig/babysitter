import React from "react";
/*import Headline from "../components/Headline";*/
import styled from "styled-components";
import Grid from "../components/Grid";
import Headline from "../components/Headline";
import HeaderData from "../components/ShowDataHeader";

import MenuCard from "../components/MenuCard";
import {
    getHouseholdFromStorage,
    setHouseholdtoStorage
} from "../utils/storage";

const Main = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

const MenuButton = styled.button`
    height: 100px;
    width: 100px;
    border: solid 5px #a2ebef;
    border-radius: 10%;
    font-size: 80px;
    background-color: transparent;
    color: #a2ebef;
`;

function BabysitterMenu({ history }) {
    function showData() {
        history.push("generalData");
    }

    function handleCancel() {
        history.replace("/");
    }
    return (
        <Grid type="sitter">
            <HeaderData
                title="Menu"
                button="button"
                handleCancel={handleCancel}
            />

            <Main>
                <Headline size="M">Upcoming</Headline>
                <MenuCard
                    icon="fa-baby-carriage"
                    title="Babysitter"
                    onClick={showData}
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
