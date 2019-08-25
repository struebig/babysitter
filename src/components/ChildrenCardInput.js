import React from "react";
import styled from "styled-components";
import DropDown from "./Dropdown";
import Input from "./Input";
import InputDate from "./InputDate";
import Headline from "./Headline";
import { v1 } from "uuid";
import PicUploader from "../components/PicUploader";
import StyledCardInput from "../components/StyledCardInput";
import CardInputFooter from "../components/CardInputFooter";

function ChildrenCardInput({
    household,
    defaultValues,
    setHousehold,
    onClose
}) {
    //-----
    const [selectedImg, setSelectedImg] = React.useState(
        household.children && household.children.childImg
    );
    //-----
    function handleSubmit(event) {
        event.preventDefault();
        const form = event.target;

        let oldState = [];
        if (household.children) {
            if (defaultValues && defaultValues.id) {
                oldState = household.children.filter(
                    s => s.id !== defaultValues.id
                );
            } else {
                oldState = household.children;
            }
        }
        setHousehold({
            ...household,
            children: [
                ...oldState,
                {
                    id:
                        defaultValues && defaultValues.id
                            ? defaultValues.id
                            : v1(),

                    firstName: form.firstName.value,
                    lastName: form.lastName.value,
                    birthday: form.birthday.value,
                    bloodtype: form.bloodtype.value,
                    diet: form.diet.value,
                    childImg: selectedImg,
                    profileColor: form.profileColor.value
                }
            ]
        });

        form.reset();
        onClose();
    }
    function handleImageChange(url) {
        console.log(url);
        /*setHousehold({
            ...household,
            children: url
        });*/
        setSelectedImg(url);
        //childImg = url;
    }

    return (
        <StyledCardInput onSubmit={handleSubmit}>
            <Headline size="S">Add child information</Headline>

            <PicUploader
                image={
                    (household.child && household.child.childImg) ||
                    (defaultValues && defaultValues.childImg)
                }
                onImageChange={handleImageChange}
            />
            <DropDown
                defaultValue={defaultValues && defaultValues.profileColor}
                name="profileColor"
            >
                <option value="black">Select color</option>
                <option value="black">---</option>
                <option value="blue">Blue</option>
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="yellow">Yellow</option>
                <option value="orange">Orange</option>
                <option value="pink">Pink</option>
                <option value="purple">Purple</option>
            </DropDown>

            <Input
                size="inputLong"
                label="First Name"
                defaultValue={defaultValues && defaultValues.firstName}
                name="firstName"
                placeholder="First Name"
                required
            />
            <Input
                size="inputLong"
                label="Last Name"
                defaultValue={defaultValues && defaultValues.lastName}
                name="lastName"
                placeholder="Last Name"
            />
            <InputDate
                label="Birthday"
                defaultValue={defaultValues && defaultValues.birthday}
                name="birthday"
                placeholder="Birthday"
            />
            <DropDown
                defaultValue={defaultValues && defaultValues.bloodtype}
                name="bloodtype"
            >
                <option value="">Select bloodtype</option>
                <option value="">---</option>
                <option value="A positiv">A positiv</option>
                <option value="B positiv">B positiv</option>
                <option value="AB positiv">AB positiv</option>
                <option value="0 positiv">0 positiv</option>
                <option value="A negativ">A negativ</option>
                <option value="B negativ">B negativ</option>
                <option value="AB negativ">AB negativ</option>
                <option value="0 negativ">0 negativ</option>
            </DropDown>
            <DropDown
                defaultValue={defaultValues && defaultValues.diet}
                name="diet"
            >
                <option value="">Select diet</option>
                <option value="">---</option>
                <option value="vegetarian">Vegetarian</option>
                <option value="vegan">Vegan</option>
            </DropDown>
            <CardInputFooter onClick={onClose} onSubmit={handleSubmit} />
        </StyledCardInput>
    );
}

export default ChildrenCardInput;
