This project was completed during the Web Development Immersive at General Assembly.  Please read below for project description.
<!-- Dont really need this top part -->
<!-- First heading should be name of project, the rest probably h2s (##) -->
# Description

The game is inspired by Towers of Hanoi, a mathematical puzzle game wherein a player moves disks or rings from one vertical rod to another.  The rules the game allow a player to only move one disk at a time.  Additionally a player can not place a larger disk on top of a smaller disk.

In my Pyramid game, the concept is identical except the user is moving "levels" of the pyramid.  Only one may be moved at a time, and no larger level can be places on a smaller level.  The game guides users through gameplay with a simple set of instructions just above the playing area.  Additionally, the levels of the pyramid will change color to green when the player has selected the block to move, and to red if the move the player chose is not valid.  Additionally, a set of instructions is available on the landing page which players can read before starting a new game.

# Technologies Used

The game is composed of HTML, CSS, and Javascript.  The files can be found in this repository.  The Javascript is responsible for manipulating the DOM elements and "moving" blocks or levels of the pyramid between the three areas where they may be placed.  
<!-- This section could be shorter. Even just bullet points of the languages is fine -->
## Javascript Explanation

The contents of a columns array always dictate what will be displayed to the user. During each "move" the column the user first selects is stored as the "fromColumn".  Additionally, the first item in the array for the "fromColumn" is stored as the "activeBlock" and the first child of the "fromColumn" in the user view will have an ID "active" added to change the color.  Next, the user will select a "toColumn", or column that the activeBlock should be moved to.  The checkValid function will confirm that the user is not trying to make an illegal move based on the block sizes.  If the move is valid, the "activeBlock" is removed from the "fromColumn" array and added to the "toColumn" array. Then after each move, the pyramid levels are deleted from the user view and recreated based on the blocks present in the arrays for each column. This is done in the updateColumns (under game object) and updateColumn (method under Column class) functions.

# Additional Features to Add
- Timer
- Best Times Leaderboard
- Custom Difficulty Lever (User selects number of blocks)

<!-- Great job with the README. Good thorough overview of your thought process -->
<!-- You could also add in a link to the deployed project, and a section of outside resources: fonts, images, etc -->
<!-- Checkout this link for more ideas https://gist.github.com/PurpleBooth/109311bb0361f32d87a2 (You dont have to include everything) -->