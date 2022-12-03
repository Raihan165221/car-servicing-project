
import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Services from './Pages/Home/Services/Services';
import Home from './Pages/Home/Home/Home';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/about' element={<About></About>} />
        <Route path='/services' element={<Services></Services>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
