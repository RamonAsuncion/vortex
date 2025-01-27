const quests = ["Quest 1: Initiation into the Arcane Arts"];

function addQuest() {
  const ul = document.getElementById("quests");
  for (let i = 1; i <= quests.length; i++) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.setAttribute("href", `quests/${i}/`);
    a.textContent = quests[i - 1];
    li.appendChild(a);
    ul.appendChild(li);
  }
}

addQuest();
