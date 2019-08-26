import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import HouseholdForm from "../pages/Household";
import Menu from "../pages/LandingPageFamily";
import BabysitterMenu from "../pages/LandingPageBabysitter";
import LogIn from "../pages/LoginPage";
import ShowGeneralData from "../pages/GeneralData";
import AddFoodData from "../pages/FoodDataInput";
import ShowFoodData from "../pages/FoodDataOutput";
import AddClothingData from "../pages/ClothingDataInput";
import ShowClothingData from "../pages/ClothingDataOutput";
import AddContactsData from "../pages/ContactsDataInput";
import ShowContactsData from "../pages/ContactsDataOutput";
import AddChildrenData from "../pages/ChildrenDataInput";
import AddMedicalData from "../pages/MedicalDataInput";
import ShowMedicalData from "../pages/MedicalDataOutput";

function App() {
    return (
        <Router>
            <GlobalStyles />
            <Switch>
                <Route path="/" exact component={LogIn} />
                <Route
                    path="/babysitterMenu"
                    exact
                    component={BabysitterMenu}
                />
                <Route path="/familyMenu" exact component={Menu} />
                <Route
                    path="/familyData"
                    exact
                    render={props => <HouseholdForm {...props} />}
                />
                <Route
                    path="/childrenDataInput"
                    exact
                    render={props => <AddChildrenData {...props} />}
                />
                <Route
                    path="/medicalDataInput"
                    exact
                    render={props => <AddMedicalData {...props} />}
                />
                <Route
                    path="/clothingDataInput"
                    exact
                    render={props => <AddClothingData {...props} />}
                />
                <Route
                    path="/contactsDataInput"
                    exact
                    render={props => <AddContactsData {...props} />}
                />
                <Route
                    path="/foodDataInput"
                    exact
                    render={props => <AddFoodData {...props} />}
                />
                <Route path="/generalData" exact component={ShowGeneralData} />
                <Route
                    path="/medicalDataOutput"
                    exact
                    component={ShowMedicalData}
                />
                <Route path="/foodDataOutput" exact component={ShowFoodData} />
                <Route
                    path="/clothingDataOutput"
                    exact
                    component={ShowClothingData}
                />
                <Route
                    path="/contactsDataOutput"
                    exact
                    component={ShowContactsData}
                />
            </Switch>
        </Router>
    );
}

export default App;

/*
<Route component={Not Found} />*/
