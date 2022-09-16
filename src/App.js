import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './input.css';
import Dashboard from './Routes/Dashboard';
import Login from './Routes/Login';
import Register from './Routes/Register';


function App() {
  return (
    <>
        <BrowserRouter>
          <Routes>

            <Route path='/' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/dashboard' element={<Dashboard />} />

          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
