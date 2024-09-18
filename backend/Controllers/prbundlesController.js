const db = require('../config/db');

exports.getPrbundles = (req, res) => {
    const query = 'SELECT * FROM prbundle';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching bestsellers data:', err.message);
            res.status(500).json({ error: 'Failed to retrieve bestsellers data' });
        } else {
            res.json(results);
        }
    });
};
