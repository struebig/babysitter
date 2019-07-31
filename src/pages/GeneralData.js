/* import PropTypes from "prop-types";*/
import React from "react";
import styled from "styled-components";
import Headline from "../components/Headline";
import Output from "../components/Output";
import ShowPages from "../components/Footer";
import { getHouseholdFromStorage } from "../utils/storage";

const Container = styled.div``;

function ShowGeneralData() {
    const data = getHouseholdFromStorage() || {
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
    };

    return (
        <>
            <Container>
                <Headline size="M">General Data</Headline>
                <Headline size="S">Family Data</Headline>
                <Headline size="XS">Family: {data.familyName}</Headline>
                <Headline size="XS">{data.roleParentOne}</Headline>
                <Output label="Name" name={data.nameParentOne} />
                <Output label="Phone" name={data.phoneParentOne} />
                <Headline size="XS">{data.roleParentTwo}</Headline>
                <Output label="Name" name={data.nameParentTwo} />
                <Output label="Phone" name={data.phoneParentTwo} />
                <Headline size="XS">Address</Headline>
                <Output label="Street" name={data.street} />
                <Output label="HouseNo." name={data.houseNo} />
                <Output label="Zip-code" name={data.zip} />
                <Output label="City" name={data.city} />
            </Container>
            <ShowPages />
        </>
    );
}

export default ShowGeneralData;
