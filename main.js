class Block {
  constructor (name, size) {
    this.name = name
    this.size = size
  }
}
const block1 = new Block('block1', 1)
const block2 = new Block('block2', 2)
const block3 = new Block('block3', 3)
const block4 = new Block('block4', 4)
const block5 = new Block('block5', 5)

const game = {
  column1Array: [block1, block2, block3, block4, block5],
  column2Array: [],
  column3Array: []
}
var activeBlock = 'test'
var toColumn = 'test'
var fromColumn = 'test'
var totalMoves = -1
const counter = document.querySelector('.counter')
const column1div = document.querySelector('#columnone')
const column2div = document.querySelector('#columntwo')
const column3div = document.querySelector('#columnthree')
// starts the chain of functions to establish columns and block to move
function move () {
  fromListeners()
}
//the following two functions add listeners for establish *from*
// and *to* columns
function fromListeners () {
  column1div.addEventListener('click', column1)
  column2div.addEventListener('click', column2)
  column3div.addEventListener('click', column3)
}
function toListeners () {
  column1div.addEventListener('click', tocolumn1)
  column2div.addEventListener('click', tocolumn2)
  column3div.addEventListener('click', tocolumn3)
}
//update Columns function calls the following four functions.  All divs in user view
//are deleted and then all columns are updated to reflect the block objects in their
//respoective arrays
function updateColumns () {
  totalMoves += 1
  counter.innerHTML = 'Total Moves: ' + totalMoves
  deletedivs()
  updateColumn1()
  updateColumn2()
  updateColumn3()
}
function updateColumn1 () {
  for (i = 0; i < game.column1Array.length; i++) {
    var newBlock = document.createElement('div')
    column1div.appendChild(newBlock)
    newBlock.classList = ('block ' + game.column1Array[i].name)
  }
}
function updateColumn2 () {
  for (i = 0; i < game.column2Array.length; i++) {
    var newBlock = document.createElement('div')
    column2div.appendChild(newBlock)
    newBlock.classList = ('block ' + game.column2Array[i].name)
  }
}
function updateColumn3 () {
  for (i = 0; i < game.column3Array.length; i++) {
    var newBlock = document.createElement('div')
    column3div.appendChild(newBlock)
    newBlock.classList = ('block ' + game.column3Array[i].name)
  }
}
function deletedivs () {
  while (column1div.firstChild) {
    column1div.removeChild(column1div.firstChild)
  }
  while (column2div.firstChild) {
    column2div.removeChild(column2div.firstChild)
  }
  while (column3div.firstChild) {
    column3div.removeChild(column3div.firstChild)
  }
}
// remove listeners after each move selection
function removeListeners () {
  column1div.removeEventListener('click', column1)
  column2div.removeEventListener('click', column2)
  column3div.removeEventListener('click', column3)
  column1div.removeEventListener('click', tocolumn1)
  column2div.removeEventListener('click', tocolumn2)
  column3div.removeEventListener('click', tocolumn3)
}
// the following three functions run when a column is clicked
//these establish the *from* column
function column1 () {
  if (game.column1Array[0]) {
    removeListeners()
    activeBlock = game.column1Array[0]
    fromColumn = game.column1Array
    toListeners()
  } else {
    move()
  }
}
function column2 () {
  if (game.column2Array[0]) {
    removeListeners()
    activeBlock = game.column2Array[0]
    fromColumn = game.column2Array
    toListeners()
  } else {
    move()
  }
}
function column3 () {
  if (game.column3Array[0]) {
    removeListeners()
    activeBlock = game.column3Array[0]
    fromColumn = game.column3Array
    toListeners()
  } else {
    move()
  }
}
// the following three functions run when a column is clocked
// these establish the *to* column
function tocolumn1 () {
  removeListeners()
  toColumn = game.column1Array
  pushToColumn()
}
function tocolumn2 () {
  removeListeners()
  toColumn = game.column2Array
  pushToColumn()
}
function tocolumn3 () {
  removeListeners()
  toColumn = game.column3Array
  pushToColumn()
}
//check validity of move
function checkWin () {
  if (column3div.childNodes.length === 5) {
    return true
  }
}
//moves the top block from *from* column to *to* column after check
// for validity of move
function pushToColumn () {
  if (toColumn[0]) {
    if (activeBlock.size < toColumn[0].size) {
      toColumn.unshift(activeBlock)
      fromColumn.splice(0, 1)
      updateColumns()
      if (checkWin() === true) {
        alert('You won')
      }
      move()
    } else {
      alert('Move not possible.  Please try again')
      move()
    }
  } else {
    toColumn.unshift(activeBlock)
    fromColumn.splice(0, 1)
    updateColumns()
    move()
  }
}
updateColumns()
move()