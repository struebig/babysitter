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
import ShowWeatherCard from "../components/WeatherCardOutput";
import StyledCardOutput from "../components/StyledCardOutput";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    margin-top: 20px;
`;

function ShowClothingData({ history }) {
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
                    title="Clothing"
                    button="button"
                    direction="babysitterMenu"
                    history={history}
                />
                <Container>
                    {household.clothing &&
                        household.clothing.map(clothes => (
                            <StyledCardOutput>
                                <ShowWeatherCard
                                    category={clothes.category}
                                    temperatur={clothes.temperatur}
                                    degree={clothes.degree}
                                    description={clothes.description}
                                    assigned={clothes.assigned}
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

export default ShowClothingData;
