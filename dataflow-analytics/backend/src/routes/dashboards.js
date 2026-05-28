const express = require('express');
const router = express.Router();

// Mock saved dashboards
let savedDashboards = [
  { id: 1, name: 'Main E-Commerce View', layout: 'default' }
];

// GET /api/dashboards
router.get('/', (req, res, next) => {
  try {
    res.json(savedDashboards);
  } catch (error) {
    next(error);
  }
});

// POST /api/dashboards
router.post('/', (req, res, next) => {
  try {
    const { name, layout } = req.body;
    if (!name) {
      const error = new Error('Dashboard name is required');
      error.statusCode = 400;
      throw error;
    }

    const newDashboard = {
      id: savedDashboards.length + 1,
      name,
      layout: layout || 'default'
    };
    
    savedDashboards.push(newDashboard);
    res.status(201).json(newDashboard);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
