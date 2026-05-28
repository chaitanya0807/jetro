// src/utils/dataAggregator.js

class DataAggregator {
  calculateAverage(values) {
    if (values.length === 0) return 0;
    const sum = values.reduce((a, b) => a + b, 0);
    return parseFloat((sum / values.length).toFixed(2));
  }

  calculateConversionRate(orders) {
    // Assuming 1000 visits base for mock data + order count
    const visits = 1000 + orders.length * 2;
    return parseFloat(((orders.length / visits) * 100).toFixed(2));
  }

  getTopProducts(orders, limit = 5) {
    const productSales = {};
    orders.forEach(o => {
      if (!productSales[o.productId]) {
        productSales[o.productId] = { revenue: 0, count: 0 };
      }
      productSales[o.productId].revenue += o.amount;
      productSales[o.productId].count += 1;
    });

    return Object.entries(productSales)
      .map(([id, stats]) => ({
        id,
        revenue: parseFloat(stats.revenue.toFixed(2)),
        count: stats.count
      }))
      .sort((a, b) => b.revenue - a.revenue)
      .slice(0, limit);
  }

  aggregateOrderMetrics(orders) {
    const validOrders = orders.filter(o => o.status === 'completed');
    
    return {
      totalOrders: validOrders.length,
      totalRevenue: parseFloat(validOrders.reduce((sum, o) => sum + o.amount, 0).toFixed(2)),
      avgOrderValue: this.calculateAverage(validOrders.map(o => o.amount)),
      conversionRate: this.calculateConversionRate(validOrders),
      topProducts: this.getTopProducts(validOrders),
      // Mock funnel data
      funnel: [
        { stage: 'Visits', count: validOrders.length * 5 },
        { stage: 'Product Views', count: validOrders.length * 3 },
        { stage: 'Add to Cart', count: validOrders.length * 2 },
        { stage: 'Checkout', count: Math.floor(validOrders.length * 1.5) },
        { stage: 'Purchases', count: validOrders.length }
      ]
    };
  }

  getTimeKey(dateString, groupBy) {
    const d = new Date(dateString);
    if (groupBy === 'day') {
      return d.toISOString().split('T')[0];
    } else if (groupBy === 'month') {
      return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
    }
    return d.toISOString().split('T')[0];
  }

  generateTimeSeriesData(orders, groupBy = 'day') {
    const grouped = {};
    const validOrders = orders.filter(o => o.status === 'completed');
    
    validOrders.forEach(order => {
      const key = this.getTimeKey(order.date, groupBy);
      grouped[key] = (grouped[key] || 0) + order.amount;
    });
    
    return Object.entries(grouped)
      .map(([date, revenue]) => ({ date, revenue: parseFloat(revenue.toFixed(2)) }))
      .sort((a, b) => new Date(a.date) - new Date(b.date));
  }
}

module.exports = new DataAggregator();
