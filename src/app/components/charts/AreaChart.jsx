import React from 'react';
import { AreaChart as RechartsAreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useGetVisitorsDataQuery } from '../../store/services/dashboardApi';


const AreaChart = ({ title, description, width = '100%', height = 300 }) => {
  const { data, error, isLoading, refetch } = useGetVisitorsDataQuery();
  
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
    <div className="bg-white p-6">
     
      <ResponsiveContainer width={width} height={height}>
        <RechartsAreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="value" stroke="#0284c7" fill="#0ea5e9" fillOpacity={0.3} />
          <Area type="monotone" dataKey="compareValue" stroke="#64748b" fill="#94a3b8" fillOpacity={0.3} />
        </RechartsAreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AreaChart;