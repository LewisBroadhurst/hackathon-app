import React from 'react'
import { Link } from 'react-router-dom'

const PromoVenueCard = ({name, location, type}) => {


  const content = () => {
    if (!name & !location & !type) {
      return '';
    }

    return (
      <Link to='/venue/1'>
        <div className="card w-64 customShadow1 transition-all duration-300 hover:cursor-pointer hover:scale-[.98]">
          <img className='rounded-t-lg' src="https://placeimg.com/400/225/arch" alt="Shoes" />

          <div className="card-body p-3 gap-1 flex flex-col">
            <h2 className="card-title">{name}</h2>
            <p>Could you spare a strike?</p>
            <span className="badge badge-secondary self-end">{type.niceName}</span> 
          </div>
      </div>
    </Link>
    )
  }

  return (
    <>
      {content()}
    </>
  )
}

export default PromoVenueCard;