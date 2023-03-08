# ❌ ⭕️ Tic Tac Toe

This is a web game for two players on one device, taking turns. You will have to use component state to keep track of whose turn it is and which squares have been marked by each player. This project will challenge your knowledge of React but should also be an exercise in creating good user experiences.

When creating a project it is important to think about organization of your code. It is best practice to separate and compartmentalize all the actions in your code. The square UI will be in its own component. App.js controls of all the data in state, renders the other components, and performs the game logic.

### 📚 User Stories

- As a user, I can see a three by three grid game board on the page. ✅
    - Branch: game-board
    - Iterate on square state variable to display square component for each element using .map
    - Use styling to set up grid
        - Set up a div for all boxes to be able to use flex box
- 
- As a user, I can click on a square to mark it. ✅
    - Branch: mark-away
    - create function called handleClick within square component
    - pass current value of iterated square into square props
    - add onClick to square which calls upon handleClick function
    - create function handleSquares to replace null value to X
    - handleClick takes in the index of handleSquares
    - and updates state setSquares
    - when user clicks on square, displays X to mark it
    
      
- As a user, my partner can click on a square after me and see their mark.
- create branch named : next-player
- as of current interation the "o"'s cannot be marked on the board
- we'll  set the first move to "x" by default. 
- Make another state and added to the handleSquare component 
- const [isPlayerOne, setIsPlayerOne] = useState (true);
- const [squares, setSquares] = useState(Array(9).fill(null))
- made another state to determine which player goes next and the game's state will be saved. 
- every time a player clicks isPlayerOne (a boolean) will flipped to determine which player goes next and the game state will  be saved.  We updated the app.js handleSquares function to flip the value of isPlayerOne. 
- Now as we click on different squares, they will alternate between x and o. 

- As a user, I can't click on a square that has already been marked."✅"
- create branch named : square-Taken
- update handleSquares function to add condition if updatedSquare [index] === null then output will render either x or o in the square.
- this function stops user from clicking on an square that has already been marked. 
- 
- 
- 
- As a user, when either my partner or I win the game (three squares in a row: horizontally, vertically, or diagonally) I can see a notice telling me which player won.
- create a branch named : find-Winner 
- - create a function theWinner that  holds an variable array called winCombos containing an multiple arrays of the winning combinations i.e. there is a winner if there is the same letter (i.e 'X' or 'O') in boxes 0, 1, and 2 (the first combination within the arrays). 
- create a new array with the same values as each winning combo. i.e. when i = 0 the new array of [a, b, c] is [0, 1, 2]
- // the if statement checks if the there are 3 of the same letters for the winning combos
  // i.e. for winning combo [0, 1, 2] it looks up the values in the squares array -> squares[0], squares[1], squares[2]
  // since we've set the array so that index 0, 1, 2 of squares is 'X' then the if statement should evaluate to true.
- 
- As a user, I can't continue playing the game after the game has been won.
- 
- 
- As a user, if there are no more squares available, I can see a notice telling me that the game has ended.
- 
- 
- As a user, I can click on a restart button that will clear the game board.

### 🏔 Stretch Goals

- As a user, I can see a pleasant stylings on the application.
- As a user, I can see a notification that informs me whether it is currently my partner or my turn.
- As a user, I can choose my marker from a predetermined list (X, O, a color, an emoji, etc...).

### 👩‍💻 Developer Stretch Goals

- As a developer, I have a well commented application.
- As a developer, I have well written README file with instructions on how to access my repository.
- As a developer, my variables are all named semantically.
- As a developer, I have refactored and efficient code.
- As a developer, I have my application [deployed as a live website](https://render.com/docs/deploy-create-react-app).

### 🛠 Resources

- [Tic Tac Toe](https://en.wikipedia.org/wiki/Tic-tac-toe)
- [Tic Tac Toe win condition in React](https://forum.freecodecamp.org/t/need-help-understanding-react-tic-tac-toe-winner-function/137840)
