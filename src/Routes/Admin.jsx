import React from 'react'
import AdminMembers from '../Components/AdminSpecific/AdminMembers';
import AdminOrganisations from '../Components/AdminSpecific/AdminOrganisations';
import AdminStats from '../Components/AdminSpecific/AdminStats';
import AdminVenues from '../Components/AdminSpecific/AdminVenues';
import Header from '../Components/Header/Header';

const Admin = () => {
  return (
    <section className='bg-cMono300'>
      <div>
        <Header />

        <div className='flex flex-col gap-5 mx-auto xl:w-[1400px]'>
          <div className='hidden self-center lg:block'>
            <AdminStats />
          </div>
              
          <div className='flex flex-col gap-5 pt-16 p-5 mx-auto sm:w-3/4 lg:pt-0 xl:flex-row xl:w-full xl:gap-2'>
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