import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Dashboard from '../src/components/Dashboard';
import * as api from '../src/api';

// Mock the API and Chart.js to avoid canvas errors in JSDOM
vi.mock('../src/api');
vi.mock('react-chartjs-2', () => ({
  Line: () => <div data-testid="mock-line-chart"></div>
}));

describe('Dashboard Component', () => {
  const mockData = {
    metrics: {
      totalRevenue: 50000,
      totalOrders: 200,
      avgOrderValue: 250,
      conversionRate: 3.5,
      recentOrders: [
        { id: '1', date: '2026-05-28T10:00:00Z', amount: 150, category: 'Electronics', status: 'completed' }
      ]
    },
    timeSeries: [
      { date: '2026-05-28', revenue: 1500 }
    ]
  };

  it('renders loading state initially', () => {
    api.fetchDashboardData.mockReturnValue(new Promise(() => {})); // Never resolves
    render(<Dashboard />);
    expect(screen.getByText('Analyzing data...')).toBeInTheDocument();
  });

  it('renders metrics after data loads', async () => {
    api.fetchDashboardData.mockResolvedValue(mockData);
    render(<Dashboard />);
    
    await waitFor(() => {
      expect(screen.getByText('DataFlow Analytics')).toBeInTheDocument();
    });

    expect(screen.getByText('$50,000')).toBeInTheDocument();
    expect(screen.getByText('200')).toBeInTheDocument();
    expect(screen.getByText('$250')).toBeInTheDocument();
    expect(screen.getByText('3.5%')).toBeInTheDocument();
  });

  it('renders error state on API failure', async () => {
    api.fetchDashboardData.mockRejectedValue(new Error('Network Error'));
    render(<Dashboard />);
    
    await waitFor(() => {
      expect(screen.getByText(/Network Error/)).toBeInTheDocument();
    });
  });
});
