# 🌸 CozyNest

**CozyNest** is a warm, aesthetically charming wellness web app that helps users stay grounded and cozy. 
It combines **daily affirmations**, a **mood journal**, and a **book tracker** to create a gentle self-care experience. 
Built using HTML, CSS, JavaScript, and Express (Node.js), it also uses `localStorage` to save user data and preferences.

---

## ✨ Features

### 1. 🌞 Daily Affirmations
- Fetches a random uplifting affirmation from a local JSON file.
- Beautiful fade-in animations and pastel styling.
- Option to 💞 _Save your favourite affirmations_ (stored in `localStorage`).
- Background lo-fi music toggle 🎵 to enhance the vibe.

### 2. 📓 Mood Journal
- Modal popup to log your **mood**, **thoughts**, and optionally, the day's affirmation.
- Entries are saved in `localStorage`.
- View all your past entries in a cozy **“My Journal”** page.

### 3. 📚 Book Nook
- Add books you’re reading or want to read.
- Mark books as read/unread.
- Save and view your personal reading list.
- Data is stored in `localStorage`.

---

## 📁 Folder Structure
````
cozynest/
│
├── assets/
│ └── path-of-the-wind-lofi-223116.mp3 # Background music
│
├── public/
│ ├── index.html # Main affirmation page
│ ├── journal.html # Journal entries page
│ ├── book.html # Book Nook tracker
│ ├── styles.css # Shared CSS styles
│ └── app.js # Frontend logic
│
├── affirmations.json # List of affirmations
├── server.js # Express backend
├── package.json # Node project metadata
└── README.md # You're here!
````

---

## 🚀 Getting Started

### Prerequisites

- Node.js installed
- A browser (like Chrome or Safari)

### Install Dependencies
```bash
npm install
```

### Start the server
````bash
node server.js
````
### 🧠 Technologies Used
- Frontend: HTML5, CSS3, JavaScript
- Backend: Node.js with Express
- Data Storage: Browser localStorage
- Styling: Pastel themes, subtle shadows, smooth animations
- UX: Accessible layout with intuitive UI elements

