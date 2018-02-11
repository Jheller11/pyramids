// js test
console.log('js working')
//
const column1 = document.querySelector('#columnone')
const column2 = document.querySelector('#columntwo')
const column3 = document.querySelector('#columnthree')
const column1Array = []
const column2Array = []
const column3Array = []

class Block {
    constructor(name, position, size) {
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

//checked - successfully creates 5 new divs
function createGame () {
  for (i = 0; i < blockArray.length; i++) {
    var newBlock = document.createElement('div')
    column1.appendChild(newBlock)
    column1Array.push(newBlock)
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
  column1.addEventListener('click', moveBlock)
  column2.addEventListener('click', moveBlock)
  column3.addEventListener('click', moveBlock)
  console.log('listeners added')
}

// move block function - moving blocks between columns
function moveBlock (blockname, column) {
  if (column === 1) {
      column1.appendChild(blockname)
      column1Array.push(blockname)
    } else if (column === 2) {
      column2.appendChild(blockname)
      column2Array.push(blockname)
    } else if (column === 3) {
      column3.appendChild(blockname)
      column3Array.push(blockname)
    }
  console.log('move function working - this is where checkWin will go')
}

// functions for sorting blocks after each move

// win condition function to be called at end of  moveBlock
function checkWin () {
  if (column3.childNodes.length === 5) {
      alert('you won')
    }
}
