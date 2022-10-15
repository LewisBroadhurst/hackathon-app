import React, { useState } from 'react';
import { createVenue } from '../../API/VenueAPI';

const defaultVenueFields = {
    "name": '',
    "location": '',
    "type": ''
}

const AddVenue = ({setToggleAddVenue}) => {

    // const [venuePayload, setAddVenuePayload] = useState(defaultVenueFields);
    // const {name, location, type} = venuePayload;

    // const handleChange = (event) => {
    //     const {name, value} = event.target;

    //     setAddVenuePayload( {...venuePayload, [name]: `${value}`} );
    // }

    // const handleCloseVenue = (event) => {
    //     event.preventDefault();

    //     setToggleAddVenue("hidden");
    // }

    // const handleAddVenue = (event) => {
    //     event.preventDefault();

    //     createVenue(venuePayload);
    // }

  return (
    <section>

        <div className='flex flex-row justify-between'>
            <h2>Add your venue!</h2>
            <button className='bg-red-600 px-2 text-white'>X</button>
        </div>

        <form className='flex flex-col gap-3'>

            <label className=''>Name</label>
            <input required type={'text'} name="name" />

            <label>Event type</label>
            <input className='' type={'text'} required name="type" />
            
            <label>Location</label>
            <input className='' required type={'text'} name="location" />

            <button type='submit' className='bg-cBlue200 rounded-md p-2'>Register Venue</button>

        </form>
    </section>
  )
}

export default AddVenue