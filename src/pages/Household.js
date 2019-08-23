import React from "react";
import styled from "styled-components";
import Headline from "../components/Headline";
import Grid from "../components/Grid";
import Input from "../components/Input";
import PicUploader from "../components/PicUploader";
import {
    getHouseholdFromStorage,
    setHouseholdtoStorage
} from "../utils/storage";
import HeaderForm from "../components/HeaderForm";

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const GridBody = styled.div`
    overflow: auto;
`;

const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    height: auto;
    width: 320px;
    padding: 3px;
    background: lightgrey;
    margin-bottom: 20px;
    box-shadow: 5px 5px 8px grey;
`;
const StyledPicture = styled.div``;

function HouseholdForm({ history }) {
    const [household, setHousehold] = React.useState(
        getHouseholdFromStorage() || {}
    );

    function handleChange(event) {
        setHousehold({ ...household, [event.target.name]: event.target.value });
    }

    function handleSubmit(event) {
        event.preventDefault();
        setHouseholdtoStorage(household);
        history.replace("/familyMenu");
    }
    function handleCancel() {
        history.push("/familyMenu");
    }

    function handleImageChange(url) {
        setHousehold({
            ...household,
            familyImg: url
        });
    }

    return (
        <Grid type="formShort">
            <HeaderForm
                submit="submit"
                handleSubmit={handleSubmit}
                button="button"
                handleCancel={handleCancel}
            />

            <Headline size="S">Family Data</Headline>
            <div />
            <GridBody>
                <StyledForm /* onSubmit={handleSubmit}*/>
                    <StyledCard>
                        <StyledPicture>
                            <PicUploader
                                image={household.familyImg}
                                onImageChange={handleImageChange}
                            />
                        </StyledPicture>

                        <Input
                            size="textShort"
                            label="Family name"
                            value={household.familyName}
                            name="familyName"
                            placeholder="Family name"
                            onChange={handleChange}
                        />
                    </StyledCard>
                    <Headline size="XS">Relatives</Headline>
                    <StyledCard>
                        <Input
                            size="textShort"
                            label="Name"
                            value={household.nameParentOne}
                            name="nameParentOne"
                            placeholder="Name"
                            onChange={handleChange}
                        />
                        <Input
                            size="textShort"
                            label="Role"
                            value={household.roleParentOne}
                            placeholder="Role (e.g. father, mother, aunt)"
                            name="roleParentOne"
                            onChange={handleChange}
                        />
                        <Input
                            size="numberLong"
                            label="Phone"
                            value={household.phoneParentOne}
                            placeholder="PhoneNo."
                            name="phoneParentOne"
                            onChange={handleChange}
                        />
                    </StyledCard>
                    <StyledCard>
                        <Input
                            size="textShort"
                            label="Name"
                            value={household.nameParentTwo}
                            placeholder="Name"
                            name="nameParentTwo"
                            onChange={handleChange}
                        />

                        <Input
                            size="textShort"
                            label="Role"
                            value={household.roleParentTwo}
                            placeholder="Role (e.g. father, mother, aunt)"
                            name="roleParentTwo"
                            onChange={handleChange}
                        />
                        <Input
                            size="numberLong"
                            label="Phone"
                            value={household.phoneParentTwo}
                            placeholder="PhoneNo."
                            name="phoneParentTwo"
                            onChange={handleChange}
                        />
                    </StyledCard>

                    <Headline size="XS">Address</Headline>
                    <StyledCard>
                        <Input
                            size="textMedium"
                            label="Street"
                            name="street"
                            value={household.street}
                            placeholder="Street"
                            onChange={handleChange}
                        />
                        <Input
                            size="numberShort"
                            label="House No."
                            name="houseNo"
                            value={household.houseNo}
                            placeholder="House No."
                            onChange={handleChange}
                        />
                        <Input
                            size="numberMedium"
                            label="Zip-code"
                            name="zip"
                            value={household.zip}
                            placeholder="Zip-code"
                            onChange={handleChange}
                        />
                        <Input
                            size="textMedium"
                            label="City"
                            name="city"
                            value={household.city}
                            placeholder="City"
                            onChange={handleChange}
                        />
                    </StyledCard>
                </StyledForm>
            </GridBody>
        </Grid>
    );
}

export default HouseholdForm;
