import React from 'react';
import { Link } from 'react-router-dom';


const LoginForm = () => {

  return (
    <section className='flex flex-col gap-2 justify-center'>

      <form className='flex flex-col gap-2'>

        <div className='flex flex-col'>
          <label className='text-xl self-start'>Username*</label>
          <input className='border border-black rounded-md p-1'></input>
        </div>

        <div className='flex flex-col'>
          <label className='text-xl self-start'>Password*</label>
          <input className='border border-black rounded-md p-1'></input>
        </div>

        <span className='self-center cursor-pointer xl:my-2'>Forgot password?</span>

        <button className='py-2 rounded-lg text-lg bg-primary text-white' type='submit' value={"Sign In"}>Sign In</button>

      </form>

      <p className='flex gap-1 self-center'>Don't have an account?
        <span className='text-blue-900'><Link to={'/register'} className='text-secondary'>Register</Link></span>
      </p>

    </section>
  )
}

export default LoginForm;