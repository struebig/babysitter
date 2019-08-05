import React from "react";
import styled from "styled-components";
import Headline from "../components/Headline";
import Grid from "../components/Grid";
import Input from "../components/Input";
import DropDown from "../components/Dropdown";
/*import {
    getHouseholdFromStorage,
    setHouseholdtoStorage
} from "../utils/storage";*/
import HeaderForm from "../components/HeaderForm";

const StyledForm = styled.form``;

function AddChildrenForm({ history }) {
    /*const [household, setHousehold] = React.useState(
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
            city: ""
        }
    );*/
    const GridBody = styled.div`
        overflow: auto;
    `;

    /*function handleChange(event) {
        setHousehold({ ...household, [event.target.name]: event.target.value });
        console.log(event.target.name);
        console.log(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        setHouseholdtoStorage(household);
        history.replace("/");
    }*/
    function handleCancel() {
        history.push("/");
    }

    return (
        <Grid type="form">
            <HeaderForm
                submit="submit"
                //   handleSubmit={handleSubmit}
                button="button"
                handleCancel={handleCancel}
            />
            <GridBody>
                <Headline size="S">General information</Headline>
                <StyledForm /* onSubmit={handleSubmit}*/>
                    <DropDown name="Profile color">
                        <option value="Black">Select color</option>
                        <option value="">---</option>
                        <option value="Blue">Blue</option>
                        <option value="Red">Red</option>
                        <option value="Green">Green</option>
                        <option value="Yellow">Yellow</option>
                        <option value="Pink">Pink</option>
                    </DropDown>
                    <Input
                        label="First name"
                        //    value={household.fistName}
                        name="firstName"
                        placeholder="First name"
                        //   onChange={handleChange}
                    />
                    <Input
                        label="Last name"
                        //   value={household.lastName}
                        name="lastName"
                        placeholder="Last name"
                        //   onChange={handleChange}
                    />
                    <Input
                        label="Birthday"
                        //    value={household.birthday}
                        name="birthday"
                        placeholder="Birthday"
                        //   onChange={handleChange}
                    />
                    <Headline size="S">Medical information</Headline>
                    <Input
                        label="Bloodtype"
                        //    value={household.bloodtype}
                        name="bloodtype"
                        placeholder="Bloodtype"
                        //  onChange={handleChange}
                    />
                    <Headline size="XS">Medical conditions</Headline>
                    <Headline size="XS">Allergies</Headline>
                    <Headline size="XS">Intolerances</Headline>
                    <Headline size="XS">Clothing</Headline>
                    <Headline size="XS">Food</Headline>
                    <Input
                        label="Diet"
                        //    value={household.diet}
                        name="ndiet"
                        placeholder="Diet (e.g. vegetarian, vegan...)"
                        //   onChange={handleChange}
                    />
                    <Headline size="XS">Preferences</Headline>
                    <Headline size="XS">Dislikes</Headline>
                    <Headline size="XS">Food</Headline>
                    <Headline size="XS">In case of emergency</Headline>
                    <Input
                        label="Name"
                        //    value={household.nameICEOne}
                        name="nameContact"
                        placeholder="Name"
                        //   onChange={handleChange}
                    />
                    <Input
                        label="Dscription"
                        //    value={household.descriptionICEOne}
                        placeholder="Description"
                        name="description"
                        //   onChange={handleChange}
                    />
                    <Input
                        label="Phone"
                        //    value={household.phoneICEOne}
                        placeholder="Phone No.)"
                        name="phoneContact"
                        //   onChange={handleChange}
                    />
                    <Input
                        label="Name"
                        //    value={household.nameICETwo}
                        name="nameContact"
                        placeholder="Name"
                        //   onChange={handleChange}
                    />
                    <Input
                        label="Dscription"
                        //    value={household.descriptionICETwo}
                        placeholder="Description"
                        name="description"
                        //   onChange={handleChange}
                    />
                    <Input
                        label="Phone"
                        //    value={household.phoneICETwo}
                        placeholder="Phone No.)"
                        name="phoneContact"
                        //   onChange={handleChange}
                    />
                    <Input
                        label="Name"
                        //    value={household.nameICEThree}
                        name="nameContact"
                        placeholder="Name"
                        //   onChange={handleChange}
                    />
                    <Input
                        label="Dscription"
                        //   value={household.descriptionICEThree}
                        placeholder="Description"
                        name="description"
                        //   onChange={handleChange}
                    />
                    <Input
                        label="Phone"
                        //   value={household.phoneICEThree}
                        placeholder="Phone No.)"
                        name="phoneContact"
                        //   onChange={handleChange}
                    />
                    <Headline size="XS">Family</Headline>
                    <Headline size="XS">Doctors</Headline>
                    <Headline size="XS">Friends</Headline>
                    <Headline size="XS">Other</Headline>
                </StyledForm>
            </GridBody>
        </Grid>
    );
}

export default AddChildrenForm;
