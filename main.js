// js test
console.log('js working')

const column1div = document.querySelector('#columnone')
const column2div = document.querySelector('#columntwo')
const column3div = document.querySelector('#columnthree')
//
class Column {
  constructor (name) {
    this.name = name
  }

  addBlock () {
    let currentColumn = (this.name + 'div')
    console.log(currentColumn)
    currentColumn.appendChild(block1div)
    console.log('addBlock method working')
  }

    // move block function - moving blocks between columns
  moveBlock () {
    let blockname = block1div
    let target = parseInt(prompt('What column would you like to move to block to?'))
    if (target === 1) {
      column1div.appendChild(blockname)
    } else if (target === 2) {
      column2div.appendChild(blockname)
    } else if (target === 3) {
      column3div.appendChild(blockname)
    }
    console.log('move function working')
  }
}
const column1 = new Column('column1')
const column2 = new Column('column2')
const column3 = new Column('column3')


class Block {
  constructor (name, position, size) {
    this.name = name
    this.position = position
    this.size = size
  }
}
const block1 = new Block('block1', 1, 1)
const block2 = new Block('block2', 1, 2)
const block3 = new Block('block3', 1, 3)
const block4 = new Block('block4', 1, 4)
const block5 = new Block('block5', 1, 5)

const blockArray = [block1, block2, block3, block4, block5]

// checked - successfully creates 5 new divs
function createGame () {
  for (i = 0; i < blockArray.length; i++) {
    var newBlock = document.createElement('div')
    column1div.appendChild(newBlock)
    newBlock.classList = ('block ' + blockArray[i].name)
  }
  console.log('createGame working')
}
createGame()

const block1div = document.querySelector('.block1')
const block2div = document.querySelector('.block2')
const block3div = document.querySelector('.block3')
const block4div = document.querySelector('.block4')
const block5div = document.querySelector('.block5')

addListeners()

function addListeners () {
  column1div.addEventListener('click', column1.moveBlock)
  column2div.addEventListener('click', column2.moveBlock)
  column3div.addEventListener('click', column3.moveBlock)
  console.log('listeners added')
}

// functions for sorting blocks after each move

// win condition function to be called at end of  moveBlock
function checkWin () {
  if (column3.childNodes.length === 5) {
    alert('you won')
  }
}
