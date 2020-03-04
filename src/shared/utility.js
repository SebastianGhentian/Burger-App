export const updateObject = (oldObject, updatedPorperties) => {
    return {
        ...oldObject,
        ...updatedPorperties
    }
}