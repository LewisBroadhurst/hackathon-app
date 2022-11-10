import React from 'react';
import { deleteOrganisationByID } from '../../API/OrganisationAPI';
import { useNavigate } from 'react-router-dom';

const OrgAdminCard = ({id, name, email, users}) => {

    const navigate = useNavigate();

    const handleDeleteOrg = (e) => {
        e.preventDefault()

        deleteOrganisationByID(id)
        navigate('/admin')
    }

  return (
    <>
    <label htmlFor='org-modal-1' className='modal-button'>
    <section className='flex flex-row items-center gap-4 border-cMono300 border-2 rounded-md p-2 cursor-pointer'>
        <div className="avatar">
            <div className="w-12 rounded">
            <img src="https://placeimg.com/192/192/people" alt=''/>
            </div>
        </div>
        <div className='text-xs'>
            <h3 className='font-bold text-sm'>{name}</h3>
            <h3>{users ? users.length : '0'} members</h3>
            <h3>{email}</h3>
            {/* <h3>Active since: February 2020</h3> */}
        </div>
    </section>
    </label>

    <input type="checkbox" id="org-modal-1" className="modal-toggle" />
        <div className="modal">
        <div className="modal-box relative w-96">
            <label htmlFor="org-modal-1" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <h3 className="text-lg font-bold pb-4">Member actions</h3>
            
            <form className="form-control w-full flex flex-col gap-2">
                <div className='flex flex-row justify-between items-center'>
                    <label className="">Remove Organisation</label>
                    <button className="btn btn-square btn-xs" onClick={handleDeleteOrg}>X</button>
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

export default OrgAdminCard