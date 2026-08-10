import React from 'react'
import Header from '../others/Header'
import CreateTask from '../others/CreateTask'
import AllTask from '../others/AllTask'
const AdminDashboard = () => {
  return (
    <div className='min-h-screen bg-[#1c1c1c] text-white p-5'>
        <Header/>
        <CreateTask/>
        <AllTask/>
    </div>
  )
}

export default AdminDashboard