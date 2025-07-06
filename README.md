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

```bash
git clone https://github.com/kaviya-projects/User-Management-App.git
cd user-management

## ⚙️ How to Run the Project

Follow these steps to set up and run the project locally:

### 1. Install Dependencies

```bash
npm install

2. Start the Backend (JSON Server)
bash
Copy
Edit
npx json-server --watch db.json --port 5001
✅ Ensure the db.json file is present in the project root.

3. Start the Frontend (React App)
bash
Copy
Edit
npm start
🌐 Frontend URL: http://localhost:3000

📡 Backend API Endpoint: http://localhost:5001/users

css
Copy
Edit

Let me know if you’d also like a section for **project screenshots**, **demo video**, or **deployment instructions**!
