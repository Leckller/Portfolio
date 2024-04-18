import { FaArrowAltCircleDown } from 'react-icons/fa';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useWriteText from '../../hooks/useWriteText';
import CardDetails from './CardDetails';
import AppContext from '../../Context/AppContext';
import { ProjetosType, TecnologiaType } from '../../types';

const authorization = import.meta.env.VITE_SECRET;
const urlProjs = import.meta.env.VITE_PROJS;
const urlTecs = import.meta.env.VITE_TECS;

function DetailsTecnologias({ detail }: { detail: boolean }) {
  const [projects, setProjects] = useState<ProjetosType[]>([]);
  const [animate, setAnimate] = useState(false);
  const [tecnologias, setTecnologias] = useState<TecnologiaType[]>([]);
  const [popup, setPopup] = useState<{
    open: boolean,
    project: ProjetosType
  }
  >({ open: false, project: {} as ProjetosType });

  useEffect(() => {
    const effect = async () => {
      const reqProjs = await fetch(urlProjs, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          authorization,
        },
      });
      const reqTecs = await fetch(urlTecs, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          authorization,
        },
      });
      const respProjs: { data: ProjetosType[] } = await reqProjs.json();
      const sortedByLength = respProjs.data
        .sort((a, b) => a.title.length - b.title.length);
      const respTecs: { data: TecnologiaType[] } = await reqTecs.json();
      setTecnologias(respTecs.data);
      setProjects(sortedByLength);
    };
    effect();
  }, []);

  const handlePopup = (project: ProjetosType) => {
    setPopup({ open: !popup.open, project });
  };

  const title = detail ? 'Tenho Conhecimento nas Tecnologias' : 'Projetos';
  const write = useWriteText(title, 40);
  const writeimages = useWriteText(tecnologias, 300);
  const { toggleEndF } = useContext(AppContext);

  return (
    <>
      <div className="flex flex-col md:w-full">
        <div className="flex flex-row gap-2">
          <h1
            className={ `${detail ? '' : 'pl-5'}` }
          >
            {`${title.slice(0, write)} ${write >= title.length ? '' : '|'}`}
          </h1>
          {write >= title.length && (
            <FaArrowAltCircleDown className="animate-bounce h-10" />
          )}
        </div>
        {write >= title.length ? (
          <div
            className={ `flex flex-row flex-wrap
          items-center justify-around gap-2 mb-16 
          ${detail ? 'md:border-r-2' : 'overflow-y-hidden w-full'}` }
          >

            {detail && tecnologias.length > 0 ? (
              <div
                className="flex flex-col overflow-x-auto w-full gap-1
              justify-around flex-wrap h-96 md:overflow-x-hidden md:flex-row md:h-full"
              >
                {tecnologias && tecnologias.slice(0, writeimages).map((tec) => {
                  if (writeimages >= tecnologias.length / 2) toggleEndF(true);
                  return (
                    <CardDetails
                      img={ tec.img }
                      title={ tec.title }
                      key={ tec.title }
                    />
                  );
                })}
              </div>
            ) : (
              projects && projects.map((proj) => (
                <button
                  onClick={ () => handlePopup(proj) }
                  className="w-[280px] h-[50px] mt-5 mb-5 bg-white text-black text-center
                hover:scale-110 transition-all
                rounded-md"
                  key={ proj.title }
                >
                  <h1>{proj.title}</h1>
                </button>
              ))
            )}

          </div>
        ) : (
          <div />
        )}
      </div>
      {popup.open && (
        <div
          className="fixed top-0 w-[100%] h-[100%] transition-all
          flex flex-col items-center justify-center pt-4"
        >
          <div
            className={ `w-[80%] h-[80%] relative z-[100]
            bg-black border-white border-2 rounded-md flex flex-col justify-between
             text-base p-5 md:text-2xl md:p-10 text-center
             ${animate ? 'animate-rightTo' : 'animate-leftTo'} transition-all` }
          >
            <button
              onClick={ () => {
                setAnimate(true);
                setTimeout(() => {
                  setPopup({ open: false, project: {} as ProjetosType });
                  setAnimate(false);
                }, 1000);
              } }
              className="absolute top-3 right-4 font-extrabold scale-125"
            >
              X
            </button>

            <h1
              className="text-center m-3 font-bold text-2xl"
            >
              {popup.project.title}
            </h1>

            <p className="mb-3">{popup.project.describe}</p>

            <div className="flex flex-row flex-wrap justify-center gap-1 mb-3">
              {popup.project.tecnologias.sort((a, b) => a.length - b.length)
                .map((tec) => (
                  <h5
                    className="bg-white text-black rounded-md p-1 md:p-2 gap-2
                    hover:text-blue-200 transition-all"
                    key={ tec }
                  >
                    {tec}
                  </h5>
                ))}
            </div>

            <div className="flex flex-col text-center">
              {popup.project.gitHub.length > 5 ? (
                <Link
                  className="hover:text-blue-200 transition-all"
                  target="_blank"
                  to={ popup.project.gitHub }
                >
                  Link para o código
                </Link>
              ) : (
                <h3>Código indisponível</h3>
              )}
              {popup.project.url.length > 5 ? (
                <Link
                  className="hover:text-blue-200 transition-all"
                  target="_blank"
                  to={ popup.project.url }
                >
                  Link para o web site
                </Link>
              ) : (
                <h3>Web site indisponível</h3>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default DetailsTecnologias;
