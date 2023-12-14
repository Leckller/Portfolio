/* eslint-disable react/jsx-max-depth */
import { NavLink } from 'react-router-dom';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

function Header() {
  return (
    <header id="header" className="flex flex-row justify-between p-5">
      <img src="" alt="R" />
      <nav className="flex flex-row items-center">
        {/* <NavLink
          to={ pathname === '/projetos' ? '/' : '/projetos' }
          className="gap-5 items-center text-xl flex overflow-hidden flex-row w-56"
        >
          <h2
            className="hover:scale-110 transition-all w-32 text-center "
          >
            {pathname === '/projetos' ? 'Home' : 'Projetos'}
          </h2>
        </NavLink> */}
        <div className="flex flex-row gap-5">
          <NavLink to="https://github.com/Leckller" className="text-4xl">
            <FaGithubSquare />
          </NavLink>
          <NavLink to="https://www.linkedin.com/in/gusttavoruy/" className="text-4xl">
            <FaLinkedin />
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;
