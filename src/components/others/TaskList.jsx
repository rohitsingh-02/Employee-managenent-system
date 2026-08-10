import React from 'react'

const TaskList = ({ data }) => {
  return (
    <div id='tasklist' className='h-[55%] mt-10 overflow-x-auto  flex items-center justify-start gap-5 flex-nowrap'>
        {data?.tasks?.map((task, i) => (
          <div key={i} className='flex-shrink-0 h-full w-[300px] bg-red-300 rounded-xl p-5'>
            <div className='flex justify-between items-center'>
              <h3 className='bg-red-600 text-sm px-3 py-1 rounded '>
              {task.category || "High"}
              </h3>
              <h4>
                {task.taskDate}
              </h4>
            </div>
            <h2 className='mt-5 text-xl font-semibold'>
              {task.taskTitle}
            </h2>
            <p className='text-sm'>
              {task.taskDescription}
            </p>
        </div>
        ))}
    </div>
  )
}

export default TaskList