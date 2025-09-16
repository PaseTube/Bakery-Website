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

## ✅ Quick Start

```bash
npm install
npm run dev     # Frontend at http://localhost:5173
npm run api     # API at http://localhost:3000
```



# Running the Backend

To start the backend, follow these steps:

1. **Navigate to the Backend Folder:**

   Open your terminal and move to the backend project directory:
   ```bash
   cd backend
   ```
2. **Run the Backend:**
  Run the following command to start the backend:
  ```bash 
  dotnet run
  ```
3. **access the backend**
  once the backend is running it will be accessible at: 
  ```bash 
  http://localhost:5206/api/products or http://localhost:5206/swagger
  ```
  ```/api``` to see the api ```/swagger``` to see the swagger ui.