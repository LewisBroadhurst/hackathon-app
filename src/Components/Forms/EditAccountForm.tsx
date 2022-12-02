import React from 'react'

const EditAccountForm = () => {
  return (
    <section>
        <form action="" className='text-neutral flex flex-col gap-2'>
            <div className='flex flex-col'>
                <label htmlFor="">First name</label>
                <input type="text" className='border p-1 rounded-md' />
            </div>

            <div className='flex flex-col'>
                <label htmlFor="">Last name</label>
                <input type="text" className='border p-1 rounded-md'/>
            </div>

            <div className='flex flex-col'>
                <label htmlFor="">Email</label>
                <input type="email" className='border p-1 rounded-md'/>
            </div>

            <div className='flex flex-col'>
                <label htmlFor="">Password</label>
                <input type="text" className='border p-1 rounded-md'/>
            </div>

            <button className='btn hover:bg-primary'>Submit</button>
        </form>
    </section>
  )
}

export default EditAccountForm