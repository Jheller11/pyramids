class Block {
  constructor (name, size) {
    this.name = name
    this.size = size
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

class Column {
  constructor (name, element, array) {
    this.name = name
    this.element = element
    this.array = []
  }
  addBlock (activeBlock) {
    this.array.push(activeBlock)
  }
  removeBlock () {
    this.array.splice(0, 1)
  }
  updateColumn () {
    for (let i = 0; i < this.array.length; i++) {
      var newBlock = document.createElement('div')
      this.element.appendChild(newBlock)
      newBlock.classList = ('block ' + this.array[i].name)
    }
  }
  deletedivs () {
    while (this.element.firstChild) {
    this.element.removeChild()
  }
  }
  addListener () {
    this.element.addEventListener('click', function () {
      console.log('listeners added')
      fromColumn = this.name
      activeBlock = this.array[0]
      return this.name
    })
  }
}

const column1 = new Column('one', column1div, [])
const column2 = new Column('two', column2div, [])
const column3 = new Column('three', column3div, [])
column1.array = [block1, block2, block3, block4, block5]

const game = {
  columnsArray: [column1, column2, column3],
  checkWin () {
    if (column3div.childNodes.length === 5) {
      return true
    }
  },
  moveBlock () {
    for ( i = 0; i < game.columnsArray.length; i++) {
      game.columnsArray[i].addListener()
    }
  }
}

column1.updateColumn()
game.moveBlock()
