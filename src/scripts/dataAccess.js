const applicationState = {
    authors: [],
    recipients: [],
    topics: [],
    completedLetters: []
}

const API = "http://localhost:8088"

export const fetchAuthors = () => {
    return fetch(`${API}/authors`)
}