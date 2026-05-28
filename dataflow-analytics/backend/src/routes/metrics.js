const express = require('express');
const router = express.Router();
const dataAggregator = require('../utils/dataAggregator');
const { orders } = require('../utils/mockData');

// GET /api/metrics
router.get('/', (req, res, next) => {
  try {
    const { startDate, endDate, category } = req.query;
    
    let filteredOrders = [...orders];

    if (startDate) {
      filteredOrders = filteredOrders.filter(o => new Date(o.date) >= new Date(startDate));
    }
    if (endDate) {
      filteredOrders = filteredOrders.filter(o => new Date(o.date) <= new Date(endDate));
    }
    if (category && category !== 'all') {
      filteredOrders = filteredOrders.filter(o => o.category === category);
    }

    const metrics = dataAggregator.aggregateOrderMetrics(filteredOrders);
    // Include recent orders for the data table
    metrics.recentOrders = filteredOrders.slice(0, 10);
    
    res.json(metrics);
  } catch (error) {
    next(error);
  }
});

// GET /api/metrics/timeseries
router.get('/timeseries', (req, res, next) => {
  try {
    const { startDate, endDate, category, groupBy = 'day' } = req.query;
    
    let filteredOrders = [...orders];

    if (startDate) {
      filteredOrders = filteredOrders.filter(o => new Date(o.date) >= new Date(startDate));
    }
    if (endDate) {
      filteredOrders = filteredOrders.filter(o => new Date(o.date) <= new Date(endDate));
    }
    if (category && category !== 'all') {
      filteredOrders = filteredOrders.filter(o => o.category === category);
    }

    const timeseries = dataAggregator.generateTimeSeriesData(filteredOrders, groupBy);
    res.json(timeseries);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
