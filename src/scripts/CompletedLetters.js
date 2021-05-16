import { getCompletedLetters } from "./dataAccess.js"


export const CompletedLetters = () => {
    const letters = getCompletedLetters()

    let html = `

    ${letters.map((letter) => {
        return `
        <div class="finishedLetter">
            <h3>Letter #${letter.id}</h3>
            <ul>
                <li>${letter.letter}</li>
            </ul>
        </div>
        `
    }).join("")}
    `
    
    return html
}