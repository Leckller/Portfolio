import { NavLink } from 'react-router-dom';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

function Header() {
  return (
    <header className="flex flex-row justify-between p-5">
      <img src="" alt="R" />
      <nav>
        <NavLink
          to="/projetos"
          className="gap-5 items-center text-xl flex flex-row w-40"
        >
          <h2
            className="hover:scale-110 transition-all "
          >
            Projetos
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
