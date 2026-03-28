# TypeScript Node MVC API
## 📖 About the Project

This project is a **simple backend API** built using **TypeScript** and **Express.js** following the **MVC (Model-View-Controller) architecture**.  

It demonstrates:

- How to structure a Node.js project with TypeScript  
- Type-safe coding with TypeScript  
- Creating **RESTful endpoints** with proper routing  
- Using **controllers**, **models**, and **routes** for clean code  
- Handling **POST requests** with JSON middleware  
- Compiling TypeScript into JavaScript in the `dist/` folder  

This project is perfect for beginners learning TypeScript for backend development, while also giving a solid foundation for building more advanced APIs.

---

## 🎯 Objective

The main goals of this project are:

1. Learn **TypeScript backend development**  
2. Build a **minimal but functional API** using MVC  
3. Test API endpoints with **Postman or any API client**  
4. Understand **TypeScript compilation** (`src` → `dist`)  
5. Document a beginner-friendly workflow for others  

---

## ✨ Features

- **MVC Architecture** — Controllers, Routes, and Models separated  
- **TypeScript Support** — Type safety for server logic  
- **RESTful API** — `GET /users` and `POST /users` endpoints  
- **JSON Parsing Middleware** — Proper handling of request bodies  
- **Automatic Compilation Ready** — TypeScript compiles to `dist/`  
- **Error Handling** — Common issues like `Cannot POST /users` resolved  

---

## 🛠️ Tech Stack

### Backend
- **Node.js** — Runtime environment  
- **Express.js** — Web framework  
- **TypeScript** — Strongly typed JavaScript  
- **ts-node** — Run TypeScript without manual compilation (development)  

### Development Tools
- **VS Code** — Editor  
- **Postman** — API testing  
- **Git & GitHub** — Version control  

---

## 📁 Project Structure


typescript-node-mvc-api/
│
├── src/
│ ├── controllers/
│ │ └── user.controller.ts # Handles business logic for user routes
│ ├── models/
│ │ └── user.model.ts # Data storage (in-memory array for demo)
│ ├── routes/
│ │ └── user.routes.ts # Defines GET and POST routes
│ └── server.ts # Entry point of the app
│
├── dist/ # Compiled JS output (from TypeScript)
├── package.json # Node.js project config
├── tsconfig.json # TypeScript compiler options
├── .gitignore # Ignore node_modules, dist, etc.
└── README.md # Project documentation


---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+ installed  
- npm v9+ installed  
- Git installed  

---

### Installation

**1. Clone the repository**
```bash
git clone https://github.com/JANE-dot978/Typescript-node-project-mvc-api.git
cd typescript-node-mvc-api

2. Install dependencies

npm install
Development

Run the project directly with TypeScript (no manual compilation):

npm run dev

This uses ts-node for instant TypeScript execution. Your server will run at http://localhost:3000.

Compilation for Production

If you want to compile TypeScript to JavaScript:

npx tsc

Run the compiled code:

node dist/server.js
🛣️ API Endpoints
Root Endpoint
GET /

Response:

{
  "message": "TypeScript MVC API Running 🚀"
}
Users Endpoint
GET /users

Returns all users:

[
  { "id": 1, "name": "John Doe" },
  { "id": 2, "name": "Jane Doe" }
]
POST /users

Create a new user:

Request Body:

{
  "name": "Alice"
}

Response:

{
  "message": "User created successfully",
  "user": { "id": 3, "name": "Alice" }
}

Make sure to set the header: Content-Type: application/json

💡 Common Issues & Fixes
Cannot POST /users
Cause: Missing express.json() middleware
Fix: Add app.use(express.json()) before route usage
Dist folder empty / no compiled files
Cause: TypeScript not compiled
Fix: Run npx tsc to generate dist/
TypeScript errors on compile
Fix: Ensure tsconfig.json has correct "rootDir": "./src" and "outDir": "./dist"
POST request not working in Postman
Fix: Ensure body is JSON and headers include Content-Type: application/json

References:

TypeScript Official Docs
Express.js Official Docs
StackOverflow: Cannot POST / route
👩‍💻 Author

Jane Wanjiku Gathu

📧 gathujane97@gmail.com
🐙 GitHub: github.com/JANE-dot978
🌐 Portfolio: janegathu.netlify.app