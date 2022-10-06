import React from 'react'
import { useState } from 'react'
import { createOrganisation } from '../../API/OrganisationAPI';

const defaultFormFields = {
    "name": '',
    "email": '',
    "phoneNo": '',
};

const CreateGroup = ({toggleDisplay}) => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const {name, email, phoneNo} = formFields;

    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormFields({...formFields, [name]: `${value}`});
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        try {
            console.log(formFields);
            createOrganisation(formFields);
        } catch (e) {
            console.log(e);
        }

        resetFormFields()
    }

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

  return (
    <section className='flex flex-col'>
        
        <div className='flex flex-row justify-between items-center mb-4'>
            <h2 className='text-2xl'>Create a new group 🎉</h2>
            <button type='button' className='bg-red-600 text-white px-2 py-1 text-xs' onClick={toggleDisplay}>X</button>
        </div>

        <form className='gap-2 flex flex-col w-5/6 mx-auto' onSubmit={handleSubmit}>
            <div className='flex flex-col'>
                <label>Name</label>
                <input type={"text"} required onChange={handleChange} name="name" value={name} />
            </div>

            <div className='flex flex-col'>
                <label>Email</label>
                <input type="email" required onChange={handleChange} name="email" value={email} />
            </div>

            <div className='flex flex-col'>
                <label>Phone No.</label>
                <input type={"text"} required onChange={handleChange} name="phoneNo" value={phoneNo} />
            </div>

            <div className='flex flex-col'>
                <label>Password</label>
                <input type={"text"} name="password" onChange={handleChange} />
            </div>

            <button type='submit' className='bg-cBlue200 mt-2 py-2'>Create Group!</button>
        </form>
    </section>
  )
}

export default CreateGroup;