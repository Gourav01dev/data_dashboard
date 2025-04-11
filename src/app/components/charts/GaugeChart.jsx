import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const GaugeChart = ({ value, title, description, width = '100%', height = 300 }) => {
  

  const normalizedValue = Math.min(100, Math.max(0, value));
  

  const gaugeData = [
    { name: 'Complete', value: normalizedValue },
    { name: 'Incomplete', value: 100 - normalizedValue }
  ];
  
  
  let color = '#0284c7'; 
  if (normalizedValue < 30) {
    color = '#ef4444'; 
  } else if (normalizedValue < 70) {
    color = '#f59e0b'; 
  } else {
    color = '#10b981'; 
  }
  
  return (
    <div>
      
      <ResponsiveContainer width={width} height={height}>
        <PieChart>
          <Pie
            data={gaugeData}
            cx="50%"
            cy="50%"
            startAngle={180}
            endAngle={0}
            innerRadius={60}
            outerRadius={80}
            paddingAngle={0}
            dataKey="value"
          >
            <Cell fill={color} />
            <Cell fill="#e2e8f0" />
          </Pie>
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            style={{ fontSize: '2rem', fontWeight: 'bold', fill: color }}
          >
            {normalizedValue}%
          </text>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GaugeChart;