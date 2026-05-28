const BASE_URL = 'http://localhost:3001/api';

export const fetchDashboardData = async (filters) => {
  const params = new URLSearchParams(filters);
  
  const [metricsRes, seriesRes] = await Promise.all([
    fetch(`${BASE_URL}/metrics?${params}`),
    fetch(`${BASE_URL}/metrics/timeseries?${params}`)
  ]);

  if (!metricsRes.ok || !seriesRes.ok) {
    throw new Error('Failed to fetch dashboard data');
  }

  const metrics = await metricsRes.json();
  const timeSeries = await seriesRes.json();

  return { metrics, timeSeries };
};
