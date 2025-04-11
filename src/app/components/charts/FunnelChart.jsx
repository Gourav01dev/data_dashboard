import React from "react";
import { useGetConversionDataQuery } from '../../store/services/dashboardApi';


const FunnelChart = ({
  title,
  description,
  width = "100%",
  height = 400,
}) => {
    const { data, error, isLoading, refetch } = useGetConversionDataQuery();
  
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

  const maxValue = Math.max(...data.map((item) => item.value));

  const getWidth = (value) => {
    return (value / maxValue) * 100;
  };

  const getColor = (index) => {
    const colors = ["#0284c7", "#0ea5e9", "#38bdf8", "#7dd3fc", "#bae6fd"];
    return colors[index % colors.length];
  };

  return (
    <div>
     

      <div style={{ height: height, width: width, position: "relative" }}>
        <div className="flex flex-col space-y-4">
          {data.map((item, index) => (
            <div key={index} className="flex items-center">
              <div
                className="h-10 rounded-sm"
                style={{
                  width: `${getWidth(item.value)}%`,
                  backgroundColor: getColor(index),
                  transition: "width 0.3s ease",
                }}
              ></div>
              <div className="ml-2 flex justify-between items-center">
                <span className="text-sm font-medium">{item.name}</span>
                <span className="text-sm text-gray-500 ml-2">{item.value}</span>
              </div>
            </div>
          ))}
        </div>

       
        {data.length > 1 && (
          <div className="mt-3 mb-3 border-t border-slate-200 pt-4 overflow-x-auto">
            <h4 className="text-sm font-semibold text-slate-700 mb-2">
              Conversion Rates
            </h4>
            <div className="space-y-2 text-xs text-slate-600 min-w-[250px]">
              {data.slice(0, -1).map((item, index) => {
                const next = data[index + 1];
                const rate = ((next.value / item.value) * 100).toFixed(1);
                return (
                  <div
                    key={`conv-${index}`}
                    className="flex justify-between whitespace-nowrap"
                  >
                    <span className="truncate">{`${item.name} → ${next.name}`}</span>
                    <span className="font-medium text-slate-700">{rate}%</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FunnelChart;
