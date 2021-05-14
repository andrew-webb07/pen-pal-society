import { getAuthors, getRecipients, getTopics } from "./dataAccess.js"


export const LetterForm = () => {

    const authors = getAuthors()
    const topics = getTopics()
    const recipients = getRecipients()

    return `
        <div class="field">
        <label>Authors</label>
        <select class="authors" id="authors">
        <option value="">Choose</option>
        ${authors.map((author) => {
            return `
            <option value="${author.id}">${author.name}</option>
            `
        }).join("")}
        </select>
        </div>

        <div class="field">
        <label>Letter</label>
        <input type="text" name="fieldLetter" class="input"/>
        </div>

        <div class="field topics">
        <label>Topics</label>
        <ul>
        ${topics.map((topic) => {
            return `<li>
            <input type="radio" name"topic" value="${topic.id}" /> ${topic.topic}
            </li>
            `
        }).join("")}
        </ul>
        </div>

        <div class="field">
        <label>Recipient</label>
        <select class="recipients" id="recipients">
        <option value="">Choose</option>
        ${recipients.map((recipient) => {
            return `
                <option value="${recipient.id}">${recipient.name}</option>
            `}).join("")}
        </select>
        </div>

        <button>Send Letter</button>

    `
}