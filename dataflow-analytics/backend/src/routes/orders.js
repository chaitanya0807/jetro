const express = require('express');
const router = express.Router();
const { orders } = require('../utils/mockData');

// GET /api/orders
router.get('/', (req, res, next) => {
  try {
    const { page = 1, limit = 50, category, status } = req.query;
    
    let filteredOrders = [...orders];

    if (category && category !== 'all') {
      filteredOrders = filteredOrders.filter(o => o.category === category);
    }
    if (status) {
      filteredOrders = filteredOrders.filter(o => o.status === status);
    }

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    
    const paginatedOrders = filteredOrders.slice(startIndex, endIndex);

    res.json({
      total: filteredOrders.length,
      page: parseInt(page),
      limit: parseInt(limit),
      data: paginatedOrders
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
