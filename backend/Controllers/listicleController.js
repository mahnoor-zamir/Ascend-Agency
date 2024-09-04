const db = require('../config/db');

exports.getListicles = (req, res) => {
  const query = 'SELECT * FROM listicle';
  db.query(query, (err, results) => {
    if (err) {
        console.error('Error fetching listicles:', err.message);
        res.status(500).json({ error: 'Failed to retrieve listicles' });
    } else {
      res.json(results);
    }
  });
};
