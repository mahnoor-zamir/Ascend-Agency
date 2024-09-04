const express = require('express');
const publicationRoutes = require('./Routes/publicationRoute');
const televisionRoutes = require('./Routes/televisionRoute'); 
const listicleRoutes = require('./Routes/listicleRoute');
const bestsellerRoutes = require('./Routes/bestsellerRoute');
const socialpostRoutes = require('./Routes/socialpostRoute');

const app = express();

app.get('/', (req, res) => {
  res.send('Connected to the MySQL database');
});

// Corrected route handlers
app.use('/api/publications', publicationRoutes);
app.use('/api/television', televisionRoutes);
app.use('/api/listicles', listicleRoutes);
app.use('/api/bestsellers', bestsellerRoutes);
app.use('/api/socialposts', socialpostRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
