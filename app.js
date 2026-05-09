const PASSWORD = "12";

const users = [
  { name: "Ture", img: "TureRankings.jpeg", bio: "gymcel, primal, mtn" },
  { name: "Nick", img: "NickRankings.jpeg", bio: "mtn, akkutanmaxxed" },
  { name: "Julius", img: "Julius2Rankings.jpeg", bio: "heightmaxxed, hltn, gymskipper, trueprimal, blackpilled, orgmaxxed, highcortisol" },
  { name: "Naveen", img: "NaveenRanking.jpeg", bio: "currymaxxed, manlet, gymmaxxer, bluepilled" },
  { name: "#Johann", img: "JohannRankings.jpeg", bio: "blackpilled, orgmaxxed, akkutanmaxxed" },
  { name: "#Joshua", img: "JoshuaRankig.jpeg", bio: "bluepilled, lowcortisol" },

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
      <p>${u.bio}</p>
    `;

    container.appendChild(div);
  });
}
