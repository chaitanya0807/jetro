const express = require('express');
const cors = require('cors');
const errorHandler = require('./src/middleware/errorHandler');

const metricsRouter = require('./src/routes/metrics');
const ordersRouter = require('./src/routes/orders');
const dashboardsRouter = require('./src/routes/dashboards');

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/metrics', metricsRouter);
app.use('/api/orders', ordersRouter);
app.use('/api/dashboards', dashboardsRouter);

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'running', timestamp: new Date() });
});

// Error handling middleware should be last
app.use(errorHandler);

const PORT = process.env.PORT || 3001;

// Only start the server if this file is run directly (not in tests)
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Analytics server running on port ${PORT}`);
  });
}

module.exports = app;
