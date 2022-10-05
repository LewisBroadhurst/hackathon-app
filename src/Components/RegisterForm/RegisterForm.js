import { useState } from "react";
import { Link } from "react-router-dom";
import AddVenue from "../AddVenue/AddVenue";

const RegisterForm = () => {

  const [toggleAddVenue, setToggleAddVenue] = useState("hidden")

  const handleCreateVenueToggle = (event) => {
    event.preventDefault()

    if (toggleAddVenue === "hidden") {
      return setToggleAddVenue("flex");
    }

    return setToggleAddVenue("hidden");
  }


  return (
    <>
      <section className="flex flex-col items-stretch lg:w-1/3 lg:mx-auto lg:justify-center">

        <div className='flex flex-col items-center'>
          <h1 className='text-5xl mb-1'>Five Star</h1>

          <p className='text-2xl'>Create an account</p>

          <form className='flex flex-col mt-6 self-stretch mx-auto w-2/3'>

            <div className='flex flex-col pt-2 py-1'>
            <label className='text-xl'>Full Name*</label>
            <input className='border border-black rounded-md p-1'></input>
            </div>

            <div className='flex flex-col py-1'>
            <label className='text-xl'>Username*</label>
            <input className='border border-black rounded-md p-1'></input>
            </div>

            <div className='flex flex-col pt-1 pb-2'>
            <label className='text-xl'>Password*</label>
            <input className='border border-black rounded-md p-1'></input>
            </div>

            <button className='py-2 mt-6 bg-green-500 rounded-lg text-xl' type='submit' value={"Sign In"}>Register</button>
          </form>

          <p className='mt-1'>Already have an account? <span className='text-blue-900'><Link to={"/"}>Log In</Link></span></p>
        </div>


        <div className='flex flex-col mt-10 self-stretch mx-auto w-2/3'>

          <div className='flex items-center'>
            <span className='flex-grow border-t border-black'></span>
            <span className='flex-grow-0 mx-3'>Or register with</span>
            <span className='flex-grow border-t border-black'></span>
          </div>
          

          <div className='flex flex-row justify-between py-4 pb-6 border-b border-black'>
            <button className='bg-blue-500 p-2 mx-1 rounded-lg w-1/2'>Facebook</button>
            <button className='bg-red-500 p-2 mx-1 rounded-lg w-1/2'>Google</button>
          </div>

        </div>

        <div className="mt-10">
          <h3 className="text-center text-cBlue500 underline" onClick={handleCreateVenueToggle}>Want to register your venue to our app?</h3>
        </div>

        <div className={`${toggleAddVenue} w-full h-full fixed bg-cBlue300 z-10`}>
          <AddVenue setToggleAddVenue={setToggleAddVenue} />
        </div>
        
      </section>
    </>
  )
}

export default RegisterForm;