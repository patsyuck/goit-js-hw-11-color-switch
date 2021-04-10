import { colors } from './colors.js'

let timerId
const bodyNode = document.querySelector('body')
const startButton = document.querySelector('button[data-action="start"]')
const stopButton = document.querySelector('button[data-action="stop"]')

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const switcher = () => {
    startButton.setAttribute("disabled", "")
    timerId = setInterval(() => {
        bodyNode.setAttribute('style', `background-color: 
        ${colors[randomIntegerFromInterval(0, colors.length - 1)]}`)
    }, 1000, colors)
}

const stopper = () => {
    clearInterval(timerId)
    startButton.removeAttribute("disabled")
}

startButton.addEventListener("click", switcher)
stopButton.addEventListener("click", stopper)