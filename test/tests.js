const { expect } = chai

const screen=document.getElementById("screen")
const operators=document.getElementById("operators")
const numbers=document.getElementsByClassName("number")

const solve=document.getElementById("equals")
const clear=document.getElementById("clear")

function getScreen(){
  return screen.innerText
}

function clearScreen(){
  screen.innerText=""
}

function updateScreen(char){
  screen.innerText += char
}



describe("Tests are working", () => {
  it("it's on", () => {
    expect(true).to.equal(true)
  })
})


describe("Screen Tests", () => {
  it("sets the screen to 1", () => {
    clearScreen()
    updateScreen('1')
    expect(getScreen()).to.equal('1')
  })

  it("appends when setting the screen to 11", () => {
    clearScreen()
    updateScreen('1')
    updateScreen('1')

    expect(getScreen()).to.equal('11')
  })

  it("sets clears the screen", () => {
    updateScreen('1')
    clearScreen()
    expect(getScreen()).to.equal('')
  })
})

describe("1+1 is 2", () => {
  it("sets the screen to 1 + 1", () => {
    clearScreen()
    updateScreen('1')
    updateScreen('+')
    updateScreen('1')
    expect(getScreen()).to.equal('1+1')
  })
})


describe("2*5 is 10", ()=>{
  it("sets the screen to 2 * 5", ()=>{
    clearScreen()
    updateScreen("2")
    updateScreen("*")
    updateScreen("5")
    expect(getScreen()).to.equal("2*5")
  })
})

describe("9 - 6 is 3", ()=>{
  it("sets the screen to 9 - 6", ()=>{
    clearScreen()
    updateScreen("9")
    updateScreen("-")
    updateScreen("6")
    expect(getScreen()).to.equal("9-6")
  })
})

describe("8 / 4 is 2", ()=>{
  it("sets the screen to 8 / 4", ()=>{
    clearScreen()
    updateScreen("8")
    updateScreen("/")
    updateScreen("4")
    expect(getScreen()).to.equal("8/4")
  })
})


describe("DOM tests", () => {

  it("cannot divide by zero", ()=>{
    clearScreen()
    updateScreen("3")
    updateScreen("/")
    updateScreen("0")
// screen.innerText[screen.innerText.length-1==="/"]
// && screen.innerText[screen.innerText.length===0]
    solve.click()
    expect(getScreen()).to.equal("error")
  })

  it("cannot contain multiple operators", () =>{
    clearScreen()
    let addButton = findButton("+")
    let divideButton = findButton("/")
    let subtractButton = findButton("-")
    let multiplyButton = findButton("*")
    updateScreen("3")
    updateScreen("*")
    updateScreen("/")
    solve.click()
    expect(getScreen()).to.equal("please end with #")
  })

  it("can calculate", () => {
    clearScreen()
    updateScreen("3")
    updateScreen("+")
    updateScreen("5")
    solve.click()
    expect(getScreen()).to.equal(eval(getScreen()).toFixed(2))
  })



  it("clears the screen", () => {
    clearScreen()
    updateScreen('1')
    // click clear button
    let clearButton = document.getElementById('clear')
    clearButton.click()

    expect(getScreen()).to.equal('')
  })

  it("clicking 1 + 1 sets screen to '1+1'", () => {
    clearScreen()
    // click clear button
    let oneButton = findButton('1')
    let plusButton = findButton('+')
    oneButton.click()
    plusButton.click()
    oneButton.click()

    expect(getScreen()).to.equal('1+1')
  })
})

function findButton(char) {
  let buttons = document.querySelectorAll('.buttons span')

   for (let button of buttons) {
     if (char === button.innerText) {
       return button
     }
   }
}
