import express, { Request, Response, NextFunction } from "express";
import userRoutes from "./routes/user.routes";

const app = express();
const PORT = 3000;

// ✅ Middleware to parse JSON
app.use(express.json());

// ✅ Debug middleware (VERY IMPORTANT for troubleshooting)
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// ✅ Routes
app.use("/users", userRoutes);

// ✅ Root route
app.get("/", (req: Request, res: Response) => {
  res.send("TypeScript MVC API Running 🚀");
});

// ✅ 404 Handler (this will catch missing routes like your POST issue)
app.use((req: Request, res: Response) => {
  res.status(404).send(`Route ${req.method} ${req.url} not found`);
});

// ✅ Global Error Handler
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});