const PASSWORD = "123";

// Load gespeicherte Daten
let users = JSON.parse(localStorage.getItem("users")) || [
  { name: "#1-#2 Ture", img: "TureRankings.jpeg", bio: "gymcel, primal, mtn", score: 0 },
  { name: "#1-#2 Nick", img: "NickRankings.jpeg", bio: "mtn, akkutanmaxxed", score: 0 },
  { name: "#3 Julius", img: "Julius2Rankings.jpeg", bio: "heightmaxxed, hltn, gymskipper, trueprimal, blackpilled, orgmaxxed, highcortisol", score: 0 },
  { name: "#4 Naveen", img: "NaveenRanking.jpeg", bio: "currymaxxed, manlet, gymmaxxer, bluepilled", score: 0 },
  { name: "#5-#6 Johann", img: "JohannRankings.jpeg", bio: "blackpilled, orgmaxxed, akkutanmaxxed", score: 0 },
  { name: "#5-#6 Joshua", img: "https://via.placeholder.com/300", bio: "bluepilled, lowcortisol", score: 0 }
];

let votes = JSON.parse(localStorage.getItem("votes")) || {};

// ENTER LOGIN
function checkPassword() {
  const pw = document.getElementById("pw").value;

  if (pw === PASSWORD) {
    document.getElementById("login").style.display = "none";
    document.getElementById("app").style.display = "block";
    render();
  } else {
    alert("Falsches Passwort");
  }
}

// ENTER KEY SUPPORT
document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    checkPassword();
  }
});

// RENDER
function render() {
  const container = document.getElementById("profiles");
  container.innerHTML = "";

  users.forEach(u => {
    const div = document.createElement("div");
    div.className = "profile";

    div.innerHTML = `
      <img src="${u.img}">
      <h2>${u.name}</h2>

      <div>
        <button onclick="vote('${u.name}', 1)">👍</button>
        <button onclick="vote('${u.name}', -1)">👎</button>
      </div>

      <p>Score: ${u.score}</p>
      <p>${u.bio}</p>
    `;

    container.appendChild(div);
  });
}

// VOTING SYSTEM
function vote(name, value) {
  if (votes[name]) {
    alert("Du hast hier schon gevotet!");
    return;
  }

  const user = users.find(u => u.name === name);
  user.score += value;

  votes[name] = true;

  // SPEICHERN
  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("votes", JSON.stringify(votes));

  render();
}
