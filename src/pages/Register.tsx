import React from 'react'
import { useRegister } from '../hooks/useRegister'
import { Link } from 'react-router-dom';

export const Register: React.FC = () => {
  
  const { username, setUsername, email, setEmail, password, setPassword, confirmPassword, setConfirmPassword, error, load, register } = useRegister();
  
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    register();
  }

  return (
    <div className='max-w-5xl flex justify-center items-center'>
      <form onSubmit={handleRegister} className='flex flex-col justify-center items-center space-y-8 bg-green-50 py-2 px-5'>
        <h2 className='text-4xl my-5 font-bold'>Get Started Now</h2>        
        <div className='space-y-3 w-full'>
          <div>
            <label className='text-sm font-semibold'>Full name</label>
            <input 
              type='text'
              placeholder='Enter your full name'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className='w-full h-8 rounded-lg text-sm px-3 bg-[#D9D9D9]'
              required
            />
          </div>
          <div>
            <label>Email address</label>
            <input
              type='email'
              placeholder='Enter your email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='w-full h-8 rounded-lg text-sm px-3 bg-[#D9D9D9]'
              required
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type='password'
              placeholder='Enter your password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='w-full h-8 rounded-lg text-sm px-3 bg-[#D9D9D9]'
              required
            />
          </div>
          <div>
            <label>Confirm password</label>
            <input
              type='password'
              placeholder='Please confirm your password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className='w-full h-8 rounded-lg text-sm px-3 bg-[#D9D9D9]'
              required
            />
          </div>
        </div>
        <div className='w-full'>
          <button type='submit' disabled={load} className='bg-[#3A5B22] py-1 text-white w-full rounded-lg'>
            {load ? "Registering..." : "Register"}
          </button>
          {error && <p className='text-red-600'>{error}</p>}
        </div>
        <div className='w-full grid place-content-center place-items-center grid-cols-3'>
          <span className='w-full h-[1px] ml-5 bg-black'></span>
          <p>or</p>
          <span className='w-full h-[1px] mr-5 bg-black'></span>
        </div>
        <div className='flex justify-center items-center'>
          <p className='text-xs font-bold'><Link to={"/login"}>Have an account? <span className='italic underline text-blue-600'>Login</span></Link></p>
        </div>
      </form>
      
      {/* image */}
     
    </div>
  )
}