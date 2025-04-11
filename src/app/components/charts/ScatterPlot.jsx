import React from 'react';
import { ScatterChart as RechartsScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useGetPerformanceDataQuery } from '../../store/services/dashboardApi';

const ScatterPlot = ({ title, description, width = '100%', height = 300 }) => {
    const { data, error, isLoading, refetch } = useGetPerformanceDataQuery();
  
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
        <RechartsScatterChart
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid />
          <XAxis type="number" dataKey="x" name="cost" unit="$" />
          <YAxis type="number" dataKey="y" name="results" unit="%" />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Legend />
          <Scatter name="Marketing Campaigns" data={data} fill="#0284c7" shape="circle" />
        </RechartsScatterChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ScatterPlot;