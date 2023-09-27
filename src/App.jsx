import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Vans from './pages/vans/Vans';
import Header from './pages/header/Header';
import Footer from './pages/footer/Footer';
import VanDetails from './pages/vans/VanDetails';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/vans' element={<Vans />} />
        <Route path='/vans/:id' element={<VanDetails />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
