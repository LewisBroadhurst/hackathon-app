import React from 'react'

const PromoVenueCard = () => {
  return (
    <div className="card w-64 customShadow1 transition-all duration-300 hover:cursor-pointer hover:scale-[.98]">
        <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
        <div className="card-body p-3 gap-1">
        <h2 className="card-title">
            5 Star Bowling Alley
            <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>Could you spare a strike?</p>
        <div className="card-actions justify-end">
            <div className="badge badge-outline">Active</div> 
            <div className="badge badge-outline">Games</div>
        </div>
        </div>
    </div>
  )
}

export default PromoVenueCard;