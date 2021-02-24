// container of everything in the html
const diceRoller = document.querySelector('.dice-roller')
// button to throw dices in the html
const rollDice = diceRoller.querySelector('.roll')
//array from all the dices of the html
const dice = Array.from(diceRoller.querySelectorAll('.dice'))
// array of arrays containing the sources for the different dices color
const diceNumbers =
[
    [
        'images/dice1.png',
        'images/dice2.png',
        'images/dice3.png',
        'images/dice4.png',
        'images/dice5.png',
        'images/dice6.png'
    ],
    [
        'images/dice1White.png',
        'images/dice2White.png',
        'images/dice3White.png',
        'images/dice4White.png',
        'images/dice5White.png',
        'images/dice6White.png'
    ],
    [
        'images/dice1Red.png',
        'images/dice2Red.png',
        'images/dice3Red.png',
        'images/dice4Red.png',
        'images/dice5Red.png',
        'images/dice6Red.png'
    ],
    [
        'images/dice1Purple.png',
        'images/dice2Purple.png',
        'images/dice3Purple.png',
        'images/dice4Purple.png',
        'images/dice5Purple.png',
        'images/dice6Purple.png'
    ]
]


// part where you choose the color in the html (colors container)

const diceColorChoices = diceRoller.querySelector('.colors-container')

// button for changing the color of the dices in the html
const colorOfDiceButtons =
[
    diceColorChoices.querySelector('.orange'),
    diceColorChoices.querySelector('.white'),
    diceColorChoices.querySelector('.red'),
    diceColorChoices.querySelector('.purple')
]

//variable that represents the choice of the colors
let diceSource = diceNumbers[0]
// possible names of the color chosen
const colorNames =
[
    '',
    'White',
    'Red',
    'Purple'
]


// callback function for when you click on the color  choices
for(let i=0;i<colorOfDiceButtons.length;i++)
{
    //
    colorOfDiceButtons[i].addEventListener('click',() =>
    {
        // the sources for the dice images switch to the right array
        diceSource = diceNumbers[i]
    })
}

// callback function for changing the color of the dices displayed instantly
for(let a=0;a<4;a++)
{
    colorOfDiceButtons[a].addEventListener('click',() =>
    {
        for(let i=0;i<dice.length;i++)
        {
            for(let f=1;f<7;f++)
            {
                if(dice[i].src.includes(f))
                {
                    dice[i].src = `images/dice${f}${colorNames[a]}.png`
                }
            }
        }
    })
}


// when you click on the thrower this callback function chooses a random source
// for every dices displayed
rollDice.addEventListener('click', () =>
{
    // for each dice displayed this select a random number source
    for(let i = 0; i<dice.length; i++)
    {
        dice[i].src = diceSource[Math.floor(Math.random()*diceSource.length)]
    }
})


// section of the script for choosing the number of dices displayed

//section of the html containing the dices
const diceContainer = diceRoller.querySelector('.dices-container')
// part of the html containing all the choices of number of dices displayed
const numberOfDices  = diceRoller.querySelector('.number-of-dices-container')

// buttons for choosing to show a number of dices in the html
const numberOfDicesChoices =
[
    numberOfDices.querySelector('.one-dice'),
    numberOfDices.querySelector('.two-dice'),
    numberOfDices.querySelector('.three-dice'),
    numberOfDices.querySelector('.four-dice'),
    numberOfDices.querySelector('.five-dice')
]

// variables representing the first dice in the html
const diceInHtml =
[
    diceRoller.querySelector('.dice1'),
    diceRoller.querySelector('.dice2'),
    diceRoller.querySelector('.dice3'),
    diceRoller.querySelector('.dice4'),
    diceRoller.querySelector('.dice5')
]

// variable for the number on the dices
let scoresDices =
[
    0,
    0,
    0,
    0,
    0
]



// style to display the first dice at the beginning
numberOfDicesChoices[0].classList.add('selected')

// callback function for having one dice displayed and the style on the button
numberOfDicesChoices[0].addEventListener('click', () =>
{
    // style to change background and color of the buttons to show wich one is selected
    numberOfDicesChoices[0].classList.add('selected')
    numberOfDicesChoices[1].classList.remove('selected')
    numberOfDicesChoices[2].classList.remove('selected')
    numberOfDicesChoices[3].classList.remove('selected')
    numberOfDicesChoices[4].classList.remove('selected')
    //style to display only one dice
    diceInHtml[0].style.display = 'block'
    diceInHtml[1].style.display = 'none'
    diceInHtml[2].style.display = 'none'
    diceInHtml[3].style.display = 'none'
    diceInHtml[4].style.display = 'none'

})

