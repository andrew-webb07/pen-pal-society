import { fetchAuthors, fetchRecipients, fetchTopics } from "./dataAccess.js"
import { PenPalSociety } from "./PenPalSociety.js"


const container = document.querySelector("#container")

const render = () => {
    fetchAuthors()
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