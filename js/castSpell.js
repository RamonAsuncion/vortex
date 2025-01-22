function castSpell() {
  const spell = document.getElementById("spellResult");
  spell.innerText = "Your spell has been cast successfully!";
  setTimeout(() => {
    spell.innerText = "";
  }, 2000);
}

const button = document.getElementById("castSpellButton");
button.onclick = castSpell;
