# Berrywise Full Stack Developer Round 2: Building with Jetro
## Comprehensive Submission Guide

**Submission Deadline:** 28/05/2026  
**Project Type:** Business Intelligence Web Application (Frontend + Backend)  
**Tech Stack:** JavaScript/Node.js  
**Key Focus:** Demonstrating depth with Jetro as an AI-native workspace

---

## 📋 Overview & Strategy

### What They're Looking For
- **AI-first thinking:** How you leverage Jetro's capabilities for development
- **Full-stack understanding:** Smart architecture decisions across frontend and backend
- **Real problem solving:** A solution that's useful, not just a demo
- **Depth of engagement:** Shows you've explored Jetro's full range of features
- **Clean submission:** Code quality, documentation, thoughtful approach

### Timeline (Working Backwards from 28/05/2026)
- **Days 1-2:** Explore Jetro, plan your BI application architecture
- **Days 3-4:** Develop backend API and core data pipeline
- **Days 5-6:** Build frontend dashboard components
- **Day 7:** Testing, documentation, polish, and write your approach note

---

## 🏗️ Application Architecture: BI Dashboard System

### Project Scope: "DataFlow Analytics"
A full-stack Business Intelligence application that demonstrates:
- Real-time data ingestion and transformation
- Smart data aggregation using AI-assisted analytics
- Interactive visualization dashboard
- RESTful API backend
- Production-ready code structure

### Why This Works for Jetro
✅ Shows you can use AI for code generation and testing  
✅ Demonstrates full-stack thinking (data pipeline → API → UI)  
✅ Real business value (BI is enterprise-grade)  
✅ Leverages Jetro for architecture design, code scaffolding, debugging  

---

## 🚀 Step-by-Step Development Flow

### Phase 1: Planning & Architecture (Using Jetro)

#### Step 1.1: Explore Jetro's Capabilities
- **Workspace creation:** Start a new workspace for "DataFlow BI"
- **AI assistant utilization:** Use Jetro's AI to help design your system
- **Document structure:**
  - Architecture diagram (ASCII or visual)
  - Data schema definition
  - API endpoint specifications
  - Frontend component hierarchy

**Jetro Features to Demonstrate:**
```
✓ Workspace templates
✓ AI code suggestions
✓ Multi-file project structure
✓ Real-time collaboration features
✓ Built-in debugging capabilities
```

#### Step 1.2: Define Your BI Domain
Choose one of these (or create your own):
1. **E-commerce Analytics** - Order trends, customer behavior
2. **Marketing Metrics** - Campaign performance, conversion funnels
3. **Financial Dashboard** - Revenue streams, expense tracking
4. **Social Media Analytics** - Engagement metrics, audience growth

**For this guide, we'll use:** E-Commerce Analytics Platform

---

### Phase 2: Backend Development

#### Step 2.1: Project Structure
```
dataflow-analytics/
├── backend/
│   ├── server.js
│   ├── package.json
│   ├── src/
│   │   ├── routes/
│   │   │   ├── metrics.js
│   │   │   ├── orders.js
│   │   │   └── dashboards.js
│   │   ├── controllers/
│   │   │   ├── analyticsController.js
│   │   │   └── dataController.js
│   │   ├── models/
│   │   │   ├── orderModel.js
│   │   │   └── metricsModel.js
│   │   ├── middleware/
│   │   │   └── errorHandler.js
│   │   └── utils/
│   │       ├── dataAggregator.js
│   │       └── logger.js
│   └── tests/
│       └── api.test.js
├── frontend/
│   ├── package.json
│   ├── public/
│   │   └── index.html
│   └── src/
│       ├── App.js
│       ├── components/
│       │   ├── Dashboard.js
│       │   ├── MetricsCard.js
│       │   ├── TimeSeriesChart.js
│       │   ├── ConversionFunnel.js
│       │   └── DataTable.js
│       ├── services/
│       │   └── api.js
│       └── styles/
│           └── dashboard.css
└── README.md
```

#### Step 2.2: Core Backend Implementation

**server.js** - Express setup with data middleware
```javascript
const express = require('express');
const cors = require('cors');
const analyticsRouter = require('./src/routes/metrics');
const errorHandler = require('./src/middleware/errorHandler');

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/metrics', analyticsRouter);
app.use('/api/orders', require('./src/routes/orders'));
app.use('/api/dashboards', require('./src/routes/dashboards'));

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'running', timestamp: new Date() });
});

// Error handling
app.use(errorHandler);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Analytics server running on port ${PORT}`);
});
```

**How to Use Jetro Here:**
- Use Jetro's AI to suggest error handling patterns
- Ask for middleware structure recommendations
- Generate test cases for your endpoints
- Get code review suggestions within Jetro

#### Step 2.3: Data Processing Layer

**src/utils/dataAggregator.js** - AI-assisted data transformation
```javascript
class DataAggregator {
  // Use Jetro to generate these aggregate functions
  
