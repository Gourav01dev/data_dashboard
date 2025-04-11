'use client';

import React, { useCallback, Suspense } from 'react';
import { useInView } from 'react-intersection-observer';
import { Virtuoso } from 'react-virtuoso';
import CountUp from 'react-countup';


import dynamic from 'next/dynamic';


const DashboardLayout = dynamic(() => import('@/app/components/layout/DashboardLayout'), { 
  ssr: false,
  loading: () => <div className="min-h-screen bg-slate-50 animate-pulse"></div>
});


const LazyChart = ({ Component, title, description, height, data, value, ...props }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '200px'
  });

  return (
    <div ref={ref} className="border border-[#e2e8f0] rounded-2xl shadow-md p-5 bg-white">
       {title && <h3 className="text-xl font-semibold text-[#0284c7] mb-1">{title}</h3>}
      {description && <p className="text-sm text-slate-500 mb-4">{description}</p>}
      
      {inView ? (
        <ErrorBoundary fallback={<div className="text-red-500">Failed to load chart</div>}>
          <Suspense fallback={<div className="flex items-center justify-center h-60 bg-slate-50 animate-pulse rounded">Loading...</div>}>
            <Component 
              title={title} 
              description={description} 
              height={height} 
              data={data}
              value={value}
              {...props} 
            />
          </Suspense>
        </ErrorBoundary>
      ) : (
        <div className="flex items-center justify-center h-60 bg-slate-50 animate-pulse rounded">
          <span className="text-slate-400">Loading chart...</span>
        </div>
      )}
    </div>
  );
};


const BarChart = dynamic(() => import('@/app/components/charts/BarChart'), { ssr: false });
const LineChart = dynamic(() => import('@/app/components/charts/LineChart'), { ssr: false });
const PieChart = dynamic(() => import('@/app/components/charts/PieChart'), { ssr: false });
const AreaChart = dynamic(() => import('@/app/components/charts/AreaChart'), { ssr: false });
const ScatterPlot = dynamic(() => import('@/app/components/charts/ScatterPlot'), { ssr: false });
const DonutChart = dynamic(() => import('@/app/components/charts/DonutChart'), { ssr: false });
const GaugeChart = dynamic(() => import('@/app/components/charts/GaugeChart'), { ssr: false });
const HeatMap = dynamic(() => import('@/app/components/charts/HeatMap'), { ssr: false });
const RadarChart = dynamic(() => import('@/app/components/charts/RadarChart'), { ssr: false });
const FunnelChart = dynamic(() => import('@/app/components/charts/FunnelChart'), { ssr: false });



import { activityData } from '@/app/data/mockData';

import ErrorBoundary from './components/layout/ErrorBoundry';
import { useSelector } from 'react-redux';

export default function Home() {
  


  const summaryCards = [
    {
      title: 'Total Revenue',
      value: '$24,345',
      change: '+12%',
      color: 'text-green-600',
      bg: 'bg-gradient-to-tr from-white to-[#e0f2fe]'
    },
    {
      title: 'Active Users',
      value: '7,842',
      change: '+5.3%',
      color: 'text-green-600',
      bg: 'bg-gradient-to-tr from-white to-[#e2e8f0]'
    },
    {
      title: 'Bounce Rate',
      value: '42.8%',
      change: '-3.1%',
      color: 'text-red-500',
      bg: 'bg-gradient-to-tr from-white to-[#fef9c3]'
    },
    {
      title: 'Avg. Session',
      value: '4m 30s',
      change: '+12s',
      color: 'text-green-600',
      bg: 'bg-gradient-to-tr from-white to-[#fce7f3]'
    }
  ];

 
   const dashboardItems = [

    {
      type: 'header',
      content: (
        <div className="mb-6">
          <h1 className="text-4xl font-bold text-[#0284c7]">Analytics Dashboard</h1>
          <p className="text-sm text-slate-600 mt-1">Welcome to your business analytics overview.</p>
        </div>
      )
    },
 
    {
      type: 'summary',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
         {summaryCards.map((card, index) => {

  const rawValue = parseFloat(card.value.replace(/[^0-9.]/g, '')); // removes $, commas etc.
  const isCurrency = card.value.includes('$');
  const hasDecimal = card.value.includes('.');

  return (
    <div
      key={index}
      className={`border border-[#e2e8f0] rounded-2xl shadow-md p-5 hover:shadow-lg transition-shadow ${card.bg}`}
    >
      <p className="text-sm font-medium text-slate-600">{card.title}</p>
      <div className="flex items-end mt-1">
        <h3 className="text-2xl font-semibold text-slate-800">
          <CountUp
            start={0}
            end={rawValue}
            duration={1.5}
            separator=","
            decimals={hasDecimal ? 1 : 0}
            prefix={isCurrency ? '$' : ''}
          />
        </h3>
        <span className={`ml-2 text-sm ${card.color}`}>{card.change}</span>
      </div>
    </div>
  );
})}
        </div>
      )
    },
 
    {
      type: 'mainCharts',
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <LazyChart 
            Component={LineChart}
            title="Revenue Trend" 
            description="Monthly revenue performance"
            height={350}
          />
          <LazyChart 
            Component={BarChart}
            title="Sales by Category" 
            description="Product category performance"
            height={350}
          />
        </div>
      )
    },

    {
      type: 'midSection',
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <LazyChart 
            Component={PieChart}
            title="Customer Distribution" 
            description="Distribution by segment"
          />
          <LazyChart 
            Component={DonutChart}
            title="Product Breakdown" 
            description="Revenue by product line"
          />
          <LazyChart 
            Component={GaugeChart}
            value={78} 
            title="Goal Completion" 
            description="Progress towards quarterly targets"
          />
        </div>
      )
    },

    {
      type: 'otherCharts',
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <LazyChart 
            Component={ScatterPlot}
            title="Marketing ROI" 
            description="Cost vs. Result analysis"
          />
          <LazyChart 
            Component={AreaChart}
            title="Website Traffic" 
            description="Daily unique visitors"
          />
          <LazyChart 
            Component={HeatMap}
            data={activityData}
            title="User Activity" 
            description="Engagement heat map by hour/day"
          />
          <LazyChart 
            Component={FunnelChart}
            title="Conversion Funnel" 
            description="Customer journey stages"
          />
          <LazyChart 
            Component={RadarChart}
            title="Performance Metrics" 
            description="Key performance indicators"
          />
        </div>
      )
    }
  ];

   
    const renderItem = useCallback(index => {
      const item = dashboardItems[index];
      return item.content;
    }, [dashboardItems]);

  return (
    <DashboardLayout>
      
      <Virtuoso
      
       style={{ height: 'calc(100vh - 80px)', width: '100%' }} 
        totalCount={dashboardItems.length}
        itemContent={renderItem}
        overscan={2} 
        increaseViewportBy={{ top: 600, bottom: 600 }}
      />
    
    </DashboardLayout>
  );
}