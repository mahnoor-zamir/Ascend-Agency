const db = require('../config/db');

exports.getPrint = (req, res) => {
    const query = 'SELECT * FROM print';
    db.all(query, (err, results) => {
        if (err) {
            console.error('Error fetching bestsellers data:', err.message);
            res.status(500).json({ error: 'Failed to retrieve bestsellers data' });
        } else {
            res.json(results);
        }
    });
};
