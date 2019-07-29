export function getHouseholdFromStorage() {
    try {
        return JSON.parse(localStorage.getItem("householdStorage")) || [];
    } catch (error) {
        return [];
    }
}

export function setHouseholdtoStorage(newHousehold) {
    localStorage.setItem("HouseholdStorage", JSON.stringify(newHousehold));
}
