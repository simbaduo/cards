const deck = []
const suits = ['Spades', 'Diamonds', 'Clubs', 'Hearts']
const values = [
  'A',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  'J',
  'Q',
  'K'
]
let temp
let randomNum
const main = () => {
  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < values.length; j++) {
      let temp = values[j] + ' of ' + suits[i]
      deck.push(temp)
    }
  }
  for (let z = 0; z < deck.length; z++) {
    randomNum = Math.floor(Math.random() * z)

    const holder = deck[randomNum]
    deck[randomNum] = deck[z]
    deck[z] = holder
  }
}
const dealCard = () => {
  document.querySelector('.card-display').textContent = deck.pop()
}
document.addEventListener('DOMContentLoaded', main)
document.querySelector('.select-card').addEventListener('click', dealCard)
