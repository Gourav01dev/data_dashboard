import React from 'react';

const HeatMap = ({ data, title, description, width = '100%', height = 300 }) => {
  
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const hours = Array.from({ length: 24 }, (_, i) => i);
  
  const maxValue = Math.max(...data.map(item => item.value));
  
  const getColor = (value) => {
    const normalizedValue = value / maxValue;
    const intensity = Math.floor(220 - normalizedValue * 220);
    return `rgb(${intensity}, ${intensity}, 255)`;
  };
  
  return (
    <div>
      <div className="overflow-x-auto">
        <div className="flex mb-1">
          <div className="w-12"></div>
          {hours.map((hour) => (
            <div key={hour} className="w-6 text-xs text-center text-gray-500">
              {hour}
            </div>
          ))}
        </div>
        
        {days.map((day, dayIndex) => (
          <div key={day} className="flex mb-1 items-center">
            <div className="w-12 text-xs text-gray-500">{day}</div>
            {hours.map((hour) => {
              const cellData = data.find(item => item.day === dayIndex && item.hour === hour);
              const value = cellData ? cellData.value : 0;
              
              return (
                <div
                  key={hour}
                  className="w-6 h-6 rounded-sm"
                  style={{ backgroundColor: getColor(value) }}
                  title={`${day} ${hour}:00 - Value: ${value}`}
                ></div>
              );
            })}
          </div>
        ))}
      </div>
      
      {/* Simple legend */}
      <div className="flex items-center justify-end mt-4">
        <div className="flex items-center">
          <div className="w-4 h-4 rounded-sm bg-blue-100 mr-1"></div>
          <span className="text-xs text-gray-500">Low</span>
        </div>
        <div className="flex items-center ml-2">
          <div className="w-4 h-4 rounded-sm bg-blue-500 mr-1"></div>
          <span className="text-xs text-gray-500">High</span>
        </div>
      </div>
    </div>
  );
};

export default HeatMap;