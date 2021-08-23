function test(pokeArray, divtoAppendonDom, valueforImg) {
  //selecting a game from the array
  let gameItem = pokeArray[Math.floor(Math.random() * pokeArray.length)];
  console.log(gameItem.name);
  //makinga div and adding a class to it
  let newgameDiv = document.createElement("div");
  newgameDiv.classList.add("GameContainer");
  //addding an image element in the div
  let newgameImg = document.createElement("img");
  //apply styles to the new game image
  applyStyles(newgameImg, newgameDiv, gameItem);
  //grabbing the game title to display on the screen
  let newgameTitle = document.getElementById("gameTitle");
  newgameTitle.innerHTML = gameItem.name;
  //appending it all to the dom
  divtoAppendonDom.appendChild(newgameDiv);
}

function createInitalDiv() {}

function applyStyles(ImgToApplyStyles, divToAppend, itemInArray) {
  let divToShow = document.getElementsByClassName("DisplayNone")[0];
  ImgToApplyStyles.setAttribute("id", `gameDiv ${itemInArray.name}`);
  ImgToApplyStyles.classList.add("GameImageClass");
  ImgToApplyStyles.src = `${itemInArray.src}`;

  divToAppend.appendChild(ImgToApplyStyles);
}

export { test };
