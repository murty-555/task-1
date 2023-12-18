import React from 'react'
import SprintsTabelList from './SprintsTableList'

const SprintTableData = () => {
    const sprintData = [
        {
          name: 'Sprint 1',
          status: 'Done',
          startDate: '11/07/2022',
          endDate: '15/07/2022',
          completedDate: '15/07/2022',
        },
        {
          name: 'Sprint 2',
          status: 'In Progress',
          startDate: '16/07/2022',
          endDate: '20/07/2022',
          completedDate: "20/07/2022"
        },
        {
          name: 'Sprint 3',
          status: 'Not Started',
          startDate: '21/07/2022',
          endDate: '25/07/2022',
          completedDate: '25/07/2022',
        },
        {
          name: 'Sprint 4',
          status: 'Done',
          startDate: '26/07/2022',
          endDate: '30/07/2022',
          completedDate: '30/07/2022',
        },
        {
          name: 'Sprint 5',
          status: 'In Progress',
          startDate: '01/08/2022',
          endDate: '05/08/2022',
          completedDate: '05/08/2022',
        },
        {
          name: 'Sprint 6',
          status: 'Not Started',
          startDate: '06/08/2022',
          endDate: '10/08/2022',
          completedDate: '10/08/2022',
        },
        {
          name: 'Sprint 7',
          status: 'Done',
          startDate: '11/08/2022',
          endDate: '15/08/2022',
          completedDate: '15/08/2022',
        },
        {
          name: 'Sprint 8',
          status: 'In Progress',
          startDate: '16/08/2022',
          endDate: '20/08/2022',
          completedDate: '20/08/2022',
        },
        {
          name: 'Sprint 9',
          status: 'Not Started',
          startDate: '21/08/2022',
          endDate: '25/08/2022',
          completedDate: '25/08/2022',
        },
        {
          name: 'Sprint 10',
          status: 'Done',
          startDate: '26/08/2022',
          endDate: '30/08/2022',
          completedDate: '30/08/2022',
        },
        
      ];
      
  return (
    <div>
        <SprintsTabelList sprintData={sprintData} />
    </div>
  )
}

export default SprintTableData