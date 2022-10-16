import React from 'react'
import { Link } from 'react-router-dom';

const Step4 = () => {
  return (
    <section>
        <h2>Welcome to the platform!</h2>

        <button className='btn'><Link to={'/groupOverview'} >Lets go!</Link></button>
    </section>
  )
}

export default Step4;