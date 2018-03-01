// class Block defined to give attributes to blocks in game.
// Name is used to apply correct css class.  Size is used to check if a block move is valid
class Block {
  constructor (name, size) {
    this.name = name
    this.size = size
  }
}
// Variables to be used later in code.
var winValue
var activeBlock
var toColumn
var fromColumn
var totalMoves = 0
const counter = document.querySelector('.counter')
const column1div = document.querySelector('#columnone')
const column2div = document.querySelector('#columntwo')
const column3div = document.querySelector('#columnthree')
const instruction = document.querySelector('.instruction')
const invalidMove = "You can't put that block there.  Please try again!"
const selectBlock = "Please select a block to move by clicking on it's present column..."
const move = 'Now select a column to move the block to...'
// Very cool how you update the instructions to guide the user along. Maybe change these names to be more like `moveInstruction`
const easy = document.querySelector('.easy')
const hard = document.querySelector('.hard')
// creates five new instances of Block class.  Hard Move = all five blocks, Easy Mode = blocks 1, 3, and 5
const block1 = new Block('block1', 1)
const block2 = new Block('block2', 2)
const block3 = new Block('block3', 3)
const block4 = new Block('block4', 4)
const block5 = new Block('block5', 5)
// class Column defined to identify the three containers where blocks can be placed.
// Element is the variable that identified the column seen by the user.
// Array contains the individual block objects that are currently found in that column.
class Column {
  constructor (name, element, array) {
    this.name = name
    this.element = element
    this.array = []
  }
  // After each move the contents of each column div are removed.
  // The loop then evaluates what blocks are in this column's array and adds them to user view.
  updateColumn () { // Great way to update the columns to keep your data separate from your views
    while (this.element.firstChild) {
      this.element.removeChild(this.element.firstChild)
    }
    for (let i = 0; i < this.array.length; i++) {
      var newBlock = document.createElement('div')
      this.element.appendChild(newBlock)
      newBlock.classList = ('block ' + this.array[i].name)
    }
  }
  // The user will click first on a column to select the top block to move.
  // If block to move has already been selected,
  // then this will allow to user to select a column to move the block to.
  listeners () { // Solid method - does a lot with just a few lines
    this.element.addEventListener('click', () => {
      if (!activeBlock) {
        activeBlock = this.array[0]
        this.element.firstChild.setAttribute('id', 'active')
        instruction.innerText = move
        fromColumn = this
      } else {
        toColumn = this
        game.executeMove()
      }
    })
  }
}
// Three instances of class Column.
const column1 = new Column('one', column1div, [])
const column2 = new Column('two', column2div, [])
const column3 = new Column('three', column3div, [])
// The game object controls the flow of the game, checks the validity of moves,
// checks to see if the user won, and updates the arrays of columns 1, 2, and 3.
// Each time the user "moves" a block, the block object is removed from one column array
// and added to the new column array.  I used unshift to ensure the smallest blocks are always
// at the beginning of the array.
const game = {
  columnsArray: [column1, column2, column3],
  createGame () {
    totalMoves = 0
    document.querySelector('.gametype').innerHTML = ''
    instruction.innerText = selectBlock
    if (winValue === 5) {
      column1.array = [block1, block2, block3, block4, block5]
      column1.updateColumn()
      game.addListeners()
    } else if (winValue === 3) {
      column1.array = [block1, block3, block5]
      column1.updateColumn()
      game.addListeners() // You could move these two methods out of the if-else statement since they are applying to both cases either way
    }
  },
  checkWin () {
    if (column3div.childNodes.length === winValue) {
      alert('Congratulations! You won the game!') // Better user experience would be to update the page in some way instead of an alert
      document.querySelector('.gametype').innerHTML = '<a href="game.html" class="block"> <br>START NEW GAME!</a>'
    }
  },
  addListeners () {
    for (let i = 0; i < game.columnsArray.length; i++) {
      game.columnsArray[i].listeners()
    }
  },
  executeMove () {
    if (game.checkValid()) {
      toColumn.array.unshift(activeBlock)
      fromColumn.array.splice(0, 1)
      game.updateColumns()
      totalMoves += 1
      counter.innerHTML = 'Blocks Moved: ' + totalMoves
      if (!game.checkWin()) {
        instruction.innerText = selectBlock
        activeBlock = undefined // This should be set to null.  Null implies intentionally no value, undefined implies var is declared but does not yet have a value
      }
    } else {
      fromColumn.element.firstChild.setAttribute('id', 'invalid')
      // Small user interface issue here where the redness doesnt disappear until a user makes a valid move. This also means that you can end up with two red blocks on the screen which is a little confusing
      // Maybe each time a click is made you could take off the invalid class?
      instruction.innerText = invalidMove
      toColumn = undefined
      activeBlock = undefined
    }
  },
  updateColumns () {
    for (let i = 0; i < game.columnsArray.length; i++) {
      game.columnsArray[i].updateColumn()
    }
  },
  checkValid () {
    if (toColumn.array[0]) {
      if (activeBlock.size <= toColumn.array[0].size) {
        return true
      } else {
        return false
      }
    } else {
      return true
    }
  }
}
// Allows user to select Easy or Hard Mode on page load
easy.addEventListener('click', () => {
  winValue = 3
  game.createGame()
})
hard.addEventListener('click', () => {
  winValue = 5
  game.createGame()
})

// Great job on the javascript!
// You have a lot of really smart, efficient ways of manipulating the dom and keeping track of your data without too many lines of code.
// There is not a lot of DRYing that can really be done here, only one or two spots at the most.
// I like your comments a lot, though I would make them a little more concise.
// Your approach to OOP worked really well for this project
// Great job on the dom manipulation
// You kept your data separate from the views and didnt rely off reading from the dom
// Really excellent job!