import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from '../Pages/Home';
import Contact from '../Pages/Contact';
import Favs from '../Pages/Favs';
import Detail from '../Pages/Detail';
import { routes } from '../Routes/routes';
import NotFound from './../Pages/NotFound';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.contact} element={<Contact />} />
        <Route path={routes.favs} element={<Favs />} />
        <Route path={routes.detail} element={<Detail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Layout;
