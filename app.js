const PASSWORD = "1234";

const users = [
  { name: "Max", img: "https://via.placeholder.com/300", bio: "Cooler Typ" },
  { name: "Leon", img: "https://via.placeholder.com/300", bio: "Sportlich" },
  { name: "Tom", img: "https://via.placeholder.com/300", bio: "Lustig" },
  { name: "Nick", img: "https://via.placeholder.com/300", bio: "Gamer" },
  { name: "Paul", img: "https://via.placeholder.com/300", bio: "Smart" },
  { name: "Lukas", img: "https://via.placeholder.com/300", bio: "Chill" },
  { name: "Finn", img: "https://via.placeholder.com/300", bio: "Energie" },
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