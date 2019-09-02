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
import ShowMedicalCard from "../components/MedicalCardOutput";
import StyledCardOutput from "../components/StyledCardOutput";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    padding-top: 20px;
`;

function ShowMedicalData({ history }) {
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
                    title="Medical Data"
                    button="button"
                    direction="babysitterMenu"
                    history={history}
                />
                <Container>
                    {household.medicalConditions &&
                        household.medicalConditions.map(medicalCondition => (
                            <StyledCardOutput key={medicalCondition.id}>
                                <ShowMedicalCard
                                    category={medicalCondition.category}
                                    title={medicalCondition.title}
                                    description={medicalCondition.description}
                                    assigned={medicalCondition.assigned}
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

export default ShowMedicalData;
