import Navegacion from '../../Navegacion';
import Footer from '../../Footer';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className='contenedor'>
      <Navegacion />
      <Outlet />
      <Footer />
    </div>
  );
}