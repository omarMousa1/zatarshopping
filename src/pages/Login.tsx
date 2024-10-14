import React from 'react'
import { useLogin } from '../hooks/useLogin';
import { NavLink, Link } from 'react-router-dom';

export const Login: React.FC = () => {

  const { email, setEmail, password, setPassword, error, load, login } = useLogin()

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login();
  };

  return (
    <div>
      <form onSubmit={handleLogin} className='flex flex-col justify-center items-center space-y-8 bg-green-100' >
        <h2 className='text-4xl my-5 font-bold border-b-black border'>Welcome back!</h2>
        <div className='px-5 space-y-3'>
          <div>
            <label className='text-sm font-semibold'>Email address</label>
            <input 
              type='email'
              placeholder='Enter your email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='w-full h-8 rounded-xl bg-[#D9D9D9]'
              required
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type='password'
              placeholder='Enter toy password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='w-full h-8 rounded-xl bg-[#D9D9D9]'
              required
            />
          </div>
        </div>
        <div className='w-full px-5'>
          <button type='submit' disabled={load} className='bg-black text-white w-full'>
            {load ? "logging..." : "Login"}
          </button>
          {error && <p className='text-red-600'>{error}</p>}
        </div>
        <div className='w-full grid place-content-center place-items-center grid-cols-3'>
          <span className='w-full h-[1px] ml-5 bg-black'></span>
          <p>or</p>
          <span className='w-full h-[1px] mr-5 bg-black'></span>
        </div>
          <div className='flex justify-center items-center'>
            <p className='text-xs font-bold'><Link to={"/register"}>Create acccout now! <span className='italic '>Register</span></Link></p>
          </div>
      </form>

      {/* image */}

    </div>
  )
}