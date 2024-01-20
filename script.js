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

//1. printing each player name with goal.
const goals = game.scored;
for (let i = 0; i < goals.length; i++) {
  console.log(`Goal ${[i + 1]}: ${goals[i]}`);
}
for (const [i, player] of goals.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
}

//2. average of odds
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);

//3. Printing odds to the console
const obj = game.odds;
for (const [team, odd] of Object.entries(obj)) {
  const teamStr = team === "x" ? "draw" : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} : ${odd}`);
}

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

//Sets & Map
console.log("SET____________-------------");
//Set...

const team1Players = new Set([
  "Neuer",
  "Pavard",
  "Martinez",
  "Alaba",
  "Davies",
  "Kimmich",
  "Goretzka",
  "Pavard",
  "Martinez",
  "Alaba",
  "Davies",
  "Kimmich",
]);
console.log(team1Players);
console.log(team1Players.size); // length of set.
team1Players.add("Ankit");
team1Players.delete("Neuer");
console.log(team1Players);

const staff = ["waiter", "chief", "waiter", "manager", "waiter"];
console.log(staff);

const uniqeStaff = [...new Set(staff)]; // sets remove all the dublicate value from an array and create a unique set of array
console.log(uniqeStaff);

const name1 = "AnkitKumar"; // sets also itrates strings..
const itreateName = [...new Set(name1)];
console.log(itreateName);

// Map
console.log("_____________MAP_____________");
//

const rest = new Map();

rest.set("Name", "Ankit Kumar");
rest.set("Age", 21);
console.log(rest);

rest
  .set("friends", ["Nikhil", "rohit", "Rahul"])
  .set(true, "Singe")
  .set(false, "Marrid");

console.log(rest);

console.log(rest.has("friends"));
rest.delete(false);
console.log(rest);

//using arrays as a key

const arr = [1, 2];
rest.set(arr, "Test");
console.log(arr);
console.log(rest.size);
