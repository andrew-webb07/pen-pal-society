import { getAuthors, getRecipients, getTopics, sendLetter } from "./dataAccess.js"

const container = document.querySelector("#container")

// container.addEventListener("change", (event) => {
//     if (event.target.id === "authors") {
//       container.dispatchEvent(new CustomEvent("stateChanged"));
//     }
//   });

// container.addEventListener("change", (event) => {
//     if (event.target.name === "topic") {
//       container.dispatchEvent(new CustomEvent("stateChanged"));
//     }
//   });

//   container.addEventListener("change", (event) => {
//     if (event.target.id === "recipients") {
//       container.dispatchEvent(new CustomEvent("stateChanged"));
//     }
//   });

container.addEventListener("click", (clickEvent) => {
    if(clickEvent.target.id === "sendButton") {
    
        const userAuthorId = document.querySelector(".authors").value
        const letterField = document.querySelector("input[name='fieldLetter']").value
        const userTopicId = document.querySelector("input[type=radio]:checked").value
        const userRecipientId = document.querySelector(".recipients").value
        

        const letterToSendToAPI = {
            authorId : parseInt(userAuthorId),
            letter: letterField,
            topicId : parseInt(userTopicId),
            recipientId: parseInt(userRecipientId)
        }

        sendLetter(letterToSendToAPI)
    }
})


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
            <option class="author" value="${author.id}">${author.name}</option>
            `
        }).join("")}
        </select>
        </div>

        <div class="field">
        <label>Letter</label>
        <input type="text" name="fieldLetter" class="input"/>
        </div>

        <div class="field">
        <label>Topics</label>
        <ul class="topics">
        ${topics.map((topic) => {
            return `<li>
            <input type="radio" name="topic" value="${topic.id}" /> ${topic.topic}
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
                <option class="recipient" value="${recipient.id}">${recipient.name}</option>
            `}).join("")}
        </select>
        </div>

        <button id="sendButton">Send Letter</button>

    `
}