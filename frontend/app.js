function fetchAffirmation() {
  fetch("http://localhost:3000/api/affirmation")
    .then((res) => res.json())
    .then((data) => {
      const affirmationEl = document.getElementById("affirmation");
      affirmationEl.textContent = data.affirmation;
      affirmationEl.classList.remove("fade");
      void affirmationEl.offsetWidth; // Trigger reflow for animation
      affirmationEl.classList.add("fade");
    });
}

function saveFavorite() {
  const affirmation = document.getElementById("affirmation").textContent;
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  if (!favorites.includes(affirmation)) {
    favorites.push(affirmation);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    updateFavoritesList();
  }
}

function removeFavorite(index) {
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  favorites.splice(index, 1);
  localStorage.setItem("favorites", JSON.stringify(favorites));
  updateFavoritesList();
}


function updateFavoritesList() {
  const list = document.getElementById("favoritesList");
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  list.innerHTML = "";

  favorites.forEach((fav, index) => {
    const li = document.createElement("li");
    li.textContent = fav;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "❌";
    removeBtn.className = "remove-btn";
    removeBtn.onclick = () => removeFavorite(index);

    li.appendChild(removeBtn);
    list.appendChild(li);
  });
}


function toggleMusic() {
  const music = document.getElementById("bgMusic");
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}

function openJournal() {
  document.getElementById("journalModal").style.display = "block";
}

function closeJournal() {
  document.getElementById("journalModal").style.display = "none";
}

function saveJournal() {
  const mood = document.getElementById("mood").value;
  const note = document.getElementById("note").value;
  const affirmation = document.getElementById("taggedAffirmation").value;
  const date = new Date().toLocaleString();

  const entry = { date, mood, note, affirmation };

  let journal = JSON.parse(localStorage.getItem("journalEntries")) || [];
  journal.push(entry);
  localStorage.setItem("journalEntries", JSON.stringify(journal));

  alert("📝 Mood saved! Check your CozyNest anytime.");
  closeJournal();
}

window.onload = () => {
  fetchAffirmation();
  updateFavoritesList();
};

document.addEventListener("DOMContentLoaded", () => {
  fetchAffirmation();
  updateFavoritesList();
});

