import { FaArrowAltCircleDown } from 'react-icons/fa';
import { useContext } from 'react';
import useWriteText from '../../hooks/useWriteText';
import { ArrowDown } from '../../styles';
import { projetos } from '../../utils/projetos';
import { tecnologias } from '../../utils/tecnologias';
import Card from '../Projetos/Card';
import CardDetails from './CardDetails';
import AppContext from '../../Context/AppContext';

function DetailsTecnologias({ detail }: { detail: boolean }) {
  const title = detail ? 'Tenho Conhecimento nas Tecnologias' : 'Projetos';
  const write = useWriteText(title, 40);
  const writeimages = useWriteText(tecnologias, 300);
  const { toggleEndF } = useContext(AppContext);
  return (
    <div className="flex flex-col md:w-1/2">
      <h1
        className={ `overflow-hidden h-16 justify-start
        relative w-full flex flex-row items-center gap-5
        ${detail ? '' : 'pl-5'}` }
      >
        {`${title.slice(0, write)} ${write >= title.length ? '' : '|'}`}
        {write >= title.length && (
          <ArrowDown detail={ detail }>
            <FaArrowAltCircleDown className={ `${detail ? '' : '-rotate-45'}` } />
          </ArrowDown>
        )}
      </h1>
      {write >= title.length ? (
        <div
          className={ `flex flex-row flex-wrap
          items-center justify-around gap-1 mb-16 
          ${detail ? 'md:border-r-2' : 'overflow-y-hidden w-full'}` }
        >

          {detail ? (
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

            projetos && projetos.map((proj) => (
              <Card
                image={ proj.image }
                title={ proj.title }
                key={ proj.title }
              />
            ))
          )}

        </div>
      ) : (
        <div />
      )}
    </div>
  );
}

export default DetailsTecnologias;
