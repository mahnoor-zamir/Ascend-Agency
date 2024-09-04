const db = require('../config/db');

exports.getSocialposts = (req, res) => {
    const query = 'SELECT * FROM socialpost';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching socialpost data:', err.message);
            res.status(500).json({ error: 'Failed to retrieve socialpost data' });
        } else {
            res.json(results);
        }
    });
};
