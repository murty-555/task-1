

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
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis type='number' domain={[0, 60]}/>
      <Tooltip />
      <Legend />
      <Area type="monotone" dataKey="issueOpen" stackId="1" stroke="#8884d8" fill="#8884d8" />
      <Area type="monotone" dataKey="issueStarted" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
      <Area type="monotone" dataKey="issueCompleted" stackId="1" stroke="#ffc658" fill="#ffc658" />
    </AreaChart>
  
    
  );
    
  
}

export default StreamedAreaChart
