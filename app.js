const PASSWORD = "123";

// USERS
let users = JSON.parse(localStorage.getItem("users")) || [
  { name: "#1-#2 Ture", img: "TureRankings.jpeg", bio: "gymcel, primal, mtn" },
  { name: "#1-#2 Nick", img: "NickRankings.jpeg", bio: "mtn, akkutanmaxxed" },
  { name: "#3 Julius", img: "Julius2Rankings.jpeg", bio: "heightmaxxed, hltn, gymskipper, trueprimal, blackpilled, orgmaxxed, highcortisol" },
  { name: "#4 Naveen", img: "NaveenRanking.jpeg", bio: "currymaxxed, manlet, gymmaxxer, bluepilled" },
  { name: "#5-#6 Johann", img: "JohannRankings.jpeg", bio: "blackpilled, orgmaxxed, akkutanmaxxed" },
  { name: "#5-#6 Joshua", img: "https://via.placeholder.com/300", bio: "bluepilled, lowcortisol" }
];

// COMMENTS STORAGE
let comments = JSON.parse(localStorage.getItem("comments")) || [];

// LOGIN
function checkPassword() {
  const pw = document.getElementById("pw").value;

  if (pw === PASSWORD) {
    document.getElementById("login").style.display = "none";
    document.getElementById("app").style.display = "block";

    render();
    renderComments();
  } else {
    alert("Falsches Passwort");
  }
}

// ENTER KEY LOGIN
document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    checkPassword();
  }
});

// RENDER PROFILES
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

// ADD COMMENT
function addComment() {
  const name = document.getElementById("commentName").value;
  const text = document.getElementById("commentText").value;

  if (!name || !text) {
    alert("Bitte Name und Kommentar eingeben!");
    return;
  }

  comments.push({
    name: name,
    text: text,
    time: new Date().toLocaleString()
  });

  localStorage.setItem("comments", JSON.stringify(comments));

  document.getElementById("commentText").value = "";

  renderComments();
}

// RENDER COMMENTS
function renderComments() {
  const container = document.getElementById("comments");
  container.innerHTML = "";

  comments.forEach(c => {
    const div = document.createElement("div");
    div.className = "comment";

    div.innerHTML = `
      <b>${c.name}</b>
      <small>${c.time}</small>
      <p>${c.text}</p>
    `;

    container.appendChild(div);
  });
}
