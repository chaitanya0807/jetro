const request = require('supertest');
const app = require('../server');

describe('Analytics API', () => {
  describe('GET /api/metrics', () => {
    it('should return aggregated metrics', async () => {
      const res = await request(app).get('/api/metrics');
      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty('totalRevenue');
      expect(res.body).toHaveProperty('totalOrders');
      expect(res.body).toHaveProperty('avgOrderValue');
      expect(res.body).toHaveProperty('conversionRate');
    });

    it('should filter by date range', async () => {
      const res = await request(app)
        .get('/api/metrics')
        .query({ startDate: '2024-01-01', endDate: '2026-12-31' });
      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty('totalRevenue');
    });
  });

  describe('GET /api/dashboards', () => {
    it('should return saved dashboard configurations', async () => {
      const res = await request(app).get('/api/dashboards');
      expect(res.statusCode).toBe(200);
      expect(Array.isArray(res.body)).toBe(true);
    });
  });

  describe('POST /api/dashboards', () => {
    it('should create a new dashboard', async () => {
      const res = await request(app)
        .post('/api/dashboards')
        .send({ name: 'Custom View', layout: 'grid' });
      expect(res.statusCode).toBe(201);
      expect(res.body.name).toBe('Custom View');
    });

    it('should return 400 if name is missing', async () => {
      const res = await request(app)
        .post('/api/dashboards')
        .send({ layout: 'grid' });
      expect(res.statusCode).toBe(400);
    });
  });
});