// callback function for having 2 dices displayed and the style on the button
numberOfDicesChoices[1].addEventListener('click', () =>
{
    // style to change background and color of the buttons to show wich one is selected
    numberOfDicesChoices[0].classList.remove('selected')
    numberOfDicesChoices[1].classList.add('selected')
    numberOfDicesChoices[2].classList.remove('selected')
    numberOfDicesChoices[3].classList.remove('selected')
    numberOfDicesChoices[4].classList.remove('selected')
    //style to display only 2 dices
    diceInHtml[1].style.display = 'block'
    diceInHtml[2].style.display = 'none'
    diceInHtml[3].style.display = 'none'
    diceInHtml[4].style.display = 'none'
})

// callback function for having 3 dices displayed and the style on the button
numberOfDicesChoices[2].addEventListener('click', () =>
{
    // style to change background and color of the buttons to show wich one is selected
    numberOfDicesChoices[0].classList.remove('selected')
    numberOfDicesChoices[1].classList.remove('selected')
    numberOfDicesChoices[2].classList.add('selected')
    numberOfDicesChoices[3].classList.remove('selected')
    numberOfDicesChoices[4].classList.remove('selected')
    //style to display only 3 dices
    diceInHtml[1].style.display = 'block'
    diceInHtml[2].style.display = 'block'
    diceInHtml[3].style.display = 'none'
    diceInHtml[4].style.display = 'none'

})

// callback function for having 4 dices displayed and the style on the button
numberOfDicesChoices[3].addEventListener('click', () =>
{
    // style to change background and color of the buttons to show wich one is selected
    numberOfDicesChoices[0].classList.remove('selected')
    numberOfDicesChoices[1].classList.remove('selected')
    numberOfDicesChoices[2].classList.remove('selected')
    numberOfDicesChoices[3].classList.add('selected')
    numberOfDicesChoices[4].classList.remove('selected')
    //style to display only 4 dices
    diceInHtml[1].style.display = 'block'
    diceInHtml[2].style.display = 'block'
    diceInHtml[3].style.display = 'block'
    diceInHtml[4].style.display = 'none'
})

// callback function for having 5 dices displayed and the style on the button
numberOfDicesChoices[4].addEventListener('click', () =>
{
    // style to change background and color of the buttons to show wich one is selected
    numberOfDicesChoices[0].classList.remove('selected')
    numberOfDicesChoices[1].classList.remove('selected')
    numberOfDicesChoices[2].classList.remove('selected')
    numberOfDicesChoices[3].classList.remove('selected')
    numberOfDicesChoices[4].classList.add('selected')
    //style to display 5 dices
    diceInHtml[1].style.display = 'block'
    diceInHtml[2].style.display = 'block'
    diceInHtml[3].style.display = 'block'
    diceInHtml[4].style.display = 'block'
})


// callback to find/display the score of the dices and find/display their history

