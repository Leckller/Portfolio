/* eslint-disable react/jsx-max-depth */
import { Link, useParams } from 'react-router-dom';
import { FaArrowAltCircleDown } from 'react-icons/fa';
import { projetos } from '../utils/projetos';

function Projeto() {
  const { name } = useParams();
  const project = projetos.find((proj) => proj.title === name);
  return (
    <main className="flex h-screen w-screen p-5">
      <article
        className="w-full flex flex-col flex-nowrap gap-5
    md:flex-row shadow-2xl border p-2 rounded-lg md:max-h-[700px]"
      >
        <Link className="md:w-1/3" to={ project?.url as string } target="_blank">
          <img
            className="border h-full rounded-lg
             w-full md:h-96 overflow-hidden"
            src={ project?.image }
            alt={ project?.title }
          />
        </Link>
        <div className="w-full h-full text-center md:text-start flex flex-col gap-5">
          <h1 className="text-4xl h-[50px]">{project?.title}</h1>

          {project?.describe !== '' && (
            <div className="flex flex-col gap-5">
              <div className="flex flex-row h-[50px] items-center justify-center">
                <h2 className="mr-2 ml-2">Sobre o projeto</h2>
                <FaArrowAltCircleDown className="animate-bounce" />
              </div>
              <p className="min-h-[100px]">
                {project?.describe}
              </p>

            </div>
          )}

          <div className="flex flex-col gap-5">
            <div className="flex flex-row items-center h-[50px] justify-center">
              <h2 className="mr-2 ml-2">
                Tecnologias utilizadas no projeto
              </h2>
              <FaArrowAltCircleDown className="animate-bounce" />
            </div>

            <div
              className="flex flex-row flex-wrap justify-around items-center p-2 gap-5"
            >
              {project?.tecnologias.map((tec) => (
                <h3
                  className="p-3 border border-blue-300 rounded-lg hover:scale-110
                flex-grow text-center transition-all"
                  key={ tec }
                >
                  {tec}
                </h3>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex flex-row h-[50px] items-center justify-center">
              <h2 className="mr-2 ml-2">
                Links
              </h2>
              <FaArrowAltCircleDown className="animate-bounce" />
            </div>
            <div
              className="flex flex-col w-full
            md:flex-row items-center justify-around gap-5"
            >
              {project?.gitHub === '' ? (
                <h2
                  className="p-3 rounded-lg bg-red-50 text-red-500
                 border flex-grow text-center cursor-not-allowed  overflow-hidden"
                >
                  Código Do Projeto Privado

                </h2>
              ) : (
                <Link
                  className="p-3 rounded-lg border bg-blue-50 text-blue-500
                   flex-grow text-center  overflow-hidden"
                  to={ project?.gitHub as string }
                >
                  GitHub
                </Link>
              )}
              <Link
                className="p-3 rounded-lg border bg-blue-50 text-blue-500
                 flex-grow text-center overflow-hidden"
                to={ project?.url as string }
                target="_blank"
              >
                Ir para o site do projeto
              </Link>
            </div>
          </div>

        </div>
      </article>
    </main>
  );
}

export default Projeto;
