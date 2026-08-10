import React, { useState } from 'react'
const Login = ({handleLogin}) => {

   const [email,setemail] = useState('')
   const [password,setpassword] = useState('')

   const submitHandler =(e)=>{
    e.preventDefault()
    handleLogin(email,password)
    setemail("")
    setpassword("")
   }


  return (
    <div className='flex h-screen w-screen items-center justify-center rounded-xl'>
        <div className='border-2 border-emerald-600 p-20 rounded-xl'>
          <form onSubmit={submitHandler}
          className='flex flex-col items-center justify-center'>
            <input value={email} onChange={(e)=>setemail(e.target.value)} required className='text-white outline-none bg-transparent border-2 border-emerald-600 py-4 px-3 text-xl rounded-full placeholder:text-gray-300' type="email" placeholder='Enter your email'/>
            <input value={password} onChange={(e)=>setpassword(e.target.value)} required className='text-white outline-none bg-transparent border-2 border-emerald-600 mt-3 py-4 px-3 text-xl rounded-full placeholder:text-gray-300' type="password" placeholder='Enter your password' />
            <button className='mt-5 text-white outline-none border-2 border-emerald-600 py-4 px-3 text-xl rounded-full' >Log in</button>
          </form>
        </div>

    </div>
  )
}

export default Login