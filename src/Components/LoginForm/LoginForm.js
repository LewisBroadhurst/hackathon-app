import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllEvents } from '../../API/EventAPI';
import { getAllOrganisations } from '../../API/OrganisationAPI';

const LoginForm = () => {

  const [organisations, setOrganisations] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect( () => {
    getAllOrganisations(setOrganisations);
    console.log(organisations);

    getAllEvents(setEvents);
    console.log(events);
  }, [])

  return (
    <>
      <section className="flex flex-col items-stretch lg:w-1/3 lg:mx-auto lg:justify-center">
      <div className='flex flex-col items-center'>
        <h1 className='text-5xl my-2'>Five Star</h1>

        <p className='text-2xl'>Sign in to your account</p>

        <form className='flex flex-col mt-6 self-stretch mx-auto w-2/3'>

          <div className='flex flex-col py-2'>
          <label className='text-xl'>Username*</label>
          <input className='border border-black rounded-md p-1'></input>
          </div>

          <div className='flex flex-col pt-2'>
          <label className='text-xl'>Password*</label>
          <input className='border border-black rounded-md p-1'></input>
          </div>

          <span className='self-center mt-0.5'>Forgot password?</span>

          <button className='py-2 mt-6 bg-green-500 rounded-lg text-xl' type='submit' value={"Sign In"}>Sign In</button>
        </form>

        <p className='mt-1'>Don't have an account? <span className='text-blue-900'><Link to={"/register"}>Register</Link></span></p>
      </div>


      <div className='flex flex-col mt-10 self-stretch mx-auto w-2/3'>

        <div className='flex items-center'>
          <span className='flex-grow border-t border-black'></span>
          <span className='flex-grow-0 mx-3'>Or sign in with</span>
          <span className='flex-grow border-t border-black'></span>
        </div>
        

        <div className='flex flex-row justify-between py-4 pb-6 border-b border-black'>
          <button className='bg-blue-500 p-2 rounded-lg w-5/12'>Facebook</button>
          <button className='bg-red-500 p-2 rounded-lg w-5/12'>Google</button>
        </div>

      </div>
      </section>
    </>
  )
}

export default LoginForm;