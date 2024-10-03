// server.js
const express = require('express');
const cors = require('cors');
const sqlite3 = require('better-sqlite3');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const db = sqlite3('database.db');

// Create the table
const createTable = () => {
    const sql = `
        CREATE TABLE IF NOT EXISTS user (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT NOT NULL,
            password TEXT NOT NULL
        )
    `;
    db.prepare(sql).run();
};

createTable();

// Insert a new user
app.post('/users', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
      return res.status(400).json({ error: 'Username and password are required' });
  }
  const sql = `
      INSERT INTO user (username, password)
      VALUES (?, ?)
  `;
  try {
      db.prepare(sql).run(username, password);
      res.status(201).json({ message: 'User  created successfully' });
  } catch (error) {
      res.status(500).json({ error: 'Failed to create user' });
  }
});
// Get all users
app.get('/users', (req, res) => {
    const sql = `
        SELECT * FROM user
    `;
    try {
        const rows = db.prepare(sql).all();
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve users' });
    }
});

// Get a user by id
app.get('/users/:id', (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({ error: 'ID is required' });
    }
    const sql = `
        SELECT * FROM user
        WHERE id = ?
    `;
    try {
        const row = db.prepare(sql).get(id);
        if (row) {
            res.json(row);
        } else {
            res.status(404).json({ error: 'User  not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve user' });
    }
});

// Update a user by id
app.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const { username, password } = req.body;
    if (!id || !username || !password) {
        return res.status(400).json({ error: 'ID, username, and password are required' });
    }
    const sql = `
        UPDATE user
        SET username = ?, password = ?
        WHERE id = ?
    `;
    try {
        const info = db.prepare(sql).run(username, password, id);
        if (info.changes > 0) {
            res.json({ message: 'User  updated successfully' });
        } else {
            res.status(404).json({ error: 'User  not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to update user' });
    }
});

// Delete a user by id
app.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({ error: 'ID is required' });
    }
    const sql = `
        DELETE FROM user
        WHERE id = ?
    `;
    try {
        const info = db.prepare(sql).run(id);
        if (info.changes > 0) {
            res.json({ message: 'User  deleted successfully' });
        } else {
            res.status(404).json({ error: 'User  not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete user' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});