import React from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteVenue } from '../../API/VenueAPI'

const AdminVenueCard = ({id, name, location}) => {

    const navigate = useNavigate()

    const handleDeleteVenue = () => {
        deleteVenue(id)
        navigate('/admin')
    }


  return (
    <>
    <label htmlFor="venue-modal-1" className="modal-button">
    <section className='border-2 p-2 rounded-md flex flex-row justify-between items-center cursor-pointer'>
        <div className='flex flex-row gap-4 items-center'>
            <div className="avatar">
            <div className="w-12 mask mask-hexagon">
                <img src="https://placeimg.com/192/192/people" alt=''/>
            </div>
            </div>

            <div className='text-xs'>
                <h3 className='font-bold text-sm'>{name}</h3>
                <h3>{location}</h3>
                <h3>Hosted 11 events!</h3>
                <h3>Active since: January 2021</h3>
            </div>
        </div>
    </section>
    </label>

    <input type="checkbox" id="venue-modal-1" className="modal-toggle" />
        <div className="modal">
        <div className="modal-box relative w-96">
            <label htmlFor="venue-modal-1" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <h3 className="text-lg font-bold pb-4">Member actions</h3>
            
            <form className="form-control w-full flex flex-col gap-2">
                <div className='flex flex-row justify-between items-center'>
                    <label className="">Remove Venue</label>
                    <button className="btn btn-square btn-xs" onClick={handleDeleteVenue}>X</button>
                </div>

                <div className='flex flex-row justify-between items-center'>
                    <label>Reset Password</label>
                    <button className="btn btn-square btn-xs">X</button>
                </div>
            </form>
        </div>
    </div>
    </>
  )
}

export default AdminVenueCard;