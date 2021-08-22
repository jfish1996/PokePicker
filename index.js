import { test } from "./functions.js";

let pokemonGamesArray = [
  { name: "red", src: "./assets/Red.png" },
  { name: "blue", src: "./assets/Blue.png" },
  { name: "yellow", src: "./assets/Yellow.jpeg" },
  //   "gold",
  //   "silver",
  //   "crystal",
  //   "ruby",
  //   "sapphire",
  //   "emerald",
  //   "fire red",
  //   "leaf green",
  //   "diamond",
  //   "pearl",
  //   "platnium",
  //   "HG",
  //   "SS",
  //   "black",
  //   "white",
  //   "black 2",
  //   "while 2",
  //   "x",
  //   "y",
  //   "sun",
  //   "moon",
];
let gameImg = document.getElementsByClassName("game-img")[0];

test(pokemonGamesArray, gameImg);
