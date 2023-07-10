import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Menu from './Components/Menu/Menu';
import Home from './Pages/Home/Home';
import Login from './Pages/LogIn/Login';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Menu />
        <Routes>
          {/* Public Routes */}
          <Route path ='' element={<Home />} />
          <Route path ='/login' element={<Login />} />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
