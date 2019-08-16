import React from "react";
import styled from "styled-components";
import Headline from "../components/Headline";
import Output from "../components/Output";
import ShowPages from "../components/Footer";
import { getHouseholdFromStorage } from "../utils/storage";
import HeaderData from "../components/ShowDataHeader";
import Grid from "../components/Grid";
import ChildrenCardOutput from "../components/ChildrenCardOutput";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
`;
const GeneralCardOutput = styled.div`
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

function ShowGeneralData({ history }) {
    const data = getHouseholdFromStorage() || {
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
        city: "",
        children: [
            {
                firstName: "",
                lastName: "",
                birthday: "",
                bloodtype: "",
                diet: ""
            }
        ]
    };

    function handleCancel() {
        history.replace("babysitterMenu");
    }

    return (
        <>
            <Grid type="showData">
                <HeaderData
                    title="Family Data"
                    button="button"
                    handleCancel={handleCancel}
                />
                <Container>
                    <Headline size="XS">Family {data.familyName}</Headline>
                    <GeneralCardOutput>
                        <Headline size="XS">{data.roleParentOne}</Headline>
                        <Output label="Name" name={data.nameParentOne} />
                        <Output label="Phone" name={data.phoneParentOne} />
                    </GeneralCardOutput>
                    <GeneralCardOutput>
                        <Headline size="XS">{data.roleParentTwo}</Headline>
                        <Output label="Name" name={data.nameParentTwo} />
                        <Output label="Phone" name={data.phoneParentTwo} />
                    </GeneralCardOutput>
                    <GeneralCardOutput>
                        <Headline size="XS">Address</Headline>
                        <Output label="Street" name={data.street} />
                        <Output label="HouseNo." name={data.houseNo} />
                        <Output label="Zip-code" name={data.zip} />
                        <Output label="City" name={data.city} />
                    </GeneralCardOutput>
                    <Headline size="XS">Children</Headline>
                    {data.children &&
                        data.children.map(child => (
                            <ChildrenCardOutput
                                firstName={child.firstName}
                                lastName={child.lastName}
                                birthday={child.birthday}
                                bloodtype={child.bloodtype}
                                diet={child.diet}
                            />
                        ))}
                </Container>
                <ShowPages />
            </Grid>
        </>
    );
}

export default ShowGeneralData;
