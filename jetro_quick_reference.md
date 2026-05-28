# Jetro Quick Reference Guide for Berrywise Submission

## Effective Jetro Prompts by Phase

### PHASE 1: Architecture & Planning

**Prompt 1: System Design**
```
I'm building a Business Intelligence dashboard for e-commerce analytics.
I need to display:
- Real-time sales metrics (revenue, orders, avg order value)
- Conversion funnel data
- Time series revenue trends
- Top products and customers
- Date range filtering

Tech stack: Node.js + Express backend, React frontend.

Design a scalable architecture with:
1. Data flow from source to visualization
2. API endpoint structure
3. Database schema for metrics
4. Frontend component hierarchy
5. Caching strategy for performance

Focus on handling high-volume data efficiently.
```

**Expected Jetro Output:**
- Architecture diagram
- Component/module breakdown
- API design recommendations
- Database structure suggestions
- Performance considerations

**Prompt 2: API Specification**
```
Create a detailed REST API specification for an analytics dashboard.

Endpoints needed:
1. GET /api/metrics - Get aggregated metrics for date range
2. GET /api/metrics/timeseries - Get revenue over time
3. GET /api/orders - Get filtered orders with pagination
4. GET /api/dashboards - Get saved dashboard configs
5. POST /api/dashboards - Save custom dashboard
6. GET /api/products/top - Get top performing products
7. GET /api/funnel - Get conversion funnel data

For each endpoint, specify:
- Request parameters (filters, pagination)
- Response schema
- Error responses
- Performance considerations
- Caching strategy

Use JSON request/response format.
```

---

### PHASE 2: Backend Development

**Prompt 3: Express.js Project Boilerplate**
```
Generate an Express.js project structure with:
- Proper folder organization (routes, controllers, models, middleware)
- Error handling middleware
- CORS configuration
- Request/response logging
- Environment variable setup
- MongoDB/PostgreSQL connection setup

Include:
- package.json with necessary dependencies
- .env.example file
- Basic server.js setup
- One example route with full implementation

Focus on production-ready code patterns.
```

**Prompt 4: Data Aggregation Functions**
```
Create JavaScript functions to aggregate e-commerce order data:

Input: Array of order objects with:
- id, date, amount, category, customerId, status

Functions needed:
1. aggregateByDate(orders) - Group revenue by date
2. aggregateByCategory(orders) - Total & avg by category
3. calculateConversionRate(orders) - Orders/visits ratio
4. getTopProducts(orders, limit=10) - Best sellers
5. calculateCustomerMetrics(orders) - Retention, LTV, etc
6. generateFunnel(orders) - Multi-stage conversion funnel

Optimize for large datasets (1M+ records).
Include caching considerations.
```

**Prompt 5: Error Handling & Logging**
```
Design a comprehensive error handling system for REST API:

Requirements:
- Standardized error response format
- HTTP status code mapping
- Request/response logging with timestamps
- Error severity levels (info, warn, error, critical)
- Graceful degradation for partial failures
- Exception tracking for debugging

Provide:
- Middleware implementation
- Error classes/types
- Logger utility
- Example usage in route handlers
```

**Prompt 6: Database Queries & Optimization**
```
Write optimized SQL queries for analytics dashboard:

Tables:
- orders (id, date, amount, status, customer_id, product_id)
- customers (id, name, email, created_at)
- products (id, name, category, price)

Required queries:
1. Total revenue for date range with filters
2. Order count and metrics by time period
3. Top 10 products by revenue
4. Customer retention calculation
5. Conversion funnel stages
6. Time series data (daily/weekly aggregation)

Include:
- Index recommendations
- Query optimization tips
- Expected performance
- Caching strategies
```

---

### PHASE 3: Frontend Development

**Prompt 7: React Dashboard Layout**
```
Design a React dashboard component for e-commerce analytics.

Layout requirements:
- Header with title and date range filters
- 4 KPI metric cards (Revenue, Orders, Avg Order Value, Conversion Rate)
- Revenue time series chart (Chart.js)
- Conversion funnel visualization
- Top products table with sorting/pagination
- Responsive design (mobile, tablet, desktop)

Provide:
- Component structure with props
- State management approach (hooks)
- API integration pattern
- Loading and error states
- CSS structure for responsive layout
```

