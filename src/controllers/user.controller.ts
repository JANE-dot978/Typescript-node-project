import { Request, Response } from "express";
import { User } from "../models/user.model";

// In-memory data
let users: User[] = [
  { id: 1, name: "Jane" },
  { id: 2, name: "John" }
];

// GET users
export const getUsers = (req: Request, res: Response) => {
  res.json(users);
};

// POST user
export const createUser = (req: Request, res: Response) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: "Name is required" });
  }

  const newUser: User = {
    id: users.length + 1,
    name
  };

  users.push(newUser);

  res.status(201).json({
    message: "User created successfully",
    user: newUser
  });
};