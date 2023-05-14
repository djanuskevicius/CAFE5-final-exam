import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
} from './controllers/user.controllers.js';

import connectMongoDB from './config/db.js';

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectMongoDB();

// Middlewares
app.use(express.json());
app.use(cors());

// Routes

// POST     | create single user
app.post('/api/users', createUser);

// PUT      | update a single user
app.put('/api/users/:id', updateUser);

// GET      | get all users in our user.db database
app.get('/api/users', getUsers);

// DELETE   | delete a single user
app.delete('/api/users/:id', deleteUser);

// Starting server
app.listen(PORT, () => console.log('Server is running on PORT: ' + PORT));
