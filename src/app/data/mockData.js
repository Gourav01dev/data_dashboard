export const activityData = Array(7)
    .fill(0)
    .map((_, i) => 
      Array(24)
        .fill(0)
        .map((_, j) => ({ 
          day: i, 
          hour: j, 
          value: Math.floor(Math.random() * 100) 
        }))
    ).flat();
  
