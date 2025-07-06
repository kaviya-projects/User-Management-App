# 🔐 User Management App (React + JSON Server)

A simple User Management application built using **React** (frontend) and **JSON Server** (mock backend). This app demonstrates how to:

- Perform **CRUD operations** (Create, Read, Update, Delete)
- Display user data with **Base64 encoding** (UI-level obfuscation)
- Store data in **plain text** in a local `db.json` file

---

## 🚀 Features

- ✅ Add new users
- ✅ Edit existing users
- ✅ Delete users
- ✅ View encoded user details in the UI
- ✅ Store plain text user details in the backend

---

## 🛠️ Tech Stack

| Layer      | Technology              |
|------------|--------------------------|
| Frontend   | React (with Hooks)       |
| Backend    | JSON Server (REST API)   |
| HTTP Client| Axios                    |
| Encoding   | Base64 (via `btoa`/`atob`)|

---

## 📦 Setup Instructions

### 1. Clone the Repo


git clone https://github.com/kaviya-projects/User-Management-App.git
cd user-management

###⚙️ How to Run the Project

Follow these steps to set up and run the project locally:

1. Install Dependencies
   npm install
   
2. Start the Backend (JSON Server)
   npx json-server --watch db.json --port 5001
   ✅ Make sure the db.json file is present in the project root directory.

3. Start the Frontend (React App)
   npm start


##🌐 URLs

Frontend: http://localhost:3000

Backend API: http://localhost:5001/users

##📌 Notes
The app uses Base64 encoding for UI display only — it is not encryption and not meant for securing data.

Data stored in db.json remains in plain text.

Decoding is done only while editing user details.

##🛠 Tech Stack
Frontend: React, Axios

Backend: JSON Server

Encoding: btoa / atob (Base64 for display)

Styling: Inline CSS

##📦 Features
Add new users

Edit user details

Delete existing users

Base64-encoded name & email on UI (stored in plain form in backend)

Simple and clean UI
