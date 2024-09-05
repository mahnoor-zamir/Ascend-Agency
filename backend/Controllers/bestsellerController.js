const db = require('../config/db');

exports.getBestseller = (req, res) => {
    const query = 'SELECT * FROM bestsellers';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching bestsellers data:', err.message);
            res.status(500).json({ error: 'Failed to retrieve bestsellers data' });
        } else {
            res.json(results);
        }
    });
};
