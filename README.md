This project was completed during the Web Development Immersive at General Assembly.  Please read below for project description.

# Description

The game is inspired by Towers of Hanoi, a mathematical puzzle game wherein a play moves disks or rings from one vertical rod to another.  The rules the game allow a player to only move one disk at a time.  Additionally a player can not place a larger disk on top of a smaller disk.

In my Pyramids game, the concept is identical except the user is moving "levels" of the pyramid.  Only one may be moved at a time, and no larger level can be places on a smaller level.  The game guides users through gameplay with a simple set of instructions just above the playing area.  Additionally, the levels of the pyramid will change color to green when the player has selected the block to move, and to red if the move the player chose is not valid.  Additionally, a set of instructions is available on the landing page which players can read before starting a new game.

# Technologies Used

The game is composed of HTML, CSS, and Javascript.  The files can be found in this repository.  The Javascript is responsible for manipulating the DOM elements and "moving" blocks or levels of the pyramid between the three areas where they may be placed.  

## Javascript Explanation

The contents of each column are controlled in the array property.  At the start of the game, and after each move, the pyramid levels are deleted from the user view and then recreated based on the new arrays for each column.

# Additional Features to Add
- Timer
- Best Times Leaderboard
- Custom Difficulty Lever (User selects number of blocks)


