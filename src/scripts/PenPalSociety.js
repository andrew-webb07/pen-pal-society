import {LetterForm} from "./LetterForm.js"
import {CompletedLetters} from "./CompletedLetters.js"

export const PenPalSociety = () => {
    return `
        <h1>Pen Pal Society</h1>

        <section class="letterForm">
        ${LetterForm()}
        </section>

        <section class="finishedLetters">
        <h2>Letters</h2>
        ${CompletedLetters()}
        </section>
    `
}