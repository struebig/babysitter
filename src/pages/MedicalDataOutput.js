import React from "react";
import styled from "styled-components";
//import Headline from "../components/Headline";
import ShowPages from "../components/Footer";
//import { getHouseholdFromStorage } from "../utils/storage";
import HeaderData from "../components/ShowDataHeader";
import Grid from "../components/Grid";

const Container = styled.div`
    overflow: auto;
`;

function ShowMedicalData({ history }) {
    /*const data = getHouseholdFromStorage() || {
        familyName: "",
        nameParentOne: "",
        roleParentOne: "Mother",
        phoneParentOne: "",
        nameParentTwo: "",
        roleParentTwo: "Father",
        phoneParentTwo: "",
        street: "",
        houseNo: "",
        zip: "",
        city: ""
    };*/

    function handleCancel() {
        history.replace("/");
    }

    return (
        <>
            <Grid type="showData">
                <HeaderData
                    title="Medical Data"
                    button="button"
                    handleCancel={handleCancel}
                />
                <Container />
                <ShowPages />
            </Grid>
        </>
    );
}

export default ShowMedicalData;
