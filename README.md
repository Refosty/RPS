# Project: Rock Paper Scissors

## Introduction

For this project, you will create the game Rock Paper Scissors. This game will be played **entirely in the console**.

> **No GUI yet**
>
> Some of the student solutions contain buttons, text, and other elements. These elements are part of what is called a graphical user interface (GUI). You'll create the GUI in a later lesson. In the meantime, remember to commit your code to GitHub.

## Problem Solving Approach

Since this is the first JavaScript project being built from scratch, remember the wise words from the Problem Solving lesson. For each step in this project:

1. **Plan** or pseudocode your solution.
2. **Write** the code.
3. **Test** your code to make sure it works.

---

## Assignment

> **Focus on the task at hand**
>
> When making interactive projects like this one, you might be tempted to add more features, improve interactivity, user experience, design, and styling. We recommend **not** doing that, and saving this effort for your portfolio projects. For more information, read "Strategically building your portfolio" from "Becoming a TOP Success Story".

💡 **Remember to commit early and often!** To refresh your memory, check out the commit messages lesson.

---

### Step 1: Set up the project structure

- [ ] Create a new Git repository for your project.
- [ ] Create a blank HTML document with a `<script>` tag.
- [ ] Check if JavaScript is linked correctly:
  - Write `console.log("Hello World")` in JavaScript.
  - Check that "Hello World" is logged in the browser console when you open your webpage.

> It's best practice to link to an **external JavaScript file** inside the script tag. This keeps your HTML file clean and organized.
>
> You don't have to write any additional code in the HTML file. The game is played entirely via the console.

---

### Step 2: Write the logic to get the computer choice

Your game will be played against the computer. You will write a function that randomly returns `"rock"`, `"paper"`, or `"scissors"`.

- [ ] Create a new function named `getComputerChoice`.
- [ ] Make `getComputerChoice` randomly return one of these string values: `"rock"`, `"paper"`, or `"scissors"`.
- [ ] Test that your function returns what you expect using `console.log` or the browser developer tools before moving on.

> **Hint:** `Math.random()` returns a number that is greater than or equal to 0 and less than 1. Think about how you can use this to conditionally return one of the choices.
>
> **Note:** You might think arrays are necessary here, but they aren't. If you're unfamiliar with arrays, don't worry — they're covered later in the curriculum.

---

### Step 3: Write the logic to get the human choice

Your game will be played by a human player. You will write a function that takes the user's choice and returns it.

- [ ] Create a new function named `getHumanChoice`.
- [ ] Make `getHumanChoice` return one of the valid choices depending on what the user inputs.
- [ ] Test what your function returns using `console.log`.

> **Hint:** Use the `prompt()` method to get the user's input.
>
> You do **not** need to handle reprompting on invalid input — that requires things taught later. For now, assume the user always enters a valid choice.

---

### Step 4: Declare the player score variables

Your game will keep track of each player's score.

- [ ] Create two new variables named `humanScore` and `computerScore` in the **global scope**.
- [ ] Initialize both variables with the value `0`.

---

### Step 5: Write the logic to play a single round

Your game is played round by round. You will write a function that takes the human and computer choices as arguments, plays a single round, increments the winner's score, and logs a winner announcement.

- [ ] Create a new function named `playRound`.
- [ ] Define two parameters: `humanChoice` and `computerChoice`.
- [ ] Make the `humanChoice` parameter **case-insensitive**, so players can enter `"rock"`, `"ROCK"`, `"RocK"`, etc.
- [ ] `console.log` a string announcing the round winner, e.g. `"You lose! Paper beats Rock"`.
- [ ] Increment `humanScore` or `computerScore` based on the round winner.

**Example code:**

```javascript
function playRound(humanChoice, computerChoice) {
  // your code here!
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
```

---

### Step 6: Write the logic to play the entire game

Your game will play **5 rounds**. You will write a function named `playGame` that calls `playRound` 5 times, keeps track of the scores, and declares a winner at the end.

- [ ] Create a new function named `playGame`.
- [ ] Move your `playRound` function and score variables so they're declared **inside** `playGame`.
- [ ] Play 5 rounds by calling `playRound` 5 times.
- [ ] Declare a winner at the end.

> **Hint:** When you assign a function call to a variable, the function's *return value* is stored in that variable. Accessing the variable later only gives you that stored value — it doesn't call the function again. You need to **call the choice functions again** to get new choices each round.
>
> Feel free to rework your previous functions or create helper functions if needed. In particular, you may want to change return values to something more useful.
>
> If you already know about loops, you can use them. If not, no worries — loops are covered in the next lesson.