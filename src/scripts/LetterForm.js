

export const LetterForm = () => {
    return `
        <div class="field">
        <label>Authors</label>
        <select class="authors" id="authors">
        <option></option>
        </select>
        </div>

        <div class="field">
        <label>Letter</label>
        <input type="text" name="fieldLetter" class="input"/>
        </div>

        <div class="field">
        <label>Topics</label>
        </div>

        <div class="field">
        <label>Recipient</label>
        <select></select>
        </div>

        <button>Send Letter</button>

    `
}