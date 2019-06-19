# Memory-Game
To get started, open `js/app.js` and start building out the app's functionality

For specific, detailed instructions, look at the project instructions in the [Udacity Classroom](https://classroom.udacity.com/me).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

## For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).

## I followed the below steps to complete this game

### Cloning of the project.
- after reading and verifying the instructions, I got the GitHub link about the skeleton project which was provided by the "UDACITY" in rubric structure.
- After downloading the files from GitHub, I extracted all the files and observed the structure of the files.
1.`css/app.css`
2.`img/`
3.`js.app.jss`
4.`index.html`(root file)
5.`README.md`


## Modifications to the CODE ##
1. Added the code for refreshing the game.
2. I created a deck of cards that shuffles when game is refreshed.
3. Created a counter to count the number of moves  and timer to know the duration of play.
4. In this game, I have used `timeStatus` , `starRating` and `restart` methods.
5. Intially starCount=3,timeStatus=0.
6. First, when player starts the game the count of timeStatus and starRating is zero and after the game finishes total moves and time will  be displayed.
7. If two cards get matched, applied styles show matched........otherwise unmatched.
8. If cards don't match the cards are not be dispalyed until the card matches.
9. If player is matched below 13 moves means he/she will get 3 stars,if below 18 means 2 stars otherwise only 1 star.
10. if the player matches all the cards, then finally he will get the starRating and time.
