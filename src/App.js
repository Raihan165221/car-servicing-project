
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Services from './Pages/Home/Services/Services';
import Home from './Pages/Home/Home/Home';
import ServiceDetail from './Pages/Home/ServiceDetaill/ServiceDetail';
import Experts from './Pages/Home/Experts/Experts';
import About from './Pages/About/About';
import NotFound from './Pages/NotFount/NotFound';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import CheckOut from './Pages/Home/CheckOut/CheckOut';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='service/:serviceId' element={<ServiceDetail />} />
        <Route path='/experts' element={<Experts />} />
        <Route path='/about' element={<About />} />
        <Route path='/checkout' element={
          <RequireAuth>
            <CheckOut />
          </RequireAuth>
        } />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