  aggregateOrderMetrics(orders) {
    return {
      totalOrders: orders.length,
      totalRevenue: orders.reduce((sum, o) => sum + o.amount, 0),
      avgOrderValue: this.calculateAverage(orders.map(o => o.amount)),
      conversionRate: this.calculateConversionRate(orders),
      topProducts: this.getTopProducts(orders),
      customerRetention: this.calculateRetention(orders)
    };
  }

  generateTimeSeriesData(orders, groupBy = 'day') {
    // Group and aggregate by time period
    const grouped = {};
    orders.forEach(order => {
      const key = this.getTimeKey(order.date, groupBy);
      grouped[key] = (grouped[key] || 0) + order.amount;
    });
    return Object.entries(grouped).map(([date, revenue]) => ({date, revenue}));
  }

  // ... more methods
}
```

**Jetro Integration Tips:**
- Ask AI to optimize aggregation algorithms
- Request suggestions for handling large datasets
- Generate performance benchmarks
- Get recommendations for caching strategies

---

### Phase 3: Frontend Development

#### Step 3.1: Main Dashboard Component

**src/components/Dashboard.js** - React-based visualization
```javascript
import React, { useState, useEffect } from 'react';
import MetricsCard from './MetricsCard';
import TimeSeriesChart from './TimeSeriesChart';
import DataTable from './DataTable';
import './dashboard.css';

export default function Dashboard() {
  const [metrics, setMetrics] = useState(null);
  const [timeSeries, setTimeSeries] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    startDate: new Date(Date.now() - 30*24*60*60*1000),
    endDate: new Date(),
    category: 'all'
  });

  useEffect(() => {
    fetchDashboardData();
  }, [filters]);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams(filters);
      const [metricsRes, seriesRes] = await Promise.all([
        fetch(`/api/metrics?${params}`),
        fetch(`/api/metrics/timeseries?${params}`)
      ]);

      setMetrics(await metricsRes.json());
      setTimeSeries(await seriesRes.json());
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="loading">Analyzing data...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Analytics Dashboard</h1>
        <div className="filters">
          <input type="date" value={filters.startDate} 
            onChange={(e) => setFilters({...filters, startDate: e.target.value})} />
          <input type="date" value={filters.endDate} 
            onChange={(e) => setFilters({...filters, endDate: e.target.value})} />
        </div>
      </header>

      <div className="metrics-grid">
        <MetricsCard label="Total Revenue" value={`$${metrics.totalRevenue}`} trend="+12%" />
        <MetricsCard label="Order Count" value={metrics.totalOrders} trend="+8%" />
        <MetricsCard label="Avg Order Value" value={`$${metrics.avgOrderValue}`} />
        <MetricsCard label="Conversion Rate" value={`${metrics.conversionRate}%`} />
      </div>

      <div className="charts-section">
        <TimeSeriesChart data={timeSeries} title="Revenue Over Time" />
        <ConversionFunnel data={metrics.funnel} />
      </div>

      <DataTable orders={metrics.recentOrders} />
    </div>
  );
}
```

#### Step 3.2: Reusable Components

**src/components/MetricsCard.js**
```javascript
import React from 'react';

export default function MetricsCard({ label, value, trend }) {
  return (
    <div className="metric-card">
      <p className="metric-label">{label}</p>
      <h2 className="metric-value">{value}</h2>
      {trend && <span className="trend">{trend}</span>}
    </div>
  );
}
```

**src/components/TimeSeriesChart.js** (Using Chart.js or similar)
```javascript
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

export default function TimeSeriesChart({ data, title }) {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    if (!data || !chartRef.current) return;

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    const ctx = chartRef.current.getContext('2d');
    chartInstanceRef.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: data.map(d => d.date),
        datasets: [{
          label: 'Revenue',
          data: data.map(d => d.revenue),
          borderColor: '#6366f1',
          backgroundColor: 'rgba(99, 102, 241, 0.1)',
          tension: 0.4
        }]
      },
      options: {
        responsive: true,
        plugins: { title: { text: title } }
      }
    });
  }, [data, title]);

  return <canvas ref={chartRef} />;
}
```

**How to Use Jetro:**
- Ask AI to generate component prop types
- Request accessibility improvements
- Get performance optimization suggestions
- Generate different chart types for various data

---

### Phase 4: Testing & Quality Assurance

#### Step 4.1: Backend Tests

**tests/api.test.js**
```javascript
const request = require('supertest');
const app = require('../server');

