import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

function Contact() {
  return (
    <main className="h-screen w-screen flex flex-row items-start">
      <nav className="p-5 flex flex-col gap-5 w-full items-center">
        <NavLink
          target="_blank"
          to="https://github.com/Leckller"
          className="text-4xl flex flex-row items-center"
        >
          GitHub
          <FaGithubSquare />
        </NavLink>
        <NavLink
          target="_blank"
          to="https://www.linkedin.com/in/gusttavoruy/"
          className="text-4xl flex flex-row items-center"
        >
          Linked
          {' '}
          <FaLinkedin />
        </NavLink>
        <div>
          <a
            target="_blank"
            href="gusttavoruy@gmail.com"
            className="text-3xl flex flex-row items-center"
          >
            Email para contato: gusttavoruy@gmail.com
          </a>
          {/* <button>Copiar</button> */}
        </div>
      </nav>
    </main>
  );
}

export default Contact;
