import React from 'react'
import AdminMembers from '../Components/AdminSpecific/AdminMembers';
import AdminOrganisations from '../Components/AdminSpecific/AdminOrganisations';
import AdminStats from '../Components/AdminSpecific/AdminStats';
import AdminVenues from '../Components/AdminSpecific/AdminVenues';
import Header from '../Components/Header/Header';

const Admin = () => {
  return (
    <section className='bg-cMono300 h-screen'>
        <div>
            <Header />

            <div className='flex flex-col items-center gap-5 w-[1200px] mx-auto'>
                <AdminStats />

                <div className='flex flex-row gap-5'>
                    <AdminMembers />

                    <AdminOrganisations />

                    <AdminVenues />

                </div>
            </div>
        </div>
    </section>
  )
}

export default Admin;