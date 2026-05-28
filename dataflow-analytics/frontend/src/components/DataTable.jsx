import React from 'react';

export default function DataTable({ data }) {
  if (!data || data.length === 0) {
    return (
      <div className="card">
        <h3 className="card-title">Recent Orders</h3>
        <p style={{ color: 'var(--text-secondary)' }}>No orders found for this period.</p>
      </div>
    );
  }

  return (
    <div className="card">
      <h3 className="card-title">Recent Orders</h3>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Category</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map(order => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{new Date(order.date).toLocaleDateString()}</td>
                <td>${order.amount.toFixed(2)}</td>
                <td>{order.category}</td>
                <td>
                  <span className={`status-badge status-${order.status.toLowerCase()}`}>
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
