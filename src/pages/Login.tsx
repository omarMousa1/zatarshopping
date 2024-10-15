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
    <div className='relative flex justify-center items-center h-screen w-screen bg-cover bg-center' style={{ backgroundImage: `url('https://s3-alpha-sig.figma.com/img/c230/ffba/520fab60716f712257d7f6a7fc48a42f?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mbNGe5cnciSearQhKP2TR~WMvIdiSi38k2DKnj9az4oIk~mkYPlBew~n6b49iJlGa1MfnLR99ignFHZWU834sozpXh0ZES44LHTkQ~LaiPX617O9vsGdLOdBzv~HfyHC4i-gxBdZJ2-C8~dWWDlhfVZzmyYsfCpk3l9--rQ98~X9rgcTKOzt219SqTjuf61A81vMm8zHed3JRxZAWpgvz2cg1aRW59eJm4F35rTeWhNY~WCR3y8J7WNm3lUYI6JqRMw2~D2vx6ZCJ4LNuHSKcJSt0dJWnwlIJ1V7iGfrHlbC5Cia~DlDhNel5OLxptWbH0JlwdpO0trcmk4kZK0hog__')` }}>
      <form onSubmit={handleLogin} className='flex flex-col justify-center items-center space-y-8 bg-green-50 rounded-lg py-2 px-5 shadow-black shadow-2xl'>
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
            <p className='text-xs font-bold'><Link to={"/register"}>Don't have an account? <span className='italic underline text-blue-600'>Register</span></Link></p>
          </div>
      </form>

      {/* image */}

    </div>
  )
}