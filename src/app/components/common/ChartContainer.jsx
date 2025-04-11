// components/common/ChartContainer.js

import React, { Suspense } from 'react';
import { useInView } from 'react-intersection-observer';
import ErrorBoundary from '../layout/ErrorBoundry';

export default function ChartContainer({
  ChartComponent,
  title,
  description,
  height = 300,
  data,
  loading = false,
  containerProps = {},
  chartProps = {},
  className = "",
  ...rest
}) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '200px'
  });
  
  
  const containerClass = `
    border border-[#e2e8f0] rounded-2xl shadow-md p-5 bg-white
    hover:shadow-lg transition-shadow duration-300 ${className}
  `;
  
  return (
    <div 
      ref={ref} 
      className={containerClass}
      style={{ minHeight: height }}
      {...containerProps}
    >
      <h3 className="text-lg font-semibold text-slate-800">{title}</h3>
      {description && <p className="text-xs text-slate-500 mb-4">{description}</p>}
      
      {inView ? (
        <ErrorBoundary fallback={<div className="text-red-500">Failed to load chart</div>}>
          <Suspense fallback={
            <div className="flex items-center justify-center bg-slate-50 animate-pulse rounded" 
                 style={{ height: height - 80 }}>
              <span className="text-slate-400">Loading chart...</span>
            </div>
          }>
            {loading ? (
              <div className="flex items-center justify-center bg-slate-50 animate-pulse rounded"
                   style={{ height: height - 80 }}>
                <span className="text-slate-400">Loading data...</span>
              </div>
            ) : (
              <ChartComponent 
                height={height - 80}
                data={data}
                {...chartProps}
                {...rest}
              />
            )}
          </Suspense>
        </ErrorBoundary>
      ) : (
        <div className="flex items-center justify-center bg-slate-50 animate-pulse rounded"
             style={{ height: height - 80 }}>
          <span className="text-slate-400">Loading...</span>
        </div>
      )}
    </div>
  );
}