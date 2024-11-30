import React, { useState } from 'react'

const Login = ({handlelogin}) => {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setemail('');
    setPassword('');
    handlelogin(email, password)
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50 pb-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-md w-full space-y-8'>
        <div>
          <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
            Welcome
          </h2>
          <p className='mt-2 text-center text-sm text-gray-600'>
            Please sign in to your account
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className='mt-8 space-y-6'>
          <div className='rounded-md shadow-sm space-y-4'>
            <div>
              <label htmlFor='email' className='sr-only'>Email</label>
              <input value={email} onChange={(e) => setemail(e.target.value)}
                id='email'
                name='email'
                type='email'
                required
                className='appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                placeholder='Email'
              />
            </div>
            <div>
              <label htmlFor='password' className='sr-only'>Password</label>
              <input value={password} onChange={(e) => setPassword(e.target.value)}
                id='password'
                name='password'
                type='password'
                required
                className='appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                placeholder='Password'
              />
            </div>
          </div>
          <button
            type='submit'
            className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200'
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
