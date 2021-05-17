import { getAuthors, getCompletedLetters, getRecipients, getTopics } from "./dataAccess.js"



const findRecipientToLetter = (letterObject) => {

    const recipients = getRecipients()
    
    const foundRecipient = recipients.find((recipient) => {
        if(recipient.id === letterObject.recipientId) {
            return true
        }
    })

    return `Dear ${foundRecipient.name} (${foundRecipient.email}),`
}

const findAuthorToLetter = (letterObject) => {
    const authors = getAuthors()

    const foundAuthor = authors.find(author => author.id === letterObject.authorId)

    return `Sinerely, <br> ${foundAuthor.name} (${foundAuthor.email})`
}

const findLetterTopic = (letterObject) => {
    const topics = getTopics()

    const foundTopic = topics.find(topic => topic.id === letterObject.topicId)

    return `${foundTopic.topic}`
}

export const CompletedLetters = () => {
    const letters = getCompletedLetters()
    
    

    let html = `

    ${letters.map((letter) => {
        return `
        <div class="finishedLetter">
            <h3>Letter #${letter.id}</h3>
            <ul class="finishedLetter__items">
                <li>${findRecipientToLetter(letter)}</li>
                <br>
                <li>${letter.letter}</li>
                <br>
                <li>${findAuthorToLetter(letter)}</li>
                <br>
                <li>${letter.date}</li>
                <li>${findLetterTopic(letter)}</li>
            </ul>
        </div>
        `
    }).join("")}
    `
    
    return html
}