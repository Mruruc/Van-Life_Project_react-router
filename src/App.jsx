import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Vans from './pages/vans/Vans';
import VanDetails from './pages/vans/VanDetails';
import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path='/*' element={<Layout/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
