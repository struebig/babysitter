import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
/*import styled from "styled-components";*/
import GlobalStyles from "./GlobalStyles";
import HouseholdForm from "../pages/Household";
import AddChildrenForm from "../pages/AddChildren";
import Menu from "../pages/LandingPage";
import ShowGeneralData from "../pages/GeneralData";
import ShowFoodData from "../pages/FoodData";
import ShowClothingData from "../pages/ClothingData";
import ShowContactsData from "../pages/ContactsData";

function App() {
    return (
        <Router>
            <GlobalStyles />
            <Switch>
                <Route path="/" exact component={Menu} />
                <Route
                    path="/familyData"
                    exact
                    render={props => <HouseholdForm {...props} />}
                />
                <Route path="/childrenData" exact component={AddChildrenForm} />
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
