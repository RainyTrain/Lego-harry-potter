import Home from './Pages/Home';
import './Styles/App.scss';
import { Route, Routes } from 'react-router-dom';
import NotFound from './Pages/NotFound';
import Minifig from './Pages/Minifig';
import Order from './Pages/Order';
import { Response } from './Pages/Response';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/minifig" element={<Minifig />} />
        <Route path="/order" element={<Order />} />
        <Route path="/response" element={<Response />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
