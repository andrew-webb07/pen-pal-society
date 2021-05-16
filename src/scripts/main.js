import { fetchAuthors, fetchCompletedLetters, fetchRecipients, fetchTopics } from "./dataAccess.js"
import { PenPalSociety } from "./PenPalSociety.js"


const container = document.querySelector("#container")

const render = () => {
    fetchCompletedLetters()
    .then(fetchAuthors())
    .then(fetchTopics())
    .then(fetchRecipients()
    .then(
            () => {
            container.innerHTML = PenPalSociety()
        }
    )
    )
}

render()

container.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)