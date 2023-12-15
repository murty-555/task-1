import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'S1',
    "SP Planned": 0,
    "SP Added": 100,
    "Sp Completed": 70,
    "Sp Forecast": 0
  },
  {
    name: 'S2',
    "SP Planned": 0,
    "SP Added": 150,
    "Sp Completed": 100,
    "Sp Forecast": 0
  },
  {
    name: 'S3',
    "SP Planned": 85,
    "SP Added": 130,
    "Sp Completed": 70,
    "Sp Forecast": 0
  },
  {
    name: 'S4',
    "SP Planned": 120,
    "SP Added": 155,
    "Sp Completed": 70,
    "Sp Forecast": 0
  },
  {
    name: 'S5',
    "SP Planned": 90,
    "SP Added": 140,
    "Sp Completed": 80,
    "Sp Forecast": 0
  },
  {
    name: 'Forecast',
    "SP Planned": 0,
    "SP Added": 0,
    "Sp Completed": 0,
    "Sp Forecast": 100
  },
  
];

const SprintsBarChart = () => {
  return (
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis type='number' domain={[]}/>
          <Tooltip />
          <Legend />
          <Bar dataKey="SP Planned" stackId="a" fill="#b8b8ba" />
          <Bar dataKey="SP Added" stackId="a" fill="#7d7d7d" />
          <Bar dataKey="Sp Completed" fill="#5d5d5e" />
          <Bar dataKey="Sp Forecast" fill="#f0eded" />
        </BarChart>
  )
}

export default SprintsBarChart