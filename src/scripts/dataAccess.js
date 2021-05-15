const applicationState = {
    authors: [],
    recipients: [],
    topics: [],
    completedLetters: []
}

const API = "http://localhost:8088"

const container = document.querySelector("#container")

export const fetchAuthors = () => {
    return fetch(`${API}/authors`)
    .then(response => response.json())
    .then((authorsData) => {
        applicationState.authors = authorsData
    })
}

export const getAuthors = () => {
    return [...applicationState.authors]
}

export const fetchTopics = () => {
    return fetch(`${API}/topics`)
    .then(response => response.json())
    .then((topicsData) => {
        applicationState.topics = topicsData
    })
}

export const getTopics = () => {
    return [...applicationState.topics]
}

export const fetchRecipients = () => {
    return fetch(`${API}/recipients`)
    .then(respsonse => respsonse.json())
    .then((recipientsData) => {
        applicationState.recipients = recipientsData
    })
}

export const getRecipients = () => {
    return [...applicationState.recipients]
}

export const sendLetter = (userLetter) => {
    return fetch(`${API}/completedLetters`, {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(userLetter)
    })
    .then(response => response.json())
    .then(() => {
        container.dispatchEvent(new CustomEvent("stateChanged"))
    })
}