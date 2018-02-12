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

const game = {
  column1Array: [block1, block2, block3, block4, block5],
  column2Array: [],
  column3Array: []
}
var activeBlock = 'test'
var toColumn = 'test'
var fromColumn = 'test'

const column1div = document.querySelector('#columnone')
const column2div = document.querySelector('#columntwo')
const column3div = document.querySelector('#columnthree')

// checked - successfully creates 5 new divs
function createGame () {
  for (i = 0; i < game.column1Array.length; i++) {
    var newBlock = document.createElement('div')
    column1div.appendChild(newBlock)
    newBlock.classList = ('block ' + game.column1Array[i].name)
  }
  console.log('createGame working')
}
createGame()
move()

const block1div = document.querySelector('.block1')
const block2div = document.querySelector('.block2')
const block3div = document.querySelector('.block3')
const block4div = document.querySelector('.block4')
const block5div = document.querySelector('.block5')

function move () {
  fromListeners()
}

function fromListeners () {
  column1div.addEventListener('click', column1)
  column2div.addEventListener('click', column2)
  column3div.addEventListener('click', column3)
  console.log('from listeners added')
}

function toListeners () {
  column1div.addEventListener('click', tocolumn1)
  column2div.addEventListener('click', tocolumn2)
  column3div.addEventListener('click', tocolumn3)
  console.log('to listeners added')
}

// win condition function to be called at end of  moveBlock
function checkWin () {
  if (column3div.childNodes.length === 5) {
    return true
  }
}

function updateColumns () {
  deletedivs()
  updateColumn1()
  updateColumn2()
  updateColumn3()
  console.log('columns update')
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

function removeListeners () {
  column1div.removeEventListener('click', column1)
  column2div.removeEventListener('click', column2)
  column3div.removeEventListener('click', column3)
  column1div.removeEventListener('click', tocolumn1)
  column2div.removeEventListener('click', tocolumn2)
  column3div.removeEventListener('click', tocolumn3)
}

function column1 () {
  console.log('column1')
  removeListeners()
  activeBlock = game.column1Array[0]
  fromColumn = game.column1Array
  toListeners()
}
function column2 () {
  console.log('column2')
  removeListeners()
  activeBlock = game.column2Array[0]
  fromColumn = game.column2Array
  toListeners()
}
function column3 () {
  console.log('column3')
  removeListeners()
  activeBlock = game.column3Array[0]
  fromColumn = game.column3Array
  toListeners()
}
function tocolumn1 () {
  console.log('column1')
  removeListeners()
  toColumn = game.column1Array
  pushToColumn()
}
function tocolumn2 () {
  console.log('column2')
  removeListeners()
  toColumn = game.column2Array
  pushToColumn()
}
function tocolumn3 () {
  console.log('column2')
  removeListeners()
  toColumn = game.column3Array
  pushToColumn()
}
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
  alert('invalid move')
  move()
}
} else {
  toColumn.unshift(activeBlock)
  fromColumn.splice(0, 1)
  updateColumns()
  if (checkWin() === true) {
    alert('You won')
  }
  move()
}
}