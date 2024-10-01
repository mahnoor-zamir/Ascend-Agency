const db = require('../config/db');

exports.getPublications = (req, res) => {
  const query = 'SELECT * FROM publication';
  db.all(query, (err, results) => {
    if (err) {
      console.error('Error fetching publications:', err.message);
      res.status(500).json({ error: 'Failed to retrieve publications' });
    } else {
      res.json(results);
    }
  });
};
