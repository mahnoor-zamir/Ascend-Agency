const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Path to the SQLite database file
const dbPath = path.resolve(__dirname, 'pressagency.sqlite');

// Create a new SQLite database connection
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error connecting to the SQLite database:', err);
    return;
  }
  console.log('Connected to the SQLite database');
});

module.exports = db;
