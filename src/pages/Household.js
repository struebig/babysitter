/* import PropTypes from "prop-types";*/
import React from "react";
import styled from "styled-components";
/* import ActionButton from "../components/ActionButton";*/
import {
    getHouseholdFromStorage,
    setHouseholdtoStorage
} from "../utils/storage";

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
                <button onClick={handleSubmit}>ADD</button>
                <button type="button" onClick={handleCancel}>
                    CANCEL
                </button>
            </ButtonHeader>
            <h2>Family Data</h2>
            <StyledForm /* onSubmit={handleSubmit}*/>
                Family name
                <StyledInput
                    value={household.familyName}
                    name="familyName"
                    placeholder="Family name"
                    onChange={handleChange}
                />
                <Container>
                    <h3>"Parents / legal guardians"</h3>
                    <Container>
                        <StyledInput
                            value={household.nameParentOne}
                            name="nameParentOne"
                            placeholder="Name"
                            onChange={handleChange}
                        />
                        <StyledInput
                            value={household.roleParentOne}
                            placeholder="Role (e.g. father, mother, aunt)"
                            name="roleParentOne"
                            onChange={handleChange}
                        />
                        <StyledInput
                            value={household.phoneParentOne}
                            placeholder="PhoneNo."
                            name="phoneParentOne"
                            onChange={handleChange}
                        />
                    </Container>
                    <Container>
                        <StyledInput
                            value={household.nameParentTwo}
                            placeholder="Name"
                            name="nameParentTwo"
                            onChange={handleChange}
                        />
                        <StyledInput
                            value={household.roleParentTwo}
                            placeholder="Role (e.g. father, mother, aunt)"
                            name="roleParentTwo"
                            onChange={handleChange}
                        />
                        <StyledInput
                            value={household.phoneParentTwo}
                            placeholder="PhoneNo."
                            name="phoneParentTwo"
                            onChange={handleChange}
                        />
                    </Container>
                </Container>
                <Container>
                    <h3>"Adress"</h3>
                    <Container>
                        <StyledInput
                            name="street"
                            value={household.street}
                            placeholder="Street"
                            onChange={handleChange}
                        />
                        <StyledInput
                            name="houseNo"
                            value={household.HouseNo}
                            placeholder="House No."
                            onChange={handleChange}
                        />
                    </Container>
                    <Container>
                        <StyledInput
                            name="zip"
                            value={household.zip}
                            placeholder="Zip-code"
                            onChange={handleChange}
                        />
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
