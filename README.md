<!-- # Bakery-Website

A simple, responsive website for a bakery.

## Features

- Clean and modern design
- Responsive layout for all devices
- Customizable styles in [`css/style.css`](css/style.css)

## Getting Started

1. Clone or download this repository.
2. Open [`index.html`](index.html) in your web browser.

### Using Live Server Extension

For live reloading and instant preview, you can use the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension in Visual Studio Code:

1. Install the **Live Server** extension from the VS Code Extensions Marketplace.
2. Right-click on `index.html` and select **"Open with Live Server"**.
3. Your default browser will open and display the website. Any changes you make will be reflected instantly.

## Folder Structure

- [`index.html`](index.html): Main HTML file
- [`css/style.css`](css/style.css): Stylesheet

## Customization

Edit [`index.html`](index.html) and [`css/style.css`](css/style.css) to update content and styles for your bakery.

## License

This project is open source and available under the [MIT License](LICENSE).
 -->

# 🍞 Bakery Website (Vite + JSON Server)

A modern, responsive bakery website built with **Vite** for lightning-fast frontend development and **JSON Server** for simulating a REST API.

---

## ✨ Features

* ⚡ Vite-powered frontend
* 🔁 Live reload on code changes
* 🎯 Modular and clean CSS
* 📂 Local JSON Server API (useful for mock data & prototyping)
* ✅ Easy to customize and extend

---

## 📦 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/PaseTube/Bakery-Website.git
cd Bakery-Website
```

### 2. Install Dependencies

```bash
npm install
npm install json-server --save-dev
```

---

## 🚀 Development

### Start the Frontend (Vite)

```bash
npm run dev
```

* Starts a dev server at: [http://localhost:5173](http://localhost:5173)
* Live reload enabled
* Uses `index.html` and `src/main.js` as entry points

### Start the Local API (JSON Server)

```bash
npm run api
```

* Serves `src/json/db.json` on: [http://localhost:3000](http://localhost:3000)
* Supports standard REST API methods (`GET`, `POST`, `PUT`, `PATCH`, `DELETE`)

#### Example API Usage

* Get all products:
  `GET http://localhost:3000/products`

* Add a new product:
  `POST http://localhost:3000/products`

---

## 🧱 Folder Structure

```
/
├── index.html
├── package.json
└── src/
    ├── main.js
    ├── css/
    │   ├── style.css
    │   ├── navbar.css
    │   └── ...
    └── json/
        └── db.json
```

---

## 🔧 Available Commands

| Command           | Description                               |
| ----------------- | ----------------------------------------- |
| `npm run dev`     | Start Vite dev server on `localhost:5173` |
| `npm run api`     | Start JSON Server API on `localhost:3000` |
| `npm run build`   | Build the project for production          |
| `npm run preview` | Preview the production build locally      |

---

## 📌 Notes

* To customize styles, edit files inside `src/css/`.
* To simulate backend changes, edit `src/json/db.json`.

---

## 🗪 License

This project is licensed under the [MIT License](LICENSE).

---

# ✅ Quick Start

To get the project up and running, follow these steps:

## Install and Run Frontend

```bash
npm install
npm run dev     # Frontend accessible at http://localhost:5173
npm run api     # API accessible at http://localhost:3000
```

---

## 🚀 Running the Backend

### 1. Navigate to the Backend Folder

Open your terminal and move to the backend project directory:

```bash
cd backend
```

### 2. Run the Backend

Start the backend by running:

```bash
dotnet run
```

### 3. Access the Backend

Once the backend is running, it will be available at:

```bash
http://localhost:5206/api/products   # API endpoints
http://localhost:5206/swagger       # Swagger UI (API documentation)
```

* Use `/api` to test your API endpoints.
* Use `/swagger` to explore the Swagger UI for API documentation.

---

## 🌟 Key Features of the App

### 1. Frontend (Menu Page)

Start the frontend using:

```bash
npm run dev
```

Accessible at:

```bash
http://localhost:5173/menu
```

> The menu page retrieves its data from the backend via `dotnet run`. Ensure the backend is running alongside the frontend.

### 2. Contact Form Validation

The contact form validation is handled by the backend.
Ensure the backend is running using `dotnet run` when testing the contact form.

### 3. CRUD Functionality (Admin Management)

The CRUD page is available at:

```bash
http://localhost:5173/crud
```

When you navigate to `/crud`, you’ll first see a login page.

**Credentials:**

```
Username: admin
Password: hello
```

After logging in, you'll gain access to the CRUD interface, where you can:

* Add, edit, delete, and manage products.
* All changes are synchronized with the backend.

### 4. Starting the API Alongside npm

If you prefer to manage the API with npm:

```bash
npm run api  # Starts the backend on http://localhost:3000
```

> Ensure you update your API configuration to point to the appropriate backend endpoint during testing.

---

## 🛠️ Testing Instructions

### Testing the Backend API

Use tools like Postman or your browser.

Example API endpoints (when backend is running via `dotnet run`):

```
GET http://localhost:5206/api/products
POST http://localhost:5206/api/products
```
