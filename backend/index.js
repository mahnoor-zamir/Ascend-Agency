const express = require('express');
const db = require('./config/db');
const publicationRoutes = require('./Routes/publicationRoute');
const televisionRoutes = require('./Routes/televisionRoute'); 
const listicleRoutes = require('./Routes/listicleRoute');
const bestsellerRoutes = require('./Routes/bestsellerRoute');
const socialpostRoutes = require('./Routes/socialpostRoute');
const prbundlesRoutes = require('./Routes/prbundlesRoute');
const printRoutes = require('./Routes/printRoute');

const app = express();

app.get('/', (req, res) => {
  res.send('Connected to the MySQL database');
});

app.use('/api/publications', publicationRoutes);
app.use('/api/television', televisionRoutes);
app.use('/api/listicles', listicleRoutes);
app.use('/api/bestsellers', bestsellerRoutes);
app.use('/api/socialposts', socialpostRoutes);
app.use('/api/prbundles', prbundlesRoutes);
app.use('/api/print', printRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
