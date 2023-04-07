import './style.css';
const cellsCount = 16
const field = document.querySelector('div.field')
function cell() {
    const element = document.createElement('div');
    element.classList.add('cell');
    return element
}

const cells = []
for(let i = 0; i < cellsCount;i++) {
    const newCell = cell()
    field.appendChild(newCell)
    cells.push(newCell)
}

let lastGoblin = 0

function* getRandom() {
    let number = Math.floor( Math.random() * cellsCount )
    yield number
    while(true) {
        let newNumber = Math.floor( Math.random() * (cellsCount - 1))
        console.log(`old: ${number} new: ${newNumber}`)
        newNumber = newNumber >= number ? newNumber + 1 : newNumber
        number = newNumber
        yield newNumber
    }
}


function winFunction() {alert('Вы победили!')}
const randomGenerator = getRandom()
setInterval(() => {
    const randomNumber = randomGenerator.next().value
    cells[lastGoblin].classList.remove('goblin')
    cells[randomNumber].classList.add('goblin')

    cells[lastGoblin].removeEventListener('click', winFunction)
    cells[randomNumber].addEventListener('click', winFunction)
    lastGoblin = randomNumber
}, 750)