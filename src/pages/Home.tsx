/* eslint-disable react/jsx-max-depth */
import { Link } from 'react-router-dom';
import { BIG_SECTION, GLOBAL_BG, HEADER, MAIN, SMALL_SECTION } from '../styles';

function Home() {
  return (
    <GLOBAL_BG>
      <HEADER>
        <button>=</button>
        <nav>
          <button>link</button>
          <button>link</button>
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
            <div>
              <button>Ordenar por data de criação</button>
            </div>
            {['itens'] && ['itens'].map((e) => (
              <Link to="/" key={ e }>{e}</Link>
            )) }
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
      </MAIN>
      <footer />
    </GLOBAL_BG>
  );
}

export default Home;
