


final checklist:
- hosted on github pages

Game Design:

The game is designed based on classes for the "blocks" and "columns".  There are three instances of "Column" and five instances of "Block".  Additionally, there is a "Game" object which controls most of the functionality of the game and calls the methods of the columns objects.  

Each column object contains an array of blocks which are presently stacked in that column.  At the creation of the game, the blocks are all added to the array of column 1, the left side column.  Each column is given an event listener which will return the column object as variables "toColumn" or "fromColumn".  If there is no "fromColumn", the selected column will become the "fromColumn" and the 1st item of that column's array is set as the "activeBlock", or block to be moved.  Once a "fromColumn" is established, the user can select a "toColumn".  Next, the game.executeMove() function will remove the "activeBlock" from the array of the "fromColumn" and insert it at index 0 of the "toColumn"'s array.  Following that change, the "fromColumn", "toColumn", and "activeBlock" variables are all reset to undefined.  Additionally, at this time, the move is checked for validity(to ensure that no larger block is placed on top of a smaller block), and the win condition is checked(whether or not column 3, or the right side column, includes all five blocks).  If the win condition is satisfied, the user is alerted.

The user's view is completely rebuilt after each move based on the new contents of each column's array.  First, all divs that were created to represent the blocks are deleted.  Then, each column loops through its own array creating and appending new divs to represent its contained blocks.  The block class is defined as "block" + the block.name, which allows for correct sizing based on specific class.  



