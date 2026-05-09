const PASSWORD = "123";

const votes = {};

const users = [
// Load gespeicherte Daten
let users = JSON.parse(localStorage.getItem("users")) || [
  { name: "#1-#2 Ture", img: "TureRankings.jpeg", bio: "gymcel, primal, mtn", score: 0 },
  { name: "#1-#2 Nick", img: "NickRankings.jpeg", bio: "mtn, akkutanmaxxed", score: 0 },
  { name: "#3 Julius", img: "Julius2Rankings.jpeg", bio: "heightmaxxed, hltn, gymskipper, trueprimal, blackpilled, orgmaxxed, highcortisol", score: 0 },
@@ -11,7 +10,9 @@ const users = [
  { name: "#5-#6 Joshua", img: "https://via.placeholder.com/300", bio: "bluepilled, lowcortisol", score: 0 }
];

// ENTER + BUTTON LOGIN
let votes = JSON.parse(localStorage.getItem("votes")) || {};

// ENTER LOGIN
function checkPassword() {
  const pw = document.getElementById("pw").value;

@@ -31,14 +32,11 @@ document.addEventListener("keydown", function (event) {
  }
});

// RENDER PROFILES
// RENDER
function render() {
  const container = document.getElementById("profiles");
  container.innerHTML = "";

  // Ranking (höchster Score oben)
  users.sort((a, b) => b.score - a.score);

  users.forEach(u => {
    const div = document.createElement("div");
    div.className = "profile";
@@ -60,7 +58,7 @@ function render() {
  });
}

// VOTING SYSTEM (ANTI-SPAM)
// VOTING SYSTEM
function vote(name, value) {
  if (votes[name]) {
    alert("Du hast hier schon gevotet!");
@@ -72,5 +70,9 @@ function vote(name, value) {

  votes[name] = true;

  // SPEICHERN
  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("votes", JSON.stringify(votes));

  render();
}
