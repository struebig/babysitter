import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
/*import styled from "styled-components";*/
import GlobalStyles from "./GlobalStyles";
import HouseholdForm from "../pages/Household";
import Menue from "../pages/LandingPage";

function App() {
    return (
        <Router>
            <GlobalStyles />
            <Switch>
                <Route path="/" exact component={Menue} />
                <Route path="/familyData" exact component={HouseholdForm} />
            </Switch>
        </Router>
    );
}

export default App;
