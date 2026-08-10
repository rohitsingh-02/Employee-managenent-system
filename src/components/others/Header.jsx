import React from 'react'

const Header = ({ data, changeUser }) => {
  return (
    <div className='flex items-end justify-between p-5 '>
        <h1 className='text-2xl font-medium '>
            Hello <br/> <span className='text-3xl font-semibold'>{data?.firstName || 'Admin'}</span>
        </h1>
        <button onClick={() => { localStorage.removeItem('loggedInUser'); changeUser('') }} className='bg-red-600 text-lg font-medium text-white px-5 py-3 rounded-sm'>
            Log out
        </button>
    </div>
  )
}

export default Header