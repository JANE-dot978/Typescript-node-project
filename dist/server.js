"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const app = (0, express_1.default)();
const PORT = 3000;
// ✅ Middleware to parse JSON
app.use(express_1.default.json());
// ✅ Debug middleware (VERY IMPORTANT for troubleshooting)
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});
// ✅ Routes
app.use("/users", user_routes_1.default);
// ✅ Root route
app.get("/", (req, res) => {
    res.send("TypeScript MVC API Running 🚀");
});
// ✅ 404 Handler (this will catch missing routes like your POST issue)
app.use((req, res) => {
    res.status(404).send(`Route ${req.method} ${req.url} not found`);
});
// ✅ Global Error Handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Internal Server Error" });
});
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
//hhhhh/
//mmmm//
//jhhuh//
