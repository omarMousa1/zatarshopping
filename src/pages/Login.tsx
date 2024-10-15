import React from 'react'
import { useLogin } from '../hooks/useLogin';
import { Link } from 'react-router-dom';

export const Login: React.FC = () => {

  const { email, setEmail, password, setPassword, error, load, login } = useLogin()

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login();
  };

  return (
    <div className='max-w-5xl flex justify-center items-center'>
      <form onSubmit={handleLogin} className='flex flex-col justify-center items-center space-y-8 bg-green-100 py-2 px-5'>
        <div>
          <h2 className='text-4xl my-5 font-bold'>Welcome back!</h2>
          <p>Enter your Credentials to access your account</p>
        </div>
        <div className='space-y-3 w-full'>
          <div>
            <label className='text-sm font-semibold'>Email address</label>
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
              placeholder='Enter toy password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='w-full h-8 rounded-lg text-sm px-3 bg-[#D9D9D9]'
              required
            />
          </div>
        </div>
        <div className='w-full'>
          <button type='submit' disabled={load} className='bg-[#3A5B22] py-1 text-white w-full rounded-lg'>
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
            <p className='text-xs font-bold'><Link to={"/register"}>Don't have an account? <span className='italic underline'>Register</span></Link></p>
          </div>
      </form>

      {/* image */}

    </div>
  )
}