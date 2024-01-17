"use strict";

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//creating player array for each team..
const [players1, players2] = [...game.players];
console.log(players1, players2);

//The first player in the array is a goalkeeper and others are field players.

const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// allPlayers in one array
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//final array of players of team1
const finalPlayers = ["Thiago", "Coutinho", "Perisic", ...players1];
console.log(finalPlayers);

//creating one variable for odds
const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

//Print Goal function..

const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
};

printGoals("davies", "muller", "lewandowski", "kimmich");
printGoals("davies", "muller");

team1 < team2 && console.log("Team1 is more likely to win..");
team1 > team2 && console.log("Team2 is more likely to win..");