require('dotenv').config();
const express = require('express');
const trackingRoutes = require('./routes/trackingRoutes');

const app = express();
const port = process.env.PORT || 3001;

// Middleware to parse JSON
app.use(express.json());

// Use custom logger middleware (optional)
// const logger = require('./middleware/logger');
// app.use(logger);

// Set up tracking API routes
app.use('/', trackingRoutes);

app.listen(port, () => {
  console.log(`Backend server running on port ${port}`);
});