**Prompt 8: Chart Components**
```
Create reusable chart components using Chart.js and React:

Components needed:
1. TimeSeriesChart - Line chart for trends
2. CategoryChart - Bar chart for comparisons
3. FunnelChart - Funnel visualization
4. MetricsCard - KPI display with trend indicator
5. DataTable - Sortable, paginated table

For each component:
- Props interface
- Data transformation logic
- Responsive sizing
- Dark mode support
- Accessibility (ARIA labels)

Include example usage and data format.
```

**Prompt 9: API Service Layer**
```
Create a service layer for API communication in React:

Requirements:
- Centralized API client
- Error handling with retry logic
- Request/response interceptors
- Caching for repeated requests
- Loading states management
- Base URL configuration

Provide:
- api.js service file
- useApi custom hook for components
- Error boundary component
- Example: fetching dashboard data with loading state

Use async/await pattern.
```

---

### PHASE 4: Testing & Quality

**Prompt 10: Backend Unit Tests**
```
Generate Jest test suite for Express API:

Endpoints to test:
- GET /api/metrics (with and without filters)
- GET /api/metrics/timeseries
- GET /api/orders (with pagination)
- GET /api/dashboards
- POST /api/dashboards

For each test:
- Successful response scenarios
- Filter/parameter validation
- Error cases (bad input, missing data)
- Edge cases (empty results, large datasets)
- Performance validation (response time)

Include:
- Mock data setup
- Database mocking strategy
- Assertion patterns
- Test organization structure
```

**Prompt 11: Frontend Component Tests**
```
Create React Testing Library tests for dashboard components:

Components to test:
- Dashboard (main component)
- MetricsCard
- TimeSeriesChart
- DataTable
- DateRangeFilter

For each component:
- Rendering tests
- User interaction tests (clicking, typing)
- Data loading states
- Error boundary tests
- Props validation

Include:
- Mock API responses
- User event testing
- Assertion patterns
- Custom render helpers

Use best practices for React Testing Library.
```

**Prompt 12: Performance Analysis**
```
Analyze and optimize the following for performance:

1. Backend API response times
   - Identify slow queries
   - Recommend indexes
   - Suggest caching layers
   - Connection pooling strategy

2. Frontend rendering
   - Component re-render analysis
   - Bundle size optimization
   - Image/asset optimization
   - Code splitting recommendations

3. Data transfer
   - Pagination strategies
   - Compression options
   - Lazy loading implementation

Provide before/after metrics and specific code optimizations.
```

---

## Jetro Features to Specifically Highlight in Your Submission

### 1. Code Generation
Emphasize in your submission note:
```
"I used Jetro's AI-assisted code generation for:
- Express.js boilerplate (saved ~2 hours)
- React component scaffolding (10+ components)
- Test file generation (Jest/RTL)
- This accelerated development while ensuring best practices"
```

### 2. Architecture Review
```
"Jetro helped me validate my architecture by:
- Reviewing proposed data flow
- Suggesting optimization points
- Identifying potential bottlenecks
- Recommending caching strategies
This iterative feedback improved system design significantly."
```

### 3. Code Review & Refactoring
```
"I leveraged Jetro for code quality by:
- Asking for optimization suggestions
- Getting DRY principle reviews
- Receiving performance tips
- Validating error handling patterns
Multiple review passes improved code quality."
```

### 4. Test Generation
```
"Jetro helped achieve 85%+ test coverage by:
- Generating test cases including edge cases
- Creating mock data and fixtures
- Suggesting test organization
- Validating test assertions
This reduced manual testing effort significantly."
```

### 5. Documentation
```
"I used Jetro to create:
- API documentation (OpenAPI/Swagger)
- README with setup instructions
- Code comments and docstrings
- Architecture documentation
- Deployment guides
This ensured comprehensive project documentation."
```

---

## Key Phrases for Your Submission Email

Use these in your approach note to show depth:

✅ **"I collaborated with Jetro's AI to..."**
✅ **"Jetro suggested performance improvements by..."**
✅ **"Through iterative prompting with Jetro, I discovered..."**
✅ **"The AI-assisted architecture review identified..."**
✅ **"By leveraging Jetro's code generation, I..."**
✅ **"Jetro's test generation helped me validate..."**

