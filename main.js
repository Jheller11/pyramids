//js test
console.log('js working')
console.log(document.querySelector('#columnone'))
//createGame function - called on page load

//class Block to create 5 levels of pyramid
class Block {
    constructor(size, position) {
        this.size = size,
        position = 1
    }

    //add moveBlock function as method for new objects
}

// checked - successfully creates 5 new divs
function createGame () {
    let blockArray = ["top", "second", "third", "fourth", "bottom"]
    for (i = 0; i < blockArray.length; i++ ) {
    var newBlock = document.createElement('div')
    const block1 = new Block(size = i, position = 1)
    let startColumn = document.querySelector('#columnone')
    startColumn.appendChild(newBlock)
    newBlock.classList = ("block " + blockArray[i])
    }
}
createGame()

//move block function - moving blocks between columns
function moveBlock () {
    console.log('moveBlock function working')
    //add check for win condition
}
moveBlock()

//win condition function to be called by moveBlock
