import React from 'react';
import { Link } from "react-router-dom";


const RegisterForm = () => {


  return (
    <>
      <section className='flex flex-col'>

        <div className='flex flex-col'>

          <form className='flex flex-col gap-3'>

            <div className='flex flex-col gap-1'>
              <label className='text-xl self-start'>Full Name*</label>
              <input className='border border-black rounded-md p-1'></input>
            </div>

            <div className='flex flex-col gap-1'>
              <label className='text-xl self-start'>Username*</label>
              <input  name="userName"  className='border border-black rounded-md p-1'></input>
            </div>

            <div className='flex flex-col gap-1'>
              <label className='text-xl self-start'>Password*</label>
              <input className='border border-black rounded-md p-1'></input>
            </div>

            <div className='flex flex-row items-center gap-4 self-center'>
            <span>Show password</span>
            <input type="checkbox" />
            </div>

            <button className='py-2 bg-primary text-white rounded-lg text-xl' type='submit' value={"Sign In"}>Register</button>
          </form>

          <p className='mt-1 flex gap-2 self-center'>
            Already have an account?
            <span className='text-secondary'><Link to={"/"}>Log In</Link></span>
          </p>
        </div>
        
      </section>
    </>
  )
}

export default RegisterForm;