import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './input.css';
import DashBoard from './Routes/Dashboard/DashBoard';
import DashboardPolls from "./Routes/Dashboard/Navigation/DashboardPolls";
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
            <Route path='/dashboard' element={<DashBoard />} />
            <Route path='/groupOverview' element={<GroupOverview />} />
            <Route path='/dashboard/polls' element={<DashboardPolls />} />
            <Route path='/eventOverview' element={<EventPage />} />
            <Route path='/venues/allStarBowlingAlley' element={<VenuePage />} />

          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
