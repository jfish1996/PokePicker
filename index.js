import { test } from "./functions.js";

let pokemonGamesArray = ["red", "blue", "yellow"];
let gameImg = document.getElementsByClassName("game-img")[0];
console.log(gameImg);

test(pokemonGamesArray, gameImg);
