import React from "react";
import styled from "styled-components";
import ShowPages from "../components/Footer";
/*
Local Storage:
import { getHouseholdFromStorage} from "../utils/storage";
Backend:*/
import { getCards } from "../utils/services";
//-------
import HeaderData from "../components/ShowDataHeader";
import Grid from "../components/Grid";
import ShowFoodCard from "../components/FoodCardOutput";
import StyledCardOutput from "../components/StyledCardOutput";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    padding-top: 20px;
`;

function ShowFoodData({ history }) {
    /*
    Local Storage:
    const [household, setHousehold] = React.useState(getHouseholdFromStorage());
    Backend:*/
    const [household, setHousehold] = React.useState({});
    React.useEffect(() => {
        async function loadData() {
            const result = await getCards();
            setHousehold(result[0] || {});
        }
        loadData();
    }, []);
    // --------

    return (
        <>
            <Grid type="showData">
                <HeaderData
                    title="Nutrition Data"
                    button="button"
                    direction="babysitterMenu"
                    history={history}
                />
                <Container>
                    {household.foodPreferences &&
                        household.foodPreferences.map(foodPreference => (
                            <StyledCardOutput key={foodPreference.id}>
                                <ShowFoodCard
                                    category={foodPreference.category}
                                    name={foodPreference.name}
                                    description={foodPreference.description}
                                    assigned={foodPreference.assigned}
                                    household={household}
                                />
                            </StyledCardOutput>
                        ))}
                </Container>
                <ShowPages />
            </Grid>
        </>
    );
}

export default ShowFoodData;
