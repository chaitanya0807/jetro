import React, { useState, useEffect } from 'react';
import MetricsCard from './MetricsCard';
import TimeSeriesChart from './TimeSeriesChart';
import DataTable from './DataTable';
import { fetchDashboardData } from '../api';

export default function Dashboard() {
  const [data, setData] = useState({ metrics: null, timeSeries: null });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Set default dates: Last 30 days
  const defaultEndDate = new Date();
  const defaultStartDate = new Date();
  defaultStartDate.setDate(defaultStartDate.getDate() - 30);

  const [filters, setFilters] = useState({
    startDate: defaultStartDate.toISOString().split('T')[0],
    endDate: defaultEndDate.toISOString().split('T')[0],
    category: 'all'
  });

  useEffect(() => {
    loadData();
  }, [filters]);

  const loadData = async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await fetchDashboardData(filters);
      setData(result);
    } catch (err) {
      setError(err.message || 'An error occurred while loading data');
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  if (loading && !data.metrics) {
    return (
      <div className="loading-overlay">
        <div className="spinner"></div>
        Analyzing data...
      </div>
    );
  }

  if (error) {
    return (
      <div className="dashboard-container">
        <div className="error-message">
          <strong>Error: </strong> {error}
        </div>
        <button className="filter-input" onClick={loadData}>Retry</button>
      </div>
    );
  }

  const { metrics, timeSeries } = data;

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>DataFlow Analytics</h1>
        <div className="filters">
          <select 
            name="category" 
            className="filter-input" 
            value={filters.category}
            onChange={handleFilterChange}
          >
            <option value="all">All Categories</option>
            <option value="Electronics">Electronics</option>
            <option value="Clothing">Clothing</option>
            <option value="Home">Home</option>
            <option value="Beauty">Beauty</option>
            <option value="Sports">Sports</option>
          </select>
          <input 
            type="date" 
            name="startDate"
            className="filter-input" 
            value={filters.startDate}
            onChange={handleFilterChange}
          />
          <input 
            type="date" 
            name="endDate"
            className="filter-input" 
            value={filters.endDate}
            onChange={handleFilterChange}
          />
        </div>
      </header>

      {loading && <div style={{ opacity: 0.5 }}>Refreshing...</div>}

      <div className="metrics-grid">
        <MetricsCard 
          title="Total Revenue" 
          value={`$${metrics?.totalRevenue?.toLocaleString()}`} 
          trend="12.5%" 
          trendUp={true} 
        />
        <MetricsCard 
          title="Orders" 
          value={metrics?.totalOrders?.toLocaleString()} 
          trend="5.2%" 
          trendUp={true} 
        />
        <MetricsCard 
          title="Avg Order Value" 
          value={`$${metrics?.avgOrderValue?.toLocaleString()}`} 
          trend="1.1%" 
          trendUp={false} 
        />
        <MetricsCard 
          title="Conversion Rate" 
          value={`${metrics?.conversionRate}%`} 
          trend="2.4%" 
          trendUp={true} 
        />
      </div>

      <div className="charts-grid">
        {timeSeries && timeSeries.length > 0 ? (
          <TimeSeriesChart data={timeSeries} title="Revenue Over Time" />
        ) : (
          <div className="card">
            <h3 className="card-title">Revenue Over Time</h3>
            <p style={{ color: 'var(--text-secondary)' }}>No data available for this period.</p>
          </div>
        )}
        
        <div className="card">
          <h3 className="card-title">Top Products</h3>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Product ID</th>
                  <th>Revenue</th>
                </tr>
              </thead>
              <tbody>
                {metrics?.topProducts?.map(p => (
                  <tr key={p.id}>
                    <td>{p.id}</td>
                    <td style={{ color: 'var(--success-color)' }}>${p.revenue.toLocaleString()}</td>
                  </tr>
                ))}
                {(!metrics?.topProducts || metrics.topProducts.length === 0) && (
                  <tr><td colSpan="2">No products found</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <DataTable data={metrics?.recentOrders} />
    </div>
  );
}
