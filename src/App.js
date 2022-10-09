import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './input.css';
import Admin from './Routes/Admin';
import EventPage from './Routes/EventPage';
import GroupOverview from './Routes/GroupOverview';
import Login from './Routes/Login';
import Register from './Routes/Register';
import VenuePage from './Routes/VenuePage';

function App() {

  return (
    <>
        <BrowserRouter>
          <Routes>

            <Route path='/' element={<Login />} />
            <Route path='/register' element={<Register />} />

            <Route path='/admin' element={<Admin />} />

            <Route path='/groupOverview' element={<GroupOverview />} />
            <Route path='/eventOverview' element={<EventPage />} />
            <Route path='/venues/allStarBowlingAlley' element={<VenuePage />} />

          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
