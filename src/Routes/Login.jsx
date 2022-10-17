import React from 'react';
import LoginForm from '../Components/Forms/LoginForm';
import Footer from '../Components/Footer/Footer';
import LandscapeImage from '../Assets/reg3.jpg';
import DesktopImage from '../Assets/people2.jpg';
import { Link } from 'react-router-dom';


const Login = () => {

  return (
    <section className='flex flex-col items-center xl:h-screen'>

      <div className='flex flex-col items-center md:w-2/3 xl:w-full xl:flex-row'>

      <div className='xl:w-1/2'>
        <img className='rounded-b-2xl xl:hidden' src={LandscapeImage} alt='Friends at party'/>
        <img className='hidden rounded-r-2xl xl:flex' src={DesktopImage} alt='Friends at party'/>
      </div>

      <div className='flex flex-col text-center mt-8 w-2/3 xl:w-[500px] xl:mx-auto xl:mt-0'>

        <div className='flex flex-col gap-1 xl:py-8'>
          <h1 className='text-4xl font-bold xl:text-6xl'>Fun @ Five</h1>
          <p className='text-xl mb-2 xl:text-2xl'>Sign in to your account</p>
        </div>

        <LoginForm />

        {/* FB/GOOGLE/VENUE&ORG SIGNUP */}

        <div className='flex flex-col mt-6'>
          <div className='flex items-center'>
            <span className='flex-grow border-t border-cMono800'></span>
            <span className='mx-3'>Or sign in with</span>
            <span className='flex-grow border-t border-cMono800'></span>
          </div>
          

          <div className='flex flex-row justify-evenly py-4 pb-6 border-b border-cMono800'>
            <button className='bg-info p-2 rounded-lg w-5/12'>Facebook</button>
            <button className='bg-error p-2 rounded-lg w-5/12'>Google</button>
          </div>
        </div>

        <h3 className='text-lg text-center text-primary underline my-6 mb-10'>
          <Link to={'/commericalRegistration'} >Want to register your venue or organisation to our app?</Link>
        </h3>

      </div>

      </div>

      <div className='self-stretch'>
        <Footer />
      </div>
      
    </section>
  )
}

export default Login;