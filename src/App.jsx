import { useContext, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './Context/authContext'

const App = () => {

  const [userData] = useContext(AuthContext)
  const [user, setUser] = useState(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')
    if (loggedInUser) {
      return JSON.parse(loggedInUser).role
    }
    return null
  })
  const [loggedInUserData, setLoggedInUserData] = useState(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')
    if (loggedInUser) {
      return JSON.parse(loggedInUser).data
    }
    return null
  })

  const handleLogin = (email, password) => {
    if (email === 'admin@example.com' && password === '123') {
      setUser('admin')
      setLoggedInUserData(null)
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
    } else {
      const employee = userData?.find((e) => email === e.email && password === e.password)
      if (employee) {
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }))
      } else {
        alert("Invalid Credentials")
      }
    }
  }

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user === 'admin' ? <AdminDashboard changeUser={setUser} /> : (user === 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : null) }
    </>
  )
}

export default App