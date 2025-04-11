import React from 'react';
import { PieChart as RechartsPieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { useGetDistributionDataQuery } from '../../store/services/dashboardApi';


const COLORS = ['#0284c7', '#38bdf8', '#7dd3fc', '#93c5fd', '#bae6fd', '#e0f2fe'];

const PieChart = ({ title, description, width = '100%', height = 300 }) => {
    const { data, error, isLoading, refetch } = useGetDistributionDataQuery();
  
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center h-64 text-red-500">
        <p className="mb-3">Failed to load chart data</p>
        <button 
          onClick={refetch}
          className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div>
     
      
      <ResponsiveContainer width={width} height={height}>
        <RechartsPieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend layout="vertical" verticalAlign="middle" align="right" />
        </RechartsPieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChart;