import React, { useState, useContext } from 'react'
import { AuthContext } from '../../Context/authContext'

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext)

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')
  const [assignedTo, setAssignedTo] = useState('')
  const [category, setCategory] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()

    const employee = userData?.find((emp) => emp.firstName === assignedTo)
    if (!employee) {
      alert('Employee not found')
      return
    }

    const task = {
      active: true,
      newTask: true,
      completed: false,
      failed: false,
      taskTitle: title,
      taskDescription: description,
      taskDate: date,
      category,
    }

    const updated = userData.map((emp) =>
      emp.id === employee.id
        ? {
            ...emp,
            tasks: [...emp.tasks, task],
            taskCounts: {
              ...emp.taskCounts,
              newTask: emp.taskCounts.newTask + 1,
              active: emp.taskCounts.active + 1,
            },
          }
        : emp
    )

    setUserData(updated)
    localStorage.setItem('employees', JSON.stringify(updated))

    setTitle('')
    setDescription('')
    setDate('')
    setAssignedTo('')
    setCategory('')
  }

  return (
    <div>
        <div className='mt-7 bg-[#202020] rounded-xl p-6 shadow-lg'>
            <form onSubmit={submitHandler} className='flex flex-wrap w-full items-start justify-between gap-6'>
              <div className='w-full md:w-[48%] flex flex-col gap-4'>
                 <div className='flex flex-col gap-1'>
                  <h3 className='text-lg font-semibold text-gray-200'>Task Title</h3>
                 <input value={title} onChange={(e)=>setTitle(e.target.value)} required type='text' placeholder='Enter task title' className='bg-[#2c2c2c] border border-gray-600 rounded-md px-3 py-2 outline-none focus:border-emerald-500 transition-colors'/>
                </div>
                 <div className='flex flex-col gap-1'>
                     <h3 className='text-lg font-semibold text-gray-200'>Date</h3>
                 <input value={date} onChange={(e)=>setDate(e.target.value)} required type='date' className='bg-[#2c2c2c] border border-gray-600 rounded-md px-3 py-2 outline-none focus:border-emerald-500 transition-colors text-gray-200'/>
                 </div>
                 <div className='flex flex-col gap-1'>
                     <h3 className='text-lg font-semibold text-gray-200'>Assigned To</h3>
                 <input value={assignedTo} onChange={(e)=>setAssignedTo(e.target.value)} required type='text' placeholder='employee name' className='bg-[#2c2c2c] border border-gray-600 rounded-md px-3 py-2 outline-none focus:border-emerald-500 transition-colors'/>
                 </div>
                 <div className='flex flex-col gap-1'>
                     <h3 className='text-lg font-semibold text-gray-200'>Category</h3>
                 <input value={category} onChange={(e)=>setCategory(e.target.value)} required type='text' placeholder='design, dev, etc.' className='bg-[#2c2c2c] border border-gray-600 rounded-md px-3 py-2 outline-none focus:border-emerald-500 transition-colors'/>
                 </div>
               </div>
                <div className='w-full md:w-[48%] flex flex-col gap-1'>
                  <h3 className='text-lg font-semibold text-gray-200'>Description</h3>
                <textarea value={description} onChange={(e)=>setDescription(e.target.value)} required name="" id="" cols="30" rows="10" className='bg-[#2c2c2c] border border-gray-600 rounded-md px-3 py-2 outline-none focus:border-emerald-500 transition-colors resize-none'/>
              </div>
                <button className='mt-4 w-full md:w-auto bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-2 rounded-md transition-colors'>Create Task</button>
            </form>
        </div>
    </div>
  )
}

export default CreateTask