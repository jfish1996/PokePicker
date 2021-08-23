import { test } from "./functions.js";

let pokemonGamesArray = [
  { name: "Red", src: "./assets/Red.png" },
  { name: "Blue", src: "./assets/Blue.png" },
  { name: "Yellow", src: "./assets/Yellow.jpeg" },
  { name: "Gold", src: "./assets/Gold.png" },
  { name: "Silver", src: "./assets/Silver.png" },
  { name: "Crystal", src: "./assets/Crystal.png" },
  { name: "Ruby", src: "./assets/Ruby.png" },
  { name: "Sapphire", src: "./assets/Sapphire.png" },
  { name: "Emerald", src: "./assets/Emerald.jpeg" },
  { name: "Fire Red", src: "./assets/FireRed.png" },
  { name: "Leaf Green", src: "./assets/LeafGreen.png" },
  { name: "Diamond", src: "./assets/Diamond.jpeg" },
  { name: "Pearl", src: "./assets/Pearl.jpeg" },
  { name: "Platnium", src: "./assets/Plat.png" },
];
let gameImg = document.getElementsByClassName("game-img")[0];

let mainButton = document.getElementById("button");
let divToShow = document.getElementsByClassName("DisplayNone")[0];

mainButton.addEventListener("click", function () {
  if (divToShow.classList.value !== "Container-2") {
    divToShow.classList.remove("DisplayNone");
    divToShow.classList.add("Container-2");
    test(pokemonGamesArray, gameImg, true);
  } else {
    test(pokemonGamesArray, gameImg, false);
  }
});