describe('Analytics API', () => {
  describe('GET /api/metrics', () => {
    it('should return aggregated metrics', async () => {
      const res = await request(app).get('/api/metrics');
      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty('totalRevenue');
      expect(res.body).toHaveProperty('totalOrders');
    });

    it('should filter by date range', async () => {
      const res = await request(app)
        .get('/api/metrics')
        .query({ startDate: '2024-01-01', endDate: '2024-12-31' });
      expect(res.status).toBe(200);
    });
  });

  describe('GET /api/dashboards', () => {
    it('should return saved dashboard configurations', async () => {
      const res = await request(app).get('/api/dashboards');
      expect(Array.isArray(res.body)).toBe(true);
    });
  });
});
```

**Use Jetro to:**
- Generate additional test cases
- Create integration tests
- Generate mock data for testing
- Validate error handling

#### Step 4.2: Frontend Testing

```javascript
// Using React Testing Library
import { render, screen } from '@testing-library/react';
import Dashboard from '../components/Dashboard';

test('renders metrics cards', () => {
  render(<Dashboard />);
  expect(screen.getByText('Total Revenue')).toBeInTheDocument();
});

test('filters data by date range', async () => {
  render(<Dashboard />);
  // Test filter interactions
});
```

---

## 📝 How to Leverage Jetro Throughout Development

### 1. Architecture & Design Phase
```
Prompt to Jetro AI:
"Design a scalable architecture for a BI dashboard that processes 
real-time order data. Should include data ingestion, aggregation, 
and visualization layers. Tech stack: Node.js, React, PostgreSQL"

Expected benefit: Get a structured architecture diagram and module breakdown
```

### 2. Code Generation Phase
```
Prompt: "Generate boilerplate for Express.js API with 5 endpoints for 
metrics, orders, dashboards with proper error handling and logging"

Expected benefit: Jump-start your server with production-ready structure
```

### 3. Debugging Phase
```
When stuck on a bug:
- Describe the issue in Jetro
- Share the error logs
- Ask for debugging strategies
- Get suggestions for alternative approaches

This shows you understand AI-assisted problem solving
```

### 4. Optimization Phase
```
Prompt: "Analyze this data aggregation function and suggest 
optimizations for handling 1M+ records. Include caching strategies."

Expected benefit: Learn performance best practices through AI collaboration
```

### 5. Testing Phase
```
Prompt: "Generate comprehensive test suite for the metrics controller 
including edge cases and error scenarios"

Expected benefit: Achieve higher test coverage with AI assistance
```

---

## 🎯 Key Features to Implement

### Backend Must-Haves
- ✅ RESTful API with proper HTTP methods
- ✅ Data aggregation and transformation
- ✅ Filtering and date range support
- ✅ Error handling middleware
- ✅ Request logging
- ✅ API documentation (Swagger/OpenAPI)

### Frontend Must-Haves
- ✅ Responsive dashboard layout
- ✅ Real-time data refresh
- ✅ Interactive filters
- ✅ Multiple chart types
- ✅ Data table with sorting/pagination
- ✅ Clean UI/UX design

### Using Jetro Effectively
- ✅ Use AI for code scaffolding
- ✅ Ask for refactoring suggestions
- ✅ Generate documentation
- ✅ Create test files
- ✅ Design system architecture
- ✅ Validate performance assumptions

---

## 📊 Recommended BI Metrics to Display

### E-Commerce Dashboard (Recommended)
```
KPIs to visualize:
- Total Revenue (with trend comparison)
- Order Count (daily/weekly/monthly)
- Average Order Value
- Customer Acquisition Cost
- Lifetime Value
- Conversion Rate by Channel
- Product Category Performance
- Customer Retention Rate
- Cart Abandonment Rate
- Top Customers/Products
```

### Visualizations to Build
1. **Line Chart** - Revenue over time
2. **Bar Chart** - Revenue by category
3. **Pie Chart** - Customer segments
4. **Funnel Chart** - Conversion funnel
5. **Heatmap** - Hourly/daily patterns
6. **Gauge Chart** - KPI progress

---

## 🚢 Deployment Checklist

Before submission, ensure:
- ✅ Clean, well-commented code
- ✅ All dependencies listed in package.json
- ✅ .env.example file with required variables
- ✅ README.md with setup instructions
- ✅ Sample data for testing
- ✅ No hardcoded secrets
- ✅ Proper error handling throughout
- ✅ Response formatting consistency
- ✅ CORS properly configured
- ✅ Production-ready logging

---

## 📄 Submission Email Template

```
Subject: Berrywise Round 2 Submission - DataFlow Analytics BI Platform

