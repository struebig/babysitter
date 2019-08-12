/* import PropTypes from "prop-types";*/
import React from "react";
import styled from "styled-components";
import Headline from "../components/Headline";
import Grid from "../components/Grid";
import Input from "../components/Input";
import ShowChildren from "../components/ShowChildren";
import AddChild from "../components/AddChild";
import {
    getHouseholdFromStorage,
    setHouseholdtoStorage
} from "../utils/storage";
import HeaderForm from "../components/HeaderForm";

const StyledForm = styled.form``;

const GridBody = styled.div`
    overflow: auto;
`;

function HouseholdForm({ history }) {
    const [household, setHousehold] = React.useState(
        getHouseholdFromStorage() || {
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
            city: "",
            children: []
        }
    );

    React.useEffect(() => {
        console.log(household);
    }, [household]);

    //const [children, setChildren] = React.useState([]);

    function handleChange(event) {
        setHousehold({ ...household, [event.target.name]: event.target.value });
        console.log(event.target.name);
        console.log(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        setHouseholdtoStorage(household);
        history.replace("/familyMenu");
    }
    function handleCancel() {
        history.push("/familyMenu");
    }
    /* function handleAddChildren(child) {
        console.log(child);
        setChildren([...children, child]);
    }*/

    return (
        <Grid type="form">
            <HeaderForm
                submit="submit"
                handleSubmit={handleSubmit}
                button="button"
                handleCancel={handleCancel}
            />
            <GridBody>
                <Headline size="S">Family Data</Headline>
                <StyledForm /* onSubmit={handleSubmit}*/>
                    <Input
                        label="Family name"
                        value={household.familyName}
                        name="familyName"
                        placeholder="Family name"
                        onChange={handleChange}
                    />
                    <Headline size="XS">Parents</Headline>
                    <Input
                        label="Name"
                        value={household.nameParentOne}
                        name="nameParentOne"
                        placeholder="Name"
                        onChange={handleChange}
                    />
                    <Input
                        label="Role"
                        value={household.roleParentOne}
                        placeholder="Role (e.g. father, mother, aunt)"
                        name="roleParentOne"
                        onChange={handleChange}
                    />
                    <Input
                        label="Phone"
                        value={household.phoneParentOne}
                        placeholder="PhoneNo."
                        name="phoneParentOne"
                        onChange={handleChange}
                    />
                    <Input
                        label="Name"
                        value={household.nameParentTwo}
                        placeholder="Name"
                        name="nameParentTwo"
                        onChange={handleChange}
                    />

                    <Input
                        label="Role"
                        value={household.roleParentTwo}
                        placeholder="Role (e.g. father, mother, aunt)"
                        name="roleParentTwo"
                        onChange={handleChange}
                    />
                    <Input
                        label="Phone"
                        value={household.phoneParentTwo}
                        placeholder="PhoneNo."
                        name="phoneParentTwo"
                        onChange={handleChange}
                    />
                    <Headline size="XS">Address</Headline>
                    <Input
                        label="Street"
                        name="street"
                        value={household.street}
                        placeholder="Street"
                        onChange={handleChange}
                    />
                    <Input
                        label="House No."
                        name="houseNo"
                        value={household.houseNo}
                        placeholder="House No."
                        onChange={handleChange}
                    />
                    <Input
                        label="Zip-code"
                        name="zip"
                        value={household.zip}
                        placeholder="Zip-code"
                        onChange={handleChange}
                    />
                    <Input
                        label="City"
                        name="city"
                        value={household.city}
                        placeholder="City"
                        onChange={handleChange}
                    />
                    <AddChild
                        household={household}
                        setHousehold={setHousehold}
                        name="firstName"
                        //value={household.children}
                        placeholder="First name"
                        // onCreate={handleAddChildren}
                    />
                    {household.children.map(child => (
                        <ShowChildren name={child.firstName} />
                    ))}
                </StyledForm>
            </GridBody>
        </Grid>
    );
}

export default HouseholdForm;
