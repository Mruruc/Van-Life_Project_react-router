import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Vans from './pages/vans/Vans';
import VanDetails from './pages/vans/VanDetails';
import Layout from './components/Layout';
import Dashboard from './pages/host/Dashboard';
import Income from './pages/host/Income';
import Reviews from './pages/host/Reviews';
import UserVans from './pages/host/UserVans';
import UserVansDetail from './pages/host/UserVansDetail';
import HostLayout from './components/HostLayout';
import Details from './pages/host/van/Details';
import Pricing from './pages/host/van/Pricing';
import Photo from './pages/host/van/Photo';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='vans' element={<Vans />} />
          <Route path='vans/:id' element={<VanDetails />} />

          <Route path='host' element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path='income' element={<Income />} />
            <Route path='reviews' element={<Reviews />} />
            <Route path='vans' element={<UserVans />} />

            <Route path='vans/:id' element={<UserVansDetail />}>
              <Route index element={<Details />} />
              <Route path='details' element={<Details />} />
              <Route path='pricing' element={<Pricing />} />
              <Route path='photo' element={<Photo />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
