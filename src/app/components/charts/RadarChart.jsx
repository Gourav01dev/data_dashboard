import React from 'react';
import { RadarChart as RechartsRadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend, ResponsiveContainer } from 'recharts';
import { useGetUserStatsDataQuery } from '../../store/services/dashboardApi';


const RadarChart = ({ title, description, width = '100%', height = 300 }) => {
  const { data, error, isLoading, refetch } = useGetUserStatsDataQuery();

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
        <RechartsRadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 150]} />
          <Radar name="Current" dataKey="A" stroke="#0284c7" fill="#0ea5e9" fillOpacity={0.5} />
          <Radar name="Previous" dataKey="B" stroke="#64748b" fill="#94a3b8" fillOpacity={0.5} />
          <Legend />
        </RechartsRadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RadarChart;