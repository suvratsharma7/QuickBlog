import React from 'react'
import { assets } from '../../assets/assets'
import Sidebar from '../../components/admin/Sidebar'
import { Outlet } from 'react-router-dom'
import { useAppContext } from '../../context/AppContext'

const Layout = () => {

  const {axios,setToken,navigate}=useAppContext()

  const logout=()=>{
    localStorage.removeItem('token');
    axios.defaults.headers.common['Authorization']=null;
    setToken(null)
    navigate('/')
  }

  return (
    <>
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 shadow-md bg-white">
        <img 
          src={assets.logo} 
          alt="logo" 
          className="w-32 sm:w-40 cursor-pointer"
          onClick={()=>navigate('/')}
        />
        <button 
          onClick={logout} 
          className="text-sm px-6 py-2 bg-primary text-white rounded-full hover:bg-primary/90"
        >
          Logout
        </button>
      </div>

      {/* Main content */}
      <div className="flex h-[calc(100vh-70px)]">
        <Sidebar/>        
        <Outlet/>
      </div>
    </>
  )
}

export default Layout