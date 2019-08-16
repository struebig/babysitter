import React from "react";
/*import Headline from "../components/Headline";*/
import styled from "styled-components";
import Grid from "../components/Grid";
import Headline from "../components/Headline";
import MenuCard from "../components/MenuCard";
import HeaderData from "../components/ShowDataHeader";
//import ChildProfile from "../components/ChildProfile";
import {
    getHouseholdFromStorage,
    setHouseholdtoStorage
} from "../utils/storage";

const Main = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;

function Menu({ history }) {
    const childButtons = getHouseholdFromStorage();
    function handleClick() {
        history.push("familyData");
    }
    function handleClickChildren() {
        history.push("childrenDataInput");
    }
    function handleClickMedical() {
        history.push("medicalDataInput");
    }
    function handleClickFood() {
        history.push("foodDataInput");
    }
    function handleClickClothing() {
        history.push("clothingDataInput");
    }
    function handleClickContacts() {
        history.push("contactsDataInput");
    }
    function showData() {
        history.push("generalData");
    }
    function editChild() {
        history.push("childrenData");
    }
    function handleCancel() {
        history.replace("/");
    }

    return (
        <Grid type="main">
            <HeaderData
                title="Menu"
                button="button"
                handleCancel={handleCancel}
            />
            <Headline size="M">Information</Headline>
            <Main>
                <MenuCard icon="fa-home" title="Family" onClick={handleClick} />
                <MenuCard
                    icon="fa-child"
                    title="Children"
                    onClick={handleClickChildren}
                />
                <MenuCard
                    icon="fa-first-aid"
                    title="Medical"
                    onClick={handleClickMedical}
                />
            </Main>
            <Main>
                <MenuCard
                    icon="fa-utensils"
                    title="Food"
                    onClick={handleClickFood}
                />
                <MenuCard
                    icon="fa-tshirt"
                    title="Clothing"
                    onClick={handleClickClothing}
                />
                <MenuCard
                    icon="fa-address-book"
                    title="Contacts"
                    onClick={handleClickContacts}
                />
            </Main>
            <Headline size="M">Other functions</Headline>
            <Main>
                <MenuCard
                    icon="fa-baby-carriage"
                    title="Babysitter"
                    onClick={showData}
                />
            </Main>
        </Grid>
    );
}

export default Menu;

/*

Profilbild je Kind:

{childButtons.children.map(child => (
                    // Link to=`/childrenData${child.id}`
                    <ChildProfile
                        child={child.firstName}
                        //to={`/childrenData${child.id}`}
                    />
                ))}





Komplettes Formular:

<MenuCard
                    icon="fa-plus"
                    title="Full form"
                    onClick={editChild}
                />

*/
