const db = require('../config/db');

exports.getTelevision = (req, res) => {
    const query = 'SELECT * FROM tv';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching television data:', err.message);
            res.status(500).json({ error: 'Failed to retrieve television data' });
        } else {
            res.json(results);
        }
    });
};
