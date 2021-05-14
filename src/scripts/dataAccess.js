const applicationState = {
    authors: [],
    recipients: [],
    topics: [],
    completedLetters: []
}

const API = "http://localhost:8088"

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