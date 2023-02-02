import Home from './Pages/Home.jsx';
import './Styles/App.scss';
import { Link, Route, Routes } from 'react-router-dom';
import NotFound from './Pages/NotFound.jsx';
import Minifig from './Pages/Minifig.jsx';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/minifig" element={<Minifig />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
