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
import AddSection from "../components/AddSectionForm";
import {
    getChildrenFromStorage,
    setChildrentoStorage
} from "../utils/StorageChildren";
import HeaderForm from "../components/HeaderForm";

const StyledForm = styled.form``;

const GridBody = styled.div`
    overflow: auto;
`;

function EditChildrenForm({ history, child }) {
    console.log(child);
    const [conditions, setConditions] = React.useState([]);
    const [renderAddMedicalCard, setRenderAddMedicalCard] = React.useState(
        null
    );
    const [preferences, setPreferences] = React.useState([]);
    const [renderAddFoodCard, setRenderAddFoodCard] = React.useState(null);
    const [weatherConditions, setWeatherConditions] = React.useState([]);
    const [renderAddWeatherCard, setRenderAddWeatherCard] = React.useState(
        null
    );
    const [contacts, setContacts] = React.useState([]);
    const [renderAddContactCard, setRenderAddContactCard] = React.useState(
        null
    );
    const [values, setValues] = React.useState([]);

    /*function handleChange(event) {
        setValues({ ...value, [event.target.name]: event.target.value });
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
    function showAddMedicalCard() {
        setRenderAddMedicalCard(true);
    }
    function hideAddMedicalCard() {
        setRenderAddMedicalCard(null);
    }
    function showAddFoodCard() {
        setRenderAddFoodCard(true);
    }
    function hideAddFoodCard() {
        setRenderAddFoodCard(null);
    }
    function showAddWeatherCard() {
        setRenderAddWeatherCard(true);
    }
    function hideAddWeatherCard() {
        setRenderAddWeatherCard(null);
    }
    function showAddContactCard() {
        setRenderAddContactCard(true);
    }
    function hideAddContactCard() {
        setRenderAddContactCard(null);
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
                        /*onChange={handleChange} value={household.profileColor}*/ name="profilePic"
                    >
                        <option value="fa-child">Select picture</option>
                        <option value="fa-child">---</option>
                        <option value="fa-child">Child</option>
                        <option value="fa-baby">Baby</option>
                    </DropDown>
                    <DropDown
                        /*onChange={handleChange} value={household.profileColor}*/ name="profileColor"
                    >
                        <option value="Black">Select color</option>
                        <option value="Black">---</option>
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
                    <AddSection
                        onClick={showAddMedicalCard}
                        titleHeadline="Medical information"
                    />
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
                    {renderAddMedicalCard && (
                        <MedicalCard
                            onCreate={handleAddCondition}
                            onClose={hideAddMedicalCard}
                        />
                    )}

                    {conditions.map(condition => (
                        <ShowMedicalCard
                            category={condition.category}
                            title={condition.title}
                            description={condition.description}
                        />
                    ))}
                    <AddSection
                        onClick={showAddFoodCard}
                        titleHeadline="Food"
                    />
                    <DropDown /*onChange={handleChange}*/ name="diet">
                        <option value="">Select diet</option>
                        <option value="">---</option>
                        <option value="vegetarian">Vegetarian</option>
                        <option value="vegan">Vegan</option>
                    </DropDown>
                    {renderAddFoodCard && (
                        <FoodCardInput
                            onCreate={handleAddPreference}
                            onClose={hideAddFoodCard}
                        />
                    )}
                    {preferences.map(preference => (
                        <ShowFoodCard
                            category={preference.category}
                            name={preference.name}
                            description={preference.description}
                        />
                    ))}
                    <AddSection
                        onClick={showAddWeatherCard}
                        titleHeadline="Clothing"
                    />
                    {renderAddWeatherCard && (
                        <WeatherCardInput
                            onCreate={handleAddWeatherCard}
                            onClose={hideAddWeatherCard}
                        />
                    )}
                    {weatherConditions.map(weatherCondition => (
                        <ShowWeatherCard
                            category={weatherCondition.category}
                            temperatur={weatherCondition.temperatur}
                            degree={weatherCondition.degree}
                            description={weatherCondition.description}
                        />
                    ))}
                    <AddSection
                        onClick={showAddContactCard}
                        titleHeadline="Contacts"
                    />
                    {renderAddContactCard && (
                        <ContactCardInput
                            onCreate={handleAddContact}
                            onClose={hideAddContactCard}
                        />
                    )}
                    {contacts.map(contact => (
                        <ShowContactCard
                            category={contact.category}
                            name={contact.name}
                            phoneNo={contact.phoneNo}
                            description={contact.description}
                        />
                    ))}
                </StyledForm>
            </GridBody>
        </Grid>
    );
}

export default EditChildrenForm;
