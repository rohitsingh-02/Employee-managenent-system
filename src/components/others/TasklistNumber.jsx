import React from 'react'

const TasklistNumber = ({ data }) => {
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
        <div className='rounded-xl w-[45%] py-6  px-9  bg-red-500'>
    <h2 className='text-2xl '>
    {data?.taskCounts?.newTask || 0}
</h2>
<h3 className='text-xl font-medium'>
    New Task
</h3>
</div>
<div className='rounded-xl w-[45%] py-6  px-9  bg-yellow-500'>
    <h2 className='text-2xl '>
    {data?.taskCounts?.active || 0}
</h2>
<h3 className='text-xl font-medium'>
    Active Task
</h3>
</div>
<div className='rounded-xl w-[45%] py-6  px-9  bg-blue-500'>
    <h2 className='text-2xl '>
    {data?.taskCounts?.completed || 0}
</h2>
<h3 className='text-xl font-medium'>
    Completed Task
</h3>
</div>
<div className='rounded-xl w-[45%] py-6  px-9  bg-green-500'>
    <h2 className='text-2xl '>
    {data?.taskCounts?.failed || 0}
</h2>
<h3 className='text-xl font-medium'>
    Failed Task
</h3>
</div>
    </div>
  )
}

export default TasklistNumber