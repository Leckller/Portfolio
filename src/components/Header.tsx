/* eslint-disable react/jsx-max-depth */
import { Link, NavLink, useLocation } from 'react-router-dom';
import R from '../assets/R.png';

function Header() {
  const { pathname } = useLocation();
  return (
    <header id="header" className="flex flex-row justify-between p-5">
      <Link to="/" className="w-20 scale-125">
        <img src={ R } alt="R" />
      </Link>
      <nav className="flex flex-row items-center">
        <div className="flex flex-row gap-5">
          {pathname.includes('project') && (
            <NavLink
              to="/"
              className="text-2xl font-bold flex overflow-hidden flex-row"
            >
              <h2 className="hover:scale-110 transition-all w-32 text-center ">
                Home
              </h2>
            </NavLink>
          )}

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
