const storageAddress = "user_session_data"

export const addToSessionStorage = (data) => {
    sessionStorage.setItem(storageAddress, JSON.stringify(data))
}

export const readSessionStorage = () => {
    // If item does not exists it returns null
    const readStatus = sessionStorage.getItem(storageAddress)
    if (readStatus === null) {
        return null
    } else {
        return JSON.parse(readStatus)
    }
}