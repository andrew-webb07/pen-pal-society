import { PenPalSociety } from "./PenPalSociety.js"


const container = document.querySelector("#container")

const render = () => {
    
    container.innerHTML = PenPalSociety()
}

render()