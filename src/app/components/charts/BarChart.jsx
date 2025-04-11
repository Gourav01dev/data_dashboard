import React from 'react';
import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useGetSalesDataQuery } from '../../store/services/dashboardApi';



const BarChart = ({ title, description, height,  width = '100%' }) => {
  const { data, error, isLoading, refetch } = useGetSalesDataQuery();

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
        <RechartsBarChart
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
          <Bar dataKey="value" fill="#0284c7" />
          <Bar dataKey="compareValue" fill="#94a3b8" />
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChart;