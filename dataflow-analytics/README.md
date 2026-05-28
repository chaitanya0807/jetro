# DataFlow Analytics

DataFlow Analytics is a full-stack Business Intelligence dashboard for e-commerce. It features real-time data aggregation, interactive charting, and a clean modern dark-mode interface. 

This project was built as a submission for the **Berrywise Full Stack Developer** assessment, heavily leveraging Jetro as an AI-native workspace.

## Features
- **Express.js API Backend**: Modular architecture with aggregated metrics, time series data, and pagination.
- **React Frontend**: Premium dark-mode aesthetic with Chart.js visualizations.
- **Test Coverage**: Includes Jest tests for the backend API and React Testing Library tests for frontend components.
- **Real-Time Simulation**: Mock data generator simulates thousands of orders dynamically.

## Tech Stack
- **Frontend**: React (Vite), Chart.js, React-Chartjs-2, Vanilla CSS.
- **Backend**: Node.js, Express.js, CORS.
- **Testing**: Jest, Supertest, Vitest, React Testing Library.

## Jetro AI Integration
During development, Jetro was utilized for:
1. **Architecture & Planning**: Generated the project structure and data models.
2. **Code Scaffolding**: Built the base Express server and React components.
3. **Data Aggregation**: Optimized the `DataAggregator` logic to efficiently calculate conversion rates, average order values, and funnel metrics.
4. **Testing**: Automated the creation of test files for both backend and frontend layers.

## Quick Start

### 1. Run the Backend
```bash
cd backend
npm install
npm start
```
The API will run on `http://localhost:3001`.

### 2. Run the Frontend
In a new terminal:
```bash
cd frontend
npm install
npm run dev
```
The frontend will run on `http://localhost:5173`.

### 3. Run Tests
**Backend Tests:**
```bash
cd backend
npm test
```

**Frontend Tests:**
```bash
cd frontend
npm test
```
