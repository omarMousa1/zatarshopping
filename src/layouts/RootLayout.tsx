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
        <header>
            <nav>
                <h1>ola</h1>
                <div>
                    {user ? (
                        <h3>{user.email}</h3>
                    ) : (
                        <>
                            <NavLink to={"/login"}>Login</NavLink>
                            <NavLink to={"/register"}>Register</NavLink>
                        </>
                    )};

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