NEXT.JS DASHBOARD PROJECT
==========================

A dynamic and performance-optimized dashboard application built with Next.js v15.2.4 and React, integrating a variety of chart types using react-chartjs-2. This project emphasizes reusability, clean architecture, and scalable data management.

--------------------------------------------------
FEATURES
--------------------------------------------------

- React-Chartjs-2 integration to render multiple chart types.
- Stateless & reusable chart components using props only.
- Modular structure: each chart is a separate component.
- Axios interceptor configured for consistent API handling.
- Mock data handled through Redux, sourced from JSON files in /public/api/mock/.
- Custom Redux slice functions for centralized data fetching logic.
- Individual loading indicators per chart.
- Virtualization implemented using react-virtuoso and Intersection Observer for performance.
- Dynamic imports of chart components in the root-level page.js.
- Error Boundaries for graceful UI error handling.

--------------------------------------------------
TECH STACK
--------------------------------------------------

- Next.js v15.2.4
- React (latest)
- react-chartjs-2
- Redux Toolkit
- Axios
- react-virtuoso
- Intersection Observer API
- Custom Error Boundaries

--------------------------------------------------
FOLDER STRUCTURE OVERVIEW
--------------------------------------------------
dashboard-project/
├── .gitignore
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
├── README.md
├── public/
│   ├── favicon.ico
│   └── images/
├── src/
│   ├── app/
│   │   ├── layout.js
│   │   ├── page.js
│   │   ├── loading.js
│   │   ├── error.js
│   │   └── globals.css
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Sidebar.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── DashboardLayout.jsx
│   │   ├── ui/
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── Badge.jsx
│   │   │   └── Dropdown.jsx
│   │   └── charts/
│   │       ├── BarChart.jsx
│   │       ├── LineChart.jsx
│   │       ├── PieChart.jsx
│   │       ├── AreaChart.jsx
│   │       ├── ScatterPlot.jsx
│   │       ├── DonutChart.jsx
│   │       ├── GaugeChart.jsx
│   │       ├── HeatMap.jsx
│   │       ├── RadarChart.jsx
│   │       └── FunnelChart.jsx
│   
│   ├── data/
│   │   ├── mockData.js
│   │ 

--------------------------------------------------
GETTING STARTED
--------------------------------------------------

1. Install dependencies

   npm install

2. Start the development server

   npm run dev

   App will be available at: http://localhost:3000

3. Build for production

   npm run build

--------------------------------------------------
NOTES
--------------------------------------------------

- All chart components are stateless and dynamically imported.
- Data is managed through Redux and fetched from local JSON files.
- Virtualization ensures high performance even with many charts.
- Error boundaries prevent crashes and improve reliability.

--------------------------------------------------
FEEDBACK
--------------------------------------------------

Contributions and feedback are welcome! Feel free to open an issue or submit a pull request.
