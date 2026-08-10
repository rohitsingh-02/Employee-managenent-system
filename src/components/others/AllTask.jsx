import React, { useContext } from 'react'
import { AuthContext } from '../../Context/authContext'

const AllTask = () => {
  const [userData] = useContext(AuthContext)

  const status = (task) =>
    task.completed ? 'Completed' : task.failed ? 'Failed' : task.newTask ? 'New Task' : 'Active'

  return (
    <div className='bg-[#1c1c1c] mt-5 p-5 rounded h-80 overflow-auto'>
      {userData?.flatMap((emp) =>
        emp.tasks.map((task, i) => (
          <div key={`${emp.id}-${i}`} className='mb-2 py-2 px-4 flex items-center justify-between rounded bg-[#2c2c2c]'>
            <h2 className='text-lg font-medium'>
              {emp.firstName}
            </h2>
            <h3 className='text-base'>
              {task.taskTitle}
            </h3>
            <h5 className='text-sm px-3 py-1 rounded bg-white text-black'>
              {status(task)}
            </h5>
          </div>
        ))
      )}
    </div>
  )
}

export default AllTask