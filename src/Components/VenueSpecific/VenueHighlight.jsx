import React from 'react'

const VenueHighlight = () => {
  return (
    <section className='w-96 border border-black rounded-lg'>
        <div className='rounded-lg'>
        <img className='rounded-t-lg' src="https://images.unsplash.com/photo-1532635241-17e820acc59f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlJTIwaGF2aW5nJTIwZnVufGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" />
        </div>
        
        <div className='p-2 flex flex-col gap-2'>
        <h3 className='text-2xl font-bold'>Drinks</h3>

        <p>Our bars serve a range of cocktails, beers & spirits, along with mocktails & softs</p>

        <button className='btn btn-block'>View Menu</button>
        </div>
    </section>
  )
}

export default VenueHighlight