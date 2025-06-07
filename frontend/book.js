function addBook() {
  const title = document.getElementById("bookTitle").value.trim();
  const note = document.getElementById("bookNote").value.trim();

  if (!title) return alert("Please enter a book title!");

  let books = JSON.parse(localStorage.getItem("bookshelf")) || [];
  books.push({ title, note, read: false });
  localStorage.setItem("bookshelf", JSON.stringify(books));
  displayBooks();

  document.getElementById("bookTitle").value = "";
  document.getElementById("bookNote").value = "";
}

function toggleRead(index) {
  let books = JSON.parse(localStorage.getItem("bookshelf")) || [];
  books[index].read = !books[index].read;
  localStorage.setItem("bookshelf", JSON.stringify(books));
  displayBooks();
}

function deleteBook(index) {
  let books = JSON.parse(localStorage.getItem("bookshelf")) || [];
  books.splice(index, 1);
  localStorage.setItem("bookshelf", JSON.stringify(books));
  displayBooks();
}

function displayBooks() {
  const list = document.getElementById("bookList");
  const books = JSON.parse(localStorage.getItem("bookshelf")) || [];
  list.innerHTML = "";

  books.forEach((book, i) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${book.title}</strong> ${book.read ? "✅" : "📖"}
      <p>${book.note || ""}</p>
      <button onclick="toggleRead(${i})">${book.read ? "Mark Unread" : "Mark Read"}</button>
      <button onclick="deleteBook(${i})">❌ Delete</button>
    `;
    li.style.marginBottom = "10px";
    list.appendChild(li);
  });
}

window.onload = displayBooks;
