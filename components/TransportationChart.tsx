
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TransportationRecommendation } from '../types';

interface TransportationChartProps {
  data: TransportationRecommendation[];
}

const TransportationChart: React.FC<TransportationChartProps> = ({ data }) => {
  return (
    <div className="w-full h-80 bg-slate-50 p-4 rounded-lg shadow-inner">
      <ResponsiveContainer>
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 20,
            left: 10,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" stroke="#4b5563" />
          <YAxis stroke="#4b5563" unit="円" />
          <Tooltip 
            contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '0.5rem', border: '1px solid #ddd' }}
            cursor={{fill: 'rgba(192, 132, 252, 0.2)'}}
          />
          <Legend />
          <Bar dataKey="estimatedCost" fill="#8b5cf6" name="預估費用 (円)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TransportationChart;
