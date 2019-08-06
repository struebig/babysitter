export function getChildrenFromStorage() {
    try {
        return JSON.parse(localStorage.getItem("childrenStorage")) || {};
    } catch (error) {
        return {};
    }
}

export function setChildrentoStorage(children) {
    localStorage.setItem("childrenStorage", JSON.stringify(children));
}
