import React from 'react';
import { LineChart as RechartsLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useGetRevenueDataQuery } from '../../store/services/dashboardApi';


const LineChart = ({ title, description, width = '100%', height = 300 }) => {
    const { data, error, isLoading, refetch } = useGetRevenueDataQuery();

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
        <RechartsLineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#0284c7" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="compareValue" stroke="#94a3b8" />
        </RechartsLineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChart;