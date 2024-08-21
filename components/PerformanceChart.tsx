// app/components/PerformanceChart.tsx
"use client";

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const performanceData = [
  { year: "2010", sales: 2800 },
  { year: "2011", sales: 2900 },
  { year: "2012", sales: 3100 },
  { year: "2013", sales: 3200 },
  { year: "2014", sales: 3400 },
  { year: "2015", sales: 3300 },
  { year: "2016", sales: 3500 },
  { year: "2017", sales: 3600 },
  { year: "2018", sales: 3800 },
  { year: "2019", sales: 4000 },
  { year: "2020", sales: 3000 },
  { year: "2021", sales: 5000 },
  { year: "2022", sales: 5500 },
  { year: "2023", sales: 7000 },
];

const PerformanceChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={performanceData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="sales" fill="hsl(var(--primary))" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default PerformanceChart;