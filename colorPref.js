function colors() {
  let favcolors = [];

  for (let i = 0; i < 3; i++) {
    let enterColor = prompt("Enter Your Three Favorite Colors");
    favcolors.push(enterColor);
    alert("Your Favorite Colors are:" + favcolors);
  }
  let pushcolor = prompt("Add another color you like:");
  favcolors.push(pushcolor);
  alert("Your new Fav colors are:" + favcolors);
  
}