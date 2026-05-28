import React from 'react';

export default function MetricsCard({ title, value, trend, trendUp }) {
  return (
    <div className="card">
      <h3 className="card-title">{title}</h3>
      <div className="metric-value">{value}</div>
      {trend && (
        <div className={`metric-trend ${trendUp ? 'trend-up' : 'trend-down'}`}>
          {trendUp ? '↑' : '↓'} {trend}
        </div>
      )}
    </div>
  );
}
