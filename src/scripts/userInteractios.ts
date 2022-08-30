import '../styles/userInteraction.scss'
import testHit from "./api";
import validateTextInput from "./validation";

const checkboxValues = [-2, -1.5, -1, -0.5, 0, 0.5, 1, 1.5, 2]
const radioValues = [1, 1.5, 2, 2.5, 3]
const textInput = document.querySelector('.form_input-text')
const radioSelect = document.querySelector(".form_radio-select")
const checkboxSelect = document.querySelector(".form_checkbox-select")
const submitBtn = document.querySelector('.form_btn')
let currentRadioValue: number
let currentCheckboxValue: number


const listOfRadioInputs = radioValues.map((value,index) => {

    const newRadioElement = document.createElement("input")

    newRadioElement.addEventListener('change', () => currentRadioValue = value)
    newRadioElement.setAttribute("value", String(value))
    newRadioElement.setAttribute("type", "radio")
    if (index===0) newRadioElement.click()

    return newRadioElement
})
const listOfCheckboxInputs = checkboxValues.map((value,index) => {
    const newCheckboxElement = document.createElement("input")
    newCheckboxElement.addEventListener('change', () => currentCheckboxValue = value)
    newCheckboxElement.setAttribute("value", String(value))
    newCheckboxElement.setAttribute("type", "checkbox")
    if (index===0) newCheckboxElement.click()

    return newCheckboxElement
})


const loadSelectElements = () => {

    listOfCheckboxInputs.forEach(checkbox => {
        checkboxSelect?.appendChild(checkbox)
        const checkboxText = document.createElement("span")
        checkboxText.innerText = checkbox.value
        checkboxSelect?.appendChild(checkboxText)
    })

    listOfRadioInputs.forEach(radio => {
        radioSelect?.appendChild(radio)
        const radiosText = document.createElement("span")
        radiosText.innerText = radio.value
        radioSelect?.appendChild(radiosText)
    })
}

export default function startApplication() {
    submitBtn?.addEventListener("click", (e) => {
        e.preventDefault()
        testHit(currentCheckboxValue, 2, currentRadioValue)
    })
    textInput?.addEventListener("input", (e) => validateTextInput(e))

    loadSelectElements()
}
