import React from 'react'
import { useLogout } from '../hooks/useLogout';
import { NavLink, Outlet } from 'react-router-dom';
import { Footer } from '../components/Footer';
import zatarLogo from '../assets/logo/zatarLogo.png';
import cartIcon from '../assets/icons/cart-3-svgrepo-com.svg';
import { useQuantityTotal } from '../hooks/useQuantityTotal';
// import nature from '../assets/bgs/bg-home2.jpg'

interface RootLayoutProps {
    user: any;
}

export const RootLayout: React.FC<RootLayoutProps> = ({ user }) => {

    const { logout } = useLogout();

    const { quantityTotal } = useQuantityTotal();

    const handleLogout = () => {
        logout();
    }

  return (
    <>
        <header className='bg-[#3A5B22] p-3'>
            <nav className='flex justify-between items-center'>
                <NavLink to={"/"} className='text-2xl text-white'><img src={zatarLogo} alt='logo zatart' ></img></NavLink>
                <div>
                    {user ? (
                        <h3 className='text-white mb-5'> Hi, {user.email}</h3>
                    ) : (
                        <div className='flex gap-x-3'>
                            <NavLink to={"/login"} className='border-2 py-1 px-4 rounded-md text-white'>Login</NavLink>
                            <NavLink to={"/register"} className='border-2 py-1 px-4 rounded-md text-white'>Register</NavLink>
                        </div>
                    )}

                    {!user ? (
                        <>
                        
                        </>
                    ) : (
                        <div className='flex justify-center items-start gap-x-3'>
                            <NavLink to={"/cart"}>
                                <img 
                                    src={cartIcon} 
                                    alt='Cart'
                                    className='w-10 h-10' 
                                />
                                <div className='relative bottom-12 right-2 bg-red-700 rounded-full w-6 h-6 text-center'>{quantityTotal()}</div>
                            </NavLink>
                            <button onClick={handleLogout} className='border-2 py-1 px-4 rounded-md text-white'>Logout</button>
                        </div>
                    )}
                </div>
            </nav>
        </header>
        <main>
            <Outlet />
        </main>
        <Footer />
    </>
  )
}