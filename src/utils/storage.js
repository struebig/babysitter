export function getHouseholdFromStorage() {
    try {
        return JSON.parse(localStorage.getItem("householdStorage")) || {};
    } catch (error) {
        return {};
    }
}

export function setHouseholdtoStorage(household) {
    localStorage.setItem("householdStorage", JSON.stringify(household));
}
