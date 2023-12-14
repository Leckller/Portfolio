/* eslint-disable react/jsx-max-depth */
import { NavLink, useLocation } from 'react-router-dom';

function Header() {
  const { pathname } = useLocation();
  return (
    <header id="header" className="flex flex-row justify-between p-5">
      <img src="" alt="R" />
      <nav className="flex flex-row items-center">
        <div className="flex flex-row gap-5">
          <NavLink
            to={ pathname === '/contact' ? '/' : '/contact' }
            className="text-2xl font-bold flex overflow-hidden flex-row"
          >
            <h2
              className="hover:scale-110 transition-all w-32 text-center "
            >
              {pathname === '/contact' ? 'Home' : 'Contact'}
            </h2>
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;
