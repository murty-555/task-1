

import React from 'react';
import { AreaChart, Area, XAxis,Legend, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const monthlyData = [
  { month: 'Jan', issueOpen: 2, issueStarted: 5, issueCompleted: 17 },
  { month: 'Feb', issueOpen: 5, issueStarted: 8, issueCompleted: 19 },
  { month: 'Mar', issueOpen: 8, issueStarted: 11, issueCompleted: 16 },
  { month: 'Apr', issueOpen: 3, issueStarted: 10, issueCompleted: 15 },
  { month: 'May', issueOpen: 5, issueStarted: 8, issueCompleted: 23 },
  { month: 'Jun', issueOpen: 2, issueStarted: 6, issueCompleted: 22 },
  { month: 'Jul', issueOpen: 6, issueStarted: 11, issueCompleted: 20 },
  // { month: 'Aug', issueOpen: 3, issueStarted: 5, issueCompleted: 11 },
  // { month: 'Sep', issueOpen: 8, issueStarted: 8, issueCompleted: 13 },
  // { month: 'Oct', issueOpen: 7, issueStarted: 9, issueCompleted: 16 },
  // { month: 'Nov', issueOpen: 8, issueStarted: 10, issueCompleted: 22 },
  // { month: 'Dec', issueOpen: 9, issueStarted: 11, issueCompleted: 17 },
];


 const StreamedAreaChart  =()=> {

  
    return (
      
      
    <AreaChart
      width={800}
      height={400}
      data={monthlyData}
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
    >
      <CartesianGrid strokeDasharray="0 0" />
      <XAxis dataKey="month" />
      <YAxis ticks={[0,10,20,30,40,50,60]} label={{value:"Story Point(Days)", angle: -90, position:"insideLeft"}}/>
      <Tooltip />
      <Legend />
      <Area type="monotone" dataKey="issueOpen" stackId="1" stroke="#b8b8ba" fill="#b8b8ba" />
      <Area type="monotone" dataKey="issueStarted" stackId="1" stroke="#7d7d7d" fill="#7d7d7d" />
      <Area type="monotone" dataKey="issueCompleted" stackId="1" stroke="#5d5d5e" fill="#5d5d5e" />
    </AreaChart>
  
    
  );
    
  
}

export default StreamedAreaChart
