import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './input.css';
import DashBoard from './Routes/Dashboard/DashBoard';
import DashboardPolls from "./Routes/Dashboard/Navigation/DashboardPolls";
import GroupOverview from './Routes/GroupOverview';
import Login from './Routes/Login';
import Register from './Routes/Register';


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

          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
