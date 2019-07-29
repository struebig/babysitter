import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import {
    getHouseholdFromStorage,
    setHouseholdtoStorage
} from "./utils/storage";

const StyledForm = styled.form``;

const StyledInput = styled.input``;

export default function HouseholdForm() {
    const [household, setHousehold] = React.useState([
        getHouseholdFromStorage()
    ]);

    function handleChange() {
        /* const newHousehold =  */
        /*Array household aktualisieren*/
    }

    function handleSubmit(newHousehold) {
        setHouseholdtoStorage(newHousehold);
    }

    return;
    <StyledForm onChange={handleChange} onSubmit={handleSubmit}>
        Family name
        <StyledInput />
        <div>
            <h3>"Parents / legal guardians"</h3>
            <div>
                <StyledInput
                    value={household}
                    placeholder="Name"
                    requiredplaceholder="Name"
                />
                <StyledInput placeholder="Role" />
                <StyledInput placeholder="Phone" />
            </div>
            <div>
                <StyledInput placeholder="Name" />
                <StyledInput placeholder="Role" />
                <StyledInput placeholder="Phone" />
            </div>
        </div>
        <div>
            <h3>"Adress"</h3>
            <div>
                <StyledInput placeholder="Street" />
                <StyledInput placeholder="HouseNo." />
            </div>
            <div>
                <StyledInput placeholder="Zip-code" />
                <StyledInput placeholder="City" />
            </div>
        </div>
    </StyledForm>;
}

/*Form(ActionButton).propTypes = {
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    houseNumber: PropTypes.string.isRequired,
    zipCode: PropTypes.string,
    city: PropTypes.string,
};*/
