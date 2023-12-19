import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { SBCData } from '../../data/sprints-bar-chart-data';

const data = SBCData

const SprintsBarChart = () => {
  return (
        <BarChart
          width={800}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" label={{value: "Sprints", position:"bottom"}} />
          <YAxis ticks={[0,50,100,150,200]} label={{value:"Storypoint(SP)", angle: -90, position:"insideLeft"}} />
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