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

//Challenge 3____

const gameEvents = new Map([
  [17, "⚽ Goal"],
  [36, "Substitution"],
  [47, "⚽ Goal"],
  [61, "Substitution"],
  [64, "Yellow card"],
  [69, "Red Card"],
  [70, "Substitution"],
  [72, "Substitution"],
  [76, "⚽ Goal"],
  [80, "⚽ Goal"],
  [92, "Yellow card"],
]);

//1 array of events
const events = [...new Set(gameEvents.values())];
console.log(events);

//2. Deleting 64
gameEvents.delete(64);
console.log(gameEvents);

//3. printing avarage of events
const avarageOfEvents = function () {
  const length = gameEvents.size;
  console.log(length);
  const event = 90 / length;
  console.log(`An event happened, on average, every ${event} minutes`);
};
avarageOfEvents();
//optimize way of printing avarage of events
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

//4.
for (const [time, eve] of gameEvents) {
  const halfs = time > 45 && time < 90 ? "second half" : "first half";
  console.log(`[${halfs}] ${time}: ${eve}`);
}

// working with srtings

const airline = "Air india";
const plane = "B732";

console.log(airline[0]);
console.log(plane);
console.log(plane[3]);

//slice method

console.log(airline.slice(2));
console.log(airline.slice(2, 8));
console.log(plane.slice(-2));

const checkSeat = function (s) {
  // B and E are middle seat
  const seat = s.slice(-1);
  if (seat === "B" || seat === "E") {
    console.log("you got a middle seat.");
  } else {
    console.log("You are lucky");
  }
};

checkSeat("45B");
checkSeat("4E");
checkSeat("45D");
checkSeat("4C");

// upper case & lower Case
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());
//
console.log(airline.startsWith("Air"));
console.log(airline.endsWith("india"));

// replacing string..
const boarding = "Boarding stars for flight E398, you have to board door no 4";
console.log(boarding.replace("door", "gate"));
const price = "155.4$";
console.log(price.replace("$", "₹"));
//
const passangerName = (str) => {
  const lower = str.toLowerCase();
  console.log(lower);
  const correct = lower[0].toUpperCase() + lower.slice(1);
  console.log(correct);
};
passangerName("aNkit");
passangerName("RoHit");
