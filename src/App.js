import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './input.css';
import Login from './Routes/Login';
import Register from './Routes/Register';


function App() {
  return (
    <>
        <BrowserRouter>
          <Routes>

            <Route path='/' element={<Login />} />
            <Route path='/register' element={<Register />} />

          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
