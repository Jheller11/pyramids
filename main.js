class Block {
  constructor (name, size) {
    this.name = name
    this.size = size
  }
}
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
const easy = document.querySelector('.easy')
const hard = document.querySelector('.hard')
const block1 = new Block('block1', 1)
const block2 = new Block('block2', 2)
const block3 = new Block('block3', 3)
const block4 = new Block('block4', 4)
const block5 = new Block('block5', 5)

class Column {
  constructor (name, element, array) {
    this.name = name
    this.element = element
    this.array = []
  }
  updateColumn () {
    while (this.element.firstChild) {
      this.element.removeChild(this.element.firstChild)
    }
    for (let i = 0; i < this.array.length; i++) {
      var newBlock = document.createElement('div')
      this.element.appendChild(newBlock)
      newBlock.classList = ('block ' + this.array[i].name)
    }
  }
  listeners () {
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

const column1 = new Column('one', column1div, [])
const column2 = new Column('two', column2div, [])
const column3 = new Column('three', column3div, [])

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
      game.addListeners()
    }
  },
  checkWin () {
    if (column3div.childNodes.length === winValue) {
      alert('Congratulations! You won the game!')
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
        activeBlock = undefined
      }
    } else {
      fromColumn.element.firstChild.setAttribute('id', 'invalid')
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

easy.addEventListener('click', () => {
  winValue = 3
  game.createGame()
})
hard.addEventListener('click', () => {
  winValue = 5
  game.createGame()
})
