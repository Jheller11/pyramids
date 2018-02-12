class Block {
  constructor (name, size) {
    this.name = name
    this.size = size
  }
}
class Column {
  constructor (name, element, array) {
    this.name = name
    this.element = element
    this.array = []
  }
}

var activeBlock
var toColumn
var fromColumn
var totalMoves = -1
const counter = document.querySelector('.counter')
const column1div = document.querySelector('#columnone')
const column2div = document.querySelector('#columntwo')
const column3div = document.querySelector('#columnthree')

const block1 = new Block('block1', 1)
const block2 = new Block('block2', 2)
const block3 = new Block('block3', 3)
const block4 = new Block('block4', 4)
const block5 = new Block('block5', 5)
const column1 = new Column('one', column1div, [])
const column2 = new Column('two', column2div, [])
const column3 = new Column('three', column3div, [])
column1.array = [block1, block2, block3, block4, block5]

const game = {
  columnsArray: [column1, column2, column3],

  fromListeners () {
    for (i = 0; i < game.columnsArray.length; i++) {
      game.columnsArray[i].element.addEventListener('click', game.fromColumn)
    }
  },
  fromColumn () {
    if (game.columnsArray[i]) {
      game.removeListeners()
      activeBlock = columnsArray[i].array[0]
      fromColumn = columnsArray[i]
      game.toListeners()
    } else {
      game.startMove()
    }
  },
  toListeners () {
    for (i = 0; i < game.columnsArray.length; i++) {
      game.columnsArray[i].element.addEventListener('click', game.toColumn)
    }
  },
  toColumn () {
    game.removeListeners()
    toColumn = game.columnsArray[i]
    executeMove()
  },
  executeMove () {
    if (toColumn[0]) {
      if (activeBlock.size < toColumn[0].size) {
      toColumn.unshift(activeBlock)
      fromColumn.splice(0, 1)
      updateColumns()
      if (checkWin() === true) {
        alert('You won')
      }
      game.toListeners()
    } else {
      alert('Move not possible.  Please try again')
      game.toListeners()
    }
    } else {
      toColumn.unshift(activeBlock)
      fromColumn.splice(0, 1)
      game.updateColumns()
      game.toListeners()
    }
  },
  updateColumns () {
    this.deletedivs()
    totalMoves += 1
    counter.innerHTML = 'Total Moves: ' + totalMoves
    for (i = 0; i < this.columnsArray[i].array.length; i++) {
          console.log('updating')
          var newBlock = document.createElement('div')
          this.columnsArray[i].element.appendChild(newBlock)
          newBlock.classList = ('block ' + this.columnsArray[i].name)
        }
  },
  deletedivs () {
    for (i = 0; i < this.columnsArray.length; i++) {
      while (this.columnsArray[i].element.firstChild) {
          game.columnArray[i].element.removeChild()
        }
    }
  },
  checkWin () {
    if (column3div.childNodes.length === 5) {
      return true
    }
  }
}
