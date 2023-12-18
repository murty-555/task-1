import React from 'react';
import "./SprintsTableList.css";
import { sprintData } from '../../data/sprint-table-data';

const SprintsTableList = () => {
  return (
    <div className='table-container'>
      <table className='table '>
        <thead className='table-dark'>
          <tr>
            <th>Sprint Name</th>
            <th>Status</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Completed Date</th>
          </tr>
        </thead>
        <tbody className='table-light'>
          {sprintData.map((sprint, index) => (
            <tr key={index}>
              <td>{sprint.name}</td>
              <td>{sprint.status}</td>
              <td>{sprint.startDate}</td>
              <td>{sprint.endDate}</td>
              <td>{sprint.completedDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SprintsTableList;
