import { Link, useParams } from 'react-router-dom';
import { FaArrowAltCircleDown } from 'react-icons/fa';
import { projetos } from '../utils/projetos';

function Projeto() {
  const { name } = useParams();
  const project = projetos.find((proj) => proj.title === name);
  return (
    <main
      className="h-screen w-screen flex flex-col flex-nowrap p-5 gap-5
    md:flex-row"
    >
      <Link className="md:w-1/3" to={ project?.url as string } target="_blank">
        <img
          className="border border-black h-full w-full md:h-96 overflow-hidden"
          src={ project?.image }
          alt={ project?.title }
        />
      </Link>
      <div className="w-full h-full text-center md:text-start flex flex-col gap-5">
        <h1 className="text-4xl">{project?.title}</h1>

        <div className="flex flex-col gap-5">
          <div className="flex flex-row items-center relative justify-center">
            <h2>Sobre o projeto</h2>
            <FaArrowAltCircleDown className="animate-bounce ml-10" />
          </div>
          <p className="min-h-[100px]">
            {project?.describe}
          </p>

        </div>

        <div className="flex flex-col gap-5">
          <div className="flex flex-row items-center relative justify-center">
            <h2>
              Tecnologias utilizadas no projeto
            </h2>
            <FaArrowAltCircleDown className="animate-bounce ml-10" />
          </div>

          <div className="flex flex-row flex-wrap justify-around items-center p-2 gap-5">
            {project?.tecnologias.map((tec) => (
              <h3
                className="p-3 border border-blue-300 rounded-lg hover:scale-110
                flex-grow"
                key={ tec }
              >
                {tec}
              </h3>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}

export default Projeto;