rollDice.addEventListener('click', () =>
{
      // part for knowing the score of each dice
      for(let i=0; i<dice.length; i++)
      {
          for(let j=1;j<7;j++)
          {
              // if the source of the dice i has the number 'j' in it then the
              // score of the dice is j
              if(dice[i].src.includes(j))
              {
                  scoresDices[i] = j
              }
          }
      }


    // section of the script to display the history of the dices

    // part of the html where the history elements are displayed
    const historyList = diceRoller.querySelector('.history-list')
    // part of the html to display the overall score of the dices at the moment
    let scoreAll = diceRoller.querySelector('.score')
    // this variables creates a text element at the top of the history in HTML
    const historyElement = document.createElement('p')
    // the prepend function add the score at the beginning of the history container
    const displayElement = historyList.prepend(historyElement)

    // array of the history displayed depending on the number of dices displayed
    const historyOfDicesDisplayed =
    [
        scoresDices[0],
        `${scoresDices[0]}, ${scoresDices[1]}`,
        `${scoresDices[0]}, ${scoresDices[1]}, ${scoresDices[2]}`,
        `${scoresDices[0]}, ${scoresDices[1]}, ${scoresDices[2]}, ${scoresDices[3]}`,
        `${scoresDices[0]}, ${scoresDices[1]}, ${scoresDices[2]}, ${scoresDices[3]}, ${scoresDices[4]}`
    ]
    // array of the score displayed depending on the number of dices displayed
    const scoreOfDicesDisplayed =
    [
        scoresDices[0],
        scoresDices[0]+scoresDices[1],
        scoresDices[0]+scoresDices[1]+scoresDices[2],
        scoresDices[0]+scoresDices[1]+scoresDices[2]+scoresDices[3],
        scoresDices[0]+scoresDices[1]+scoresDices[2]+scoresDices[3]+scoresDices[4]
    ]


    // part to display the score & history of the dices displayed
    for(let i=0;i<5;i++)
    {
        // part to know wich dice is selected
        if(numberOfDicesChoices[i].classList.contains('selected'))
        {
            // this sets the text of the element to the score of the displayed dices
            historyElement.textContent = historyOfDicesDisplayed[i]
            displayElement
            // this sets the text of the score to the score of the dices displayed
            scoreAll.textContent = scoreOfDicesDisplayed[i]
        }
    }

})


//  part to show flashing colours and gifs when all the dices displayed are
//  the same

// variable to make the background colours flash
let flashingBackground
// function to stop the flashing background
const stopflashing = () =>
{
    clearInterval(flashingBackground)
    diceRoller.style.background = '#0311c0'
}
// all the gifs in the html
const awards =
[
    document.querySelector('.award-one'),
    document.querySelector('.award-two'),
    document.querySelector('.award-three'),
    document.querySelector('.award-four')
]

// callback function to show gifs and flashing colours when all the dices
// displayed are the same
rollDice.addEventListener('click',() =>
{
    clearInterval(flashingBackground)
    diceRoller.style.background = '#0311c0'
    if(numberOfDicesChoices[1].classList.contains('selected'))
    {
        if(scoresDices[0] === scoresDices[1])
        {
            flashingBackground =  window.setInterval(() =>
            {
            diceRoller.style.background = `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`
            }, 190)
            awards[0].style.display = 'block'
        }
        else
        {
            stopflashing
            awards[0].style.display = 'none'
        }

    }
    if(numberOfDicesChoices[2].classList.contains('selected'))
    {
        if(scoresDices[0] === scoresDices[1] && scoresDices[1] === scoresDices[2])
        {
            flashingBackground =  window.setInterval(() =>
            {
            diceRoller.style.background = `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`
            }, 190)
            awards[1].style.display ='block'
        }
        else
        {
            stopflashing
            awards[1].style.display ='none'
        }

    }
    if(numberOfDicesChoices[3].classList.contains('selected'))
    {
        if(scoresDices[0] === scoresDices[1] && scoresDices[1] === scoresDices[2] && scoresDices[2] === scoresDices[3])
        {
            flashingBackground =  window.setInterval(() =>
            {
            diceRoller.style.background = `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`
            }, 190)
            awards[2].style.display = 'block'
        }
        else
        {
            stopflashing
            awards[2].style.display = 'none'
        }

    }
    if(numberOfDicesChoices[4].classList.contains('selected'))
    {
        if(scoresDices[0] === scoresDices[1] && scoresDices[1] === scoresDices[2] && scoresDices[2] === scoresDices[3] && scoresDices[3] === scoresDices[4])
        {
            flashingBackground =  window.setInterval(() =>
            {
                diceRoller.style.background = `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`
            }, 190)
            awards[3].style.display ='block'
        }
        else
        {
            stopflashing
            awards[3].style.display ='none'
        }

    }

})
// loop and callback function to stop the display of flashing colors and gifs
// when the number of dices displayed choice is clicked
for(let i=0;i<5;i++)
{
    numberOfDicesChoices[i].addEventListener('click',() =>
    {
        clearInterval(flashingBackground)
        diceRoller.style.background = '#0311c0'
        awards[0].style.display = 'none'
        awards[1].style.display = 'none'
        awards[2].style.display = 'none'
        awards[3].style.display = 'none'
    })
}

///////////////////////////////////////////////////////////////////////////
// don't change the name of the file or the loop to change color instantly will
// set the dices to 3 i don't know why