❌ Avoid:
- "I used Jetro to write all my code" (shows no critical thinking)
- "Jetro generated everything" (no demonstration of understanding)
- "I just copied Jetro's output" (no validation/testing shown)

---

## Sample Jetro Usage Pattern (for your note)

```
My Jetro Development Process:

1. IDEATION PHASE
   Prompt: "Design a scalable BI dashboard architecture..."
   → Got: Architecture diagram, module breakdown
   → Refined: Based on my specific requirements
   → Implemented: Custom adaptations for e-commerce context

2. SCAFFOLDING PHASE
   Prompt: "Generate Express.js boilerplate for analytics API..."
   → Got: Project structure, base files
   → Validated: Against my architecture design
   → Enhanced: Added custom middleware, logging

3. DEVELOPMENT PHASE
   Prompt: "Create data aggregation functions for metrics..."
   → Got: Base implementations
   → Tested: Performance benchmarks
   → Optimized: Added caching, indexing

4. TESTING PHASE
   Prompt: "Generate comprehensive Jest test suite..."
   → Got: Test structure, edge cases
   → Executed: All tests passing
   → Extended: Added integration tests

5. OPTIMIZATION PHASE
   Prompt: "Analyze this code for performance bottlenecks..."
   → Got: Specific optimization suggestions
   → Implemented: Database indexing, API caching
   → Measured: 40% response time improvement

6. DOCUMENTATION PHASE
   Prompt: "Create OpenAPI documentation for these endpoints..."
   → Got: API spec
   → Validated: Against actual implementations
   → Deployed: With setup guides

Key insight: Jetro accelerated development while I maintained critical oversight,
testing all generated code and validating architectural decisions.
```

---

## What NOT to Do

❌ **Don't:**
- Copy-paste Jetro output without understanding
- Use same prompts everyone uses
- Ignore Jetro's suggestions about performance
- Skip testing what Jetro generates
- Forget to validate security (no hardcoded secrets!)
- Submit code you didn't run/test
- Claim Jetro did all the work

✅ **DO:**
- Use Jetro as a collaborative tool
- Ask follow-up questions on suggestions
- Test and validate all generated code
- Optimize based on Jetro recommendations
- Show your critical evaluation
- Demonstrate understanding of the codebase
- Highlight specific Jetro features that helped

---

## Quick Command Reference

### Start a Backend Project with Jetro
```
Prompt: "I need to set up a Node.js + Express project for analytics.
Generate:
1. package.json with all dependencies
2. Project folder structure
3. server.js entry point
4. .env.example
5. Basic error handling middleware

Target: RESTful API for e-commerce analytics"
```

### Generate a Complete API Endpoint
```
Prompt: "Create a complete REST endpoint GET /api/metrics that:
- Accepts date range filters (startDate, endDate)
- Accepts category filter (optional)
- Returns aggregated metrics:
  * totalRevenue
  * orderCount
  * avgOrderValue
  * conversionRate
- Includes error handling
- Includes request logging
- Optimized for large datasets

Tech: Express.js, PostgreSQL"
```

### Create Interactive Dashboard Component
```
Prompt: "Build a React dashboard component that:
- Displays 4 KPI metrics cards
- Includes date range date picker
- Has responsive grid layout
- Shows loading state during data fetch
- Displays error messages
- Fetches data from /api/metrics endpoint
- Updates on filter change

Use Chart.js for charts, React hooks for state."
```

---

## Final Submission Checklist Using Jetro

Before you submit, ask Jetro these final questions:

```
1. Security Check:
   "Review this code for security vulnerabilities:
   - Authentication/authorization
   - SQL injection prevention
   - XSS protection
   - Sensitive data exposure
   - API rate limiting"

2. Performance Check:
   "Analyze my code for performance issues:
   - Database query optimization
   - Frontend rendering efficiency
   - Bundle size concerns
   - API response times
   - Caching opportunities"

3. Quality Check:
   "Review code quality:
   - Test coverage gaps
   - DRY principle violations
   - Error handling completeness
   - Documentation gaps
   - Type safety (if using TypeScript)"

4. Readability Check:
   "Ensure code is production-ready:
   - Consistent naming conventions
   - Proper comments for complex logic
   - Clear function signatures
   - Meaningful variable names
   - No dead code"
```

---

*Use these prompts as starting points. Personalize them based on your specific implementation choices.*
