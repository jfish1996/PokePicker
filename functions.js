function test(pokeArray, divtoAppend) {
  let item = pokeArray[Math.floor(Math.random() * pokeArray.length)];
  console.log(item.name);
  let newgameDiv = document.createElement("div");
  newgameDiv.classList.add("TestClass");
  let newgameImg = document.createElement("img");
  applyStyles(newgameImg, newgameDiv, item);
  divtoAppend.appendChild(newgameDiv);

  // for (let i = 0; i < pokeArray.length; i++) {
  //   let newgameDiv = document.createElement("div");
  //   newgameDiv.setAttribute("id", `gameDiv ${i}`);
  //   divtoAppend.appendChild(newgameDiv);
  // }
}

function applyStyles(divToApplyStyles, divToAppend, itemInArray) {
  divToApplyStyles.setAttribute("id", `gameDiv ${itemInArray.name}`);
  divToApplyStyles.classList.add("GameImageClass");
  divToApplyStyles.src = `${itemInArray.src}`;
  divToAppend.appendChild(divToApplyStyles);
}

export { test };
