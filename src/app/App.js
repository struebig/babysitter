import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
/*import styled from "styled-components";*/
import GlobalStyles from "./GlobalStyles";
import HouseholdForm from "../pages/Household";
import Menu from "../pages/LandingPage";

function App() {
    return (
        <Router>
            <GlobalStyles />
            <Switch>
                <Route path="/" exact component={Menu} />
                <Route path="/familyData" exact component={HouseholdForm} />
            </Switch>
        </Router>
    );
}

export default App;
