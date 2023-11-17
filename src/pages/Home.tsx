/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-max-depth */
import { Link } from 'react-router-dom';
import { BIG_SECTION, FOOTER, GLOBAL_BG, HEADER, MAIN, SMALL_SECTION } from '../styles';

function Home() {
  return (
    <GLOBAL_BG>
      <HEADER>
        <button>=</button>
        <nav>
          <button><i className="bi bi-linkedin" /></button>
          <button><i className="bi bi-github" /></button>
        </nav>
      </HEADER>
      <MAIN>
        <BIG_SECTION>
          <h2>About Me</h2>
          <article>
            <p>Olá, pessoa da internet.</p>
            <p>
              Me chamo
              {' '}
              <strong>Gusttavo Ruy</strong>
              , sou
              {' '}
              <em>Desenvolvedor Junior</em>
              {' '}
              focado em
              {' '}
              <em>Front End</em>
              {' '}
              mas com conhecimentos em
              {' '}
              <em>Back End</em>
              .
            </p>
            <p>
              Tenho 18 anos, Curso
              {' '}
              <em>Engenharia de Software</em>
              {' '}
              na Estácio,
              e sou aluno da
              {' '}
              <em>Trybe</em>
              {' '}
              no curso de
              {' '}
              <em>Desenvolvimento Web</em>
              .
            </p>
          </article>
        </BIG_SECTION>
        <SMALL_SECTION>
          <h2>Meus Projetos</h2>
          <article>
            <button>Ordenar por data de criação</button>
            <div>
              { [{ name: 'ruyTunes', path: '/' },
                { name: 'Jogo da Velha', path: '/' },
                { name: 'Ghibli Animations', path: '/' },
              ].map((e) => (
                <Link to="/" key={ e.path }>{e.name}</Link>
              )) }
            </div>
          </article>
        </SMALL_SECTION>
        <SMALL_SECTION>
          <article>
            <img src="eu" alt="Foto Minha" />
          </article>
        </SMALL_SECTION>
        <BIG_SECTION>
          <h2>Tecnologias</h2>
          <article>
            <div>
              <button>Visualizar Nomes</button>
            </div>
            icons
          </article>
        </BIG_SECTION>
        <FOOTER />
      </MAIN>
    </GLOBAL_BG>
  );
}

export default Home;
