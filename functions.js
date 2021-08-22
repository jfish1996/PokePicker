function test(pokeArray, divtoAppend) {
  for (let i = 0; i < pokeArray.length; i++) {
    let newgameDiv = document.createElement("div");
    newgameDiv.setAttribute("id", `gameDiv  + ${i}`);
    divtoAppend.appendChild(newgameDiv);
  }
}

export { test };
