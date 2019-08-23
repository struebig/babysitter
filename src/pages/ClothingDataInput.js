import React from "react";
import styled from "styled-components";
import Grid from "../components/Grid";
import WeatherCardInput from "../components/WeatherCardInput";
import ShowWeatherCard from "../components/WeatherCardOutput";
import AddSection from "../components/AddSectionForm";
import HeaderForm from "../components/HeaderForm";
import CardOutputFooter from "../components/CardOutputFooter";
import StyledCardOutput from "../components/StyledCardOutput";
/*
Local Storage:
import { getHouseholdFromStorage, setHouseholdtoStorage} from "../utils/storage";
Backend:*/
import { getCards, putCard, postCard } from "../utils/services";
//-------

const StyledForm = styled.form``;

const GridBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: baseline;
    overflow: auto;
`;

function AddClothingData({ history }) {
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

    const [selectedId, setSelectedId] = React.useState(null);

    const [renderAddWeatherCard, setRenderAddWeatherCard] = React.useState(
        false
    );

    function handleChange(event) {
        setHousehold({
            ...household.clothing,
            [event.target.name]: event.target.value
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        /*
        Local Storage:
       setHouseholdtoStorage(household);
       */

        // Backend
        if (household._id) {
            putCard(household, household._id);
        } else {
            postCard(household);
        }
        // --------
        history.replace("/familyMenu");
    }
    function handleCancel() {
        history.push("/familyMenu");
    }

    function showAddWeatherCard() {
        setRenderAddWeatherCard(true);
    }
    function hideAddWeatherCard() {
        setRenderAddWeatherCard(false);
    }

    function handleDelete(id) {
        setHousehold({
            ...household,
            clothing: household.clothing.filter(card => card.id !== id)
        });
    }
    return (
        <Grid type="form">
            <HeaderForm
                submit="submit"
                handleSubmit={handleSubmit}
                button="button"
                handleCancel={handleCancel}
            />
            <AddSection
                onClick={showAddWeatherCard}
                titleSection="Clothing"
                titleHeadline="Add information"
            />
            <GridBody>
                <StyledForm>
                    {renderAddWeatherCard && (
                        <WeatherCardInput
                            defaultValues={
                                household.clothing &&
                                household.clothing.find(
                                    item => item.id === selectedId
                                )
                            }
                            household={household}
                            setHousehold={setHousehold}
                            onChange={handleChange}
                            onClose={hideAddWeatherCard}
                        />
                    )}
                    {household.clothing &&
                        household.clothing.map(clothes => (
                            <StyledCardOutput>
                                <ShowWeatherCard
                                    key={clothes.id}
                                    category={clothes.category}
                                    temperatur={clothes.temperatur}
                                    degree={clothes.degree}
                                    description={clothes.description}
                                    assigned={clothes.assigned}
                                    household={household}
                                />

                                <CardOutputFooter
                                    onEditClick={() => {
                                        setSelectedId(clothes.id);
                                        setRenderAddWeatherCard(true);
                                    }}
                                    onDeleteClick={() =>
                                        handleDelete(clothes.id)
                                    }
                                />
                            </StyledCardOutput>
                        ))}
                </StyledForm>
            </GridBody>
        </Grid>
    );
}

export default AddClothingData;
