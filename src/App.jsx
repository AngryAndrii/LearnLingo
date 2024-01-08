import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Teachers from './pages/Teachers';
import Favorites from './pages/Favorites';
import NotFound from './pages/NotFount';
import LayOut from './pages/Layout';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route index element={<Home />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
