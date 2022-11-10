import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './input.css';
import Admin from './Routes/Admin';
import CommercialRegistration from './Routes/CommercialRegistration';
import EventPage from './Routes/EventPage';
import GroupOverview from './Routes/GroupOverview';
import Login from './Routes/Login';
import Register from './Routes/Register';
import Venue from './Routes/Venue';

function App() {



  return (
    <>
        <BrowserRouter>
          <Routes>

            <Route path='/' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='/organisation/:id' element={<GroupOverview />} />
            <Route path='/event/:id' element={<EventPage />} />
            <Route path='/commericalRegistration' element={<CommercialRegistration />} />
            <Route path='venue/:id' element={<Venue />} />

          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
