/* import PropTypes from "prop-types";*/
import React from "react";
import styled from "styled-components";
import Headline from "../components/Headline";
/* import ActionButton from "../components/ActionButton";*/
import {
    getHouseholdFromStorage,
    setHouseholdtoStorage
} from "../utils/storage";
import HeaderForm from "../components/HeaderForm";

const StyledForm = styled.form``;

const StyledInput = styled.input``;

const Container = styled.div``;

const ButtonHeader = styled.div``;

function HouseholdForm({ history }) {
    const [household, setHousehold] = React.useState(
        getHouseholdFromStorage() || {
            familyName: "",
            nameParentOne: "",
            roleParentOne: "",
            phoneParentOne: "",
            nameParentTwo: "",
            roleParentTwo: "",
            phoneParentTwo: "",
            street: "",
            houseNo: "",
            zip: "",
            city: ""
        }
    );

    function handleChange(event) {
        setHousehold({ ...household, [event.target.name]: event.target.value });
        console.log(event.target.name);
        console.log(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        setHouseholdtoStorage(household);
        history.replace("/");
    }
    function handleCancel() {
        history.push("/");
    }

    return (
        <>
            <ButtonHeader>
                <HeaderForm
                    submit="submit"
                    handleSubmit={handleSubmit}
                    button="button"
                    handleCancel={handleCancel}
                />
            </ButtonHeader>
            <Headline size="S">Family Data</Headline>
            <StyledForm /* onSubmit={handleSubmit}*/>
                Family name
                <StyledInput
                    value={household.familyName}
                    name="familyName"
                    placeholder="Family name"
                    onChange={handleChange}
                />
                <Container>
                    <Headline size="XS">Parents</Headline>
                    <Container>
                        <label for="nameParentOne">Name </label>
                        <StyledInput
                            id="nameParentOne"
                            value={household.nameParentOne}
                            name="nameParentOne"
                            placeholder="Name"
                            onChange={handleChange}
                        />
                        Role
                        <StyledInput
                            value={household.roleParentOne}
                            placeholder="Role (e.g. father, mother, aunt)"
                            name="roleParentOne"
                            onChange={handleChange}
                        />
                        Phone
                        <StyledInput
                            value={household.phoneParentOne}
                            placeholder="PhoneNo."
                            name="phoneParentOne"
                            onChange={handleChange}
                        />
                    </Container>
                    <Container>
                        Name
                        <StyledInput
                            value={household.nameParentTwo}
                            placeholder="Name"
                            name="nameParentTwo"
                            onChange={handleChange}
                        />
                        Role
                        <StyledInput
                            value={household.roleParentTwo}
                            placeholder="Role (e.g. father, mother, aunt)"
                            name="roleParentTwo"
                            onChange={handleChange}
                        />
                        Phone
                        <StyledInput
                            value={household.phoneParentTwo}
                            placeholder="PhoneNo."
                            name="phoneParentTwo"
                            onChange={handleChange}
                        />
                    </Container>
                </Container>
                <Container>
                    <Headline size="XS">Address</Headline>
                    <Container>
                        Street
                        <StyledInput
                            name="street"
                            value={household.street}
                            placeholder="Street"
                            onChange={handleChange}
                        />
                        House No.
                        <StyledInput
                            name="houseNo"
                            value={household.HouseNo}
                            placeholder="House No."
                            onChange={handleChange}
                        />
                    </Container>
                    <Container>
                        Zip-code
                        <StyledInput
                            name="zip"
                            value={household.zip}
                            placeholder="Zip-code"
                            onChange={handleChange}
                        />
                        City
                        <StyledInput
                            name="city"
                            value={household.city}
                            placeholder="City"
                            onChange={handleChange}
                        />
                    </Container>
                </Container>
            </StyledForm>
        </>
    );
}

/* StyledInput.propTypes = {
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired
};*/

export default HouseholdForm;

/* <button onClick={handleSubmit}>ADD</button>
                <button type="button" onClick={handleCancel}>
                    CANCEL
                </button>*/
