import { NavLink, useLocation } from 'react-router-dom';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

function Header() {
  const { pathname } = useLocation();
  return (
    <header id="header" className="flex flex-row justify-between p-5">
      <img src="" alt="R" />
      <nav>
        <NavLink
          to={ pathname === '/projetos' ? '/' : '/projetos' }
          className="gap-5 items-center text-xl flex flex-row w-56"
        >
          <h2
            className="hover:scale-110 transition-all w-32 text-center "
          >
            {pathname === '/projetos' ? 'Home' : 'Projetos'}
          </h2>
          <div className="flex flex-row gap-5">
            <FaGithubSquare />
            <FaLinkedin />
          </div>
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
