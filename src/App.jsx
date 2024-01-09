import { Routes, Route, NavLink } from 'react-router-dom';
import LayOut from './pages/layout/Layout';
import Home from './pages/home/Home';
import Teachers from './pages/teachers/Teachers';
import Favorites from './pages/favorites/Favorites';
import NotFound from './pages/notfound/NotFount';

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
