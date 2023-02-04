import Home from './Pages/Home.jsx';
import './Styles/App.scss';
import { Route, Routes } from 'react-router-dom';
import NotFound from './Pages/NotFound.jsx';
import Minifig from './Pages/Minifig.jsx';
import Order from './Pages/Order.jsx';
import { Response } from './Pages/Response.jsx';

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