Dear Berrywise Team,

I'm excited to submit my Jetro-powered Business Intelligence application 
for the Full Stack Developer position.

## Project Overview
I built DataFlow Analytics, a real-time BI dashboard demonstrating full-stack 
architecture with Node.js backend and React frontend.

## How I Used Jetro
1. Architecture Design - Used Jetro's AI to design scalable system architecture
2. Code Generation - Leveraged AI-assisted scaffolding for API endpoints and components
3. Testing Strategy - Generated comprehensive test suites with edge case coverage
4. Optimization - Received performance improvement suggestions for data aggregation
5. Documentation - Created API documentation using Jetro's assistance

## Key Features
- Real-time metrics aggregation
- Interactive dashboard with filters
- RESTful API with 8+ endpoints
- Production-ready error handling
- Comprehensive test coverage (85%+)
- Responsive, accessible UI

## Repository Structure
All code is organized in: /dataflow-analytics
- Backend: Node.js + Express
- Frontend: React with Chart.js
- Tests: Jest + Supertest

## How to Run
[Include clear setup instructions]

## Reflection on Jetro
Jetro accelerated my development significantly. The AI assistant was invaluable for:
- Rapid prototyping and scaffolding
- Identifying architectural improvements early
- Suggesting optimizations without manual research
- Generating test coverage comprehensively

This experience reinforces how AI-native tools are becoming essential for 
modern development workflows.

Best regards,
[Your Name]
[GitHub Link to Submission]
```

---

## ⚡ Tips for Standing Out

### 1. Go Deeper Than Basic
Don't just build a simple CRUD app. Add:
- Advanced caching strategies
- Real-time data updates (WebSockets)
- Predictive metrics (trend analysis)
- Custom dashboard creation
- Export to CSV/PDF functionality
- User authentication and role-based access

### 2. Document Your Jetro Usage
Show them exactly how you used Jetro:
- Screenshots of prompts you asked
- How AI suggestions improved your code
- Specific features of Jetro you leveraged
- How you validated AI-generated code

### 3. Code Quality Signals
- Proper folder structure and naming
- Consistent error handling
- Meaningful variable and function names
- Comments for complex logic
- Configuration management (env files)
- Proper separation of concerns

### 4. Performance Considerations
- Implement pagination for large datasets
- Use database indexes effectively
- Optimize API response times
- Minimize frontend bundle size
- Cache frequently accessed data

### 5. UX/UI Polish
- Responsive design (mobile-friendly)
- Loading states and error messages
- Intuitive navigation
- Data visualization best practices
- Accessibility (WCAG compliance)

---

## 🔍 Self-Assessment Checklist

Before sending, ask yourself:

### Backend Quality
- [ ] API returns consistent JSON format
- [ ] Error messages are descriptive
- [ ] Handles edge cases (empty data, invalid dates)
- [ ] Performance is acceptable (< 200ms response time)
- [ ] Code is DRY (no repetition)
- [ ] Proper logging in place

### Frontend Quality
- [ ] All metrics display correctly
- [ ] Filters work as expected
- [ ] Charts render without errors
- [ ] Responsive on mobile devices
- [ ] No console errors/warnings
- [ ] Loading states present

### Jetro Demonstration
- [ ] Used Jetro features meaningfully (not just as a text editor)
- [ ] Can explain which Jetro features helped most
- [ ] Code shows AI assistance was beneficial
- [ ] Documented your approach to using Jetro

### Documentation
- [ ] README is clear and complete
- [ ] Setup instructions are accurate
- [ ] API endpoints are documented
- [ ] Code comments explain "why", not "what"

---

## 🎓 Learning Resources While Building

- **Jetro Documentation:** Explore all available AI features
- **Express.js Guide:** Best practices for API design
- **React Docs:** Component patterns and hooks
- **Chart.js Examples:** Visualization best practices
- **REST API Best Practices:** Proper HTTP conventions

---

## Final Thoughts

This submission is your opportunity to show Berrywise that you:
1. Understand full-stack architecture
2. Can use AI tools effectively and critically
3. Write production-quality code
4. Think about user needs and experience
5. Approach problems systematically

The depth of your engagement with Jetro is key. Don't just use it as a code 
editor — genuinely collaborate with it, ask it challenging questions, and 
explain how those interactions improved your final product.

**Good luck! Submit by 28/05/2026.**

---

*Last updated: May 2026*
