class Block {
  constructor (name, size) {
    this.name = name
    this.size = size
  }
}

var activeBlock
var toColumn
var fromColumn
var totalMoves = 0
const counter = document.querySelector('.counter')
const column1div = document.querySelector('#columnone')
const column2div = document.querySelector('#columntwo')
const column3div = document.querySelector('#columnthree')
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
  checkWin () {
    if (column3div.childNodes.length === 5) {
      alert('You won')
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
      game.checkWin()
      totalMoves += 1
      counter.innerHTML = 'Total Moves: ' + totalMoves
      activeBlock = undefined
    } else {
      alert('invalid move')
      fromColumn.element.firstChild.setAttribute('id', '')
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
column1.array = [block1, block2, block3, block4, block5]
column1.updateColumn()
game.addListeners()
