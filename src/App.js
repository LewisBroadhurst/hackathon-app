import * as React from 'react';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './input.css';
import DashBoard from './Routes/DashBoard';
import EventPage from './Routes/EventPage';
import GroupOverview from './Routes/GroupOverview';
import Login from './Routes/Login';
import Register from './Routes/Register';
import VenuePage from './Routes/VenuePage';

// Hello world

function App() {

  const [tab, setTab] = useState(0);

  return (
    <>
        <BrowserRouter>
          <Routes>

            <Route path='/' element={<Login />} />
            <Route path='/register' element={<Register />} />

            <Route path='/dashboard/home' element={<DashBoard tab={tab} setTab={setTab} />} />
            <Route path='/dashboard/events' element={<DashBoard tab={tab} setTab={setTab} />} />
            <Route path='/dashboard/polls' element={<DashBoard tab={tab} setTab={setTab} />} />
            <Route path='/dashboard/venues' element={<DashBoard tab={tab} setTab={setTab} />} />
            

            <Route path='/groupOverview' element={<GroupOverview />} />
            <Route path='/eventOverview' element={<EventPage />} />
            <Route path='/venues/allStarBowlingAlley' element={<VenuePage />} />

          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
