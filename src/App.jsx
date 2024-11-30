import { useContext, useEffect, useState } from 'react'
import Login from './Components/Login'
import AdminDashboard from './Components/AdminDashboard'
import EmployeeDashboard from './Components/EmployeeDashboard'
import { AuthContext } from './utils/Context'

function App() {
  const authData = useContext(AuthContext)
  const [user, setuser] = useState(null)
  const [loggedInUser, setloggedInUser] = useState(null)
  
  useEffect(() => {
      const loggedInUserString = localStorage.getItem("loggedInUser");
      if (loggedInUserString) {
        const loggedInUser = JSON.parse(loggedInUserString);
        if (loggedInUser) {
          setuser(loggedInUser.role);
          if (loggedInUser.role === "employees" && authData) {
            const employeeData = authData.find(e => e.email === loggedInUser.email);
            setloggedInUser(employeeData);
          }
        }
      }
   }, [authData]);

  const handlelogin = (email, password) => {
    if (email === "admin@me.com" && password === "123") {
      setuser("admin")
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }))
    } else if (authData) {
      const employees = authData.find((e) => email === e.email && password === e.password)
      if (employees) {
        setloggedInUser(employees)
        setuser("employees")
        localStorage.setItem("loggedInUser", JSON.stringify({ role: "employees", email }))
      } else {
        alert("Invalid Credentials")
      }
    }
  }

  const handleLogOut = () => {
    setuser("")
    setloggedInUser(null)
    localStorage.removeItem("loggedInUser")
  }

  return (
    <>
      {!user ? <Login handlelogin={handlelogin} /> : ""}
      {user === "admin" && <AdminDashboard data={authData} handleLogOut={handleLogOut} />}
      {user === "employees" && <EmployeeDashboard handleLogOut={handleLogOut} data={loggedInUser} />}
    </>
  )
}

export default App
