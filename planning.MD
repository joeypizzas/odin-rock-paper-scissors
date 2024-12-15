# Planning and pseudocode 
## Planning
### Does the program have a user interace? 
- The game is supposed to be played entirely via the console.  
- However, the instructions also say we're going to get the human choice via the prompt method? Something to come back to. 
### What inputs will the program have and where do they come from? 
- Computer choice. Randomized via a function. 
- Human choice. Comes from prompt method. 
- Player score. Comes from results of rounds. 
- Game winner. Comes from leader after 5 rounds of the game. 
### What's the desired output? 
- Score of individual rounds and ultimately winner of the game. 
### What are steps to achieve output?
1. Randomize the computer choice for a round. 
2. Get the human choice for a round. 
3. Compare the two choices. 
    - If player enters paper and computer rock, then tell them they won the round and increment their score. 
    - If player enters scissors and computer paper, then tell the player they won the round and increment their score. 
    - If player enters rock and computer scissors, then tell the player they won the round and increment their score. 
    - If player enters rock and computer computer, then tell them they lost the round and increment the computer's score. 
    - If player enters paper and computer scissors, then tell the player they lost the round and increment the computer's score. 
    - If player enters scissors and computer rock, then tell the player they lost the round and increment the computer's score.
    - If both players enter rock, tell them it's a draw and increment neither's score. 
    - If both players enter paper, tell them it's a draw and increment neither's score. 
    - If both players enter scissors, tell them it's a draw and increment neither's score. 
4. Repeat step 4 four more times with new choices from both computer and human.
5. Declare a winner. 
    - If the human's score >= 3, then declare them the winner. 
    - else, declare the computer the winner. 