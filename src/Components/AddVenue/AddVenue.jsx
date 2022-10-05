import React from 'react'

const AddVenue = ({setToggleAddVenue}) => {

    const handleCloseVenue = (event) => {
        event.preventDefault();

        setToggleAddVenue("hidden");
    }

  return (
    <section>

        <div className='flex flex-row justify-between'>
            <h2>Add your venue!</h2>
            <button className='bg-red-600 px-2 text-white' onClick={handleCloseVenue}>X</button>
        </div>

        <form className='flex flex-col gap-3'>
            <div className='flex flex-col gap-1'>
                <label className=''>Name</label>
                <input className='rounded-md' />
            </div>

            <div className='flex flex-col gap-1'>
                <label>Event type</label>
                <input />
            </div>

            <div className='flex flex-col gap-1'>
                <label>Location</label>
                <input />
            </div>

            <button className='bg-cBlue200 rounded-md p-2'>Register Venue</button>

        </form>
    </section>
  )
}

export default AddVenue