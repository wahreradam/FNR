const PASSWORD = "123";

const votes = {};
const users = [
  { name: "#1-#2 Ture", img: "TureRankings.jpeg", bio: "gymcel, primal, mtn", votes 0 },
  { name: "#1-#2 Nick", img: "NickRankings.jpeg", bio: "mtn, akkutanmaxxed", votes 0 },
  { name: "#3 Julius", img: "Julius2Rankings.jpeg", bio: "heightmaxxed, hltn, gymskipper, trueprimal, blackpilled, orgmaxxed, highcortisol", votes 0 },
  { name: "#4 Naveen", img: "NaveenRanking.jpeg", bio: "currymaxxed, manlet, gymmaxxer, bluepilled", votes 0 },
  { name: "#5-#6 Johann", img: "JohannRankings.jpeg", bio: "blackpilled, orgmaxxed, akkutanmaxxed", votes 0 },
  { name: "#5-#6 Joshua", img: "https://via.placeholder.com/300", bio: "bluepilled, lowcortisol", votes 0 },

];

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
