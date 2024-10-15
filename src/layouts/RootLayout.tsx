import React from 'react'
import { useLogout } from '../hooks/useLogout';
import { NavLink, Outlet } from 'react-router-dom';

interface RootLayoutProps {
    user: any;
}

export const RootLayout: React.FC<RootLayoutProps> = ({ user }) => {

    const { logout } = useLogout();

    const handleLogout = () => {
        logout();
    }

  return (
    <div>
        <header className='bg-[#3A5B22] p-3'>
            <nav className='flex justify-between'>
                <h1 className='text-2xl text-white'>Zatar</h1>
                <div>
                    {user ? (
                        <h3>{user.email}</h3>
                    ) : (
                        <div className='flex gap-x-3'>
                            <NavLink className='border-2 py-1 px-4 rounded-md text-white' to={"/login"}>Login</NavLink>
                            <NavLink className='border-2 py-1 px-4 rounded-md text-white' to={"/register"}>Register</NavLink>
                        </div>
                    )}

                    {!user ? (
                        <>
                        
                        </>
                    ) : (
                        <>
                            <NavLink to={"/cartpage"}>Cart</NavLink>
                            <button onClick={handleLogout}>Logout</button>
                        </>
                    )}
                </div>
            </nav>
        </header>
        <main>
            <Outlet />
        </main>
    </div>
  )
}