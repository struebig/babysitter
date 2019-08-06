import React from "react";
import styled from "styled-components";
import Headline from "../components/Headline";
import Grid from "../components/Grid";
import Input from "../components/Input";
import DropDown from "../components/Dropdown";
import MedicalCard from "../components/MedicalCardInput";
import ShowMedicalCard from "../components/MedicalCardOutput";
import WeatherCardInput from "../components/WeatherCardInput";
import ShowWeatherCard from "../components/WeatherCardOutput";
import ContactCardInput from "../components/ContactCardInput";
import ShowContactCard from "../components/ContactCardOutput";
import FoodCardInput from "../components/FoodCardInput";
import ShowFoodCard from "../components/FoodCardOutput";
import {
    getChildrenFromStorage,
    setChildrentoStorage
} from "../utils/StorageChildren";
import HeaderForm from "../components/HeaderForm";

const StyledForm = styled.form``;

const GridBody = styled.div`
    overflow: auto;
`;

function AddChildrenForm({ history }) {
    const [conditions, setConditions] = React.useState([]);
    const [preferences, setPreferences] = React.useState([]);
    const [weatherConditions, setWeatherConditions] = React.useState([]);
    const [contacts, setContacts] = React.useState([]);
    const [values, setValues] = React.useState([]);

    /*function handleChange(event) {
        setChildren({ ...children, [event.target.name]: event.target.value });
        console.log(event.target.name);
        console.log(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        setChildrentoStorage(children);
        history.replace("/");
    }*/
    function handleCancel() {
        history.push("/");
    }

    function handleAddCondition(condition) {
        setConditions([...conditions, condition]);
    }
    function handleAddPreference(preference) {
        setPreferences([...preferences, preference]);
    }
    function handleAddWeatherCard(weatherCondition) {
        setWeatherConditions([...weatherConditions, weatherCondition]);
    }
    function handleAddContact(contact) {
        setContacts([...contacts, contact]);
    }

    return (
        <Grid type="form">
            <HeaderForm
                submit="submit"
                // handleSubmit={handleSubmit}
                button="button"
                handleCancel={handleCancel}
            />
            <GridBody>
                <Headline size="S">General information</Headline>
                <StyledForm /* onSubmit={handleSubmit}*/>
                    <DropDown
                        /*onChange={handleChange} value={household.profileColor}*/ name="profileColor"
                    >
                        <option value="Black">Select color</option>
                        <option value="">---</option>
                        <option value="#0000FF">Blue</option>
                        <option value="#FF0000">Red</option>
                        <option value="#008000">Green</option>
                        <option value="#FFFF00">Yellow</option>
                        <option value="#FFA500">Orange</option>
                        <option value="#FF00FF">Pink</option>
                        <option value="#800080">Purple</option>
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
                        placeholder="DD/MM/YYYY"
                        //   onChange={handleChange}
                    />
                    <Headline size="S">Medical information</Headline>
                    <DropDown /*onChange={handleChange}*/ name="Profile color">
                        <option value="">Select bloodtype</option>
                        <option value="">---</option>
                        <option value="ap">A positiv</option>
                        <option value="bp">B positiv</option>
                        <option value="abp">AB positiv</option>
                        <option value="0p">0 positiv</option>
                        <option value="an">A negativ</option>
                        <option value="bn">B negativ</option>
                        <option value="abn">AB negativ</option>
                        <option value="0n">0 negativ</option>
                    </DropDown>
                    {conditions.map(condition => (
                        <ShowMedicalCard
                            category={condition.category}
                            title={condition.title}
                            description={condition.description}
                        />
                    ))}
                    <MedicalCard onCreate={handleAddCondition} />
                    <Headline size="S">Food</Headline>
                    <DropDown /*onChange={handleChange}*/ name="diet">
                        <option value="">Select diet</option>
                        <option value="">---</option>
                        <option value="vegetarian">Vegetarian</option>
                        <option value="vegan">Vegan</option>
                    </DropDown>
                    {preferences.map(preference => (
                        <ShowFoodCard
                            category={preference.category}
                            name={preference.name}
                            description={preference.description}
                        />
                    ))}
                    <FoodCardInput onCreate={handleAddPreference} />
                    <Headline size="S">Clothing</Headline>

                    {weatherConditions.map(weatherCondition => (
                        <ShowWeatherCard
                            category={weatherCondition.category}
                            temperatur={weatherCondition.temperatur}
                            degree={weatherCondition.degree}
                            description={weatherCondition.description}
                        />
                    ))}
                    <WeatherCardInput onCreate={handleAddWeatherCard} />
                    <Headline size="S">Contacts</Headline>
                    {contacts.map(contact => (
                        <ShowContactCard
                            category={contact.category}
                            name={contact.name}
                            phoneNo={contact.phoneNo}
                            description={contact.description}
                        />
                    ))}

                    <ContactCardInput onCreate={handleAddContact} />
                </StyledForm>
            </GridBody>
        </Grid>
    );
}

export default AddChildrenForm;
