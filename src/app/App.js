import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
/*import styled from "styled-components";*/
import GlobalStyles from "./GlobalStyles";
import HouseholdForm from "../pages/Household";
import EditChildrenForm from "../pages/EditChildren";
import Menu from "../pages/LandingPageFamily";
import BabysitterMenu from "../pages/LandingPageBabysitter";
import LogIn from "../pages/LoginPage";
import ShowGeneralData from "../pages/GeneralData";
import ShowFoodData from "../pages/FoodData";
import ShowClothingData from "../pages/ClothingData";
import ShowContactsData from "../pages/ContactsData";

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
                    path="/childrenData"
                    exact
                    component={EditChildrenForm}
                />
                <Route path="/generalData" exact component={ShowGeneralData} />
                <Route path="/foodData" exact component={ShowFoodData} />
                <Route
                    path="/clothingData"
                    exact
                    component={ShowClothingData}
                />
                <Route
                    path="/contactsData"
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
